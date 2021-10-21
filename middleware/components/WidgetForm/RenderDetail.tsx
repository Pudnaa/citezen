import { FC } from "react";
import _ from "lodash";
import Rows from "./Detail/Rows";
import Row from "./Detail/Row";

type PropsType = {
  pathConfig: any;
  config: any;
  attr: any;
};

const RenderDetail: FC<PropsType> = ({ pathConfig, config, attr }) => {
  if (config.recordtype === "row") {
    return <Row pathConfig={pathConfig} config={config} key={config?.id} />;
  } else {
    return <Rows pathConfig={pathConfig} config={config} key={config?.id} />;
  }
};

export default RenderDetail;
