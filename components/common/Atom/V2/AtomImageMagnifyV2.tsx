import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
// import AtomLinkV2 from "./AtomLinkV2";
import { useCloud } from "hooks/use-cloud";
import { overrideTailwindClasses } from "tailwind-override";
import ReactImageMagnify from "react-image-magnify";

type PropsType = {
  item: any;
  link?: string;
  customClassName?: string;
  customStyle?: any;
  alt?: string;
  onClick?: any;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
};

const AtomImageMagnifyV2: FC<PropsType> = ({
  item,
  link,
  customClassName = "",
  customStyle,
  alt,
  onClick = null,
  showSample = false,
  customDivNumber = "DivImage",
  divNamePrefix = "",
}) => {
  const { widgetnemgooReady } = useContext(WidgetWrapperContext);

  const value = !showSample
    ? item?.value || ""
    : "https://www.cars-data.com/pictures/mercedes/mercedes-benz-g-class_4266_24.jpg";
  const valueClassName = item?.className || "";

  // console.log("valueClassName", valueClassName);
  // console.log("item", item);

  const cloudContext = useCloud();
  // console.log("🚀 ~ item", item);
  const positionnemgoo = item?.positionnemgoo || {};

  if (isEmpty(value)) return null;

  //storage гэсэн замтай ирвэл өмнө нь домэйнийг залгаж өгөх ёстой.
  let imgSrc = value;
  if (imgSrc.startsWith("storage/")) {
    imgSrc = `${cloudContext.metaConstant.ourMetaConstant.imageRootURL}${imgSrc}`;
  }

  const divNumber = `${divNamePrefix}${customDivNumber}`;

  return (
    <>
      {/* <img
        src={imgSrc}
        className={overrideTailwindClasses(
          `w-full h-auto ${customClassName} ${
            widgetnemgooReady?.[divNumber]?.className || ""
          } ${valueClassName}`
        )}
        style={{ ...widgetnemgooReady?.[divNumber]?.style, ...customStyle }}
        alt={alt || imgSrc}
        role="img"
        onClick={onClick}
        div-name={divNumber}
      /> */}
      <div
        className={overrideTailwindClasses(
          `w-full h-auto ${customClassName} ${
            widgetnemgooReady?.[divNumber]?.className || ""
          } ${valueClassName}`
        )}
        style={{ ...widgetnemgooReady?.[divNumber]?.style, ...customStyle }}
      >
        <ReactImageMagnify
          imageClassName="object-contain object-center"
          imageStyle={{
            // width: "583px",
            // height: "583px",
            maxWidth: "100%",
            maxHeight: "523px",
          }}
          {...{
            smallImage: {
              src: imgSrc,
              // width: ,
              height: 523,
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
            },
            largeImage: {
              src: imgSrc,
              width: 1200,
              height: 1200,
            },
          }}
        />
      </div>
    </>
  );
};

export default AtomImageMagnifyV2;
