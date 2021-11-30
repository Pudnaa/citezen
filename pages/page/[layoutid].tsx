import { FC, useEffect } from "react";
import type { GetServerSideProps } from "next";
// import { withIronSession } from "next-iron-session";
import { withIronSessionSsr } from "iron-session/next";

import { useUser } from "hooks/use-user";
import { useCloud } from "hooks/use-cloud";
// import * as Constants from "@constants/metaConstants";
import { metaConfig } from "config/metaConfig";
import prepareDatas from "util/prepareLayoutData";
import _ from "lodash";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LayoutWrapper from "middleware/components/Layout/LayoutWrapper";

type PropsType = {
  userSession: object;
  readyMergedLayoutConfig: any;
  meta_bp_layout_section: any;
  mergedLayout: any;
  generalConfig: any;
  ourMetaConstant: any;
};

//    # #     ###
//    # #    #   #
//  ####### #     #
//    # #   #     #
//  ####### #     #
//    # #    #   #
//    # #     ###
const Home: FC<PropsType> = ({
  userSession,
  readyMergedLayoutConfig,
  meta_bp_layout_section,
  mergedLayout,
  generalConfig,
  ourMetaConstant,
}) => {
  const userContext = useUser();
  const cloudContext = useCloud();

  useEffect(() => {
    userContext.setUData(userSession);
    cloudContext.setGlobalConfig(generalConfig);
    cloudContext.setMetaConstant({
      meta: metaConfig,
      ourMetaConstant: ourMetaConstant,
    });
  }, []);

  const { bodyDefault } = cloudContext.globalConfig;
  // console.log("🚀 ~ bodyDefault", bodyDefault);
  // console.log("🚀 ~ readyMergedLayoutConfig", readyMergedLayoutConfig);
  // console.log("🚀 ~ mergedLayout", mergedLayout);
  // console.log("🚀 ~ useEffect ~ generalConfig", generalConfig);
  // console.log("🚀 ~ ourMetaConstant", ourMetaConstant);

  return (
    <div
      className={`${
        bodyDefault?.className
          ? bodyDefault?.className
          : "bg-gray-50 min-h-screen min-w-screen"
      }`}
      style={{ ...bodyDefault?.style }}
    >
      <LayoutWrapper
        readyMergedLayoutConfig={readyMergedLayoutConfig}
        meta_bp_layout_section={meta_bp_layout_section}
        mergedLayout={mergedLayout}
      />
    </div>
  );
};

//    # #     #
//    # #    ##
//  ####### # #
//    # #     #
//  #######   #
//    # #     #
//    # #   #####

// https://github.com/vvo/iron-session#nextjs-withironsessionapiroutehandler-ironoptions

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async function getServerSideProps(context: any) {
    const userSession = context.req.session.user || null;
    const layoutid = context.query.layoutid || null;
    const ourMetaConstant = metaConfig.metaDev;
    const locale = context.locale || "mn";

    // console.log("🚀 ~ handler ~ userSession", userSession);

    if (!userSession) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    const lastObject = await prepareDatas(ourMetaConstant, layoutid);

    const config = {
      i18n: {
        defaultLocale: locale,
        locales: ["mn", "en", "cn"],
        ns: ["translation"],
        defaultNS: "translation",
      },
    };

    return {
      props: {
        userSession,
        ...lastObject,
        ...(await serverSideTranslations(locale, ["translation"], config)),
      },
    };
  },
  {
    cookieName: "vrwebapp_cookie",
    password: "e*)xK2H*TEwry9j-Wt~??scn^!iK.VR^w?~yH:fZPJ3",
  }
);

export default Home;
