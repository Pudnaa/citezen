import { useContext, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

const GraphWithControls = () => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  if (isEmpty(datasrc)) return null;
  // console.log("GraphWithControls config", config);
  // console.log("GraphWithControls datasrc", datasrc);
  // console.log("GraphWithControls otherattr", otherattr);

  return (
    <>
      <JSONPretty data={datasrc} />
    </>
  );
};
export default GraphWithControls;
