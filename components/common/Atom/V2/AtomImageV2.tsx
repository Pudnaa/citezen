import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
// import AtomLinkV2 from "./AtomLinkV2";
import { useCloud } from "hooks/use-cloud";
import { overrideTailwindClasses } from "tailwind-override";
import Image from "next/image";

type PropsType = {
  item: any;
  customClassName?: string;
  customStyle?: any;
  alt?: string;
  onClick?: any;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
};

const AtomImageV2: FC<PropsType> = ({
  item,
  customClassName = "",
  customStyle,
  alt,
  onClick = null,
  showSample = false,
  customDivNumber = "DivImage",
  divNamePrefix = "",
}) => {
  const { widgetnemgooReady } = useContext(WidgetWrapperContext);
  const cloudContext = useCloud();

  const value = !showSample
    ? item?.value || ""
    : "https://www.cars-data.com/pictures/mercedes/mercedes-benz-g-class_4266_24.jpg";
  const valueClassName = item?.className || "";

  // console.log("valueClassName", valueClassName);
  // console.log("item", item);

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
      <img
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
      />
      {/* <Image
        src={imgSrc}
        className={overrideTailwindClasses(`w-full h-auto ${customClassName}`)}
        // style={{ ...customStyle }}
        alt={alt || imgSrc}
        // role="img"
        // width={400}
        // height={400}
        layout="fill"
        objectFit="cover"
      /> */}
    </>
  );
};

export default AtomImageV2;
