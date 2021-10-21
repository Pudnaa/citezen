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
  AtomInput,
} from "@components/common/Atom";

export default function SubscribeButtonWithOutlinedInput() {
  const { config, datasrc, otherattr, positionConfig, widgetDefault } =
    useContext(WidgetWrapperContext);

  if (isEmpty(datasrc)) return null;

  // console.log("SubscribeButtonWithOutlinedInput config", config);
  // console.log("SubscribeButtonWithOutlinedInput datasrc", datasrc);
  // console.log("SubscribeButtonWithOutlinedInput otherattr", otherattr);

  return datasrc.map((item: any, index: number) => {
    return (
      <div key={index} className="w-full lg:px-0 px-4 py-16">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="sm:1/4 lg:w-1/2 xl:w-2/5">
            <AtomTitle
              item={item.title}
              customClassName={`lg:text-3xl xl:text-5xl text-2xl f-m-w  text-center font-bold pt-6 text-${widgetDefault.color} mb-10`}
              color={widgetDefault.color}
            />
            <AtomText
              item={item.description}
              customClassName={`lg:text-xl xl::text-2xl text-lg font-normal text-center mt-4 f-m-m`}
              color={widgetDefault.color}
            />

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
      </div>
    );
  });
}
