import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";

const Checkouts2Orgil3 = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  const item = readyDatasrc[0];

  return (
    <div className="py-0 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container">
      <div className="flex flex-col justify-start items-start space-y-9">
        <div className="flex p-4 md:p-6 xl:p-10 bg-white w-full  flex-col justify-start items-start shadow-xl">
          <div className="flex gap-3">
            <p className="text-lg bg-red-500 text-white rounded-full h-7 w-7 flex items-center justify-center ">
              4
            </p>
            <RenderAtom
              item={item.position1}
              defaultAtom="title"
              customClassName="text-lg md:text-xl font-normal  leading-normal text-gray-900 tracking-tighter"
            />
          </div>
          <hr className=" w-full mt-3" />
          <div className="w-full  flex flex-col justify-start items-start mt-12 space-y-6 md:space-y-9">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full  gap-3">
              {readyDatasrc.map((item: any, index: number) => {
                return (
                  <div
                    key={item?.id || index}
                    className="flex flex-col justify-start items-start w-full"
                  >
                    <RenderAtom
                      item={item.position3}
                      defaultAtom="button"
                      customClassName="w-full  bg-white border border-gray-300 py-3 px-6 text-base font-medium text-gray-600  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-500 focus:border-white"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkouts2Orgil3;
