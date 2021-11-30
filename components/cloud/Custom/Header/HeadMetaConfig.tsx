import { useContext } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";

const HeadMetaConfig = () => {
  const {
    config,
    datasrc,
    otherattr,
    widgetnemgoo,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  const meta = widgetnemgoo?.meta || {};
  // console.log("🚀 ~ HeadMetaConfig ~ widgetnemgoo", widgetnemgoo);
  // console.log("🚀 ~ HeadMetaConfig ~ meta", meta);

  return (
    <>
      <NextSeo {...meta} />
    </>
  );
};

export default HeadMetaConfig;

//* https://github.com/garmeeh/next-seo
//хаяг дээр дэлгэрэнгүй лавлагаа нь бий.
