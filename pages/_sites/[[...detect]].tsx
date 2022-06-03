import { FC } from "react";
import type { GetServerSideProps } from "next";
import { metaConfig } from "config/metaConfig";
import _ from "lodash";
import prepareUrlPage from "util/prepareUrlPage";
import { useCloud } from "hooks/use-cloud";
import useCloudRender from "@customhook/useCloudRender";
import usePageRender from "@customhook/usePageRender";
import PageWrapper from "@middleware/components/Layout/PageWrapper";
import { getCachedPageData } from "lib/cached-data-file";
import { getSession, useSession } from "next-auth/react";
import Jaak from "@components/cloud/Project/Cozy/jaak";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { usePage } from "hooks/use-page";

type PropsType = {
  userSession: object;
  hostObject: object;
  readyMergedLayoutConfig: any;
  meta_bp_layout_section: any;
  mergedLayout: any;
  generalConfig: any;
  ourMetaConstant: any;
  sheets?: any;
  ouchError?: any;
};

const Detect: FC<PropsType> = ({
  userSession,
  hostObject,
  readyMergedLayoutConfig: readyMergedPageConfig,
  meta_bp_layout_section: rawWidgetList,
  mergedLayout: mergedLayoutNemgoo,
  generalConfig,
  ourMetaConstant,
  sheets,
  ouchError,
}) => {
  const cloudContext = useCloud();

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

  const { data: session, status }: any = useSession();
  const { bodyDefault } = cloudContext?.globalConfig || {};
  const isLogin = generalConfig?.needLogin;
  const router = useRouter();

  if (isLogin == 1 && !session) {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  }

  // console.log("🚀 ~ bodyDefault", bodyDefault);
  // console.log("🚀 ~ readyMergedPageConfig", readyMergedPageConfig);
  // console.log("🚀 ~ rawWidgetList", rawWidgetList);
  // console.log("🚀 ~ mergedLayoutNemgoo", mergedLayoutNemgoo);
  // console.log("🚀 ~ useEffect ~ generalConfig", generalConfig);
  // console.log("🚀 ~ ourMetaConstant", ourMetaConstant);
  // console.log("🚀 ~ detect", session);
  // console.log("detect хуудас ажиллаж байна.", userSession);
  // console.log("🚀 ~ hostObject", hostObject);

  return (
    <div
      className={`${
        bodyDefault?.className || "bg-gray-50 min-h-screen min-w-screen"
      }`}
      style={{ ...bodyDefault?.style }}
    >
      {ouchError && (
        <div className="text-red-600 rounded-lg p-10 m-10 bg-red-100 w-3/4 mx-auto">
          <div className="font-bold mb-7">{ouchError.title}</div>
          {ouchError.message}
        </div>
      )}

      <PageWrapper
        readyMergedPageConfig={readyMergedPageConfig}
        rawWidgetList={rawWidgetList}
        mergedLayout={mergedLayoutNemgoo}
      />
    </div>
  );
};

//   #####
//  #     # ###### #####  #    # ###### #####
//  #       #      #    # #    # #      #    #
//   #####  #####  #    # #    # #####  #    #
//        # #      #####  #    # #      #####
//  #     # #      #   #   #  #  #      #   #
//   #####  ###### #    #   ##   ###### #    #

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: any
) => {
  const isUser = await getSession(context);
  // console.log("🚀 ~ handler ~ context", context);

  const locale = context.locale || "mn";
  const config = {
    i18n: {
      defaultLocale: locale,
      locales: ["mn", "en"],
      ns: ["translation", "common"],
      defaultNS: "translation",
    },
  };
  let ourMetaConstant = metaConfig.metaDev; //service from dev
  // console.log("context menu neeeeee", context);

  // if (!isUser) {
  // 	return {
  // 		redirect: {
  // 			destination: "/login",
  // 			permanent: false,
  // 		},
  // 	};
  // }

  // V1.0
  //замын мэдээллийн сүүлийнхийг авч байна. Энд hostObject мэдээлэл байх ёстой.
  let dddd = context.params?.detect[context.params?.detect.length - 1];
  //hostObject-оос хойшхи JSON мэдээллээ авна.
  dddd = dddd.split("hostObject=")[1];
  //hostObject-оо JSON болгож авна.
  const hostObject = JSON.parse(decodeURIComponent(dddd));
  console.log("hostObject KKKKKKKKKKKK---", hostObject);
  console.log("hostObject KKKKKKKKKKKK-- locale localelocalelocale-", locale);

  /*
	//V2.0
	const rootDomain = context.params?.detect[0];
	const slug = _.join(_.tail(context.params?.detect), "/");

	const hostObject = {
		domain: { subDomain: "", rootDomain: rootDomain, tld: "" },
		slug: slug,
		domainType: "local", //default, local, sub
	};
	*/

  // console.log("VVVVVVVVVVV", hostObject);

  /* ------------------- prepareUrlPage ------------------- */
  const [destinationPage, destinationSlug]: any = await prepareUrlPage(
    ourMetaConstant,
    hostObject
  );

  /* ------------------ getCachedPageData ----------------- */
  let lastObject = {};
  try {
    lastObject = await getCachedPageData(ourMetaConstant, destinationSlug);
  } catch (error: any) {
    console.log(
      "Page-ийн Дата, Мэдээллийг дуудах үед алдаа гарлаа. Алдаа: ",
      error.message
    );
    lastObject = {
      ouchError: {
        title: "Page-ийн Дата, Мэдээллийг дуудах үед алдаа гарлаа. Алдаа: ",
        message: error.message,
      },
    };
  }

  return {
    props: {
      session: isUser,
      hostObject,
      ...lastObject,
      ...(await serverSideTranslations(
        locale,
        ["translation", "common"],
        config
      )),
    },
  };
};

export default Detect;
