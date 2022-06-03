import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import RenderMolecule from "@molecule/RenderMolecule";
import moment from "moment";
import AtomFormItemWrapper from "@components/common/Atom/HookForm/AtomFormItemWrapper";
import { useHookForm } from "hooks/use-form";
import { replaceTemplate } from "@util/helper";
import { Controller } from "react-hook-form";

type PropsType = {
  formRef?: any;
};

const CozyCheckoutDeliveryTimeIntervalV2: FC<PropsType> = ({
  formRef: directFormRef,
}) => {
  const {
    config,
    readyDatasrc,
    defaultValue,
    dataMutate,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const formContext = useHookForm();
  const myHookFormNemgoo = widgetnemgooReady?.hookForm;
  const myFormName = myHookFormNemgoo?.title || "cozyCheckout";
  const formRef = directFormRef || formContext.formList[myFormName];

  const myHookFormFieldNemgoo = myHookFormNemgoo?.fields[0] || {};

  return (
    <BlockDiv
      customClassName=""
      divNumber="CozyCheckoutDeliveryTimeIntervalV2Outer"
    >
      <BlockDiv
        customClassName=""
        divNumber="CozyCheckoutDeliveryTimeIntervalV2Inner"
      >
        <BlockDiv
          customClassName="my-5 grid grid-cols-3 gap-x-5 items-end"
          divNumber="CozyCheckoutDeliveryTimeIntervalV2Body"
        >
          {readyDatasrc.map((item: any, index: number) => {
            return (
              <AtomFormItemWrapper
                key={item?.id || index}
                showtype=""
                fieldName={myHookFormFieldNemgoo?.fieldName}
                validation={myHookFormFieldNemgoo?.validation}
                register={formRef?.register}
                errors={formRef?.errors}
                control={formRef?.control}
              >
                <Controller
                  control={formRef?.control}
                  name={myHookFormFieldNemgoo?.fieldName}
                  render={({ field }) => {
                    const myValue = item?.position0.value;
                    const isActive = field.value === myValue;
                    return (
                      <BlockDiv
                        key={item?.id || index}
                        customClassName={`p-5 rounded-lg  hover:bg-cozy hover:text-white cursor-pointer ${
                          isActive ? `bg-cozy text-white` : `bg-[#F5F5F5]`
                        }`}
                        onClick={() => {
                          field.onChange(myValue);
                        }}
                      >
                        <RenderAtom
                          item={item?.position1}
                          defaultAtom="title"
                          customClassName="text-lg font-bold"
                        />
                        <RenderAtom
                          item={item?.position3}
                          defaultAtom="text"
                          customClassName=" block clear-both pt-3"
                        />
                      </BlockDiv>
                    );
                  }}
                />
              </AtomFormItemWrapper>
            );
          })}
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};

export default CozyCheckoutDeliveryTimeIntervalV2;
