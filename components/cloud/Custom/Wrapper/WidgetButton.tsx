import { FC } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";

type PropsType = {
  customClassName?: string;
  buttonObject?: any;
  AllaroundButton?: any;
};

const WidgetButton: FC<PropsType> = ({
  customClassName,
  buttonObject = {},
  AllaroundButton = {},
}) => {
  if (_.isEmpty(buttonObject?.title)) return null;

  const title = buttonObject?.title || "";

  const atomClassName = overrideTailwindClasses(
    `${AllaroundButton?.className || ""} ${buttonObject?.className || ""} ${
      customClassName || ""
    }`
  );

  const atomStyle = buttonObject?.style || AllaroundButton?.style;

  return (
    <>
      <RenderAtom
        item={{
          value: title,
          positionnemgoo: {
            atom: buttonObject?.atom,
          },
        }}
        defaultAtom="button"
        customClassName={atomClassName}
        customStyle={atomStyle}
      />
    </>
  );
};

export default WidgetButton;
