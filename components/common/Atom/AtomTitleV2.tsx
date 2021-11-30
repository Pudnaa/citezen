import { FC } from "react";
import { isEmpty } from "lodash";
import AtomLinkV2 from "./AtomLinkV2";
import { overrideTailwindClasses } from "tailwind-override";

type PropsType = {
  item: any;
  color?: string;
  customClassName?: string;
  customStyle?: any;
  truncateRow?: number;
};

const AtomTitleV2: FC<PropsType> = ({
  item,
  color = "sso",
  customClassName = "",
  customStyle,
  truncateRow = 0,
}) => {
  const value = item?.value || "";
  const positionnemgoo = item?.positionnemgoo || {};
  if (isEmpty(value)) return null;

  // console.log("🚀 ~ value", value);
  // console.log("🚀 ~ positionnemgoo", positionnemgoo);

  // const className = `${
  //   !customClassName.includes("text-") && "text-lg leading-6"
  // } ${!customClassName.includes("font-") && "font-bold"} ${customClassName}`;
  const className = overrideTailwindClasses(
    `text-lg leading-6 font-bold ${customClassName}`
  );
  const style = {
    ...customStyle,
  };

  return (
    <AtomLinkV2 item={positionnemgoo?.url} color={color}>
      <div className={className} style={style}>
        <span className={`line-clamp-${truncateRow}`}>{value}</span>
      </div>
    </AtomLinkV2>
  );
};

export default AtomTitleV2;
