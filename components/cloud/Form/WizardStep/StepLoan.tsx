import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  renderPositionType,
} from "util/helper";
import RenderField from "@middleware/components/WidgetForm/RenderField";
import { isEmpty } from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomButton,
  AtomImage,
} from "@components/common/Atom";
type ItemPropsType = {
  data?: any;
  item?: any;
};
const StepLoan: FC<ItemPropsType> = ({ data, item }) => {
  const sectionconfig = {
    widgetnemgooReady: {
      labelPosition: "top",
      className: "dddfkdnglsnfidng;ido",
    },
  };
  const { config, positionConfig } = useContext(WidgetWrapperContext);
  const selectdata3 = _.find(data, { paramrealpath: "loanInfo.prodType" });
  const selectdata4 = _.find(data, {
    paramrealpath: positionConfig?.position201?.fieldpath,
  });

  return (
    <>
      <div className="step step1">
        <div className="flex justify-between  text-gray-600  px-8">
          <div className="flex">
            <div className="w-48 mr-7">
              {/* <p className="text-lg text-gray-400">Сард төлөх дүн </p> */}
              <span className="text-xl">
                <RenderField
                  field={_.find(data, {
                    paramrealpath: positionConfig?.position207?.fieldpath,
                  })}
                  className="my-2 flex text-3xl"
                  labelClassName="text-2xl my-2 ml-0 mb-0"
                  sectionConfig={sectionconfig}
                />
              </span>
            </div>
            <div>
              {/* <p className="text-lg text-gray-400">Сарын хүү </p> */}
              <span className="text-xl">
                <RenderField
                  field={_.find(data, {
                    paramrealpath: positionConfig?.position208?.fieldpath,
                  })}
                  className="my-2 flex text-3xl"
                  labelClassName="text-2xl my-2 ml-0 mb-0"
                  sectionConfig={sectionconfig}
                />
              </span>
            </div>
          </div>
          <div className="">
            {/* <p className="text-lg text-gray-400">Шимтгэл </p> */}
            <span className="text-xl">
              {" "}
              <RenderField
                field={_.find(data, {
                  paramrealpath: positionConfig?.position209?.fieldpath,
                })}
                className="my-2 flex"
                labelClassName="text-2xl my-2 ml-0 mb-0"
                sectionConfig={sectionconfig}
              />
            </span>
          </div>
        </div>
        <div className="py-6  w-full mx-auto">
          <div className="border border-gray-400 p-6 rounded-lg">
            <RenderField
              field={_.find(data, {
                paramrealpath: positionConfig?.position200?.fieldpath,
              })}
              className="my-2 flex"
              labelClassName="text-2xl my-4 ml-0 mb-0"
              sectionConfig={sectionconfig}
            />
          </div>
          <div className="border border-gray-400 p-6 rounded-lg mt-4">
            <RenderField
              field={_.find(data, {
                paramrealpath: positionConfig?.position202?.fieldpath,
              })}
              className=""
              labelClassName="text-2xl my-4 ml-0 mb-0"
              sectionConfig={sectionconfig}
            />
          </div>
          <RenderField
            field={_.find(data, {
              paramrealpath: positionConfig?.position201?.fieldpath,
            })}
            className="w-full border-0 border-b-2 rounded-none"
            labelClassName="text-lg mt-6 ml-0 mb-0"
            sectionConfig={sectionconfig}
          />
        </div>
      </div>
    </>
  );
};
export default StepLoan;
