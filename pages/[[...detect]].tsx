import { FC, useEffect } from "react";
import type { GetServerSideProps } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { metaConfig } from "config/metaConfig";
import _ from "lodash";
import prepareLayoutData from "util/prepareLayoutData";
import prepareUrlPage from "util/prepareUrlPage";
import { useUser } from "hooks/use-user";
import { useCloud } from "hooks/use-cloud";
import LayoutWrapper from "middleware/components/Layout/LayoutWrapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type PropsType = {
  userSession: object;
  readyMergedLayoutConfig: any;
  meta_bp_layout_section: any;
  mergedLayout: any;
  generalConfig: any;
  ourMetaConstant: any;
};

const Detect: FC<PropsType> = ({
  userSession,
  readyMergedLayoutConfig,
  meta_bp_layout_section,
  mergedLayout,
  generalConfig,
  ourMetaConstant,
}) => {
  // console.log("ЭНД ОРЖ БАЙНА ШҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮ");
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

  const { bodyDefault } = cloudContext?.globalConfig;
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

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async function getServerSideProps(context: any) {
    //-- Улаанхүүгийн код
    const locale = context.locale || "mn";
    const config = {
      i18n: {
        defaultLocale: locale,
        locales: ["mn", "en", "cn"],
        ns: ["translation"],
        defaultNS: "translation",
      },
    };
    const userSession = context.req.session.user || null;
    //-- Улаанхүүгийн код төгсөв.

    // console.log("context.params", context.params);
    // console.log("context.resolvedUrl", context.resolvedUrl);

    const [destinationPage, destinationSlug]: any = prepareUrlPage(
      context.req,
      context.resolvedUrl
    );

    // console.log("destinationPage ===", destinationPage);
    // console.log("destinationSlug ===", destinationSlug);

    //!---------------
    // console.log("🚀 ~ userSession", userSession);
    // const layoutid = "16342674207241";
    const layoutid = destinationSlug.pageid;
    // const ourMetaConstant = metaConfig.metaDev;
    const ourMetaConstant = metaConfig.metaSkyresort;
    const lastObject = await prepareLayoutData(ourMetaConstant, layoutid);

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

// export const getServerSideProps: GetServerSideProps = async (context: any) => {

// };

export default Detect;
