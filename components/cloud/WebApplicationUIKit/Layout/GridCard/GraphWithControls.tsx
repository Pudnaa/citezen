import { useContext, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import JSONPretty from "react-json-pretty";
// import "react-json-pretty/themes/monikai.css";

const GraphWithControls = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("GraphWithControls config", config);
  // console.log("GraphWithControls readyDatasrc", readyDatasrc);
  // console.log("GraphWithControls widgetnemgooReady", widgetnemgooReady);

  return (
    <>
      <JSONPretty data={readyDatasrc} />
    </>
  );
};
export default GraphWithControls;
