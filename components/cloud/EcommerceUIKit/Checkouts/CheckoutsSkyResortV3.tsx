import { FC, useContext, useState, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import useSWR from "swr";
import { useUser } from "hooks/use-user";
import { getItemObject } from "util/helper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import fetchJson from "lib/fetchJson";
import Qpay from "@components/cloud/Payment/Qpay";
import SocialPay from "@components/cloud/Payment/SocialPay";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
import { Empty, Modal, notification, Spin } from "antd";
// import { useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import { isBrowser, isMobile } from "react-device-detect";

function CheckoutsSkyResortV3() {
  const { config, dataMutate, positionConfig } =
    useContext(WidgetWrapperContext);
  const userContext = useUser();
  const router = useRouter();
  const [isPreviewShown, setPreviewShown] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalQpay, setVisibleModalQpay] = useState(false);
  const [isActive, setActive] = useState(false);
  const [content, setContent] = useState<any>();

  const [loading, setLoading] = useState<any>(false);
  const [contentQpay, setContentQpay] = useState<any>();
  const [activelink, setActiveLink] = useState("text-green-500");
  const [ptype, setPtype] = useState(0);
  if (typeof window !== "undefined") {
    const URL_NAME = window.location.hostname;
    const baseUrl = `https://${URL_NAME}`;
  }

  const [session, setSession] = useState(userContext?.userData);

  if (_.isEmpty(session))
    return <Empty description="Та хэрэглэгчээр нэвтэрч орно уу" />;

  const handlerCloseClick = (e: any) => {
    setVisibleModal(false);
  };

  let criteria = {
    filterCustUserId: [
      {
        operator: "=",
        operand: session?.id,
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
  const [readySrc, setReadySrc] = useState<any>();
  //  if (_.isEmpty(readyDatasrc)){
  //     window.location.href = baseUrl
  //  }

  useEffect(() => {
    if (_.isEmpty(readySrc)) setReadySrc(readyDatasrc[0]);
  }, [readySrc]);

  let total = _.sumBy(readyDatasrc, (item: any) => {
    return item.unitprice * item.orderqty;
  });

  const orderdate = readyDatasrc[0]?.orderdate;
  const description = readyDatasrc[0]?.description;
  const salesOrderId = readyDatasrc[0]?.salesorderid;
  const refPlanDtlId = readyDatasrc[0]?.refPlanDtlId;
  const ordernumber = readyDatasrc[0]?.ordernumber;

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
  const socialPayInit = async () => {
    const processName = "generateHmac256";
    const returnType = "GET";
    const callbackLink = "https://www.skyresorteshop.mn/skyresort/payment";
    // const callbackLink  = `http://localhost:3000/skyresort/payment`;
    const checkSumS = ordernumber + total + returnType + callbackLink;
    setLoading(true);
    const processParameters = {
      secretkey: "FckiD!kmx0*oVv@0",
      message: ordernumber + total + returnType + callbackLink,
    };
    const checkSum: any = await fetchJson(
      `/api/get-process?processcode=generateHmac256&parameters=${JSON.stringify(
        processParameters
      )}`
    );

    if (checkSum) {
      const statusparam = {
        id: salesOrderId,
        wfmStatusId: "1642050656876633",
        sdmSalesOrderPaymentDtl: {
          paymentTypeId: "19",
          paymentDate: orderdate,
          amt: total,
        },
      };
      const { data: payStatus } = await axios.post(`/api/post-process`, {
        processcode: "cl_sdmOrderBookRowDv_002",
        parameters: statusparam,
      });
      const params = {
        amount: total,
        transactionId: ordernumber,
        checksum: checkSum?.message,
        callback: callbackLink,
        headerMap: {
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNRVJDSEFOVF9TS1lfUkVTT1JUX0xMQyIsImlhdCI6MTY0NDgzMDUwMn0.odxqxOFWS-4KcapoLiQuWSSvyjdTGxbRg8rZ4tREFz4",
        },
      };

      const { data: url } = await axios.post(`/api/post-process`, {
        processcode: "createInvoiceGolomt",
        parameters: params,
      });

      if (url.status == "success") {
        window.location.href =
          "https://ecommerce.golomtbank.com/payment/mn/" + url?.result?.invoice;
      } else {
        setLoading(false);
        notification.error({
          message: url?.text,
        });
      }
    }
  };

  const onClickQty = (item: number, qty: any) => {
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

  const TipsReference = (dataItem: any, type: string) => {
    const [isActive, setActive] = useState(false);
    const [isCheck, setsCheck] = useState(false);
    const item = _.values(dataItem);
    const parameters = `&parameters=${JSON.stringify({
      salesOrderId: item[0].salesorderid,
      orderDate: item[0].orderdate,
      refPlanDtlId: item[0].refplandtlid,
    })}`;
    const { data } = useSWR(
      `/api/get-process?processcode=clItemListReturnQty_004${parameters}`
    );

    // console.log("үлдэгдэл шалгах эб", isCheck);
    return (
      <div className="px-2 pb-2">
        <RenderAtom
          item={{ value: "Санамж" }}
          defaultAtom="title"
          customClassName="text-2xl font-medium text-center w-full pb-4"
        />

        <ol className="list-decimal text-md pb-4 text-justify">
          <li>
            Захиалга өгсөн боловч та өөрийн биеэр ирээгүй бол таны төлсөн
            төлбөрийн <span className="text-red-500">20,000</span> төгрөг нь
            хэрэгсэл хадгалсны хураамж болгон суутгагдана.
          </li>
          <li>
            Таны сонгосон цагаас үйлчилгээний хугацаа (180 минут) эхлэх тул
            нөхөн бодогдохгүй буюу дуусах хугацаанд өөрчлөлт орохгүйг анхаарна
            уу. Иймээс захиалгын цагаас хоцролгүй ирвэл танд ашигтай.
          </li>
          <li>
            Та үйлчилгээний буцаалт хийх бол захиалга хийсэн өдрөөс 24 цагийн
            өмнө буцаах хүсэлт илгээгээрэй.
          </li>
        </ol>
        <div className="hidden">
          <i className="fas fa-circle-notch fa-spin fa-2x text-green-300"></i>
          <span className="pl-2 mt-4 relative -top-1">
            {" "}
            Үлдэгдэл шалгаж байна
          </span>
        </div>
        <div className="text-center">
          <p className="text-2xl text-black font-medium">
            Taны захиалсан өдөр:{" "}
            <span className="text-green-500 ">{orderdate}</span>
          </p>
          <p className="text-2xl text-black font-medium">
            Taны захиалсан цаг:{" "}
            <span className="text-green-500 ">{description}</span>{" "}
          </p>
        </div>
        <div
          className="flex justify-center self-center align-middle pt-6 cursor-pointer "
          // onClick={(e: any) => handlerClickC(e)}
          onClick={() => setsCheck((prev) => !prev)}
        >
          <span className="h-10 w-10 border border-gray-400 relative hover:border-green-500">
            {isCheck && (
              <i
                className={`far fa-check text-green-500 text-5xl absolute -top-4 -left-1`}
              ></i>
            )}
          </span>
          <span className="pt-2 pl-6 text-lg text-black font-semibold ">
            Үйлчилгээний нөхцөлийг зөвшөөрсөн
          </span>
        </div>
        {isCheck && (
          <div className="flex justify-center w-full text-center">
            <span
              className="text-2xl text-black font-medium text-center border border-solid mt-4  rounded-2xl py-1 px-4 cursor-pointer hover:bg-skyresort hover:text-white"
              onClick={(e: any) => handlerClick(e, dataItem.type)}
            >
              {" "}
              Үргэлжлүүлэх
            </span>
          </div>
        )}
      </div>
    );
  };

  const handlerClick = (e: any, type: string) => {
    e.preventDefault();
    setVisibleModal(false);

    switch (type) {
      case "qpay":
        setVisibleModalQpay(true);
        return setContentQpay(<Qpay item={basketList} />);
      default:
        return socialPayInit();
    }
    // setContent(<RenderWidgetProcess dialog={true} listConfig={param} />);
  };

  return (
    <>
      <Spin
        spinning={loading}
        tip=" Түр хүлээнэ үү ... "
        wrapperClassName="text-black"
        size="large"
      >
        <div className="my-10 ">
          <div className="py-3 border-b border-t border-white flex xs:overflow-hidden">
            <div className="flex space-x-2 mr-10 items-center">
              <RenderAtom
                item={{ value: "far fa-calendar" }}
                defaultAtom="icon"
                customClassName="text-sm font-medium text-gray-500 flex self-center "
              />
              <RenderAtom
                item={{ value: orderdate }}
                defaultAtom="text"
                customClassName="text-sm font-bold cursor-pointer"
              />
            </div>
            <div className="flex space-x-3 items-center">
              <RenderAtom
                item={{ value: "far fa-clock" }}
                defaultAtom="icon"
                customClassName="text-sm font-medium text-gray-500 flex self-center "
              />
              <RenderAtom
                item={{
                  value: "Захиалга хийх",
                  positionnemgoo: { url: { path: "/skyresort" } },
                }}
                defaultAtom="text"
                customClassName="text-sm font-bold cursor-pointer"
              />
              <RenderAtom
                item={{ value: "fas fa-chevron-double-right" }}
                defaultAtom="icon"
                customClassName="text-xs font-medium text-black ml-2"
              />
            </div>
            <div className="flex space-x-3 items-center pl-5">
              <RenderAtom
                item={{ value: "Төлбөр төлөх" }}
                defaultAtom="text"
                customClassName={`text-sm font-bold cursor-pointer ${activelink}`}
              />
              <RenderAtom
                item={{ value: "fas fa-chevron-double-right" }}
                defaultAtom="icon"
                customClassName="text-xs font-medium text-black ml-2"
              />
            </div>
            <div className="flex space-x-3 items-center pl-5">
              <RenderAtom
                item={{ value: "Санамж" }}
                defaultAtom="text"
                customClassName="text-sm font-bold cursor-pointer capitalize"
              />
              <RenderAtom
                item={{ value: "fas fa-chevron-double-right" }}
                defaultAtom="icon"
                customClassName="text-xs font-medium text-black ml-2"
              />
            </div>
            <div className="flex items-center pl-5">
              <RenderAtom
                item={{ value: "Дуусгах" }}
                defaultAtom="text"
                customClassName="text-sm font-bold cursor-pointer capitalize"
              />
            </div>
          </div>
        </div>
        <div className="py-2 pl-4 text-gray-800 font-bold uppercase text-left">
          Нийт төлөлт
        </div>
        <div className="container pt-6 mx-auto mb-10">
          <div className="flex flex-wrap">
            <div className=" w-3/5 md:w-3/5 sm:w-full xs:w-full pb-6 md:pb-0 md:pr-6">
              <div className="w-full h-full bg-white shadow-sm rounded-lg  ">
                {/* <div className="pb-6 border-b border-gray-300 text-2xl p-8">
                  Сагсан дахь бараа ({readyDatasrc.length})
                </div> */}
                <div className="flex justify-between py-5 border-b lg:px-8 md:px-4 xs:px-2">
                  <div className="flex flex-row space-x-2">
                    <RenderAtom
                      item={{ value: "far fa-calendar" }}
                      defaultAtom="icon"
                    />
                    <RenderAtom
                      item={{ value: orderdate }}
                      defaultAtom="text"
                    />
                  </div>
                  <div className="flex flex-row space-x-2">
                    <RenderAtom
                      item={{ value: "far fa-clock" }}
                      defaultAtom="icon"
                    />

                    <RenderAtom
                      item={{ value: description }}
                      defaultAtom="text"
                    />
                  </div>
                </div>
                <div
                  // style={{ height: "378px" }}
                  className="mt-2.5 py-4 lg:px-8 md:px-4  xs:px-2 overflow-y-auto  scrollbar-thumb-gray-300  scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-300 -dark scrollbar-thumb-rounded-full lg:max-h-sm h-full"
                >
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
              </div>
            </div>
            <div className=" w-2/5  md:w-2/5  sm:w-full xs:w-full">
              <div className="relative inset-x-0 md:pt-5 md:px-4 lg:px-8 pb-8 bg-white shadow-sm rounded-lg sm:pt-2 xs:pt-2 xs:px-0">
                <div className=" overflow-hidden">
                  <div className="flex justify-between px-4 bg-gray-300 border border-white font-bold py-2 items-center text-gray-800 space-x-20 ">
                    <p className="text-lg font-medium sm:text-xs xs:text-xs ">
                      Нийт дүн
                    </p>
                    <RenderAtom
                      item={{
                        value: String(total),
                      }}
                      defaultAtom="currency"
                      customClassName={`text-3xl lg:text-3xl  xs:text-lg`}
                    />
                  </div>
                  <div className="mt-8 flex justify-center">
                    {/* <button onClick={(e: any) => handlerClick(e)}> */}
                    <span
                      onClick={(e: any) => {
                        e.preventDefault();
                        setVisibleModal(true);
                        setContent(
                          <TipsReference
                            dataItem={readyDatasrc[0]}
                            type="qpay"
                          />
                        );
                      }}
                      className="inline-block"
                    >
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202201/file_1642153164319795_160870170544611.png"
                        alt=""
                        className="rounded-md md:w-112 sm:w-96 xs:w-80"
                      />
                    </span>
                  </div>
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={(e: any) => {
                        e.preventDefault();
                        setVisibleModal(true);
                        setContent(
                          <TipsReference dataItem={readyDatasrc[0]} />
                        );
                      }}
                      className="cursor-pointer"
                    >
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202201/file_1642153164130968_160870170544911.png"
                        alt=""
                        className="rounded-md md:w-112 sm:w-96 xs:w-80"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spin>

      <Modal
        visible={visibleModal}
        width={600}
        footer=""
        title={"Cанамж"}
        centered
        keyboard={true}
        onCancel={handlerCloseClick}
      >
        {content}
      </Modal>
      <Modal
        visible={visibleModalQpay}
        width={600}
        footer=""
        title={"Төлбөр төлөх"}
        centered
        keyboard={true}
        // onCancel={handlerCloseClick}
      >
        {contentQpay}
      </Modal>
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
    <div className="flex items-center py-2.5 border-b ">
      <div className="">
        <RenderAtom
          item={getItemObject(item, "position2", positionConfig)}
          defaultAtom="image"
          customClassName={`object-center object-cover rounded-lg w-28 h-28`}
        />
      </div>

      <div className="px-3 w-full">
        <div className="flex items-center justify-between w-full pt-1">
          <RenderAtom
            item={getItemObject(item, "position1", positionConfig)}
            defaultAtom="title"
            customClassName={`text-xl font-black leading-none text-gray-800`}
          />
          <span className="text-gray-500  fas fa-times"></span>
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
            <span className="text-xl font-bold items-center leading-6">
              {getItemObject(item, "position83", positionConfig).value}
            </span>
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

export default CheckoutsSkyResortV3;

// clSdmSalesOrderBasketItemDtl
// clSdmSalesOrderBasketDtl

//E22021500017GEThttps://www.skyresorteshop.mn/skyresort/payment
