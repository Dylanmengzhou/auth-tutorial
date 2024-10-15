
<map>
  <node ID="root" TEXT="auth-tutorial">
    <node TEXT="data" ID="ae70c4017bfe24091502604dd5770ca0" STYLE="bubble" POSITION="right">
      <node TEXT="user.ts" ID="35cdf644c7e2dbe98c4282c27a2d57b6" STYLE="fork">
        <node TEXT="db(@/lib/db)" ID="ed557ce7a03c8ad8af60878e741124eb" STYLE="fork"/>
      </node>
    </node>
    <node TEXT="lib" ID="26ff48fafbcade347ae065461c22be30" STYLE="bubble" POSITION="right">
      <node TEXT="db.ts" ID="96a212bc45e1a070fd282dc082911eec" STYLE="fork">
        <node TEXT="PrismaClient(@prisma/client)" ID="594a27219d3006db1336dec98d371321" STYLE="fork"/>
      </node>
      <node TEXT="utils.ts" ID="6390a06c8662df2a9cb8c456d657a4dd" STYLE="fork"/>
    </node>
    <node TEXT="prisma" ID="c31703efa792d500ad69524efae0d031" STYLE="bubble" POSITION="right">
      <node TEXT="schema.prisma" ID="3d6b99c5805e4f37b423a3c9d097d34c" STYLE="fork"/>
    </node>
    <node TEXT="schemas" ID="ba81fbfe0c591c090d58739249f1425c" STYLE="bubble" POSITION="right">
      <node TEXT="index.ts" ID="9b328d43233bcbe991d2c2c976bb932f" STYLE="fork">
        <node TEXT="*(zod)" ID="ced918283b8985d737a8251780bd192c" STYLE="fork"/>
      </node>
    </node>
    <node TEXT=".env" ID="ba674057262fdce4901ceec2b8e06288" STYLE="bubble" POSITION="right"/>
    <node TEXT="middleware.ts" ID="28bae6781662d0ba75c6df08b7298ff9" STYLE="bubble" POSITION="right">
      <node TEXT="authConfig(auth.config)" ID="5de345bc3776a11ffe609c47f5c34932" STYLE="fork"/>
      <node TEXT="DEFAULT_LOGIN_REDIRECT(@/routes)" ID="98f00aead9bdaf9b823b43a565bed4cd" STYLE="fork"/>
      <node TEXT="apiAuthPrefix(@/routes)" ID="7b586cd1d55e0ae7e60ec8ea2b92326c" STYLE="fork"/>
      <node TEXT="authRoutes(@/routes)" ID="aaf28ebbc648733c042a0934caf126d4" STYLE="fork"/>
      <node TEXT="publicRoutes(@/routes)" ID="698a6953076bb2591d3842ebb472c916" STYLE="fork"/>
      <node TEXT="NextAuth(next-auth)" ID="9584a0d1a589841759e35a45c4303802" STYLE="fork"/>
    </node>
    <node TEXT="nuxt-auth.d.ts" ID="c53101e55875f8784b273f7cfb2d6051" STYLE="bubble" POSITION="right">
      <node TEXT="UserRole(@prisma/client)" ID="2b8c549e999eb72e7ac6bd608df961b8" STYLE="fork"/>
      <node TEXT="DefaultSession(next-auth)" ID="61e24067ea448302d9c1dd2b9955b4e3" STYLE="fork"/>
    </node>
    <node TEXT="routes.ts" ID="e3f81873c13e81e82b26b3891b425717" STYLE="bubble" POSITION="right"/>
    <node TEXT="auth.ts" ID="ee0b4d8f8347dfa71c2d830587eeffee" STYLE="bubble" POSITION="right">
      <node TEXT="authConfig(auth.config)" ID="6628cd40aa097dac1227d214a96c0c8b" STYLE="fork"/>
      <node TEXT="db(@/lib/db)" ID="26e59f8e33d6b51e59fc5f596fa0825a" STYLE="fork"/>
      <node TEXT="getUserById(@/data/user)" ID="42b1cbf3302c7b74dc8b1b98acf49b0c" STYLE="fork"/>
      <node TEXT="PrismaAdapter(@auth/prisma-adapter)" ID="537364e70d8fd1bb05ba4833c00c9b55" STYLE="fork"/>
      <node TEXT="NextAuth(next-auth)" ID="e2a2f3dc1c87347abad6909953387658" STYLE="fork"/>
    </node>
    <node TEXT="auth.config.ts" ID="2966ccb484fe37ecfbf4c3a23ff93943" STYLE="bubble" POSITION="right">
      <node TEXT="getUserByEmail(@/data/user)" ID="3a3c6519758b009c5be09f9bcb0fcd86" STYLE="fork"/>
      <node TEXT="LoginSchema(@/schemas)" ID="6689662f9a06d8625c984e3e71850269" STYLE="fork"/>
      <node TEXT="NextAuthConfig(next-auth)" ID="5edd45f34bc257268e06fc3a6a0034ab" STYLE="fork"/>
      <node TEXT="Credentials(next-auth/providers/credentials)" ID="b05d24dc740bd95592d8d6f44d3a085e" STYLE="fork"/>
      <node TEXT="Github(next-auth/providers/github)" ID="cec849a35f1c4877f1d045f4b0d007a8" STYLE="fork"/>
      <node TEXT="Google(next-auth/providers/google)" ID="4eafaca1cecaa93501c5b12ffbeed4cd" STYLE="fork"/>
      <node TEXT="bcrypt(bcryptjs)" ID="a711e808c158e8cc786808db2ab9d951" STYLE="fork"/>
    </node>
    <node TEXT="actions" ID="4d7da0f509213075f48a7b0eff24673f" STYLE="bubble" POSITION="right">
      <node TEXT="login.ts(server)" ID="9172dfa21722532ff4881c87bd639580" STYLE="fork">
        <node TEXT="LoginSchema(@/schemas)" ID="e2300cebb3c8cb161cabbfb6fb46c50f" STYLE="fork"/>
        <node TEXT="DEFAUKT_LOGIN_REDIRECT(@/routes)" ID="0b5beaaa67b2b632777114871c8537a3" STYLE="fork"/>
        <node TEXT="signIn(@/auth)" ID="2af441fd000f8bf0a430b041b3fa9b32" STYLE="fork"/>
        <node TEXT="AuthError(next-auth)" ID="240229caf0bbc82f715628031fe36e21" STYLE="fork"/>
        <node TEXT="*(zod)" ID="1c317e33f9084d1a1078763102a58e4c" STYLE="fork"/>
      </node>
      <node TEXT="register.ts" ID="e5bdd151d8d2d5999987d7294814980b" STYLE="fork">
        <node TEXT="RegisterSchema(@/schemas)" ID="0192d717aa9b1a6d34eb193748db279f" STYLE="fork"/>
        <node TEXT="db(@/lib/db)" ID="3d1928ea012f7e1cb5ce270b88598531" STYLE="fork"/>
        <node TEXT="getUserByEmail(@/data/user)" ID="cae1bd22a808650131b0a01aab4785fb" STYLE="fork"/>
        <node TEXT="bcrypt(bcryptjs)" ID="684fb626079aa24a62b751c723784f2a" STYLE="fork"/>
        <node TEXT="*(zod)" ID="a4d65e2d8772dca269ac717ae5d749b2" STYLE="fork"/>
      </node>
    </node>
    <node TEXT="app" ID="c682dec3c897ed35df7b83cb48f8eca3" STYLE="bubble" POSITION="right">
      <node TEXT="auth" ID="04f433783390dd9e1a5015e93d34fa30" STYLE="fork">
        <node TEXT="error Page" ID="d42e1a8f255421d76153ef05f4d85c0d" STYLE="fork">
          <node TEXT="error-card" ID="ba2862eb5cbfad3643e0f22c04268635" STYLE="fork"/>
        </node>
        <node TEXT="register Page" ID="328571d1427d637d2230ae61a89a8f41" STYLE="fork">
          <node TEXT="register-form" ID="50a53916fc863977bdb2ea6697394071" STYLE="fork"/>
        </node>
        <node TEXT="login Page" ID="068f5c65c100c527652781e59e7ca703" STYLE="fork">
          <node TEXT="login-form" ID="2c638416abcc6f251b21da62b0195415" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="root Page" ID="3b93bd71a536d476ff25d5306e67b73d" STYLE="fork">
        <node TEXT="LoginButton" ID="e915693533ed51540d122f23b09b72f5" STYLE="fork"/>
      </node>
      <node TEXT="(protected)" ID="92451f676759b12eda55e02076f50205" STYLE="fork">
        <node TEXT="Settings Page" ID="3e6e8b59c0e5e835fcf99a409327c1a6" STYLE="fork"/>
      </node>
      <node TEXT="api" ID="bf08786a6a9504cfed2659ee9be0cce9" STYLE="fork">
        <node TEXT="auth" ID="0ab1f0243fcd719ad4902001b7aa7035" STYLE="fork">
          <node TEXT="[...nextauth]" ID="eb727c64285d39e3849f6d534c905504" STYLE="fork">
            <node TEXT="route.ts" ID="176e29e5bc28e770fba54e22a6045544" STYLE="fork">
              <node TEXT="handlers(@/auth)" ID="acdef577012f86729df0c03d98234478" STYLE="fork"/>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node TEXT="components" ID="d5114180a3393c6c2ca3e85df39baf04" STYLE="bubble" POSITION="right">
      <node TEXT="auth" ID="94e3bbcbba7c1ed7e3f3b4233042926e" STYLE="fork">
        <node TEXT="back-button" ID="192b68d0a826e8c408d4e3bea021b832" STYLE="fork">
          <node TEXT="Button" ID="27e58915976bbfccb346d948a876216c" STYLE="fork"/>
          <node TEXT="Link" ID="6779976c320b0a4ba72ef1ab65ac39c6" STYLE="fork"/>
        </node>
        <node TEXT="card-wrapper" ID="58200fc68bd45450c980f1042026a116" STYLE="fork">
          <node TEXT="Card" ID="31968b89eef37666d7d74002c0237c26" STYLE="fork"/>
          <node TEXT="CardContent" ID="087d2c38aa728319606344ec81a27013" STYLE="fork"/>
          <node TEXT="CardFooter" ID="972e92ae5705bfca6c06e05d14805ee2" STYLE="fork"/>
          <node TEXT="CardHeader" ID="80becb3500d495fbfdde433cd1f389d5" STYLE="fork"/>
          <node TEXT="Header" ID="4eee75c32b4f8ce8b20233670837df0d" STYLE="fork"/>
          <node TEXT="Social" ID="c5351e64aa4d5284f86f59f04ebbe302" STYLE="fork"/>
          <node TEXT="BackButton" ID="f1151fee2dde5c50587ad9800a60569c" STYLE="fork"/>
        </node>
        <node TEXT="error-card" ID="ae85a99fc5a3b1b558e87ec7b740515f" STYLE="fork"/>
        <node TEXT="header" ID="14113fdd3f294745d6fa419aa9040835" STYLE="fork"/>
        <node TEXT="login-button" ID="5c2b7e41b0be85b6a4eed5540f69d902" STYLE="fork"/>
        <node TEXT="login-form" ID="fe395a7e562084a2e2c1c4e5fbc4dc46" STYLE="fork">
          <node TEXT="CardWrapper" ID="ca04b491d2f15ae1f2b3c37f64daba0f" STYLE="fork"/>
          <node TEXT="Input" ID="37fba232ab9771042e43333f9c14fd68" STYLE="fork"/>
          <node TEXT="Button" ID="26d46c31b35bd3f21f7ac4b2cfa66c6d" STYLE="fork"/>
          <node TEXT="Form" ID="3bff0f4b578e4cf6dc274f132a03bde7" STYLE="fork"/>
          <node TEXT="FormControl" ID="f88a3ecd357fde4476e5292021cb47e0" STYLE="fork"/>
          <node TEXT="FormField" ID="c0b29561e87b93d297068a6e4c26e618" STYLE="fork"/>
          <node TEXT="FormItem" ID="21ca24677e6ce492a8927911e0aa8789" STYLE="fork"/>
          <node TEXT="FormLabel" ID="4154e29ab95fdda3ef836e49f3c053f5" STYLE="fork"/>
          <node TEXT="Formmessage" ID="ec7b960fd8467120c1f9f3c4ac4ff2d1" STYLE="fork"/>
          <node TEXT="FormError" ID="6209147185d334cc76de7d0c5d0d50d4" STYLE="fork"/>
          <node TEXT="FormSuccess" ID="d837c0b21d4beb94cf96ba566195eae7" STYLE="fork"/>
          <node TEXT="LoginSchema(@/schemas)" ID="a625a1d6c6eb29e39e8f3c891d2fde51" STYLE="fork"/>
          <node TEXT="login(@/actions/login)" ID="81d16642834d7d447cdafba7e13ff5ab" STYLE="fork"/>
          <node TEXT="zodResolver(@hookform/resolvers/zod)" ID="d7d5a1a0a5940fb1e04beb61c34b7613" STYLE="fork"/>
          <node TEXT="useSearchParams(next/navigation)" ID="311434e3d168155018b3226381f55b79" STYLE="fork"/>
          <node TEXT="*(zod)" ID="4eb7dbd47d6c09fc00b806ea00e7dc19" STYLE="fork"/>
          <node TEXT="useState(react)" ID="f711a3b1175a28a9af6440a4681c9248" STYLE="fork"/>
          <node TEXT="useTransition(react)" ID="456daa5ac20d1ebff6bbc64547a34dcf" STYLE="fork"/>
        </node>
        <node TEXT="register-form" ID="f832a67f9c6be25d6ac6219f24e57b3c" STYLE="fork">
          <node TEXT="CardWrapper" ID="df9817ea41805d1ddcf2afaf37c7d664" STYLE="fork"/>
          <node TEXT="Input" ID="064f2d1503f922c9658d5890fedbea28" STYLE="fork"/>
          <node TEXT="Button" ID="cacd687d9013c2c657d40ec1fbad111d" STYLE="fork"/>
          <node TEXT="Form" ID="a6773e7497b9a184eb2b08795636e782" STYLE="fork"/>
          <node TEXT="FormControl" ID="29dd481d9f0c4207b0daa8d5dced8412" STYLE="fork"/>
          <node TEXT="FormField" ID="6dec502d84ed2f91fad632d11d3294eb" STYLE="fork"/>
          <node TEXT="FormItem" ID="d2edab01e903bfad3a888d025cb69a4a" STYLE="fork"/>
          <node TEXT="FormLabel" ID="107c19b449c4fc35f213b83bf33a39c5" STYLE="fork"/>
          <node TEXT="FormMessage" ID="7783111ed47ae40a8c563b4df9a5fc2b" STYLE="fork"/>
          <node TEXT="FormSuccess" ID="fc0e7ae0d2e2c8f4c5f29e94be7aa9bb" STYLE="fork"/>
          <node TEXT="register(@/actions/register)" ID="7429894fd9e0275ae1fbb939fe88e55d" STYLE="fork"/>
          <node TEXT="RegisterSchema(@/schemas)" ID="407cac3c3e0970a11df5cbf2367a9267" STYLE="fork"/>
          <node TEXT="zodResolver(@hookform/resolvers/zod)" ID="1defe4c11d93fd4953ba9dab2245d50d" STYLE="fork"/>
          <node TEXT="useState(react)" ID="394092e297c525af0954b8d1cbd8b9f8" STYLE="fork"/>
          <node TEXT="useTransition(react)" ID="4e6694c72ae6ebbc2b2243a02443131b" STYLE="fork"/>
          <node TEXT="*(zod)" ID="a9dcc5ee5e4d0bb8bad09ee01afadc76" STYLE="fork"/>
        </node>
        <node TEXT="social" ID="aa4baa7b797134e004ed56e00da9d490" STYLE="fork">
          <node TEXT="Button" ID="5fd6a73ddf0789bdc774d1e11b9e38d8" STYLE="fork"/>
          <node TEXT="FcGoogle" ID="08c1d88d9acfd86e4b8be51b205c8438" STYLE="fork"/>
          <node TEXT="FaGithub" ID="86844fc0ab8ae667f85bc0eea3e8b2cc" STYLE="fork"/>
          <node TEXT="DEFAUKT_LOGIN_REDIRECT(@/routes)" ID="5ca673511006505555c3402e572b8aa7" STYLE="fork"/>
          <node TEXT="signIn(@/auth)" ID="01b500b3ad8c2e2d413f8b72b4dcbf73" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="ui" ID="9635a1d2aa9af8cc41ff325afc12514f" STYLE="fork">
        <node TEXT="button" ID="ad618952c18a10a08852b663921987a3" STYLE="fork"/>
        <node TEXT="card" ID="d985f5504b0f3f07e523b5935ef51e73" STYLE="fork"/>
        <node TEXT="form" ID="21e0147864263d4075b3049052b2cbda" STYLE="fork"/>
        <node TEXT="input" ID="751b1b5ccd0843e8a4e9e62e72883bb7" STYLE="fork"/>
        <node TEXT="label" ID="938457a32bbf2f0c5e18ebf1a1607ca9" STYLE="fork"/>
      </node>
      <node TEXT="form-error" ID="04ad4b7a769944f15669879b835feaf0" STYLE="fork">
        <node TEXT="ExclamationTriangleIcon" ID="29ab79cac38f9442e07d6f936c4c2eee" STYLE="fork"/>
      </node>
      <node TEXT="form-success" ID="8b754ca0d6212341ba04302a931f785f" STYLE="fork">
        <node TEXT="CheckCircledIcon" ID="2d579e95dae9fc071c94dc632112859f" STYLE="fork"/>
      </node>
    </node>
  </node>
</map>