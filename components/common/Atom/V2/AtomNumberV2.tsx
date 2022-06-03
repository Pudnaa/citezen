import { FC } from "react";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";

type PropsType = {
  item: any;
  link?: string;
  customStyle?: any;
  customClassName?: string;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
};

const AtomNumberV2: FC<PropsType> = ({
  item,
  link,
  customStyle,
  customClassName,
  showSample = false,
  customDivNumber = "DivNumber",
  divNamePrefix = "",
}) => {
  const value = !showSample ? item?.value || "" : "902070";
  const valueClassName = item?.className || "";

  if (_.isEmpty(value)) return null;

  return (
    <BlockDiv
      customClassName={`text-sm lg:text-base ${customClassName} ${valueClassName}`}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}${customDivNumber}`}
      type="span"
    >
      {value}
    </BlockDiv>
  );
};

export default AtomNumberV2;
