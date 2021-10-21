import React, { FC } from "react";
import { isEmpty } from "lodash";
import AtomLink from "./AtomLink";

type PropsType = {
  item: string;
  link?: string;
  customClassName?: string;
  customStyle?: any;
  alt?: string;
};

const AtomImage: FC<PropsType> = ({
  item,
  link,
  customClassName = "",
  customStyle,
  alt,
}) => {
  if (isEmpty(item)) return null;

  //storage гэсэн замтай ирвэл өмнө нь домэйнийг залгаж өгөх ёстой.
  let imgSrc = item;
  if (imgSrc.startsWith("storage/")) {
    imgSrc = `https://dev.veritech.mn/${imgSrc}`;
  }

  return (
    <AtomLink item={link} customClassName="w-full h-full">
      <img
        src={imgSrc}
        className={`${!customClassName.includes("w-") && "w-full"} ${
          !customClassName.includes("h-") && "h-auto"
        } ${customClassName}`}
        style={{ ...customStyle }}
        alt={alt || imgSrc}
        role="img"
      />
    </AtomLink>
  );
};

export default AtomImage;
