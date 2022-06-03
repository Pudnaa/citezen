import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
// import AtomLinkV2 from "./AtomLinkV2";
import { overrideTailwindClasses } from "tailwind-override";

type PropsType = {
  item: any;
  checked?: boolean;
  color?: string;
  hoverSolid?: boolean;
  customClassName?: string;
  customStyle?: any;
  onClick?: any;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
};

const AtomIconV2: FC<PropsType> = ({
  item,
  checked = false,
  color = "cozy",
  hoverSolid = true,
  customClassName = "",
  customStyle,
  onClick,
  showSample = false,
  customDivNumber = "DivIcon",
  divNamePrefix = "",
}) => {
  const { widgetnemgooReady } = useContext(WidgetWrapperContext);
  const value = !showSample ? item?.value || "" : "far fa-smile";
  const valueClassName = item?.className || "";

  if (_.isEmpty(value)) return null;

  let myIcon = value;
  if (hoverSolid && checked) {
    myIcon = _.replace(myIcon, "far", "fas");
    myIcon = _.replace(myIcon, "fal", "fas");
  }

  const divNumber = `${divNamePrefix}${customDivNumber}`;

  return (
    <>
      <i
        className={overrideTailwindClasses(
          `${myIcon} ${customClassName} ${checked && `text-${color}`} ${
            widgetnemgooReady?.[divNumber]?.className || ""
          } ${valueClassName}`
        )}
        style={{ ...widgetnemgooReady?.[divNumber]?.style, ...customStyle }}
        onClick={onClick}
        div-name={divNumber}
      />
    </>
  );
};

export default AtomIconV2;
