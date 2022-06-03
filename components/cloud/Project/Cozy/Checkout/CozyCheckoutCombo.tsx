import { FC, useContext, useEffect } from "react";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import AtomFormItemWrapper from "@components/common/Atom/HookForm/AtomFormItemWrapper";
import { useHookForm } from "hooks/use-form";
import WidgetWrapperContext from "@components/cloud/Custom/Wrapper/WidgetWrapper";
import { useWatch } from "react-hook-form";

type PropsType = {
  formRef?: any;
};

const CozyCheckoutCombo: FC<PropsType> = ({ formRef: directFormRef }) => {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    setVirtualWidgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  const formContext = useHookForm();
  const myFormName = widgetnemgooReady?.hookForm?.title || "cozyCheckout";
  const formRef = directFormRef || formContext.formList[myFormName];
  if (_.isEmpty(formRef)) return null;

  const myWatch = widgetnemgooReady?.hookForm?.watch;

  const watch = useWatch({
    name: myWatch?.fieldName || "",
    defaultValue: "",
    control: formRef?.control || null,
  });

  useEffect(() => {
    if (!_.isEmpty(watch) && myWatch?.lookupFieldName) {
      //Датагаа шинээр авчирна. Үүний тулд nemgoo доторх Criteria-г шинэчилнэ.
      setVirtualWidgetnemgooReady({
        ...widgetnemgooReady,
        criteria: {
          ...widgetnemgooReady?.criteria,
          defaultQuery: {
            ...widgetnemgooReady?.criteria?.defaultQuery,
            [myWatch?.lookupFieldName]: watch,
          },
        },
      });

      // Энэ Combo-ны утгаа нойллоно
      formRef.setValue(myField.fieldName, "", {});
    }
  }, [watch]);

  //fields
  const myFields = widgetnemgooReady?.hookForm?.fields || [];
  const myField = myFields[0] || {};

  return (
    <BlockDiv customClassName="w-full" divNumber="CozyCheckoutComboOuter">
      <AtomFormItemWrapper
        item={{
          rowsReady: readyDatasrc,
        }}
        showtype={myField.showtype}
        label={myField.label}
        fieldName={myField.fieldName}
        validation={myField.validation}
        register={formRef?.register}
        errors={formRef?.errors}
        control={formRef?.control}
        customClassName={myField.className}
      />
    </BlockDiv>
  );
};

export default CozyCheckoutCombo;
