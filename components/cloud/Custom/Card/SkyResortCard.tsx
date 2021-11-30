import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";

type PropsType = {
  item?: any;
};

const SkyResortCard: FC<PropsType> = ({ item }) => {
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
  //console.log("🚀 ~ readyDatasrc", item);

  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <div className="w-full h-60 bg-white flex-none relative">
        {/* <img src={item.position2.value} alt="" className="w-full h-full" /> */}
        <RenderAtom
          item={item?.position2}
          defaultAtom="image"
          customClassName="w-full h-full rounded-t-xl"
        />
        <div className="absolute top-2 right-2">
          <RenderAtom
            item={item?.position51}
            defaultAtom="tag"
            customProps={{ color: "green-300" }}
          />
        </div>
        <div className="absolute bottom-2 left-4">
          <RenderAtom
            item={item?.position1}
            defaultAtom="title"
            customClassName="font-bold text-2xl text-white uppercase"
            customStyle={{ textShadow: "1px 1px 1px #454545" }}
            customProps={{
              truncateRow: 2,
            }}
          />
        </div>
      </div>
      <div className="flex-grow w-full p-5 border-t h-full">
        <div className="grid grid-cols-1 place-content-between h-full">
          <div className="flex justify-between">
            <div>
              <RenderAtom
                item={item?.position90}
                defaultAtom="text"
                customClassName="\"
              />
              <RenderAtom
                item={item?.position4}
                defaultAtom="currency"
                customClassName=""
              />
            </div>
            <div className="flex flex-col">
              <RenderAtom
                item={item?.position91}
                defaultAtom="text"
                customClassName=" float-right"
              />
              <RenderAtom
                item={item?.position23}
                defaultAtom="currency"
                customClassName=""
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-center mt-5">
              <RenderAtom
                item={{ value: "Сагс" }}
                defaultAtom="button"
                customClassName="rounded-full border-2 border-skyresort hover:bg-white bg-skyresort hover:text-black"
                customProps={{
                  type: "primary",
                  icon: "fal fa-shopping-bag",
                  color: "",
                  customClassName: "text-black font-bold",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkyResortCard;
