import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { overrideTailwindClasses } from "tailwind-override";
import _ from "lodash";

type PropsType = {
  divNumber?: any;
  customClassName?: string;
  customStyle?: any;
  type?: "div" | "span" | "i" | "p" | "label";
  onClick?: any;
  role?: any;
  divNamePrefix?: string;
};

const BlockDiv: FC<PropsType> = ({
  divNumber,
  customClassName,
  customStyle,
  children,
  type = "div",
  onClick,
  role,
  divNamePrefix = "",
}) => {
  const { widgetnemgooReady, widgetAllaround } =
    useContext(WidgetWrapperContext);

  const myDivNumber = `${divNamePrefix}${divNumber}`;

  const template = widgetnemgooReady?.[myDivNumber]?.template || "";
  const defaultAttribute = widgetAllaround?.[template];

  const blockProps = {
    className: overrideTailwindClasses(
      `${customClassName || ""} ${defaultAttribute?.className} ${
        widgetnemgooReady?.[myDivNumber]?.className || ""
      }`
    ),
    style: {
      ...customStyle,
      ...defaultAttribute?.style,
      ...widgetnemgooReady?.[myDivNumber]?.style,
    },
    onClick: onClick,
    ["div-name"]: myDivNumber,
  };

  switch (type) {
    case "div":
      return <div {...blockProps}>{children}</div>;
    case "span":
      return <span {...blockProps}>{children}</span>;
    case "i":
      return <i {...blockProps}>{children}</i>;
    case "p":
      return <p {...blockProps}>{children}</p>;
    case "label":
      return <label {...blockProps}>{children}</label>;
    default:
      return <div {...blockProps}>{children}</div>;
  }
};

export default BlockDiv;
