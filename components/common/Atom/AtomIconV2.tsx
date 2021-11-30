import { FC } from "react";
import { isEmpty, replace } from "lodash";
import AtomLinkV2 from "./AtomLinkV2";

type PropsType = {
  item: any;
  checked?: boolean;
  color?: string;
  hoverSolid?: boolean;
  customClassName?: string;
  customStyle?: any;
  onClick?: any;
};

const AtomIconV2: FC<PropsType> = ({
  item,
  checked = false,
  color = "citizen",
  hoverSolid = true,
  customClassName = "",
  customStyle,
  onClick,
}) => {
  const value = item?.value || "";
  const positionnemgoo = item?.positionnemgoo || {};
  if (isEmpty(value)) return null;

  let myIcon = value;
  if (hoverSolid && checked) {
    myIcon = replace(myIcon, "far", "fas");
    myIcon = replace(myIcon, "fal", "fas");
  }

  return (
    <AtomLinkV2 item={positionnemgoo?.url}>
      <i
        className={`${myIcon} ${customClassName} ${
          checked && `text-${color}`
        } hover:text-${color} `}
        style={{ ...customStyle }}
        onClick={onClick}
      />
    </AtomLinkV2>
  );
};

export default AtomIconV2;
