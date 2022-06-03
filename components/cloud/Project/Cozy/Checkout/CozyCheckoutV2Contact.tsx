import { useContext, useState, useEffect } from "react";
import _ from "lodash";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import RenderMolecule from "@molecule/RenderMolecule";
// import { useForm } from "react-hook-form";

export default function CozyCheckoutV2Contact() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // const { register, handleSubmit, watch, errors, onSubmit } =
  //   useProcessCheckout();
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  const onSubmit = (data: any) =>
    console.log("useProcessCheckout submit", data);

  return (
    <BlockDiv divNumber="CozyCheckoutV2ContactOuter">
      <BlockDiv
        customClassName="grid grid-cols-3 gap-5"
        divNumber="CozyCheckoutV2ContactFormBlock"
      >
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form>
          {/* register your input into the hook by invoking the "register" function */}
          test
          {/* <input defaultValue="test" {...register("telephone")} /> */}
          {/* include validation with required or other standard HTML validation rules */}
          yourname
          {/* <input {...register("yourname", { required: true })} /> */}
          {/* errors will return when field validation fails  */}
          {/* {errors.yourname && <span>This field is required</span>} */}
          {readyDatasrc.map((item: any, index: number) => {
            return (
              <RenderMolecule
                key={item?.id || index}
                moleculeConfig={{
                  type: "MoleculeInput",
                  props: {
                    input: {
                      placeholder: item?.title,
                      type: item?.type,
                      formCustom: {
                        // ...register(item?.name, { required: true }),
                      },
                      className:
                        "mt-2 w-full bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cozy focus:border-cozy",
                      style: {
                        height: "40px",
                        fontSize: "14px",
                        lineHeight: "20px",
                      },
                    },
                    label: { title: item?.title },
                    defaultValue: item?.defaultvalue,
                  },
                }}
                {...{
                  item: item,
                  divNamePrefix: "contact",
                }}
              />
            );
          })}
          <input type="submit" />
        </form>
      </BlockDiv>

      {/* Доод анхааруулга */}
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
  );
}
