import { FC } from "react";
import type { GetServerSideProps } from "next";
import { useCloud } from "hooks/use-cloud";
import useCloudRender from "@customhook/useCloudRender";
import usePageRender from "@customhook/usePageRender";
import { metaConfig } from "config/metaConfig";
import prepareDatas from "util/preparePageListData";
import _ from "lodash";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageWrapper from "@middleware/components/Layout/PageWrapper";
import { getSession, useSession } from "next-auth/react";

type PropsType = {
  userSession: object;
  hostObject: object;
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
  hostObject,
  readyMergedLayoutConfig,
  // meta_bp_layout_section,
  meta_bp_layout_section: rawWidgetList,
  mergedLayout: mergedLayoutNemgoo,
  generalConfig,
  ourMetaConstant,
}) => {
  const cloudContext = useCloud();
  const { data: session } = useSession();

  useCloudRender(
    userSession,
    generalConfig,
    rawWidgetList,
    {
      meta: metaConfig,
      ourMetaConstant: ourMetaConstant,
    },
    hostObject
  );

  usePageRender(rawWidgetList);

  // console.log("🚀 ~ handler ~ userSession", session);
  // if (!session) {
  // 	Router.push("/login");
  // 	window.location.href = "/login";
  // 	return {
  // 		redirect: {
  // 			destination: "/login",
  // 			permanent: false,
  // 		},
  // 	};
  // }

  const { bodyDefault } = cloudContext.globalConfig;
  return (
    <div
      className={`${
        bodyDefault?.className
          ? bodyDefault?.className
          : "bg-gray-50 min-h-screen min-w-screen"
      }`}
      style={{ ...bodyDefault?.style }}
    >
      <PageWrapper
        readyMergedPageConfig={readyMergedLayoutConfig}
        rawWidgetList={rawWidgetList}
        mergedLayout={mergedLayoutNemgoo}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  // session: Session | null;
}> = async (context: any) => {
  const locale = context.locale || "mn";

  const isUser = await getSession(context);
  const pageid = context.query.pageid || null;
  const config = {
    i18n: {
      defaultLocale: locale,
      locales: ["mn", "en", "cn"],
      ns: ["translation"],
      defaultNS: "translation",
    },
  };

  let ourMetaConstant = metaConfig.metaDev; //service from dev
  // let ourMetaConstant = metaConfig.metaCloud; //service from Cloud

  const lastObject = await prepareDatas(ourMetaConstant, pageid);
  if (!isUser) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session: await getSession(context),
      hostObject: {},
      ...lastObject,
      ...(await serverSideTranslations(locale, ["translation"], config)),
    },
  };
};
export default Home;
