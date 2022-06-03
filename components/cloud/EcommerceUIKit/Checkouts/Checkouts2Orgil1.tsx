import { useContext, useState, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import Router, { useRouter } from "next/router";
import _ from "lodash";
import useSWR from "swr";
import fetchJson from "lib/fetchJson";
import { isUrlPath } from "util/helper";
import { useUser } from "hooks/use-user";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
import RenderWidgetProcess from "middleware/components/WidgetForm/RenderWidgetProcess";
import QRCode from "react-qr-code";

const Checkouts2Orgil1 = () => {
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
  const userContext = useUser();
  const [session, setSession] = useState(userContext?.userData);
  const userId = session?.id || "";
  const [statusPay, setStatusPayment] = useState<any>();
  const [qrcode, setQrcode] = useState<any>();
  const { asPath, pathname } = useRouter();
  const urlIdValue3 = asPath.split("=")[1] || "";
  const urlIdValue4 = urlIdValue3.split("?")[0] || "";
  const urlIdValue = asPath.split("?")[2] || "";
  const ordernumber = urlIdValue.split("=")[1] || "";

  const paramsCheck = {
    clientId: "SKY_RESORT",
    clientSecret: "ArijcRG7",
    object_id: urlIdValue4,
  };

  const { data: statusPayment } = useSWR(
    `/api/get-process?processcode=qpay_v2_checkPayment&parameters=${JSON.stringify(
      paramsCheck,
    )}`,
    {
      refreshInterval: 2000,
      revalidateOnFocus: false,
    },
  );

  const parameters = `&parameters=${JSON.stringify({
    systemMetaGroupId: "1641437844680112",
    customerId: userId,
  })}`;

  const { data: dataa, error } = useSWR(
    `/api/get-process?processcode=PL_MDVIEW_004${parameters}`,
  );
  
  const list = _.values(dataa);
  if (list[list.length - 1] === "") list.pop();

  list.sort((x, y) => +new Date(y.orderdate) - +new Date(x.orderdate));

  useEffect(() => {
    if (!qrcode) {
      setQrcode(list);
    }
  }, [qrcode]);
  const myorder = _.filter(list, ["ordernumber", ordernumber]);
  const qrCode = myorder[0]?.qrcode || "null";

  const qpayResponse = () =>{
    return(
    <>
      <div className="border-b border-solid border-gray-200  font-semibold pb-2 text-lg text-center">
        <i className="fa-solid fa-circle-check text-green-500 pr-1"></i>
        Таны гүйлгээ амжилттай боллоо
      </div>
      <div className="py-3 flex justify-center">
        <ul>
          {/* <li className=" justify-center ">
            <span className="w-48 inline-block  text-right text-sm font-semibold pr-2">
              Төлбөр төлсөн хэлбэр :
            </span>
            {statusPayment?.rows?.length&&statusPayment?.rows[0].payment_wallet}
          </li> */}
          <li className=" justify-center ">
            <span className="w-48 inline-block  text-right text-sm font-semibold pr-2">
              Нийт дүн :
            </span>{" "}
            {statusPayment?.paid_amount}₮
          </li>
          <li className="text-center text-lg font-semibold   mt-4"></li>
        </ul>
      </div>
      <div className="py-3 flex justify-center mb-6">
        <QRCode value={qrCode} />
      </div>
    </>);
  }

  const paymentStatus = async (status:any, order:any) => {
    const processParameters = {
      id: order,
      wfmStatusId: status,
    };
    const response: any = await fetchJson(
      `/api/get-process?processcode=cl_sdmOrderBookRowDv_002&parameters=${JSON.stringify(
        processParameters,
      )}`,
    ); 
    console.log("processParameters",processParameters);
    console.log("responseresponse",response);
    // if(response){
    // }
  };

  const socialPayResponse =  () => {
    const golomtbankCallback = asPath.split("?")[1] || "";
    const gpath = golomtbankCallback.split("=") || "";
    const invoice = gpath[1].split("&")[0] || "";
    const status_code = gpath[2]?.split("&")[0] || "";
    let statusCode = "1644377343561328";
    let statusStr = "";

    switch (status_code) {
      case "000":
        statusCode = "1642050656042307";
        statusStr = "Aмжилттай төлөгдөлөө";
        break;
      case "306":
        statusCode = "1644377343561328";
        statusStr = "Захиалга цуцлагдалаа";
      case "022":
        statusCode = "1644377343561328";
        statusStr = "Захиалга цуцлагдалаа";
        break;
      default:
        statusCode = "";
    }
    const selectOrder = _.filter(list, ["ordernumber", invoice]);
    console.log("status_codestatus_code",selectOrder);
    console.log("status_codestatus_code list",list);
    paymentStatus(statusCode,selectOrder[0]?.salesorderid);

    return (<>
        <div className="border-b border-solid border-gray-200  font-semibold pb-2 text-lg text-center">
            Төлбөрийн мэдээлэл
        </div>
        <div className="py-3 flex justify-center">
            {statusStr}
        </div>
      </>);
  }

  return (
    <>  
    <div className="md:w-2/5 sm:w-full xs:w-full  rounded-lg mx-auto bg-white my-12  p-4 mb-8 justify-items-center">
     {statusPayment?.rows && qpayResponse() || socialPayResponse()}
    </div>
    </>
  );
};

export default Checkouts2Orgil1;
