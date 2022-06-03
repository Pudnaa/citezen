import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import { overrideTailwindClasses } from "tailwind-override";
import { useCloud } from "hooks/use-cloud";

type PropsType = {
  item?: any;
  type?: "simple" | "square";
  customClassName?: string;
  customStyle?: object;
  onClick?: any;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
};

const AtomAvatarV2: FC<PropsType> = ({
  item,
  customStyle = {},
  customClassName = "",
  onClick = null,
  showSample = false,
  customDivNumber = "DivImage",
  divNamePrefix = "",
}) => {
  const { widgetnemgooReady } = useContext(WidgetWrapperContext);
  const cloudContext = useCloud();

  const value = !showSample
    ? item?.value ||
      "https://res.cloudinary.com/dzih5nqhg/image/upload/v1637746847/cloud/icons/QMpejaITONnxnRBZKksI_mhmyc4.gif"
    : "https://www.cars-data.com/pictures/mercedes/mercedes-benz-g-class_4266_24.jpg";
  const valueClassName = item?.className || "";

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
        role="img"
        onClick={onClick}
        div-name={divNumber}
      />
    </>
  );
};

export default AtomAvatarV2;
