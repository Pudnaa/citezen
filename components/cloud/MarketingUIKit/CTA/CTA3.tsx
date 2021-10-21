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

const CTA3 = () => {
  const { config, datasrc, otherattr, positionConfig } =
    useContext(WidgetWrapperContext);

  return (
    <>
      {datasrc.map((item: any, index: any) => (
        <CTA3Item
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
export default CTA3;

type ItemPropsType = {
  item: any;
  config: any;
  otherattr: any;
  positionConfig: any;
};

const CTA3Item: FC<ItemPropsType> = ({
  item,
  config,
  otherattr,
  positionConfig,
}) => {
  if (isEmpty(item)) return null;

  return (
    <div className="relative w-full h-full rounded-lg">
      <img
        src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png"
        alt="city view"
        className="w-full h-full rounded-lg object-center object-fill absolute block "
      />
      <div className="relative bg-gradient-to-r from-ssoSecond to-transparent  w-full h-full top-0 p-4 rounded-lg">
        <div>
          <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            link=""
            customStyle={{}}
            customClassName="text-xl md:text-2xl font-bold text-white"
            truncateRow={0}
          />
          <AtomText
            item={renderPositionType(item, "position3", positionConfig)}
            customClassName="text-white block mt-3"
          />
        </div>
        <AtomButton
          item={renderPositionType(item, "position45", positionConfig)}
          type="primary-white"
          color="ssoSecond"
          customClassName="rounded-md mt-5 px-7 shadow-lg"
        />
      </div>
    </div>
  );
};
