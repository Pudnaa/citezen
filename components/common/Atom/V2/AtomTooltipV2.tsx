import { FC } from "react";
import _ from "lodash";
import { Tooltip } from "antd";

type PropsType = {
  item?: any;
  customClassName?: string;
  customStyle?: any;
  children: any;
};

const AtomTooltipV2: FC<PropsType> = ({
  item = {},
  customClassName = "",
  customStyle = {},
  children,
}) => {
  if (_.isEmpty(item)) return children;

  return (
    <Tooltip title={item?.text} className={customClassName} style={customStyle}>
      <span>{children}</span>
    </Tooltip>
  );
};

export default AtomTooltipV2;
