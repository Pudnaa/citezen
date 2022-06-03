import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";
import RenderMolecule from "@molecule/RenderMolecule";
import HeaderSearchInput from "@components/cloud/Project/Cozy/Header/HeaderSearchInput";
import HeaderBasketButton from "@components/cloud/Project/Cozy/Basket/CozyBasketButton";

export default function CozyFooterMenu() {
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

  const preparedData = _.chain(readyDatasrc)
    .groupBy("headtitle")
    .map((value, key) => ({ headtitle: key, rows: value }))
    .value();

  return (
    <>
      <BlockDiv
        customClassName={`w-full h-auto flex items-center transition ease-in-out`}
        divNumber="CozyFooterMenuOuter"
      >
        <BlockDiv
          customClassName="container mx-auto flex flex-row items-start justify-between gap-x-2"
          divNumber="CozyFooterMenuInner"
        >
          {preparedData.map((item: any, index: number) => {
            return (
              <BlockDiv
                key={item?.id || index}
                customClassName="flex flex-col font-normal"
                divNumber="CozyFooterMenuInner"
                customStyle={{
                  fontSize: "14px",
                  lineHeight: "30px",
                }}
              >
                <RenderAtom
                  item={{ value: item.headtitle }}
                  defaultAtom="title"
                  customClassName="mb-5"
                  customStyle={{
                    fontSize: "20px",
                    lineHeight: "23px",
                  }}
                  divNamePrefix="menusmain"
                />
                <RenderMolecule
                  key={item?.id || index}
                  moleculeConfig={{
                    type: "MoleculeMenu",
                    className: "",
                  }}
                  {...{
                    item: item?.rows,
                    divNamePrefix: "menus",
                  }}
                />
              </BlockDiv>
            );
          })}
        </BlockDiv>
      </BlockDiv>
    </>
  );
}
