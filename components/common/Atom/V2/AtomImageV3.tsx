import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
// import AtomLinkV2 from "./AtomLinkV2";
import { useCloud } from "hooks/use-cloud";
import { overrideTailwindClasses } from "tailwind-override";
import Image from "next/image";
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

const AtomImageV3: FC<PropsType> = ({
  item,
  link,
  customClassName = "",
  customStyle,
  alt,
  onClick = null,
  showSample = false,
  customDivNumber = "DivImg",
  divNamePrefix = "",
}) => {
  const { widgetnemgooReady } = useContext(WidgetWrapperContext);

  const value = !showSample
    ? item?.value || ""
    : "https://www.cars-data.com/pictures/mercedes/mercedes-benz-g-class_4266_24.jpg";
  const valueClassName = item?.className || "";

  const cloudContext = useCloud();
  console.log("🚀 ~ item", item);
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
					}`,
				)}
				style={{ ...widgetnemgooReady?.[divNumber]?.style, ...customStyle }}
				alt={alt || imgSrc}
				role="img"
				onClick={onClick}
				div-name={divNumber}
			/> */}
      <Image
        src={imgSrc}
        className={overrideTailwindClasses(
          `w-full h-auto ${customClassName} ${
            widgetnemgooReady?.[divNumber]?.className || ""
          } ${valueClassName}`
        )}
        // style={{ ...customStyle }}
        alt={alt || imgSrc}
        // role="img"
        width={400}
        height={400}
        // layout="fill"
        // objectFit="cover"
        div-name={divNumber}
      />
    </>
  );
};

export default AtomImageV3;
