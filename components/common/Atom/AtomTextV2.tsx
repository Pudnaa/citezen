import { FC } from "react";
import { isEmpty } from "lodash";
import AtomLinkV2 from "./AtomLinkV2";
import { decode } from "html-entities";
import parseHtml from "html-react-parser";
import { overrideTailwindClasses } from "tailwind-override";

type PropsType = {
  item: any;
  link?: string;
  color?: string;
  customStyle?: any;
  customClassName?: string;
  truncateRow?: number;
};

const AtomTextV2: FC<PropsType> = ({
  item,
  link,
  color = "sso",
  customStyle,
  customClassName = "",
  truncateRow = 0,
}) => {
  const value = item?.value || "";
  const positionnemgoo = item?.positionnemgoo || {};
  // console.log("🚀 ~ item", item);
  // console.log("🚀 ~ positionnemgoo", positionnemgoo);
  if (isEmpty(value)) return null;

  return (
    <AtomLinkV2 item={positionnemgoo?.url} color={color}>
      <div
        className={overrideTailwindClasses(
          `text-sm lg:text-base ${customClassName}`
        )}
        style={{
          ...customStyle,
        }}
      >
        <span className={`line-clamp-${truncateRow}`}>
          {parseHtml(decode(value))}
        </span>
      </div>
    </AtomLinkV2>
  );
};

export default AtomTextV2;
