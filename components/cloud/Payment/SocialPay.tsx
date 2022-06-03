import _ from "lodash";
import { useContext, useEffect, useState, FC } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Item from "antd/lib/list/Item";
type PropsType = {
  data?: any;
};

const SocialPay: FC<PropsType> = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    widgetnemgooReady,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  // console.log("ddd",data);
  return (
    <>
      SocialPay
      {/* <pre>{JSON.stringify(processParams, null, "\t")}</pre> */}
    </>
  );
};

export default SocialPay;
