import { FC } from "react";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import { decode } from "html-entities";
import parseHtml from "html-react-parser";

type PropsType = {
  item: any;
  color?: string;
  customClassName?: string;
  customStyle?: any;
  truncateRow?: number;
  onClick?: any;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
};

const AtomTitleV2: FC<PropsType> = ({
  item,
  color = "sso",
  customClassName = "",
  customStyle,
  truncateRow = 0,
  onClick = null,
  showSample = false,
  customDivNumber = "DivTitle",
  divNamePrefix = "",
}) => {
  const value = !showSample ? item?.value || "" : "Sample Title";
  const valueClassName = item?.className || "";

  //main хэсэг эхэлж байна.
  if (_.isEmpty(value)) return null;

  return (
    <BlockDiv
      customClassName={`text-lg font-bold ${customClassName} ${valueClassName}`}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}${customDivNumber}`}
      type="div"
      onClick={onClick}
    >
      <span className={`line-clamp-${truncateRow}`}>
        {parseHtml(decode(value))}
      </span>
    </BlockDiv>
  );
};

export default AtomTitleV2;
