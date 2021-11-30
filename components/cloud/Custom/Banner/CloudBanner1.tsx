import { FC } from "react";
import { AtomFade } from "@components/common/Atom";
import RenderAtom from "@components/common/Atom/RenderAtom";

type PropsType = {
  item: any;
  type?: "1" | "2" | "3" | "4";
  color?: string;
  customClassName?: string;
  customStyle?: any;
  fade?: boolean;
  backgroundImageClassName?: string;
  titleClassName?: string;
  width?: string;
  height?: string;
};

const CloudBanner1: FC<PropsType> = ({
  item,
  type,
  color = "weekly",
  customClassName,
  customStyle,
  fade = true,
  backgroundImageClassName = "",
  titleClassName = "",
  width,
  height,
}) => {
  const myWidth = width || "w-screen";
  const myHeight = height || "h-60 md:h-96 xl:h-144";

  return (
    <div className={`relative ${myWidth} ${myHeight}`}>
      {/* <AtomImage
        item={renderPositionType(item, "position2", positionConfig)}
        customClassName={`object-center object-cover w-full h-full ${backgroundImageClassName}`}
        alt={renderPositionType(item, "position1", positionConfig)}
      /> */}
      <RenderAtom
        item={item?.position2}
        defaultAtom="image"
        customClassName={`object-center object-cover w-full h-full ${backgroundImageClassName}`}
      />
      {fade && <AtomFade color="black" />}

      <div className="absolute w-full flex flex-col justify-center h-full inset-0 px-4 md:px-10 lg:px-24">
        <RenderAtom
          item={item?.position1}
          defaultAtom="title"
          customClassName={`text-xl md:text-3xl lg:text-4xl leading-5 md:leading-7 lg:leading-9 font-semibold text-white ${titleClassName}`}
        />
        <RenderAtom
          item={item?.position3}
          defaultAtom="text"
          customClassName="mt-5 w-11/12 text-base md:text-xl lg:text-2xl leading-6 md:leading-5 font-normal lg:leading-6 text-white mt-2"
        />
      </div>
    </div>
  );
};

export default CloudBanner1;
