import { useContext } from "react";
import { NextSeo } from "next-seo";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";

const HeadMetaConfig = () => {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  const meta = widgetnemgooReady?.meta || {};
  // const meta = {};
  return (
    <>
      <NextSeo {...meta} />
    </>
  );
};

export default HeadMetaConfig;

//* https://github.com/garmeeh/next-seo
//хаяг дээр дэлгэрэнгүй лавлагаа нь бий.
