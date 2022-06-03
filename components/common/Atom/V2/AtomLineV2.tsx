import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
// import AtomLinkV2 from "./AtomLinkV2";
import { overrideTailwindClasses } from "tailwind-override";

type PropsType = {
  item: any;
  color?: string;
  customClassName?: string;
  customStyle?: any;
  onClick?: any;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
};

const AtomLineV2: FC<PropsType> = ({
  item,
  color = "cozy",
  customClassName = "",
  customStyle,
  onClick,
  showSample = false,
  customDivNumber = "DivLine",
  divNamePrefix = "",
}) => {
  const { widgetnemgooReady } = useContext(WidgetWrapperContext);
  const divNumber = `${divNamePrefix}${customDivNumber}`;

  return (
    <>
      <hr
        className={overrideTailwindClasses(
          `h-px my-5 bg-gray-300 ${customClassName} ${
            widgetnemgooReady?.[divNumber]?.className || ""
          }`
        )}
        style={{ ...widgetnemgooReady?.[divNumber]?.style, ...customStyle }}
        onClick={onClick}
        div-name={divNumber}
      />
    </>
  );
};

export default AtomLineV2;
