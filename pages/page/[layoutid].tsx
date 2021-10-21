import { FC } from "react";
import type { GetServerSideProps } from "next";
import { withIronSession } from "next-iron-session";
import { serverData } from "service/Service";
import { useUser } from "hooks/use-user";
import * as Constants from "@constants/metaConstants";
import LayoutWrapper from "middleware/components/Layout/LayoutWrapper";
import { jsonParse } from "util/helper";
import _ from "lodash";
import { useCloud } from "hooks/use-cloud";

type PropsType = {
  userSession: object;
  readyMergedLayoutConfig: any;
  meta_bp_layout_section: any;
  mergedLayout: any;
  generalConfig: any;
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
}) => {
  const userContext = useUser();
  userContext.setUData(userSession);
  const cloudContext = useCloud();
  cloudContext.setGlobalConfig(generalConfig);
  const { bodyDefault } = cloudContext.globalConfig;
  // console.log("🚀 ~ bodyDefault", bodyDefault);

  // console.log("🚀 ~ readyMergedLayoutConfig", readyMergedLayoutConfig);
  // console.log("🚀 ~ mergedLayout", mergedLayout);

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
async function handler(context: any) {
  const userSession = context.req.session.get("usersession") || null;
  const layoutid = context.query.layoutid || null;

  if (!userSession) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const pageLayoutConfig =
    (
      await serverData(Constants.SERVERURL, Constants.COMMAND_LAYOUT, {
        filtermetadataid: layoutid,
      })
    )?.result || [];

  const [mergedLayoutConfig, mergedLayout = []] = await prepareWithBody(
    pageLayoutConfig
  );

  const readyMergedLayoutConfig = await prepareSectionList(mergedLayoutConfig);

  //Нэг Widget буюу адилхан байвал дахин нэмэх хэрэггүй.
  let meta_bp_layout_section: any = [
    ...readyMergedLayoutConfig.meta_bp_layout_section,
  ];
  const eded = _.values(pageLayoutConfig.meta_bp_layout_section);
  if (readyMergedLayoutConfig.meta_bp_layout_section[0]?.id !== eded[0]?.id) {
    meta_bp_layout_section = [...meta_bp_layout_section, ...eded];
  }

  const readyMergedOtherAttr = jsonParse(readyMergedLayoutConfig.otherattr);
  const generalConfig = readyMergedOtherAttr?.config || {};

  return {
    props: {
      userSession,
      mergedLayout,
      readyMergedLayoutConfig,
      meta_bp_layout_section: meta_bp_layout_section,
      generalConfig,
    },
  };
}

export const getServerSideProps: GetServerSideProps = withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "vrwebapp_cookie",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});

export default Home;

//    # #    #####
//    # #   #     #
//  #######       #
//    # #    #####
//  ####### #
//    # #   #
//    # #   #######
const prepareWithBody = async (rawLayoutConfig: any) => {
  const thisOtherattr = jsonParse(rawLayoutConfig["otherattr"]);
  const thisLayout = thisOtherattr?.layout;
  // const { metaid, sectionCode: masterSectionCode } = thisOtherattr?.master;
  const metaid = thisOtherattr?.master?.metaid || undefined;
  if (!metaid) return [rawLayoutConfig, thisLayout];

  const masterLayoutConfig =
    (
      await serverData(Constants.SERVERURL, Constants.COMMAND_LAYOUT, {
        filtermetadataid: metaid,
      })
    )?.result || {};

  const masterOtherattr = jsonParse(masterLayoutConfig["otherattr"]);
  const masterLayout = masterOtherattr?.layout;
  // console.log("🚀 ~ prepareWithBody ~ masterLayout", masterLayout);
  // console.log("🚀 ~ prepareWithBody ~ thisLayout", thisLayout);
  // console.log("🚀 ~ prepareWithBody ~ masterSectionCode", masterSectionCode);

  findBodyAndUpdate(masterLayout, "body", thisLayout);

  return [masterLayoutConfig, masterLayout];
};

const findBodyAndUpdate = (object: any, findObject: any, thisLayout: any) => {
  let myObject;

  for (let item of object) {
    // let ddd = _.find(item, findObject);
    let ddd = item.sectionCode === findObject ? item : undefined;
    if (ddd) {
      myObject = ddd;
      item.children = [...thisLayout];
      break;
    }
    if (item.children)
      ddd = findBodyAndUpdate(item.children, findObject, thisLayout);
    if (ddd) {
      myObject = ddd;
      // item.children = [{ title: "hahahaha" }];
      break;
    }
  }

  return myObject;
};

//    # #    #####
//    # #   #     #
//  #######       #
//    # #    #####
//  #######       #
//    # #   #     #
//    # #    #####

const prepareSectionList = async (mergedLayoutConfig: any) => {
  const sectionList =
    _.values(mergedLayoutConfig?.meta_bp_layout_section) || [];

  let readySectionList: any = [];
  for (let item of sectionList) {
    if (
      item.metatypeid === Constants.METATYPE_BUSINESSPROCESS &&
      item.islayout === "1"
    ) {
      // console.log("ЭНИЙГ ХАРААЧ", item.widgetcode);

      const layoutConfig =
        (
          await serverData(Constants.SERVERURL, Constants.COMMAND_LAYOUT, {
            filtermetadataid: item.metadataid,
          })
        )?.result || {};

      const deepLayoutConfig = (await prepareSectionList(layoutConfig)) || {};
      readySectionList.push({
        ...item,
        children: { ...deepLayoutConfig },
        thisislayout: true,
      });
    } else {
      readySectionList.push({ ...item, thisislayout: false });
    }
  }

  const readyLayoutConfig = {
    ...mergedLayoutConfig,
    meta_bp_layout_section: readySectionList,
    thisislayout: true,
  };

  return readyLayoutConfig;
};
