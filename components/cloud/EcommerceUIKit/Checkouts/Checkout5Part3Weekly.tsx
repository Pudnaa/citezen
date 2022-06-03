import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { useSession } from "next-auth/react";
import fetchJson from "lib/fetchJson";
import useSWR from "swr";
import CozyCartItem from "@components/cloud/Project/Cozy/Basket/CozyCartItem";

export default function Checkout5Part3Weekly() {
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
  const { data: session, status }: any = useSession();

  let criteria = {
    filterCustUserId: [
      {
        operator: "=",
        operand: session?.id,
      },
    ],
  };
  const basketMetaId = 1641194757169149;
  const {
    data: basketList,
    error,
    mutate: basketMutate,
  } = useSWR(
    `/api/get-data?metaid=${config?.metadataid}&criteria=${JSON.stringify(
      criteria
    )}`,

    { refreshInterval: 10000, revalidateOnFocus: false }
  );
  delete basketList?.aggregatecolumns;
  delete basketList?.paging;
  const dataSrc = _.values(basketList);
  console.log("Checkout5Part3Weekly dataSrc", dataSrc);
  console.log("Checkout5Part3Weekly config", config);
  console.log("Checkout5Part3Weekly readyDatasrc", readyDatasrc);
  console.log("Checkout5Part3Weekly widgetnemgooReady", widgetnemgooReady);
  console.log("Checkout5Part3Weekly positionConfig", positionConfig);
  const callEditProcess = async (item: any, qty: any) => {
    const processName = "clSdmSalesOrderItemDtlDv_002";
    const processParameters = {
      id: item.salesorderdetailid,
      orderQty: qty,
      lineTotalPrice: item.unitprice * qty,
    };
    const processResult: any = await fetchJson(
      `/api/get-process?processcode=${processName}&parameters=${JSON.stringify(
        processParameters
      )}`
    );
    basketMutate();
  };

  const onClickQty = (item: number, qty: any) => {
    // console.log(qty, item);
    callEditProcess(item, qty);
  };

  const onClickRemove = async (index: number, item: any) => {
    const processName = "clSdmSalesOrderItemDtlDv_005";
    const processParameters = {
      id: item.salesorderdetailid,
      itemId: item.itemid,
    };
    const processResult: any = await fetchJson(
      `/api/get-process?processcode=${processName}&parameters=${JSON.stringify(
        processParameters
      )}`
    );
    basketMutate();
  };

  let total = _.sumBy(dataSrc, (item: any) => {
    return item.unitprice * item.orderqty;
  });

  return (
    <div className="flex justify-center items-center rounded-lg bg-white shadow-lg pb-6">
      <div className="flex flex-col justify-start items-start w-full px-6">
        <span className="flex justify-between w-full items-centerb border-b text-lg font-semibold py-4">
          Сагсан дахь бараа ({dataSrc.length})
        </span>
        {dataSrc.map((item: any, index: number) => {
          return (
            <CozyCartItem
              key={item?.id || index}
              item={item}
              index={index}
              onClickQty={onClickQty}
              onClickRemove={onClickRemove}
              basketMutate={basketMutate}
              salesorderid={basketList[0]?.salesorderid}
            />
          );
        })}

        <div className="w-full items-center border-t py-2  mt-6">
          <div className="flex justify-between">
            <span className="text-base ">Хөнгөлөлт</span>
            <p>-3%</p>
          </div>
          <div className="flex justify-between">
            <span className="text-base ">Хүргэлт</span>
            <p>5000₮</p>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-bold ">Нийт дүн</span>
            <RenderAtom
              item={{
                value: String(total),
              }}
              defaultAtom="currency"
              customClassName={`text-2xl lg:text-2xl font-bold text-gray-800`}
            />
          </div>
        </div>

        <div className=" mt-5 p-3 bg-yellow-100 rounded w-full inline-block my-4">
          <RenderAtom
            item={{ value: "худалдан авах нөхцөл " }}
            defaultAtom="text"
            customClassName="text-xs  text-gray-500"
          />
          <div className="flex items-center m-1 gap-1 ">
            <input className="bg-yellow-100 border-gray-300" type="checkbox" />
            <p className="text-sm text-blue-500 m-0 pl-1">Тийм</p>
          </div>
        </div>
        <div className="flex justify-between w-full items-center mt-2">
          <button className="bg-cozy text-white uppercase cursor-pointer  font-normal w-full p-3 border border-cozy hover:bg-white hover:text-cozy rounded-full center  ">
            худалдан авалт хийх
          </button>
        </div>
      </div>
    </div>
  );
}
