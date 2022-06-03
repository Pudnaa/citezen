import { FC } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";

type TitlePropsType = {
  customClassName?: string;
  truncateRow?: number;
  titleObject?: any;
  metaConfig?: any;
  gridJsonConfig?: any;
  AllaroundTitle?: any;
};

const WidgetTitle: FC<TitlePropsType> = ({
  customClassName,
  truncateRow,
  titleObject = {},
  metaConfig = {},
  gridJsonConfig = {},
  AllaroundTitle = {},
}) => {
  if (_.isEmpty(titleObject?.title)) return null;

  const title = titleObject.title === "1" ? metaConfig.name : titleObject.title;

  const atomClassName = overrideTailwindClasses(
    `${gridJsonConfig?.title?.className || ""} ${
      AllaroundTitle?.className || ""
    } ${titleObject?.className || ""} ${customClassName || ""}`
  );

  const atomStyle =
    titleObject?.style || gridJsonConfig?.title?.style || AllaroundTitle?.style;

  return (
    <>
      <RenderAtom
        item={{ value: title }}
        defaultAtom="title"
        customClassName={atomClassName}
        customStyle={atomStyle}
      />
    </>
  );
};

export default WidgetTitle;
