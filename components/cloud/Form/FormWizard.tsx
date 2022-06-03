import _ from "lodash";
import { useContext, useEffect, useState, FC } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { Steps, Button, notification, Popover, Spin } from "antd";
import dynamic from "next/dynamic";
import Router from "next/router";
import RenderField from "@middleware/components/WidgetForm/RenderField";
import { WidgetWrapperStore } from "@cloud/Custom/Wrapper/WidgetWrapper";
import { toBoolean, jsonParse } from "util/helper";
import { prepareRawUrlQueryToCriteria } from "lib/urlFunctions";
// import Header from "./Header/Header";
import StepLoanInfo from "@components/cloud/Form/WizardStep/StepLoanInfo";
import StepLoan from "@components/cloud/Form/WizardStep/StepLoan";
import StepContact from "@components/cloud/Form/WizardStep/StepContact";
import StepDemographic from "@components/cloud/Form/WizardStep/StepDemographic";
import StepConfirm from "@components/cloud/Form/WizardStep/StepConfirm";
import Item from "antd/lib/list/Item";
import FormMetaContext from "context/Meta/FormMetaContext";
type PropsType = {
  data?: any;
};

const { Step } = Steps;

const FormWizard: FC<PropsType> = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState<any>(false);
  const {
    config,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    widgetnemgooReady,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  const {
    processConfig,
    handleSubmitContext,
    formDataInitData,
    setFormDataData,
  } = useContext(FormMetaContext);
  const { meta_process_param_attr_link_mobile: readyDatasrc } = processConfig;

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    if (!_.isEmpty(formDataInitData.loanrequest_glmt)) {
      setLoading(false);
      setCurrent(3);
      console.log("current ", current);
    }
  }, [JSON.stringify(formDataInitData)]);

  const handleSubmitCustom = async (e: any) => {
    let copyData = { ...formDataInitData };
    if (copyData.contact[0]) {
      copyData.contact[0].type = "PHONE";
      copyData.contact[0].subType = "CELLPH";
      copyData.contact[0].countryCode = "976";
    }
    if (copyData.contact[1]) {
      copyData.contact[1].type = "EMAIL";
      copyData.contact[1].subType = "HOMEEML";
      copyData.contact[1].countryCode = "976";
    }
    setFormDataData(copyData);
    setLoading(true);

    await handleSubmitContext(e, true);
  };

  // console.log("formDataInitData s formDataInitData", formDataInitData);

  const handleDone = () => {
    Router.push("/citizen/order");
  };

  const swichContent = () => {
    switch (widgetnemgooReady.wizardHeader[current].componentName) {
      case "StepContact":
        return <StepContact item={widgetnemgooReady.wizardHeader[current]} />;
      case "StepLoanInfo":
        return (
          <StepLoanInfo
            data={readyDatasrc}
            position={positionConfig}
            item={widgetnemgooReady.wizardHeader[current]}
          />
        );
      case "StepConfirm":
        return <StepConfirm />;
      case "StepDemographic":
        return (
          <StepDemographic item={widgetnemgooReady.wizardHeader[current]} />
        );
      case "StepLoan":
        return (
          <StepLoan
            data={readyDatasrc}
            item={widgetnemgooReady.wizardHeader[current]}
          />
        );
      default:
        <StepLoan data={readyDatasrc} item={positionConfig} />;
    }
  };
  const customDot = (iconDot: any, { status, index }) => (
    <Popover
      content={
        <span>
          Алхам {index + 1} үйлдэл: {status}
        </span>
      }
    >
      <span
        className={`w-8 h-8 rounded-full border  flex text-center justify-center items-center  relative -top-3 -left-2  step-${status} `}
      >
        <i className="fa-solid fa-check"></i>
      </span>
    </Popover>
  );
  return (
    <>
      <div className="pb-6 pt-10 lg:px-20 md:px-20 sm:px-10 mx-auto  rounded-lg  sm:w-full xs:w-full bg-gray-200 dark:bg-gray-800 ">
        <Steps current={current} progressDot={customDot}>
          {widgetnemgooReady.wizardHeader.map((item: any, index: number) => {
            return (
              <Step
                className="wizar-form "
                title={item.title}
                // status="process"
                key={item?.id || index}
              ></Step>
            );
          })}
        </Steps>
      </div>
      <div className="steps-content w-full overflow-y-auto scrollbar-thumb-gray-300  scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-300 -dark scrollbar-thumb-rounded-full">
        <div className="wizard-wrapper w-4/5 my-10 mx-auto">
          <div className="steps-content min-h-full ">
            <Spin
              spinning={loading}
              tip=" Түр хүлээнэ үү мэдээлэл боловрсуулж байна ... "
              wrapperClassName="text-black"
              size="large"
            >
              {swichContent()}{" "}
            </Spin>
          </div>
          <div className="steps-action mt-4 flex justify-center">
            {current > 0 && current != 3 && (
              <span
                style={{ margin: "0 8px" }}
                className="py-2 px-8 bg-blue-500 text-white rounded-3xl cursor-pointer duration-150 ease-in-out hover:bg-indigo-600"
                onClick={() => prev()}
              >
                Өмнөх
              </span>
            )}
            {current === widgetnemgooReady.wizardHeader.length - 2 && (
              // <span
              //   className="py-2 px-8 bg-blue-500 text-white rounded-3xl"
              //   // onClick={() => message.success("Processing complete!")}
              // >
              //   Илгээх
              // </span>
              <button
                className="py-2 px-8 bg-blue-500 text-white rounded-3xl"
                onClick={handleSubmitCustom}
                // onClick={() => next()}
              >
                Хүсэлт илгээх
              </button>
            )}
            {current < widgetnemgooReady.wizardHeader.length - 2 && (
              <span
                className="py-2 px-8 bg-blue-500 text-white rounded-3xl cursor-pointer duration-150 ease-in-out hover:bg-indigo-600"
                onClick={() => next()}
              >
                Дараагийнх
              </span>
            )}
            {current === 3 && (
              <button
                className="py-2 px-8 bg-blue-500 text-white rounded-3xl"
                onClick={handleDone}
              >
                Болсон
              </button>
            )}
          </div>
        </div>
      </div>
      {/* <pre>{JSON.stringify(processParams, null, "\t")}</pre> */}
    </>
  );
};

export default FormWizard;
