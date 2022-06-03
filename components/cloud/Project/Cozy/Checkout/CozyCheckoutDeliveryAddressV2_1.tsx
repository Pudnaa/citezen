import { FC, useContext } from "react";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import AtomFormItemWrapper from "@components/common/Atom/HookForm/AtomFormItemWrapper";
import { useHookForm } from "hooks/use-form";
import WidgetWrapperContext from "@components/cloud/Custom/Wrapper/WidgetWrapper";
import WidgetWithId from "@middleware/components/WidgetStandart/WidgetWithId";

type PropsType = {
  formRef?: any;
};

const CozyCheckoutDeliveryAddressV2_1: FC<PropsType> = ({
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
  const myFormName = widgetnemgooReady?.hookForm?.title || "cozyCheckout";
  const formRef = directFormRef || formContext.formList[myFormName];

  // Хот, дүүрэг, хороо авчрах листүүд
  // AIRS_HRM_CITY_DV
  // AIRS_HRM_DISTRICT_DV
  // AIRS_HRM_CITY_STREET_DV

  return (
    <>
      <BlockDiv
        customClassName=""
        divNumber="CozyCheckoutDeliveryAddressV2_1Outer"
      >
        <BlockDiv
          customClassName="py-6 w-full"
          divNumber="CozyCheckoutDeliveryAddressV2_1Inner"
        >
          <BlockDiv customClassName="w-full flex flex-col justify-start items-start">
            <BlockDiv
              customClassName="w-full grid grid-cols-3 gap-x-5"
              divNumber="CozyCheckoutDeliveryAddressV2_1Combos"
            >
              {/* Хот / Аймаг */}
              <WidgetWithId widgetId="16523477195489" />
              {/* Сум / Дүүрэг */}
              <WidgetWithId widgetId="16523477252589" />
              {/* Хороо / Баг */}
              <WidgetWithId widgetId="16523477252599" />
            </BlockDiv>
          </BlockDiv>

          <AtomFormItemWrapper
            showtype="textarea"
            label={{
              title: "Дэлгэрэнгүй хаяг",
            }}
            validation={{
              required: {
                value: true,
              },
            }}
            fieldName="address"
            register={formRef?.register}
            errors={formRef?.errors}
          />
        </BlockDiv>
      </BlockDiv>
    </>
  );
};

export default CozyCheckoutDeliveryAddressV2_1;
