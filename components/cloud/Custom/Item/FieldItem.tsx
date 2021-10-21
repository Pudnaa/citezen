import { FC } from "react";
import accounting from "accounting";
import dayjs from "util/dayjslocale";
import { Tooltip } from "antd";
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

const FieldItem: FC<PropsType> = ({ item, config = {}, ...props }) => {
  if (_.isEmpty(item)) return null;

  const itemJsonConfig = jsonParse(decode(config?.jsonconfig)) || {};
  const ComponentConfig = itemJsonConfig?.component || {};
  const { className, style } = ComponentConfig;

  //   console.log("FieldItem item", item);
  //   console.log("FieldItem config", config);
  //   console.log("FieldItem itemJsonConfig", itemJsonConfig);
  //   console.log("FieldItem ComponentConfig", ComponentConfig);

  switch ((ComponentConfig?.type || "").toLowerCase() || "") {
    // {
    //   "component": {
    //       "type": "accounting",
    //       "className":"",
    //       "style": {
    //           "borderColor": "#454545"
    //       },
    //       "props": {
    // "symbol": "км",
    // "format": "%v %s",
    // "precision": "0",
    // "thousand": "'"
    //       }
    //   }
    // }
    case "icon":
      return (
        <AtomIcon item={item} customClassName={className} customStyle={style} />
      );
    case "tag":
      return (
        <>{item}</>
        // <AtomIcon item={item} customClassName={className} customStyle={style} />
      );
    case "accounting":
      return accounting.formatMoney(item, ComponentConfig?.props);
    case "dayjs.fromnow":
      // {
      //   "component": {
      //       "type": "dayjs.fromnow"
      //   }
      // }
      return <Tooltip title={item}>{dayjs(item).fromNow()}</Tooltip>;
    case "dayjs.format":
      // {
      //   "component": {
      //       "type": "dayjs.format",
      //       "props": {
      //           "format": "YYYY-MM-DD"
      //       }
      //   }
      // }
      return (
        <Tooltip title={item}>
          {dayjs(item).format(ComponentConfig?.props?.format || "YYYY-MM-DD")}
        </Tooltip>
      );
    case "boolean":
      // {
      //   "component": {
      //       "type": "boolean",
      //       "props": {
      //           "0": "Төлөөгүй",
      //           "1": "Төлсөн"
      //       }
      //   }
      // }
      return ComponentConfig?.props[item] || null;
    default:
      return (
        <span className={className} style={style} {...props}>
          {item || null}
        </span>
      );
  }
};

export default FieldItem;
