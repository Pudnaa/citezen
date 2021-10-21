import { FC } from "react";
import { isEmpty } from "lodash";
import SkeletonItemDefault from "./SkeletonItemDefault";
import SkeletonItemLoading from "./SkeletonItemLoading";

type PropsType = {
  type?: "default" | "loading" | "modern" | "card";
  customClassName?: string;
  customStyle?: any;
};

const Skeleton: FC<PropsType> = ({
  type = "default",
  customClassName,
  customStyle,
}) => {
  switch (type) {
    case "modern":
      return <SkeletonItemDefault />;
    case "card":
      return <SkeletonItemDefault />;
    case "loading":
      return <SkeletonItemLoading />;
    default:
      return <SkeletonItemDefault />;
  }
};

export default Skeleton;
