import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import {
  positionToPath,
  otherAttrToObj,
  renderPositionType,
} from "util/helper";
import { isEmpty } from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomButton,
} from "@components/common/Atom";

const RigthAlignedImageWithMultipleCta = () => {
  const { config, datasrc, otherattr, positionConfig } =
    useContext(WidgetWrapperContext);

  if (isEmpty(datasrc)) return null;

  // console.log("RigthAlignedImageWithMultipleCta config", config);
  // console.log("RigthAlignedImageWithMultipleCta datasrc", datasrc);
  // console.log("RigthAlignedImageWithMultipleCta otherattr", otherattr);

  return (
    <>
      {datasrc.map((item: any, index: any) => (
        <RigthAlignedImageWithMultipleCtaItem
          key={index}
          item={item}
          config={config}
          otherattr={otherattr}
          positionConfig={positionConfig}
        />
      ))}
    </>
  );
};
export default RigthAlignedImageWithMultipleCta;

type ItemPropsType = {
  item: any;
  config: any;
  otherattr: any;
  positionConfig: any;
};

const RigthAlignedImageWithMultipleCtaItem: FC<ItemPropsType> = ({
  item,
  config,
  otherattr,
  positionConfig,
}) => {
  if (isEmpty(item)) return null;

  return (
    <div className="grid grid-cols-1 gap-x-0 gap-y-4  md:grid-cols-2  md:gap-x-4 md:gap-y-0 w-full h-full text-gray-600">
      <div className="2xl:w-96 h-full p-4 2xl:mt-3.5">
        <AtomTitle
          item={renderPositionType(item, "position1", positionConfig)}
          link=""
          customStyle={{}}
          customClassName="text-2xl 2xl:w-80"
          truncateRow={0}
        />
        <AtomText
          item={renderPositionType(item, "position3", positionConfig)}
          customClassName="text-sm xl:text-base text-gray-500 block mt-4"
        />
        <AtomButton
          item={renderPositionType(item, "position45", positionConfig)}
          type="primary"
          color=""
          customClassName="rounded-lg mt-12 px-7 bg-gray-600"
        />
      </div>
      <div className="w-auto h-auto relative">
        <img
          className="relative z-10 rounded w-auto"
          src="https://res.cloudinary.com/dzih5nqhg/image/upload/v1631698637/cloud/item/Group_383_wu3dvn.png"
          alt="Glasses"
        />
      </div>
    </div>
  );
};
