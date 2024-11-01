import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { db } from "./lib/db";
import { getUserById } from "./data/user";
// import { UserRole } from "@prisma/client";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log(user, account);

      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      // const existingUser = await getUserById(user.id);
      if (!user.id) return false;
      const existingUser = await getUserById(user.id as string);

      //Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      //TODO: Add 2FA check
      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );
        console.log({ twoFactorConfirmation });

        if (!twoFactorConfirmation) return false;

        // Delete the 2FA confirmation for next sign in
        await db.twoFactorConfirmation.delete({
          where: {
            id: twoFactorConfirmation.id,
          },
        });
      }

      return true;
    },
    async session({ token, session }) {
      console.log({
        sessionToken: token,
      });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        return {
          ...session,
          user: {
            ...session.user,
            role: token.role,
          },
        };
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});



