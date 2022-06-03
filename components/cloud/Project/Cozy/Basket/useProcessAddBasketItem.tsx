import fetchJson from "lib/fetchJson";
import axios from "axios";
import dayjs from "util/dayjslocale";
import { Result, notification } from "antd";
import _ from "lodash";

const useProcessAddBasketItem = async (
  item: any,
  session?: any,
  setToggle?: any,
  basketMutate?: any,
  orderQty: number = 1
) => {
  /* fetchJson нь result явуулж чадахгүй байгаа тул Сагсанд амжилттай нэмлээ гэдгийг харуулж чадахгүй байна. Иймээс axios-ийг түр ашиглая.
  // const { data: session, status }: any = useSession();

  console.log("Энд орсон.");

  const processName = "cz_sdmOrderBookRowDv_001";
  const processParameters = {
    orderDate: dayjs().format("YYYY-MM-DD"), // "2021-10-01",
    customerId: session?.id, //"16408626536111",
    sdmSalesOrderItem_dtl: {
      itemId: item?.position0?.value, //id
      orderQty: "1",
      unitPrice: item?.position4?.value, //saleprice
    },
  };
  const processResult: any = await fetchJson(
    `/api/get-process?processcode=${processName}&parameters=${JSON.stringify(
      processParameters
    )}`
  );

  console.log("xxxxxxxxxxxx", processResult);

  // basketMutate();

  return null;
  */

  if (_.isEmpty(session)) {
    notification.info({
      message: "Та хэрэглэгчээр нэвтэрч орно уу",
      duration: 1.0,
      placement: "topRight",
    });
    return null;
  }

  const { data } = await axios.post(`/api/post-process`, {
    processcode: "cz_sdmOrderBookRowDv_001",
    parameters: {
      orderDate: dayjs().format("YYYY-MM-DD"), // "2021-10-01",
      customerId: session?.id, //"16408626536111",
      custUserId: session?.crmuserid, //"16408626536111",
      sdmSalesOrderItem_dtl: {
        itemId: item?.position0?.value, //id
        orderQty: String(orderQty),
        unitPrice: item?.position4?.value, //saleprice
      },
    },
  });

  if (data.status === "success") {
    notification.open({
      // message: "Cагсанд нэмэгдлээ.",
      message: "",
      description: (
        <Result
          status="success"
          title="Сагсанд амжилттай нэмлээ."
          subTitle="Сагс хуудас руу орж сагсны дэлгэрэнгүй мэдээлээ үзээрэй."
          icon={null}
        />
      ),
      duration: 1.0, //default 4.5 sec
      placement: "bottomRight",
    });

    if (setToggle) setToggle(false); //Сагс товчийг Тоо өөрчилдөг товчоор солино.
    basketMutate(); //Сагсны жагсаалтаа дахин дуудаж, шинэчилнэ.
  } else {
    notification.error({
      message: data.text,
    });
  }
};

export default useProcessAddBasketItem;
