import { FC, useContext } from "react";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import AtomFormItemWrapper from "@components/common/Atom/HookForm/AtomFormItemWrapper";
import { useHookForm } from "hooks/use-form";
import { replaceTemplate } from "@util/helper";

type PropsType = {
  formRef?: any;
};

const CozyCheckoutInfoV2_1: FC<PropsType> = ({ formRef: directFormRef }) => {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  const formContext = useHookForm();
  const myFormName = widgetnemgooReady?.hookForm?.title || "cozyCheckout";
  const formRef = directFormRef || formContext.formList[myFormName];

  //fields
  const item = readyDatasrc[0] || {}; //user detail from ERP
  const myFields = widgetnemgooReady?.hookForm?.fields || [];
  const readyMyFields = replaceTemplate(myFields, item);

  return (
    <BlockDiv customClassName="" divNumber="CozyCheckoutInfoV2_1Outer">
      <BlockDiv customClassName="" divNumber="CozyCheckoutInfoV2_1Inner">
        <BlockDiv
          customClassName="mt-6 grid grid-cols-3 w-full gap-3"
          divNumber="CozyCheckoutInfoV2_1Body"
        >
          {readyMyFields.map((item: any, index: number) => {
            return (
              <AtomFormItemWrapper
                key={item?.id || index}
                showtype={item?.showtype}
                label={item?.label}
                validation={item?.validation}
                fieldName={item?.fieldName}
                defaultValue={item?.defaultValue || ""}
                register={formRef?.register}
                errors={formRef?.errors}
                control={formRef?.control}
              />
            );
          })}
        </BlockDiv>

        <RenderAtom
          item={{
            value:
              "Таны хувийн мэдээллийг зөвхөн тантай харилцахад ашиглах болно.",
          }}
          defaultAtom="text"
          customClassName="block p-5 rounded-lg mt-5"
          customStyle={{
            background: "#FFE4BB70",
          }}
        />
      </BlockDiv>
    </BlockDiv>
  );
};

export default CozyCheckoutInfoV2_1;
