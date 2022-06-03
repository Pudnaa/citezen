import { useMemo, useContext, useState, useRef, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import fetchJson from "lib/fetchJson";
import Qpay from "@components/cloud/Payment/Qpay";
import _ from "lodash";
import { useSession } from "next-auth/react";
import { Modal } from "antd";
import CozyCartPaymentV2_1 from "../Basket/CozyCartPaymentV2_1";
import CozyCheckoutInfoV2_1 from "./CozyCheckoutInfoV2_1";
import CozyCheckoutDeliveryAddressV2_1 from "./CozyCheckoutDeliveryAddressV2_1";
import CozyCheckoutDeliveryTimeV2_1 from "./CozyCheckoutDeliveryTimeV2_1";
import axios from "axios";
import useProcessBasketList from "../Basket/useProcessBasketList";
import { notification } from "antd";
import dayjs from "util/dayjslocale";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderMolecule from "@components/common/Molecule/RenderMolecule";
import { useForm } from "react-hook-form";
import { usePage } from "hooks/use-page";

export default function CozyCheckoutV2() {
  const { readyDatasrc, positionConfig } = useContext(WidgetWrapperContext);
  const { data: session, status }: any = useSession();
  const [visibleModalQpay, setVisibleModalQpay] = useState(false);
  const [contentQpay, setContentQpay] = useState<any>();
  const [payment, setPayment] = useState<any>();
  const { basketList, basketMutate, totalPrice } = useProcessBasketList();

  const orderObjectInit = {
    id: basketList[0]?.salesorderid,
    // orderDate: now,
    orderDate: dayjs().format("YYYY-MM-DD"),
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
  const [orderObject, setOrderObject] = useState<any>(orderObjectInit);

  const handlerTypeEvent = (item: any) => {
    setOrderObject({
      ...orderObject,
      id: basketList[0]?.salesorderid,
      orderDate: dayjs().format("YYYY-MM-DD"),
      sdmSalesOrderPaymentDtl: [
        {
          paymentTypeId: item?.paymenttypeid,
          paymentDate: dayjs().format("YYYY-MM-DD"),
          amt: totalPrice,
        },
      ],
    });
    setPayment(item?.paymenttypeid);
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
        notification.error({
          message: url?.text,
        });
      }
    }
  };

  let form = useRef<any>();

  const handleSubmitOld = (e: any) => {
    e.preventDefault();
    const form_data = new FormData(form.current);
    const payload: any = {};
    // form_data.forEach(function (value: any, key: string) {
    // 	payload[key] = value;
    // });
    handleOrderRequest(orderObject);
  };

  //NEW FORM - JARGAL
  const pageContext = usePage();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      schedule: { deliverydate: null },
      payment: { typeid: null },
    },
  });

  // useDidMountEffect(() => {
  //   pageContext.setFormList({
  //     // ...pageContext.formList,
  //     cozyCheckout: {
  //       register,
  //       handleSubmit,
  //       control,
  //       watch,
  //       errors,
  //     },
  //   });
  // }, [register]);

  // useEffect(() => {
  //   pageContext.setFormList({
  //     cozyCheckout: {
  //       register,
  //       handleSubmit,
  //       control,
  //       watch,
  //       errors,
  //     },
  //   });
  // }, [handleSubmit]);

  const onFormSubmit = (data: any) => {
    console.log("Success! Form data: ", data);
  };

  register("schedule.deliverydate", {
    required: {
      value: true,
      message: "Хүргэх огноог заавал сонгоно уу",
    },
  });

  const onFormError = (errors: any) =>
    console.log("Error! Form Validate", errors);

  return (
    <>
      <div className="bg-yellow-50 p-5">
        <form onSubmit={handleSubmit(onFormSubmit, onFormError)}>
          {/* Холбоо барих мэдээлэл */}
          <CozyCheckoutInfoV2_1 formRef={{ register, control, errors }} />
          {/* Хүргэх хаяг */}
          <CozyCheckoutDeliveryAddressV2_1
            formRef={{ register, control, errors }}
          />
          {/* Хүргэх хуваарь */}
          <CozyCheckoutDeliveryTimeV2_1
            formRef={{ register, control, errors }}
          />
          {/* Төлбөрийн нөхцөл */}
          <CozyCartPaymentV2_1 formRef={{ register, control, errors }} />

          <button
            type="submit"
            className="bg-pink-700 rounded-lg py-2 px-5 w-auto my-2 text-white"
          >
            Илгээх
          </button>
        </form>
      </div>
      <form ref={form} onSubmit={handleSubmitOld}>
        <BlockDiv
          customClassName="w-full px-5 mt-14 grid grid-cols-12 gap-7"
          divNumber="CozyCheckoutV2Form"
        >
          {/* Зүүн тал */}
          {/* <BlockDiv
            customClassName="col-span-8"
            divNumber="CozyCheckoutV2FormLeft"
          > */}
          {/* Холбоо барих мэдээлэл */}
          {/* <CozyCheckoutInfoV2
              orderObject={orderObject}
              setOrderObject={setOrderObject}
            /> */}
          {/* Хүргэх хаяг */}
          {/* <CozyCheckoutDeliveryV2
              dataOrder={orderObject}
              setData={setOrderObject}
            /> */}
          {/* Хүргэх хуваарь */}
          {/* <CozyCheckoutDeliveryTimeV2
              dataOrder={orderObject}
              setData={setOrderObject}
            /> */}
          {/* Төлбөрийн нөхцөл */}
          {/* <CozyCartPaymentV2 handlerTypeEvent={handlerTypeEvent} /> */}
          {/* </BlockDiv> */}
          {/* Баруун тал */}
          <BlockDiv
            customClassName="col-span-4"
            divNumber="CozyCheckoutV2FormRight"
          >
            <BlockDiv
              customClassName="rounded-lg bg-white p-5"
              divNumber="CozyCheckoutV2FormRightOuter"
            >
              {/* Сагсан дахь барааны хэсэг---> */}
              {/* <RenderAtom
                item={{ value: `Сагсан дахь барааны (${basketList.length})` }}
                defaultAtom="title"
                customClassName="border-b pb-5 font-medium text-lg"
              />
              <BlockDiv
                customClassName="mt-3"
                divNumber="CozyCheckoutV2FormBasketList"
              >
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
              </BlockDiv> */}
              {/* Гишүүний хөнгөлөлтийн эрх эдлэх */}
              <BlockDiv
                customClassName="mt-24 w-full flex items-center justify-between bg-[#FFF2DD] rounded-lg py-2 px-3 text-sm text-gray-800"
                divNumber="CozyCheckoutMemberInfoSale"
              >
                {/* text */}
                <RenderAtom
                  item={{ value: "Гишүүний хөнгөлөлтийн эрх эдлэх" }}
                  defaultAtom="text"
                />
                {/* -3% */}
                <BlockDiv
                  customClassName="bg-white rounded-lg flex py-3 px-3 items-center font-semibold flex flex-row items-center gap-x-2"
                  divNumber="CozyCheckoutMemberInfoSaleNumber"
                >
                  <RenderAtom item={{ value: "-3%" }} defaultAtom="text" />
                  <RenderAtom
                    item={{ value: "far fa-tags" }}
                    defaultAtom="icon"
                  />
                </BlockDiv>
              </BlockDiv>
              <RenderAtom
                item={{ value: "" }}
                defaultAtom="line"
                customClassName="my-7"
              />
              <BlockDiv
                customClassName="mt-5 text-gray-800 flex flex-col gap-y-3"
                divNumber="CozyCheckoutMemberInfoTotal"
              >
                <RenderMolecule
                  moleculeConfig={{
                    type: "MoleculeItemBetween",
                  }}
                  {...{
                    item: {
                      first: {
                        value: "Хөнгөлөлт",
                        positionnemgoo: {
                          atom: {
                            type: "title",
                            className: "font-normal",
                          },
                        },
                      },
                      second: {
                        value: "-3%",
                        positionnemgoo: {
                          atom: {
                            type: "text",
                            className: "font-normal text-lg",
                          },
                        },
                      },
                    },
                  }}
                />
                <RenderMolecule
                  moleculeConfig={{
                    type: "MoleculeItemBetween",
                  }}
                  {...{
                    item: {
                      first: {
                        value: "Хүргэлт",
                        positionnemgoo: {
                          atom: {
                            type: "title",
                            className: "font-normal",
                          },
                        },
                      },
                      second: {
                        value: "5000",
                        positionnemgoo: {
                          atom: {
                            type: "currency",
                            className: "font-normal text-lg",
                          },
                        },
                      },
                    },
                  }}
                />
                <RenderMolecule
                  moleculeConfig={{
                    type: "MoleculeItemBetween",
                  }}
                  {...{
                    item: {
                      first: {
                        value: "Нийт дүн",
                        positionnemgoo: {
                          atom: {
                            type: "title",
                            className: "font-normal",
                          },
                        },
                      },
                      second: {
                        value: String(totalPrice),
                        positionnemgoo: {
                          atom: {
                            type: "currency",
                            className: "text-2xl font-bold text-gray-800",
                          },
                        },
                      },
                    },
                  }}
                />
                <button
                  className="mt-5 rounded-full w-full py-4 bg-cozy border border-cozy hover:bg-white hover:text-cozy cursor-pointer uppercase text-white font-bold"
                  type="submit"
                >
                  Худалдан авалт хийх
                </button>
              </BlockDiv>
            </BlockDiv>
          </BlockDiv>
        </BlockDiv>
      </form>
      <Modal
        visible={visibleModalQpay}
        width={600}
        footer=""
        title={"Төлбөр төлөх"}
        centered
        keyboard={true}
        onCancel={() => setVisibleModalQpay(false)}
      >
        {contentQpay}
      </Modal>
    </>
  );
}

{
  /* <RenderAtom
            item={{}}
            defaultAtom="forminput"
            customProps={{
              input: {
                className: "",
                style: {},
                type: "text",
                error: { className: "border-pink-500" },
              },
              label: {
                title: "Эцэг эхийн нэр",
                className: "",
              },
              validation: {
                required: { value: true, message: "Killer бөглөнө үү." },
                messageBlock: {
                  className: "text-pink-500",
                  style: {},
                },
              },
              fieldName: "lastname",
              register: register,
              errors: errors,
            }}
          /> */
}
{
  /* <RenderAtom
            item={{}}
            defaultAtom="forminput"
            customProps={{
              input: {
                className: "",
              },
              label: {
                title: "Нэр",
              },
              validation: {
                required: {
                  value: true,
                  // message: "Энийг заавал бөглөх ёстой.",
                },
                messageBlock: {
                  className: "text-pink-500",
                  style: {},
                },
              },
              fieldName: "firstname",
              register: register,
              errors: errors,
            }}
          /> */
}
