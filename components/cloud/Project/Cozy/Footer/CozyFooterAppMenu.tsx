import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";
import RenderMolecule from "@molecule/RenderMolecule";
import HeaderSearchInput from "@components/cloud/Project/Cozy/Header/HeaderSearchInput";
import HeaderBasketButton from "@components/cloud/Project/Cozy/Basket/CozyBasketButton";

export default function CozyFooterAppMenu() {
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

  return (
    <>
      <BlockDiv
        customClassName={`w-full h-auto flex items-center transition ease-in-out`}
        divNumber="CozyFooterAppMenuOuter"
      >
        <BlockDiv
          customClassName="container mx-auto flex flex-row items-start justify-between gap-x-4"
          divNumber="CozyFooterAppMenuInner"
        >
          <BlockDiv
            customClassName="flex flex-col gap-y-2 w-2/3"
            divNumber="appmenu"
          >
            <RenderAtom
              item={readyDatasrc[1].position1}
              defaultAtom="title"
              customClassName="mb-5"
              customStyle={{
                fontSize: "20px",
                lineHeight: "23px",
              }}
              divNamePrefix="appmenu"
            />
            <BlockDiv
              customClassName="flex flex-row gap-x-5 "
              divNumber="appmenuimages"
            >
              {readyDatasrc[1]?.imageList.map((item: any, index: number) => {
                return (
                  <RenderAtom
                    key={item?.id || index}
                    item={{ value: item.mainimage }}
                    defaultAtom="image"
                    customClassName=""
                    divNamePrefix="appmenu"
                  />
                );
              })}
            </BlockDiv>
          </BlockDiv>
          <BlockDiv
            customClassName="flex flex-col gap-y-2 w-1/3"
            divNumber="appaddress"
          >
            <RenderMolecule
              moleculeConfig={{
                type: "MoleculeCard",
                className: "w-1/2",
              }}
              {...{
                item: {
                  title: readyDatasrc[0]?.position1,
                  image: readyDatasrc[0]?.position2,
                  description: readyDatasrc[0]?.position3,
                  mainnumber: readyDatasrc[0]?.position4,
                  button: readyDatasrc[0]?.position90,
                },
                divNamePrefix: "appaddress",
              }}
            />
          </BlockDiv>
        </BlockDiv>
      </BlockDiv>
    </>
  );
}
