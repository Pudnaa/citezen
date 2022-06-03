import { FC, useContext, useState, useEffect } from "react";
import _ from "lodash";
import { getItemObject } from "util/helper";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { useCloud } from "hooks/use-cloud";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
type PropsType = {
  handlerTypeEvent?: any;
};

const CozyCartPaymentV2: FC<PropsType> = ({ handlerTypeEvent }) => {
  const cloudContext = useCloud();
  const [isCheck, setsCheck] = useState([false, false, false, false, false]);

  const metadata = 1639380220368417;
  const { data: payItem, error } = useSWR(`/api/get-data?metaid=${metadata}`);

  delete payItem?.aggregatecolumns;
  delete payItem?.paging;
  const dataSrc = _.values(payItem);

  const onClickData = (e: any, item: any, index: any) => {
    e.preventDefault();
    setsCheck([]);
    let newisCheck = [...isCheck];
    newisCheck[index] = !isCheck[index];
    setsCheck(newisCheck);
    handlerTypeEvent(item);
  };

  return (
    <BlockDiv
      customClassName="bg-white p-4 mt-6 rounded-lg"
      divNumber="CozyPayment04Outer"
    >
      <BlockDiv customClassName="" divNumber="CozyPayment04Inner">
        <BlockDiv
          customClassName="flex flex-row items-center gap-x-5"
          divNumber="CozyPayment04TitleBlock"
        >
          <RenderAtom
            item={{ value: "4" }}
            defaultAtom="text"
            customClassName="bg-cozy text-white rounded-full h-7 w-7 flex items-center justify-center font-medium"
            customStyle={{ fontSize: "16px", lineHeight: "19px" }}
          />
          <RenderAtom
            item={{ value: "Төлбөрийн нөхцөл" }}
            defaultAtom="title"
            customClassName="font-medium text-gray-900"
            customStyle={{
              fontSize: "20px",
              lineHeight: "23px",
              color: "#3C3C3C",
            }}
          />
        </BlockDiv>

        <BlockDiv
          customClassName="grid grid-cols-2 gap-5 mt-5"
          divNumber="CozyPayment04CardBlock"
        >
          {dataSrc.map((item: any, index: number) => {
            let imgSrc = item?.physicalpath;
            if (imgSrc.startsWith("storage/")) {
              imgSrc = `${cloudContext.metaConstant.ourMetaConstant.imageRootURL}${imgSrc}`;
            }
            return (
              <div
                key={item?.id || index}
                className={`p-5 rounded-lg  hover:bg-cozy hover:text-white cursor-pointer ${
                  isCheck[index] ? `bg-cozy` : `bg-[#F5F5F5]`
                }`}
                onClick={(e: any) => {
                  onClickData(e, item, index);
                }}
              >
                <RenderAtom
                  item={{ value: imgSrc }}
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
              </div>
            );
          })}
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};
export default CozyCartPaymentV2;
