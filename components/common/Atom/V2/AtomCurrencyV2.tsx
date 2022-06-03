import { FC } from "react";
import accounting from "accounting";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";

type PropsType = {
  item: any;
  type?: "mnt" | "usd" | "jpy";
  customStyle?: any;
  customClassName?: string;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
};

const AtomCurrencyV2: FC<PropsType> = ({
  item,
  type = "mnt",
  customClassName,
  customStyle,
  showSample = false,
  customDivNumber = "DivCurrency",
  divNamePrefix = "",
}) => {
  const value = !showSample ? item?.value || "" : "902070";
  const valueClassName = item?.className || "";

  if (_.isEmpty(value)) return null;

  let myProps: any = { precision: 0, thousand: "," };
  switch (type) {
    case "mnt":
      myProps = {
        symbol: "₮",
        format: "%v%s",
        ...myProps,
      };
      break;
    case "usd":
      myProps = {
        symbol: "$",
        format: "%s%v",
        ...myProps,
      };
      break;
    default:
      break;
  }

  return (
    <>
      <BlockDiv
        customClassName={`text-sm lg:text-base ${customClassName} ${valueClassName}`}
        customStyle={customStyle}
        divNumber={`${divNamePrefix}${customDivNumber}`}
        type="span"
      >
        {accounting.formatMoney(value, {
          ...myProps,
        })}
      </BlockDiv>
    </>
  );
};

export default AtomCurrencyV2;
