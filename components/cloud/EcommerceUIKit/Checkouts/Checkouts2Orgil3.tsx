import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomImage,
} from "@components/common/Atom";

const Checkouts2Orgil3 = () => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  if (isEmpty(datasrc)) return null;
  // console.log("Checkouts2 config", config);
  // console.log("Checkouts2 datasrc", datasrc);
  // console.log("Checkouts2 otherattr", otherattr);
  // console.log("Checkouts2 positionConfig", positionConfig);
  const item = datasrc[0];
  return (
    <div className="py-0 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container">
      <div className="flex flex-col justify-start items-start space-y-9">
        <div className="flex p-4 md:p-6 xl:p-10 bg-white w-full  flex-col justify-start items-start shadow-xl">
        <div className="flex gap-3">
        <p className="text-lg bg-red-500 text-white rounded-full h-7 w-7 flex items-center justify-center ">4</p>
        <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            customClassName="text-lg md:text-xl font-normal  leading-normal text-gray-900 tracking-tighter"
        />
        </div>
        <hr className=" w-full mt-3" />
          <div className="w-full  flex flex-col justify-start items-start mt-12 space-y-6 md:space-y-9">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full  gap-3">
            {/* <AtomImage
                  item={renderPositionType(item, "position2", positionConfig)}
                  customClassName="w-auto"
                /> */}
                {datasrc &&
                  datasrc.map((item: any, index: number) => {
                    return (
                        <div className="flex flex-col justify-start items-start w-full">
                          
                            <AtomButton
                             item={
                             renderPositionType(
                             item,
                            "position3",
                            positionConfig
                        )
                      }
                    customClassName="w-full  bg-white border border-gray-300 py-3 px-6 text-base font-medium text-gray-600  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-500 focus:border-white "
                    color=""
                  />
                      </div>
                    );
                  })}
               </div>
          </div>
        </div>
      </div>
      <style>
        {`
            .checkbox:checked + .check-icon {
                display: flex;
            }`}
      </style>
    </div>
  );
};

export default Checkouts2Orgil3;
