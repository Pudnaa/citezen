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
    <div className="grid grid-cols-1 gap-x-0 gap-y-4 p-4 md:grid-cols-2  md:gap-x-4 md:gap-y-0 w-full h-full">
      <div className="w-full h-full">
        <AtomTitle
          item={renderPositionType(item, "position1", positionConfig)}
          link=""
          customStyle={{}}
          customClassName=""
          truncateRow={0}
        />
        <AtomText
          item={renderPositionType(item, "position3", positionConfig)}
          customClassName="text-sm xl:text-base text-gray-500 block mt-3"
        />
        <AtomButton
          item={renderPositionType(item, "position45", positionConfig)}
          type="primary"
          color="ssoSecond"
          customClassName="rounded-lg mt-5 px-7"
        />
      </div>
      <div className="w-full h-full relative ">
        <img
          className="mt-2 relative z-10 rounded w-full"
          src="https://res.cloudinary.com/dzih5nqhg/image/upload/v1631698637/cloud/item/Group_383_wu3dvn.png"
          alt="Glasses"
        />
      </div>
    </div>
  );
};
