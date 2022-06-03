import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import _ from "lodash";
import RenderMolecule from "@molecule/RenderMolecule";
import BlockDiv from "@components/common/Block/BlockDiv";
import CozyProductDetailImage from "./CozyProductDetailImage";
import CozyProductDetailMainInfo from "./CozyProductDetailMainInfo";
import CozyProductDetailKPIInfo from "./CozyProductDetailKPIInfo";

const CozyProductDetail = () => {
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
  const item = readyDatasrc[0];

  console.log("🚀 ~ CozyProductDetail ~ item", item);

  return (
    <>
      <BlockDiv
        customClassName="w-full container mx-auto"
        divNumber="CozyProductDetailOuter"
      >
        <BlockDiv customClassName="pt-10" divNumber="CozyProductDetailInner">
          <BlockDiv
            customClassName="w-full grid grid-cols-2 gap-7"
            divNumber="CozyProductDetailTopBlock"
          >
            {/* Зүүн тал */}
            <BlockDiv
              customClassName="col-span-1 w-full h-full"
              divNumber="CozyProductDetailTopBlockLeft"
            >
              <CozyProductDetailImage item={item} />
            </BlockDiv>

            {/* Баруун тал */}
            <BlockDiv
              customClassName="col-span-1 w-full flex flex-col divide-y divide-gray-200 divide-opacity-70 bg-white rounded-lg px-5"
              divNumber="CozyProductDetailTopBlockRight"
            >
              <CozyProductDetailMainInfo item={item} />
            </BlockDiv>
          </BlockDiv>

          {/* Дунд хэсэг */}
          <BlockDiv
            customClassName="mt-10 bg-white p-5 rounded-xl"
            divNumber="CozyProductDetailTopBlock"
          >
            <RenderMolecule
              moleculeConfig={{
                type: "MoleculeTab",
                props: {
                  type: "default",
                },
              }}
              {...{
                item: [
                  {
                    title: "Барааны дэлгэрэнгүй",
                    content: (
                      <>
                        <CozyProductDetailKPIInfo item={item} />
                      </>
                    ),
                  },
                  {
                    title: "Хэрэглэх заавар",
                    content: <>Хэрэглэх заавар</>,
                  },
                  {
                    title: "Сэтгэгдэл",
                    content: <>Сэтгэгдэл</>,
                  },
                ],
                divNamePrefix: "cozytab",
              }}
            />
          </BlockDiv>
        </BlockDiv>
      </BlockDiv>
    </>
  );
};

export default CozyProductDetail;
