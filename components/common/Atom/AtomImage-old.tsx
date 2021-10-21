import React, { FC } from "react";
import Image, { ImageProps } from "next/image";
import { isEmpty } from "lodash";

type PropsType = {
  item: string;
  customClassName: string;
  imgProps?: Omit<ImageProps, "layout" | "placeholder" | "blurDataURL">;
};

const AtomImage: FC<PropsType> = ({ item, customClassName, imgProps }) => {
  if (isEmpty(item)) return null;

  // return <Image src={item} className={customClassName} {...imgProps} />;
  return <>ddd</>;
};

export default AtomImage;
