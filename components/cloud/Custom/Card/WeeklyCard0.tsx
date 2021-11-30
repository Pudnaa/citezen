import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
// import MotoGroupButton1 from "components/Moto/MotoSmalls/MotoGroupButton1";
// import MotoTitle from "components/Moto/MotoSmalls/MotoTitle";
// import MotoDiv from "components/Moto/MotoSmalls/MotoDiv";
// import MotoButton3 from "components/Moto/MotoSmalls/MotoButton3";
// import MotoTag from "components/Moto/MotoSmalls/MotoTag";
// import MotoPrice2 from "components/Moto/MotoSmalls/MotoPrice2";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomTitle,
  AtomImage,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomCurrency,
  AtomButton,
  AtomTag,
} from "@components/common/Atom";

type PropsType = {
  item?: any;
};

const WeeklyCard0: FC<PropsType> = ({ item }) => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <div className="w-full h-48 p-5 bg-white rounded-t-xl flex-none relative">
        <AtomImage
          item={renderPositionType(item, "position2", positionConfig)}
          alt={item.title}
          customClassName="w-full h-full object-contain"
        />
      </div>
      <div className="flex-grow w-full p-5 border-t h-full">
        <div className="grid grid-cols-1 place-content-between h-full">
          <div className="w-full">
            <AtomTitle
              item={renderPositionType(item, "position1", positionConfig)}
              link=""
              customStyle={{}}
              customClassName="text-center text-base font-semibold leading-6 text-gray-800"
              truncateRow={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCard0;
