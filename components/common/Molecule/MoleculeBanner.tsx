import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import { AtomFade } from "@components/common/Atom";

type PropsType = {
  type?: "default" | "modern";
  item?: any;
  customClassName?: string;
  customStyle?: object;
  AtomFadeProps?: any;
  divNamePrefix?: string;
};

const MoleculeBanner: FC<PropsType> = ({
  type = "default",
  item,
  customClassName = "",
  customStyle = {},
  AtomFadeProps = { opacityClass: "bg-opacity-0" },
  divNamePrefix = "",
}) => {
  return (
    <BlockDiv
      customClassName="w-full h-full relative"
      divNumber={`${divNamePrefix}divMoleculeBannerOuter`}
    >
      <RenderAtom
        item={item?.image}
        defaultAtom="image"
        customClassName="w-full h-full object-cover object-center inset-0"
      />
      <AtomFade color="black" {...AtomFadeProps} />

      <BlockDiv
        customClassName="absolute w-full h-full inset-0 container mx-auto"
        divNumber={`${divNamePrefix}MoleculeBannerInsideOuter`}
      >
        <BlockDiv
          customClassName=""
          divNumber={`${divNamePrefix}MoleculeBannerInsideInner`}
        >
          <RenderAtom
            item={item?.title}
            defaultAtom="title"
            customClassName="text-2xl"
            divNamePrefix={divNamePrefix}
          />
          <RenderAtom
            item={item?.description}
            defaultAtom="text"
            customClassName="text-gray-700"
            divNamePrefix={divNamePrefix}
          />
          <RenderAtom item={item?.button} defaultAtom="button" />
          <RenderAtom
            item={item?.mainnumber}
            defaultAtom="number"
            customClassName=""
            divNamePrefix={divNamePrefix}
          />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};

export default MoleculeBanner;
