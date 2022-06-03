import { useContext, useState, useEffect, useRef } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import fetchJson from "lib/fetchJson";
import Qpay from "@components/cloud/Payment/Qpay";
import _ from "lodash";
import { useSession } from "next-auth/react";
import { Modal } from "antd";
import CozyCartItem from "@components/cloud/Project/Cozy/Basket/CozyCartItem";
import CozyCartPayment from "../Basket/CozyCartPayment";
import CozyCheckoutInfo from "./CozyCheckoutInfo";
import CozyCheckoutDelivery from "./CozyCheckoutDelivery";
import CozyCheckoutDeliveryTime from "./CozyCheckoutDeliveryTime";
import useProcessEditBasketItem from "../Basket/useProcessEditBasketItem";
import useProcessRemoveBasketItem from "../Basket/useProcessRemoveBasketItem";
import axios from "axios";
import useProcessBasketList from "../Basket/useProcessBasketList";
import { notification } from "antd";
import moment from "moment";
// import { useForm } from "react-hook-form";

export default function CozyCheckout() {
  const { readyDatasrc, positionConfig } = useContext(WidgetWrapperContext);
  const { data: session, status }: any = useSession();
  const [loading, setLoading] = useState<any>(false);
  const [visibleModalQpay, setVisibleModalQpay] = useState(false);
  const [contentQpay, setContentQpay] = useState<any>();
  const [payment, setPayment] = useState<any>();
  const { basketList, basketMutate, totalPrice } = useProcessBasketList();
  const now = moment().format("YYYY-MM-DD");

  const orderRequist = {
    id: basketList[0]?.salesorderid,
    orderDate: now,
    customerId: session?.id,
    custUserId: session?.crmuserid,
    deliveryContactLastname: "",
    deliveryContactName: "",
    deliveryContactPhone: "",
    deliveryContactPhone2: "",
    email: "",
    deliveryCityId: "",
    deliveryDistrictId: "",
    deliveryStreetId: "",
    deliveryAddress: "",
    wfmStatusId: "1642050656876633",
    sdmSalesOrderPaymentDtl: [
      {
        paymentTypeId: payment,
        paymentDate: "",
        amt: "",
      },
    ],
  };
  const [orderInfo, setUserInfo] = useState<any>(orderRequist);

  const handlerTypeEvent = (item: any) => {
    const now = moment().format("YYYY-MM-DD");

    setUserInfo({
      ...orderInfo,
      id: basketList[0]?.salesorderid,
      orderDate: now,
      sdmSalesOrderPaymentDtl: [
        {
          paymentTypeId: item?.paymenttypeid,
          paymentDate: now,
          amt: totalPrice,
        },
      ],
    });
    setPayment(item?.paymenttypeid);
  };

  const handlerCloseClick = (e: any) => {
    setVisibleModalQpay(false);
  };

  const handleOrderRequest = async (payload: any) => {
    const { data } = await axios.post(`/api/post-process`, {
      processcode: "czSalesOrderBookDv_002",
      parameters: payload,
    });

    if (_.isEmpty(payment)) {
      notification.info({
        message: "Та төлбөрийн хэлбэрээ сонгоно уу.",
      });
      return;
    }

    if (data.status === "success") {
      if (payment == "40") {
        setVisibleModalQpay(true);
        setContentQpay(<Qpay item={basketList} />);
      } else {
        return socialPayInit();
      }
    } else {
      notification.error({
        message: data.text,
      });
    }
  };

  const socialPayInit = async () => {
    const processName = "generateHmac256";
    const returnType = "GET";
    const callbackLink = "https://customer.veritech.mn/callback";
    // const callbackLink  = `http://localhost:3000/skyresort/payment`;
    const checkSumS = "22" + totalPrice + returnType + callbackLink;
    setLoading(true);
    const processParameters = {
      secretkey: "FckiD!kmx0*oVv@0",
      message: "22" + totalPrice + returnType + callbackLink,
    };
    const checkSum: any = await fetchJson(
      `/api/get-process?processcode=generateHmac256&parameters=${JSON.stringify(
        processParameters
      )}`
    );

    if (checkSum) {
      const statusparam = {
        id: basketList[0].salesorderid,
        wfmStatusId: "1642050656876633",
        sdmSalesOrderPaymentDtl: {
          paymentTypeId: "19",
          paymentDate: 40,
          amt: totalPrice,
        },
      };
      const { data: payStatus } = await axios.post(`/api/post-process`, {
        processcode: "cl_sdmOrderBookRowDv_002",
        parameters: statusparam,
      });
      const params = {
        amount: totalPrice,
        transactionId: "ordernumber",
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

  let form = useRef<any>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form_data = new FormData(form.current);
    const payload: any = {};
    // form_data.forEach(function (value: any, key: string) {
    // 	payload[key] = value;
    // });
    handleOrderRequest(orderInfo);
  };

  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="w-full px-5 mt-14 font-sans">
          <div className="grid grid-cols-12 gap-7">
            <div className="col-span-12 sm:col-span-8">
              <CozyCheckoutInfo dataOrder={orderInfo} setData={setUserInfo} />
              <CozyCheckoutDelivery
                dataOrder={orderInfo}
                setData={setUserInfo}
              />
              <CozyCheckoutDeliveryTime
                dataOrder={orderInfo}
                setData={setUserInfo}
              />
              <CozyCartPayment handlerTypeEvent={handlerTypeEvent} />
            </div>
            <div className="col-span-12 sm:col-span-4">
              <div className="rounded-lg bg-white p-5">
                {/* Сагсан дахь барааны хэсэг---> */}
                <div className="text-gray-800">
                  <div className="border-b pb-5 font-medium text-lg">
                    <p>
                      Сагсан дахь барааны <span>({basketList.length})</span>
                    </p>
                  </div>
                  <div className="mt-3">
                    {basketList.map((item: any, index: number) => {
                      return (
                        <CozyCartItem
                          key={item?.id || index}
                          item={item}
                          index={index}
                          onClickQty={useProcessEditBasketItem}
                          onClickRemove={useProcessRemoveBasketItem}
                          basketMutate={basketMutate}
                          salesorderid={basketList[0]?.salesorderid}
                        />
                      );
                    })}
                  </div>
                </div>
                {/* ^Сагсан дахь барааны хэсэг^ */}
                <div className="font-sans mt-32">
                  <div className="w-full flex items-center justify-between bg-red-100 rounded py-1 pl-2 pr-1 text-sm text-gray-800">
                    <p>Гишүүний хөнгөлөлтийн эрх эдлэх</p>
                    <div className="bg-white rounded flex py-3 px-3 items-center font-semibold">
                      <span className="">-3%</span>
                      <i className="far fa-tags"></i>
                    </div>
                  </div>
                  <div className="mt-5 text-gray-800">
                    <div className="flex justify-between text-lg">
                      <p>Хөнгөлөлт</p>
                      <p>-3%</p>
                    </div>
                    <div className="flex justify-between text-lg">
                      <p>Хүргэлт</p>
                      <RenderAtom
                        item={{
                          value: "0",
                        }}
                        defaultAtom="currency"
                        customClassName={`text-2xl lg:text-2xl font-bold text-gray-800`}
                      />
                    </div>
                    <div className="flex justify-between text-lg font-bold mt-2">
                      <p>Нийт дүн</p>
                      <RenderAtom
                        item={{
                          value: String(totalPrice),
                        }}
                        defaultAtom="currency"
                        customClassName={`text-2xl lg:text-2xl font-bold text-gray-800`}
                      />
                    </div>
                    <button
                      className="mt-5 rounded-full  w-full py-2 bg-cozy
                              border border-cozy hover:bg-white hover:text-cozy cursor-pointer
                               uppercase text-white font-bold"
                      // onClick={(e: any) => onSubmit(e)}
                    >
                      Худалдан авалт хийх
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Modal
        visible={visibleModalQpay}
        width={600}
        footer=""
        title={"Төлбөр төлөх"}
        centered
        keyboard={true}
        onCancel={handlerCloseClick}
      >
        {contentQpay}
      </Modal>
    </>
  );
}
