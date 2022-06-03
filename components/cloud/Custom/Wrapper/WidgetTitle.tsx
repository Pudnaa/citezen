import { FC } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";

type TitlePropsType = {
  customClassName?: string;
  customStyle?: any;
  truncateRow?: number;
  titleObject?: any;
  metaConfig?: any;
  gridJsonConfig?: any;
  AllaroundTitle?: any;
  customDivNumber?: string;
};

const WidgetTitle: FC<TitlePropsType> = ({
  customClassName,
  customStyle,
  truncateRow,
  titleObject = {},
  metaConfig = {},
  gridJsonConfig = {},
  AllaroundTitle = {},
  customDivNumber = "Widget",
}) => {
  if (_.isEmpty(titleObject)) return null;

  //Дан объект эсэх?
  if (_.isPlainObject(titleObject)) {
    return (
      <TitleObject
        titleObject={titleObject}
        metaConfig={metaConfig}
        gridJsonConfig={gridJsonConfig}
        AllaroundTitle={AllaroundTitle}
        customClassName={customClassName}
        customStyle={customStyle}
        customDivNumber={customDivNumber}
      />
    );
  }

  //Array бүхий олон Title эсэх?
  if (_.isArray(titleObject)) {
    return (
      <>
        {titleObject.map((item: any, index: number) => {
          return (
            <TitleObject
              key={index}
              titleObject={item}
              metaConfig={metaConfig}
              gridJsonConfig={gridJsonConfig}
              AllaroundTitle={AllaroundTitle}
              customClassName={customClassName}
              customStyle={customStyle}
              customDivNumber={customDivNumber}
            />
          );
        })}
      </>
    );
  }

  return <></>;
};

export default WidgetTitle;

const TitleObject = ({
  titleObject,
  metaConfig,
  gridJsonConfig,
  AllaroundTitle,
  customClassName,
  customStyle,
  customDivNumber,
}) => {
  //Энэ дээр 1 гэж бичсэн нь буруу болжээ. 1 гэсэн үгтэй Title ирдэг юм байна.
  // const title = titleObject.title === "1" ? metaConfig.name : titleObject.title;
  const title = titleObject?.title || "";

  const atomClassName = overrideTailwindClasses(
    `${gridJsonConfig?.title?.className || ""} ${
      AllaroundTitle?.className || ""
    } ${titleObject?.className || ""} ${customClassName || ""}`
  );

  const atomStyle = {
    ...gridJsonConfig?.title?.style,
    ...AllaroundTitle?.style,
    ...titleObject?.style,
  };

  return (
    <>
      <RenderAtom
        item={{ value: title }}
        defaultAtom="title"
        customClassName={atomClassName}
        customStyle={atomStyle}
        customDivNumber={customDivNumber}
      />
    </>
  );
};
