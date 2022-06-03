import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import C8ColCardItem from "@cloud/Custom/Card/C8ColCardItem";
import IndigoBlockGrayBg from "@cloud/WebApplicationUIKit/Navigation/Tab/IndigoBlockGrayBg";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomButton,
} from "@components/common/Atom";

const C8ColListingCardModern = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext);

  // console.log("C8ColListingCardModern Title", Title);
  // console.log("C8ColListingCardModern config", config);
  // console.log("C8ColListingCardModern readyDatasrc", readyDatasrc);
  // console.log("C8ColListingCardModern widgetnemgooReady", widgetnemgooReady);

  return (
    <div className={`w-full flex flex-col justify-center`}>
      <div className="flex justify-between">
        <IndigoBlockGrayBg
          items={["Бүгд", "Эрэлттэй үйлчилгээ", "Шинэ үйлчилгээ"]}
          styling=""
          active="border-b border-white text-white"
        />
        <div className="w-72 h-10  mt-2.5">
          <AtomIcon
            // item={item.icon}
            item="fa fa-search"
            checked={false}
            hoverSolid={true}
            customClassName="text-lg cursor-pointer absolute text-center p-5 pl-3 text-gray-500 fa-lg"
          />
          <input
            type="text"
            placeholder="Үйлчилгээний нэрээр хайх"
            className="pl-9 w-full rounded-lg border-none placeholder-gray-400 text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-4">
        {readyDatasrc.map((item: any, index: any) => {
          return (
            <C8ColCardItem
              key={item?.id || index}
              item={item}
              positionConfig={positionConfig}
            />
          );
        })}
      </div>
    </div>
  );
};

export default C8ColListingCardModern;
