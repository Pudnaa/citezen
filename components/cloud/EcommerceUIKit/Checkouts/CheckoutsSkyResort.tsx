import { FC, useContext, useState, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import useSWR from "swr";
import { useUser } from "hooks/use-user";
import { getItemObject } from "util/helper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import fetchJson from "lib/fetchJson";
import WidgetWithId from "middleware/components/WidgetStandart/WidgetWithId";
import Qpay from "@components/cloud/Payment/Qpay";
import SocialPay from "@components/cloud/Payment/SocialPay";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
// import { useSession } from "next-auth/react";
function CheckoutsSkyResort() {
  const { config, dataMutate, positionConfig } =
    useContext(WidgetWrapperContext);
  const userContext = useUser();
  const [profile, setProfile] = useState(userContext.userData);
  const [isPreviewShown, setPreviewShown] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [content, setContent] = useState<any>();
  const [ptype, setPtype] = useState(0);
  // const { data: session } = useSession();
  const handlerCloseClick = (e: any) => {
    setVisibleModal(false);
  };

  let criteria = {
    filterCustUserId: [
      {
        operator: "=",
        operand: profile?.crmuserid,
      },
    ],
  };

  const { data: basketList, error } = useSWR(
    `/api/get-data?metaid=${config.metadataid}&criteria=${JSON.stringify(
      criteria
    )}`
  );
  delete basketList?.aggregatecolumns;
  delete basketList?.paging;
  const readyDatasrc = _.values(basketList);

  let total = _.sumBy(readyDatasrc, (item: any) => {
    return item.unitprice * item.orderqty;
  });

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
    dataMutate();
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
    dataMutate();
  };
  const handlerClick = (e: any) => {
    setVisibleModal(true);
    switch (ptype) {
      case 0:
        return setContent(<Qpay item={basketList} />);
      default:
        return setContent(<SocialPay />);
    }
    // setContent(<RenderWidgetProcess dialog={true} listConfig={param} />);
  };
  return (
    <>
      <div className="w-full h-full overflow-auto bg-white shadow-sm rounded-lg  ">
        <div className="pb-6 border-b border-gray-300 text-2xl p-8">
          Сагсан дахь бараа ({readyDatasrc.length})
        </div>
        <div className="flex justify-between py-5 border-b px-8">
          <div className="flex flex-row space-x-2">
            <RenderAtom
              item={{ value: "far fa-calendar" }}
              defaultAtom="icon"
            />
            <RenderAtom
              item={{ value: readyDatasrc[0]?.orderdate }}
              defaultAtom="text"
            />
          </div>
        </div>
        <div className="mt-2.5 py-4 px-8 max-h-112 overflow-y-auto  scrollbar-thumb-gray-300  scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-300 -dark scrollbar-thumb-rounded-full lg:max-h-sm h-full">
          {readyDatasrc.map((item: any, index: number) => {
            return (
              <ItemBasket
                key={item?.id || index}
                item={item}
                positionConfig={positionConfig}
                index={index}
                onClickQty={onClickQty}
                onClickRemove={onClickRemove}
              />
            );
          })}
        </div>
        <div className="relative inset-x-0 pt-20 px-8 pb-8">
          <div className="flex items-center justify-between border-t py-4">
            <p className="text-lg">Нийт дүн: </p>
            <RenderAtom
              item={{
                value: String(total),
              }}
              defaultAtom="currency"
              customClassName={`text-2xl lg:text-2xl font-bold text-gray-800`}
            />
          </div>
          <div>
            <button
              onClick={(e: any) => handlerClick(e)}
              className="cursor-pointer hover:text-white   bg-skyresort text-center w-full flex justify-center py-3 text-2xl rounded-lg"
            >
              Захиалга хийх
            </button>
          </div>
        </div>
      </div>

      <ModalView
        visible={visibleModal}
        modalOptions={{
          width: 600,
          // title: "Хүсэлт",
        }}
        onClose={handlerCloseClick}
        modelContent={content}
      />
      {/* {isPreviewShown && <Qpay item={readyDatasrc} />} */}
    </>
  );
}

type PropsTypeItemBasket = {
  item?: any;
  positionConfig?: any;
  index?: number;
  onClickQty?: any;
  onClickRemove?: any;
};

const ItemBasket: FC<PropsTypeItemBasket> = ({
  item,
  positionConfig,
  index,
  onClickQty,
  onClickRemove,
}) => {
  return (
    <div className="md:flex items-center py-2.5 border-b ">
      <div className="">
        <RenderAtom
          item={getItemObject(item, "position2", positionConfig)}
          defaultAtom="image"
          customClassName={`object-center object-cover rounded-lg w-28 h-28`}
        />
      </div>

      <div className="md:pl-3 md:w-3/4">
        <div className="flex items-center justify-between w-full pt-1">
          <RenderAtom
            item={getItemObject(item, "position1", positionConfig)}
            defaultAtom="title"
            customClassName={`text-xl font-black leading-none text-gray-800`}
          />
          {/* <i className="fas fa-times text-gray-500 hover:text-gray-800 cursor-pointer" /> */}
          <RenderAtom
            item={{ value: "fas fa-times" }}
            defaultAtom="icon"
            customClassName={`text-gray-500 hover:text-gray-800 cursor-pointer`}
            onClick={(e: any) => {
              e.preventDefault();
              onClickRemove(index, {
                ...item,
                rowstate: "removed",
              });
            }}
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <RenderAtom
              item={getItemObject(item, "position93", positionConfig)}
              defaultAtom="text"
              customClassName={`text-sm text-gray-500 mr-6`}
            />
            <RenderAtom
              item={getItemObject(item, "position91", positionConfig)}
              defaultAtom="text"
              customClassName={`px-2 border text-gray-500`}
            />
          </div>
          <RenderAtom
            item={getItemObject(item, "position4", positionConfig)}
            defaultAtom="currency"
            customClassName={`font-bold text-sm text-green-500`}
          />
        </div>
        {/* <div className="flex items-center mt-1">
          <RenderAtom
            item={getItemObject(item, "position92", positionConfig)}
            defaultAtom="text"
            customClassName={`text-gray-500`}
          />
        </div> */}
        <div className="flex items-center justify-between pt-5 w-full">
          <div
            className="bg-skyresort rounded-xl py-1 flex justify-between px-2.5 text-gray-800"
            style={{ width: "105px" }}
          >
            <i
              className="fas fa-minus text-lg cursor-pointer opacity-60 hover:text-gray-600"
              onClick={(e: any) => {
                e.preventDefault();
                onClickQty(item, item.orderqty * 1 - 1 + "");
              }}
            />
            <p className="text-xl font-bold items-center leading-6">
              {getItemObject(item, "position83", positionConfig).value}
            </p>
            <i
              className="fas fa-plus text-lg cursor-pointer opacity-60"
              onClick={(e: any) => {
                e.preventDefault();
                onClickQty(item, item.orderqty * 1 + 1 + "");
              }}
            />
          </div>
          <RenderAtom
            item={{
              value: String(item.unitprice * item.orderqty),
            }}
            defaultAtom="currency"
            customClassName={`text-lg lg:text-lg font-bold text-gray-800`}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutsSkyResort;
