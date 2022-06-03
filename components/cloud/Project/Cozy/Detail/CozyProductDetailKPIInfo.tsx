import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import useGetProcessC009 from "../useGetProcessC009";

const CozyProductDetailKPIInfo = ({ item }) => {
  const { dvList, dvListMutate } = useGetProcessC009(item, "kpiInfo");
  // console.log("🚀 ~ CozyProductDetailKPIInfo ~ dvList", dvList);

  return (
    <>
      <BlockDiv
        customClassName="w-full bg-white rounded-lg"
        divNumber="CozyProductDetailKPIInfoOuter"
      >
        <BlockDiv
          customClassName="grid grid-cols-2 gap-x-8"
          divNumber="CozyProductDetailKPIInfoInner"
        >
          <BlockDiv
            customClassName="col-span-1"
            divNumber="CozyProductDetailKPIInfoInnerLeft"
          >
            {dvList.map((item: any, index: number) => {
              return (
                <CozyProductDetailKPIInfoItem
                  item={item}
                  key={item?.id || index}
                />
              );
            })}
          </BlockDiv>
          <BlockDiv
            customClassName="col-span-1 flex flex-col space-y-5"
            divNumber="CozyProductDetailKPIInfoInnerRight"
          >
            <RenderAtom
              item={{
                value:
                  "Хоол хүнсээр авбал зохих шимт бодисын хэрэгцээнд (2000 калорит суурилсан) эзлэх хувь. Таны өдрийн хэрэгцээт илчлэгийн хэмжээнээс хамааран өөр байж болно",
              }}
              defaultAtom="text"
              customClassName="text-gray-700 bg-[#FFE4BB]/50 block p-5 rounded-lg"
              customStyle={{
                fontSize: "14px",
                lineHeight: "20px",
                color: "#3C3C3C",
              }}
            />
            <RenderAtom
              item={{
                value:
                  "Таны захиалгын НӨАТ, сугалааны баримт нь худалдан авалт хийснээс хойш 48 цагын дотор таны бүртгэлтэй имэйл рүү илгээгдэх ба supply.orgil.mn сайтын миний захиалгууд хэсэгт орно. Хэрэв та бидэнтэй холбогдон санал хүсэлт өгөх бол ажлын өдрүүдийн 09:00-18:00 цагийн хооронд 7755-7755 дугаарт, supply.orgil.mn хаягаар холбогдоно уу.",
              }}
              defaultAtom="text"
              customClassName="text-gray-700 bg-[#FFE4BB]/50 block p-5 rounded-lg"
              customStyle={{
                fontSize: "14px",
                lineHeight: "20px",
                color: "#3C3C3C",
              }}
            />
          </BlockDiv>
        </BlockDiv>
      </BlockDiv>
    </>
  );
};

export default CozyProductDetailKPIInfo;

const CozyProductDetailKPIInfoItem = ({ item }) => {
  return (
    <>
      <BlockDiv
        customClassName="flex flex-row items-center justify-between border-b border-gray-300 py-2 w-full"
        divNumber="CozyProductDetailKPIInfoItemOuter"
      >
        <RenderAtom
          item={{ value: item.label }}
          defaultAtom="text"
          customClassName="font-medium text-gray-700"
          customStyle={{
            fontSize: "14px",
            lineHeight: "16px",
            color: "#3C3C3C",
          }}
        />
        <RenderAtom
          item={{ value: item.value }}
          defaultAtom="text"
          customClassName=""
        />
      </BlockDiv>
    </>
  );
};
