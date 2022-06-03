import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import RenderMolecule from "@molecule/RenderMolecule";
import _ from "lodash";

export default function CozyHomeTodayDeal() {
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
  // "mainimage": "https://res.cloudinary.com/dzih5nqhg/image/upload/v1647397125/cozy/image_44028_py6hmv.jpg",
  // "title": "Өнөөдрийн тохиролцоо",
  // "description": "7 өдөр, 05 цаг 36 минут 50 секунд",
  // "button": "Бүгдийг харах"

  const item = readyDatasrc[0];
  const divNamePrefix = "todaydeal";

  return (
    <>
      <BlockDiv customClassName="" divNumber="CozyHomeTodayDealOuter">
        <BlockDiv customClassName="" divNumber="CozyHomeTodayDealInner">
          <BlockDiv
            customClassName="w-full h-full relative"
            customStyle={{
              height: "450px",
            }}
            divNumber={`${divNamePrefix}divMoleculeBannerOuter`}
          >
            <RenderAtom
              item={item?.position2}
              defaultAtom="image"
              customClassName="w-full h-full object-cover object-center inset-0"
            />

            <BlockDiv
              customClassName="absolute w-full h-full inset-0 container mx-auto"
              divNumber={`${divNamePrefix}MoleculeBannerInsideOuter`}
            >
              <BlockDiv
                customClassName="flex flex-col justify-center max-w-2xl"
                divNumber={`${divNamePrefix}MoleculeBannerInsideInner`}
              >
                <RenderAtom
                  item={item?.position1}
                  defaultAtom="title"
                  customClassName="font-bold text-left text-white mt-32"
                  customStyle={{
                    fontSize: "60px",
                    lineHeight: "70px",
                  }}
                  divNamePrefix={divNamePrefix}
                />
                <RenderAtom
                  item={item?.position3}
                  defaultAtom="text"
                  customClassName="text-gray-700"
                  divNamePrefix={divNamePrefix}
                />
                <MyDeal />
                <RenderAtom
                  item={item?.position10}
                  defaultAtom="button"
                  customClassName="rounded-full text-white px-8 font-bold mt-8 bg-transparent border border-white mx-auto"
                />
                <RenderAtom
                  item={item?.mainnumber}
                  defaultAtom="number"
                  customClassName=""
                  divNamePrefix={divNamePrefix}
                />
              </BlockDiv>
            </BlockDiv>
          </BlockDiv>
        </BlockDiv>
      </BlockDiv>
    </>
  );
}

const MyDeal = () => {
  return (
    <BlockDiv
      customClassName="flex flex-row items-center gap-x-5 mt-10 mb-3"
      divNumber="MyDealBlock"
    >
      {dealList.map((item: any, index: number) => {
        return (
          <BlockDiv
            key={item?.id || index}
            customClassName="w-32 flex flex-col gap-y-8 justify-center"
          >
            <RenderAtom
              item={{ value: item?.number }}
              defaultAtom="text"
              customClassName="text-center font-bold"
              customStyle={{
                fontSize: "60px",
                color: "#FFFFFF",
              }}
              divNamePrefix="dealtext"
            />
            <RenderAtom
              item={{ value: item?.text }}
              defaultAtom="text"
              customClassName="text-center"
              customStyle={{
                fontSize: "22px",
                color: "#A0A0A0",
              }}
              divNamePrefix="dealtext"
            />
          </BlockDiv>
        );
      })}
    </BlockDiv>
  );
};

const dealList = [
  { number: "7", text: "Өдөр" },
  { number: "05", text: "Цаг" },
  { number: "36", text: "Минут" },
  { number: "50", text: "Секунд" },
];
