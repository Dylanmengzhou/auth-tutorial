"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
// import { logout } from "@/actions/logout";
import {signOut } from "next-auth/react";

const SettingsPage = () => {
  const user = useCurrentUser();
  const onClick = () => {
    signOut();
  };
  return (
    <div className="bg-white p-10 rounded-xl">
        <button type="submit" onClick={onClick}>
          Log out
        </button>
    </div>
  );
};

export default SettingsPage;
