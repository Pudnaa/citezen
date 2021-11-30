import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";

type PropsType = {
  item?: any;
};

const WeeklyCard1: FC<PropsType> = ({ item }) => {
  const {
    config,
    datasrc,
    readyDatasrc,
    widgetnemgoo,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("🚀 ~ item", item);
  // console.log("🚀 ~ datasrc", datasrc);
  // console.log("🚀 ~ positionConfig", positionConfig);
  // console.log("🚀 ~ readyDatasrc", readyDatasrc);

  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <div className="w-full h-48 p-5 bg-white rounded-t-xl flex-none relative">
        <RenderAtom
          item={item?.position2}
          defaultAtom="image"
          customClassName=""
        />
        <div className="absolute top-2 right-2">
          <RenderAtom
            item={item?.position51}
            defaultAtom="tag"
            customProps={{ color: "green-300" }}
          />
        </div>
      </div>
      <div className="flex-grow w-full p-5 border-t h-full">
        <div className="grid grid-cols-1 place-content-between h-full">
          <div className="w-full">
            <RenderAtom
              item={item?.position40}
              defaultAtom="text"
              customClassName="text-xs font-medium leading-5 text-gray-400 mt-5"
            />
            <RenderAtom
              item={item?.position1}
              defaultAtom="title"
              customClassName="text-base font-semibold leading-6 text-gray-800"
              customProps={{
                truncateRow: 2,
              }}
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center mt-5">
              <div className=" w-full">
                <RenderAtom item={item?.position4} defaultAtom="currency" />
                <RenderAtom item={item?.position47} defaultAtom="currency" />
              </div>
              <RenderAtom
                item={{ value: "Сагс" }}
                defaultAtom="button"
                customClassName="rounded-full"
                customProps={{
                  type: "primary",
                  icon: "fal fa-shopping-bag",
                  color: widgetAllaround.color,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCard1;
