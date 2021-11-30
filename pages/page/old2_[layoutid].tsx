import { FC, useEffect } from "react";
import type { GetServerSideProps } from "next";
// import { withIronSession } from "next-iron-session";
import { serverData } from "service/Service";
import { useUser } from "hooks/use-user";
// import * as Constants from "@constants/metaConstants";
import { metaConfig } from "config/metaConfig";
import LayoutWrapper from "middleware/components/Layout/LayoutWrapper";
import { jsonParse } from "util/helper";
// import { prepareWithBody, prepareSectionList } from "util/prepareLayoutData";
import _ from "lodash";
import { useCloud } from "hooks/use-cloud";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
/*
async function handler(context: any) {
  const userSession = context.req.session.get("usersession") || null;
  const layoutid = context.query.layoutid || null;
  const locale = context.locale || "mn";
  const ourMetaConstant = metaConfig.metaDev;

  // console.log("CCCCCCCC", context);
  // console.log("XXXXXXX", context.req.headers);

  // if (!userSession) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }

  //ERP-аас тухайн Page Layout-ийн бүх тохиргоо ирнэ. Том JSON байгаа.
  const pageLayoutConfig =
    (
      await serverData(ourMetaConstant.serverUrl, metaConfig.COMMAND_LAYOUT, {
        filtermetadataid: layoutid,
      })
    )?.result || [];

  //body Master пэйж байвал түүнтэй нэгтгэж нэг том Page Layout гаргаж авна.
  const [mergedLayoutConfig, mergedLayout = []] = await prepareWithBody(
    pageLayoutConfig,
    ourMetaConstant
  );

  //Цаашид React даяар ашиглах боломжтой бэлэн Page Layout-ийн том JSON гаргаж авна.
  const readyMergedLayoutConfig = await prepareSectionList(
    mergedLayoutConfig,
    ourMetaConstant
  );

  //Нэг Widget буюу адилхан байвал дахин нэмэх хэрэггүй.
  let meta_bp_layout_section: any = [
    ...readyMergedLayoutConfig.meta_bp_layout_section,
  ];
  const eded = _.values(pageLayoutConfig.meta_bp_layout_section);
  if (readyMergedLayoutConfig.meta_bp_layout_section[0]?.id !== eded[0]?.id) {
    meta_bp_layout_section = [...meta_bp_layout_section, ...eded];
  }

  //Page даяар ажиллах General Nemgoo-г Master Пэйжийн layoutNemgoo-оос олж авах ёстой.
  const readyMergedLayoutNemgoo = jsonParse(
    readyMergedLayoutConfig.layoutnemgoo
  );
  const generalConfig = readyMergedLayoutNemgoo?.config || {};

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
      mergedLayout,
      readyMergedLayoutConfig,
      meta_bp_layout_section: meta_bp_layout_section,
      generalConfig,
      ourMetaConstant,
      ...(await serverSideTranslations(locale, ["translation"], config)),
    },
  };
}

export const getServerSideProps: GetServerSideProps = withIronSession(handler, {
  password: "e*)xK2H*TEwry9j-Wt~??scn^!iK.VR^w?~yH:fZPJ3",
  cookieName: "vrwebapp_cookie",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    // secure: process.env.NODE_ENV === "production",
    secure: false,
  },
});

*/

export default Home;
