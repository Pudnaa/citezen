import React, { FC } from "react";
import { isEmpty } from "lodash";
import AtomLinkV2 from "./AtomLinkV2";
import { useCloud } from "hooks/use-cloud";
import { overrideTailwindClasses } from "tailwind-override";

type PropsType = {
  item: any;
  link?: string;
  customClassName?: string;
  customStyle?: any;
  alt?: string;
};

const AtomImageV2: FC<PropsType> = ({
  item,
  link,
  customClassName = "",
  customStyle,
  alt,
}) => {
  const cloudContext = useCloud();
  const value = item?.value || "";
  // console.log("🚀 ~ item", item);
  const positionnemgoo = item?.positionnemgoo || {};

  if (isEmpty(value)) return null;

  //storage гэсэн замтай ирвэл өмнө нь домэйнийг залгаж өгөх ёстой.
  let imgSrc = value;
  if (imgSrc.startsWith("storage/")) {
    imgSrc = `${cloudContext.metaConstant.ourMetaConstant.imageRootURL}${imgSrc}`;
  }

  return (
    <AtomLinkV2 item={positionnemgoo?.url} customClassName={`w-full h-full`}>
      <img
        src={imgSrc}
        // className={`${!customClassName.includes("w-") && "w-full"} ${
        //   !customClassName.includes("h-") && "h-auto"
        // } ${customClassName}`}
        className={overrideTailwindClasses(`w-full h-auto ${customClassName}`)}
        style={{ ...customStyle }}
        alt={alt || imgSrc}
        role="img"
      />
    </AtomLinkV2>
  );
};

export default AtomImageV2;
