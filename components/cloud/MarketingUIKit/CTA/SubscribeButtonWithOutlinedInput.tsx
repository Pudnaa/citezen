import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";

export default function SubscribeButtonWithOutlinedInput() {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("SubscribeButtonWithOutlinedInput config", config);
  // console.log("SubscribeButtonWithOutlinedInput readyDatasrc", readyDatasrc);
  // console.log("SubscribeButtonWithOutlinedInput widgetnemgooReady", widgetnemgooReady);

  return readyDatasrc.map((item: any, index: number) => {
    return (
      <div
        key={item?.id || index}
        className="w-full flex flex-col items-center justify-center"
      >
        <div>
          <RenderAtom
            item={item?.position1}
            defaultAtom="title"
            customClassName={`lg:text-3xl xl:text-5xl text-2xl text-center font-bold pt-6 text-${widgetAllaround.color} mb-10`}
            customProps={{
              color: widgetAllaround.color,
            }}
          />
          <RenderAtom item={item?.position3} defaultAtom="text" />

          {/* <AtomInput
              item=""
              value={undefined}
              placeholder="Имэйл хаягаа бичнэ үү..."
              type="text"
              customClassName="w-full"
            /> */}

          {/* <div className="sm:flex md:p-4 p-2 my-8 border border-indigo-700 rounded w-full mt-8 xl:mt-16 items-center">
              <input
                className="py-2 w-full md:w-7/12 lg:w-full lg:text-2xl focus:outline-none pl-2 lg:pl-3 f-m-m"
                placeholder="Enter your email here..."
              />
              <div className="w-5/12 sm:flex justify-end mt-4 sm:mt-0">
                <button className="f-m-m md:text-2xl text-base rounded font-normal text-white bg-indigo-700 md:py-2 md:px-8 px-4 py-2 foucus:outline-none leading-4 hover:opacity-90">
                  Subscribe
                </button>
              </div>
            </div> */}
        </div>
      </div>
    );
  });
}
