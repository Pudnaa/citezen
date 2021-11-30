import { FC } from "react";
import { isEmpty } from "lodash";
import AtomLinkV2 from "./AtomLinkV2";

type PropsType = {
  item: any;
  link?: string;
  customStyle?: any;
  customClassName?: string;
};

const AtomNumberV2: FC<PropsType> = ({
  item,
  link,
  customStyle,
  customClassName,
}) => {
  const value = item?.value || "";
  const positionnemgoo = item?.positionnemgoo || {};
  if (isEmpty(value)) return null;

  return (
    <AtomLinkV2 item={positionnemgoo?.url}>
      <span
        className={`text-sm lg:text-base ${customClassName}`}
        style={{
          ...customStyle,
        }}
      >
        {value}
      </span>
    </AtomLinkV2>
  );
};

export default AtomNumberV2;
