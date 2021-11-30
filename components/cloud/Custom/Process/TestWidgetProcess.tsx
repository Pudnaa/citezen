import { FC } from "react";
import { decode } from "html-entities";
import _ from "lodash";
import { jsonParse, toBoolean } from "util/helper";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
} from "@components/common/Atom";

type PropsType = {
  item: any;
  config?: any;
};

const TestWidgetProcess: FC<PropsType> = ({ item, config = {}, ...props }) => {
  if (_.isEmpty(item)) return null;

  const itemJsonConfig = jsonParse(decode(config?.jsonconfig)) || {};
  const ComponentConfig = itemJsonConfig?.component || {};
  const { className, style } = ComponentConfig;

  console.log("TestWidgetProcess item", item);
  console.log("TestWidgetProcess config", config);
  console.log("TestWidgetProcess itemJsonConfig", itemJsonConfig);
  console.log("TestWidgetProcess ComponentConfig", ComponentConfig);

  return (
    <span className={className} style={style} {...props}>
      {item || null}
    </span>
  );
};

export default TestWidgetProcess;
