import React, { FC } from "react";
import { isEmpty } from "lodash";
import AtomLinkV2 from "./AtomLinkV2";
import { useCloud } from "hooks/use-cloud";
import Image from "next/image";
type PropsType = {
  src?: any;
  item?: any;
  link?: string;
  customClassName?: string;
  customStyle?: any;
  alt?: string;
};

const AtomImageV2: FC<PropsType> = ({
  src,
  item,
  link,
  customClassName = "",
  customStyle,
  alt,
}) => {
  const cloudContext = useCloud();
  const value = item?.value || "";
  const positionnemgoo = item?.positionnemgoo || {};

  // if (isEmpty(value)) return null;

  //storage гэсэн замтай ирвэл өмнө нь домэйнийг залгаж өгөх ёстой.
  let imgSrc = src;
  if (imgSrc.startsWith("storage/")) {
    imgSrc = `${cloudContext.metaConstant.ourMetaConstant.imageRootURL}${imgSrc}`;
  }

  console.log("🚀 ~ imgSrc", imgSrc);

  return (
    <AtomLinkV2 item={positionnemgoo?.url} customClassName={`w-full h-full`}>
      <Image
        src={imgSrc}
        width={40}
        height={40}
        // className={`${!customClassName.includes("w-") && "w-full"} ${
        //   !customClassName.includes("h-") && "h-auto"
        // } ${customClassName}`}
        alt={alt || imgSrc}
        role="img"
      />
    </AtomLinkV2>
  );
};

export default AtomImageV2;
