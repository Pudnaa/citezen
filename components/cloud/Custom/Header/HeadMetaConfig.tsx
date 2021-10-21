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
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetDefault,
  } = useContext(WidgetWrapperContext);

  if (isEmpty(datasrc)) return null;

  const meta = otherattr?.meta || {};
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
