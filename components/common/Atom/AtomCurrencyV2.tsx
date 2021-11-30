import { FC } from "react";
import accounting from "accounting";
import { isEmpty } from "lodash";
import AtomLinkV2 from "./AtomLinkV2";
import { renderPositionType } from "@util/helper";

type PropsType = {
  item: any;
  type?: "mnt" | "usd" | "jpy";
  link?: string;
  customStyle?: any;
  customClassName?: string;
  props?: any;
};

const AtomCurrencyV2: FC<PropsType> = ({
  item,
  type = "mnt",
  link,
  customStyle,
  customClassName,
  props,
}) => {
  const value = item?.value || "";
  const positionnemgoo = item?.positionnemgoo || {};
  if (isEmpty(value)) return null;

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
    <AtomLinkV2 item={positionnemgoo?.url}>
      <span
        className={`text-sm lg:text-base ${customClassName}`}
        style={{
          ...customStyle,
        }}
      >
        {accounting.formatMoney(value, {
          ...myProps,
        })}
      </span>
    </AtomLinkV2>
  );
};

export default AtomCurrencyV2;
