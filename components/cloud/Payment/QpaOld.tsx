import _ from "lodash";
import { useUser } from "hooks/use-user";
import { getItemObject } from "util/helper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import fetchJson from "lib/fetchJson";
import useSWR from "swr";
import axios from "axios";
import { useContext, useEffect, useState, FC } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
import { useRouter } from "next/router";
import Item from "antd/lib/list/Item";
import Image from "next/image";
import { isBrowser, isMobile } from "react-device-detect";
import { Statistic, Modal } from "antd";
type PropsType = {
  item?: any;
};

const Qpay: FC<PropsType> = ({ item }) => {
  if (_.isEmpty(item)) return null;

  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    widgetnemgooReady,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  const [res, setDatasrc] = useState<any>({});
  const [statusPay, setStatusPayment] = useState<any>();
  const [resError, setResError] = useState<any>();
  const basketList = _.values(item) || [];
  const orderid = basketList[0]?.ordernumber + " - " + basketList[0]?.orderdate;
  const salesorder = basketList[0]?.salesorderid;
  const { Countdown } = Statistic;
  let total = _.sumBy(basketList, (item: any) => {
    return item.unitprice * item.orderqty;
  });

  const deadline = Date.now() + 1000 * 60 * 15;
  const sdmSalesOrderPaymentDtl = {
    paymentTypeId: "24",
    paymentDate: item[0].orderdate,
    amt: total,
  };

  const parameters = {
    id: item[0].salesorderid,
    wfmStatusId: "1642050656876633",
    sdmSalesOrderPaymentDtl,
  };

  const qpayInfoData = async () => {
    let params = {
      clientId: "SKY_RESORT",
      clientSecret: "ArijcRG7",
      invoice_code: "SKY_RESORT_INVOICE",
      sender_invoice_no: item[0].ordernumber,
      invoice_receiver_code: salesorder,
      invoice_description: orderid,
      amount: total,
      callback_url:
        "https://www.skyresorteshop.mn/skyresort/payment?payment_id=" +
        item[0].ordernumber,
    };
    const { data } = await axios.post(`/api/post-process`, {
      processcode: "qpay_v2_createInvoice_simple",
      parameters: params,
    });

    if (data.status == "success") {
      setDatasrc(data.result);
      const { data: payStatus } = await axios.post(`/api/post-process`, {
        processcode: "cl_sdmOrderBookRowDv_002",
        parameters: parameters,
      });
      qpayMutate();
    } else {
      setResError(data.text);
      alert(data.text);
    }
  };

  useEffect(() => {
    if (_.isEmpty(res)) qpayInfoData();
  }, [res]);

  const paramsCheck = {
    clientId: "SKY_RESORT",
    clientSecret: "ArijcRG7",
    object_type: "INVOICE",
    object_id: res.invoice_id,
  };

  const {
    data: statusPayment,
    error,
    mutate: qpayMutate,
  } = useSWR(
    `/api/get-process?processcode=qpay_v2_checkPayment&parameters=${JSON.stringify(
      paramsCheck,
    )}`,
    {
      refreshInterval: 2000,
      revalidateOnFocus: false,
    },
  );

  useEffect(() => {
    if (statusPayment) {
      setStatusPayment(statusPayment);
    }
  }, [statusPayment]);

  if (!_.isEmpty(statusPayment?.rows)) {
    const qpayInfoData = async () => {
      let params = {
        wfmStatusId: "1642050656042307",
        id: salesorder,
      };
      const { data } = await axios.post(`/api/post-process`, {
        processcode: "cl_sdmOrderBookRowDv_002",
        parameters: params,
      });

      if (data.status == "success") {
        window.location.href =
          "/skyresort/payment?payment_id=" +
          res.invoice_id +
          "?order=" +
          basketList[0]?.ordernumber;
      } else {
        alert(data.text);
      }
    };
    qpayInfoData();
  }

  const onClickScan = (link: any) => {
    window.open(link);
  };

  function onFinish() {
    window.location.reload();
  }

  const Qwin = () => {
    const urlScan = _.values(res?.urls);
    if (isMobile) {
      return (
        <>
          <div className="flex justify-center text-center py-1 text-2xl border-b border-gray-300">
            {/* Төлбөр төлөх */}
            <Countdown
              title="Нэхэмжлэхийн дуусах хугацаа"
              value={deadline}
              onFinish={onFinish}
            />
          </div>
          <div className="flex justify-center my-4">
            <Image
              unoptimized
              src={`data:image/jpeg;base64,${res.qr_image}`}
              alt="QR Code"
              width={400}
              height={400}
            />
          </div>
          <div className="flex justify-center py-4 text-2xl border-t  border-gray-300">
            QR код уншуулна уу
          </div>
          <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-2">
            {urlScan.map((item: any, index: number) => {
              return (
                <>
                  <span
                    className="cursor-pointer hover:bg-blue-200  "
                    onClick={(e: any) => {
                      e.preventDefault();
                      onClickScan(item.link);
                    }}
                  >
                    <Image
                      unoptimized
                      src={item.logo}
                      alt={item.description}
                      width={80}
                      height={80}
                    />
                  </span>
                </>
              );
            })}
          </div>
        </>
      );
    }
    return (
      <>
        <div className="flex justify-center text-center py-1 text-2xl border-b border-gray-300">
          <Countdown
            title="Нэхэмжлэхийн дуусах хугацаа"
            value={deadline}
            onFinish={onFinish}
          />
        </div>

        <div className="flex justify-center my-4">
          {/* <pre> {JSON.stringify(res, null, 2)}</pre> */}
          {res && (
            <Image
              unoptimized
              src={`data:image/jpeg;base64,${res.qr_image}`}
              alt="QR Code"
              width={400}
              height={400}
            />
          )}
        </div>
        <div className="flex justify-center py-4 text-2xl border-t  border-gray-300">
          QR код уншуулна уу
        </div>
      </>
    );
  };
  return (
    <>
      {Qwin()}
    </>
  );
};

export default Qpay;
