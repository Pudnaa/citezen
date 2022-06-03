import { FC, useContext } from "react";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import AtomFormItemWrapper from "@components/common/Atom/HookForm/AtomFormItemWrapper";
import { useHookForm } from "hooks/use-form";
import { Controller } from "react-hook-form";
import { replaceTemplate } from "@util/helper";

type PropsType = {
  formRef?: any;
};

const CozyCartPaymentV2_1: FC<PropsType> = ({ formRef: directFormRef }) => {
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

  const myFieldName = "payment.typeid";

  return (
    <BlockDiv
      customClassName="bg-white p-4 mt-6 rounded-lg"
      divNumber="CozyCartPaymentV2_1Outer"
    >
      <BlockDiv
        customClassName="grid grid-cols-2 gap-5 mt-5"
        divNumber="CozyCartPaymentV2_1Inner"
      >
        {readyDatasrc.map((item: any, index: number) => {
          return (
            <AtomFormItemWrapper
              key={item?.id || index}
              showtype=""
              fieldName={myFieldName}
              register={formRef?.register}
              errors={formRef?.errors}
              control={formRef?.control}
            >
              <Controller
                control={formRef?.control}
                name={myFieldName}
                render={({ field }) => {
                  const myValue = item?.paymenttypeid;
                  const isActive = field.value === myValue;
                  return (
                    <BlockDiv
                      key={item?.id || index}
                      customClassName={`p-5 rounded-lg  hover:bg-cozy hover:text-white cursor-pointer ${
                        isActive ? `bg-cozy` : `bg-[#F5F5F5]`
                      }`}
                      onClick={() => {
                        field.onChange(myValue);
                      }}
                    >
                      <RenderAtom
                        item={{ value: item.physicalpath }}
                        defaultAtom="image"
                        customClassName="object-cover object-center w-12 h-12 float-left mr-3 p-2 border rounded-lg border-gray-200 border-solid "
                      />
                      <RenderAtom
                        item={{ value: item?.paymenttypename }}
                        defaultAtom="title"
                        customClassName="text-lg font-bold"
                      />
                      <RenderAtom
                        item={{ value: item?.subtitle || "subtitle" }}
                        defaultAtom="text"
                        customClassName="text-base "
                      />
                      <RenderAtom
                        item={{ value: item?.description || "description" }}
                        defaultAtom="text"
                        customClassName=" block clear-both pt-5"
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
  );
};
export default CozyCartPaymentV2_1;

// {readyDatasrc.map((item: any, index: number) => {
//   return (
// <AtomFormItemWrapper
//   key={item?.id || index}
//   showtype=""
//   fieldName={myFieldName}
//   register={formRef?.register}
//   errors={formRef?.errors}
//   control={formRef?.control}
// >
//   <Controller
//     control={formRef?.control}
//     name={myFieldName}
//     render={({ field }) => {
//       const myValue = item?.paymenttypeid;
//       const isActive = field.value === myValue;
//       return (
//         <BlockDiv
//           key={item?.id || index}
//           customClassName={`p-5 rounded-lg  hover:bg-cozy hover:text-white cursor-pointer ${
//             isActive ? `bg-cozy` : `bg-[#F5F5F5]`
//           }`}
//           onClick={() => {
//             field.onChange(myValue);
//           }}
//         >
//           <RenderAtom
//             item={{ value: item.physicalpath }}
//             defaultAtom="image"
//             customClassName="object-cover object-center w-12 h-12 float-left mr-3 p-2 border rounded-lg border-gray-200 border-solid "
//           />
//           <RenderAtom
//             item={{ value: item?.paymenttypename }}
//             defaultAtom="title"
//             customClassName="text-lg font-bold"
//           />
//           <RenderAtom
//             item={{ value: item?.subtitle || "subtitle" }}
//             defaultAtom="text"
//             customClassName="text-base "
//           />
//           <RenderAtom
//             item={{ value: item?.description || "description" }}
//             defaultAtom="text"
//             customClassName=" block clear-both pt-5"
//           />
//         </BlockDiv>
//       );
//     }}
//   />
// </AtomFormItemWrapper>
//   );
// })}
