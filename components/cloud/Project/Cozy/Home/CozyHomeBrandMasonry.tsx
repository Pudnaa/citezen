import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import RenderMolecule from "@molecule/RenderMolecule";
import _ from "lodash";

export default function CozyHomeBrandMasonry() {
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

  const boxClassName = "min-w-full h-auto min-h-full";

  // console.log("readyDatasrc", readyDatasrc);

  return (
    <>
      <BlockDiv
        customClassName={`w-full h-full`}
        divNumber="CozyHomeBrandMasonryOuter"
      >
        <BlockDiv
          customClassName="w-full flex flex-row items-center justify-between"
          divNumber="CozyHomeBrandMasonryHeader"
        >
          <RenderAtom
            item={{ value: "Онцлох брэнд" }}
            defaultAtom="title"
            customClassName="leading-6 font-medium text-left mb-7 uppercase"
            customStyle={{
              fontSize: "38px",
              lineHeight: "47px",
              color: "rgb(60, 60, 60)",
            }}
          />
          <RenderMolecule
            moleculeConfig={{
              type: "MoleculeMenu",
              className: "",
            }}
            {...{
              item: menuList,
              defaultActive: 0,
              divNamePrefix: "menus",
            }}
          />
        </BlockDiv>

        {/* override нь divide-x divide-y аль нэгийг нь устгачихаад байгаа учраас BlockDiv биш хоосон div ашиглав. */}
        <div className={`${gridMainHeadDiv}`}>
          {readyDatasrc.map((item: any, index: number) => {
            return (
              <BlockDiv
                key={item?.id || index}
                customClassName={`${boxClassName} ${gridTemplate[index].className}`}
                divNumber="CozyHomeBrandMasonryItem"
              >
                <RenderMolecule
                  key={item?.id || index}
                  moleculeConfig={{
                    type: "MoleculeBanner",
                    className: "",
                  }}
                  {...{
                    item: {
                      title: item?.position1,
                      image: item?.position2,
                      description: item?.position3,
                      mainnumber: item?.position4,
                      button: item?.position10,
                    },
                    divNamePrefix: "banner",
                  }}
                />
              </BlockDiv>
            );
          })}
        </div>
      </BlockDiv>
    </>
  );
}

const gridMainHeadDiv =
  "grid overflow-hidden grid-cols-7 grid-rows-4 divide-x divide-y border-b border-r";

const gridTemplate = [
  { className: "row-span-4 col-span-2" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
  { className: "" },
];

const menuList = [
  { position1: { value: "Хүнс" } },
  { position1: { value: "Шингэн хүнс" } },
  { position1: { value: "Гэр ахуйн бүтээгдэхүүн" } },
  { position1: { value: "Хүүхэд" } },
  { position1: { value: "Амттан" } },
  { position1: { value: "Боловсрол" } },
  { position1: { value: "Эрүүл мэнд, Гоо сайхан" } },
];
