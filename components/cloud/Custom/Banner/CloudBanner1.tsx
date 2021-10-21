import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { renderPositionType } from "util/helper";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomImage,
  AtomIcon,
  AtomFade,
} from "@components/common/Atom";

type PropsType = {
  item: any;
  type?: "1" | "2" | "3" | "4";
  color?: string;
  customClassName?: string;
  customStyle?: any;
  fade?: boolean;
  backgroundImageClassName?: string;
  titleClassName?: string;
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
}) => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);

  return (
    <div className="relative w-full h-full">
      <AtomImage
        item={renderPositionType(item, "position2", positionConfig)}
        customClassName={`object-center object-cover w-full h-full ${backgroundImageClassName}`}
        alt={renderPositionType(item, "position1", positionConfig)}
      />
      {fade && <AtomFade color="black" />}

      <div className="absolute w-full flex flex-col justify-center h-full inset-0 px-4 md:px-10 lg:px-24">
        <AtomTitle
          item={renderPositionType(item, "position1", positionConfig)}
          customClassName={`text-xl md:text-3xl lg:text-4xl leading-5 md:leading-7 lg:leading-9 font-semibold text-white ${titleClassName}`}
        />

        <AtomText
          item={renderPositionType(item, "position3", positionConfig)}
          customClassName="mt-5 w-11/12 text-base md:text-xl lg:text-2xl leading-6 md:leading-5 font-normal lg:leading-6 text-white mt-2"
        />
      </div>
    </div>
  );
};

export default CloudBanner1;
