import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";

export default function ProductCategorySkyresort() {
  const { datasrc, readyDatasrc, widgetnemgoo } =
    useContext(WidgetWrapperContext);
  if (isEmpty(datasrc)) return null;
  // console.log("ProductCategorySkyresort config", config);
  // console.log("ProductCategorySkyresort datasrc", datasrc);
  // console.log("ProductCategorySkyresort widgetnemgoo", widgetnemgoo);
  // console.log("ProductCategorySkyresort positionConfig", positionConfig);
  const isSkyResortHome = widgetnemgoo.type === "skyresort_home";

  return (
    <div className="mx-auto" style={{ maxWidth: "1132px" }}>
      <div className="w-full grid px-5 grid-cols-1 sm:grid-cols-3 sm:px-0 gap-7">
        {readyDatasrc.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="relative w-full cursor-pointer"
              style={{ height: "360px" }}
            >
              <RenderAtom
                item={item?.position52}
                defaultAtom="image"
                customClassName="object-cover w-full h-full absolute"
              />
              <RenderAtom
                item={item?.position2}
                defaultAtom="image"
                customClassName="object-cover w-20 h-20 top-6 left-10 absolute"
              />
              <RenderAtom
                item={item?.position1}
                defaultAtom="title"
                // customClassName="absolute text-3xl font-bold bottom-6 left-10 text-white uppercase "
                customClassName="absolute bottom-6 left-10 text-white text-big-sm"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
