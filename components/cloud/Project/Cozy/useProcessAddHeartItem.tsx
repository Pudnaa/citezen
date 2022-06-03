import axios from "axios";
import { Result, notification } from "antd";

const useProcessAddHeartItem = async (
  item: any,
  session?: any,
  listMutate?: any
) => {
  const { data } = await axios.post(`/api/post-process`, {
    processcode: "createFavItem",
    parameters: {
      srcTableName: "CRM_CUSTOMER", //Хатуу
      trgTableName: "IM_ITEM", //Хатуу
      srcRecordId: session?.id, //customerId
      trgRecordId: item?.id, //itemId
    },
  });

  if (data.status === "success") {
    notification.open({
      // message: "Cагсанд нэмэгдлээ.",
      message: "",
      description: (
        <Result
          status="success"
          title="Хүслийн жагсаалтад амжилттай нэмлээ."
          subTitle="Дээр байх зүрхэн дээр дарж дэлгэрэнгүй жагсаалтаа үзээрэй."
          icon={null}
        />
      ),
      duration: 1.0, //default 4.5 sec
      placement: "bottomRight",
    });

    listMutate(); //Сагсны жагсаалтаа дахин дуудаж, шинэчилнэ.
  } else {
    notification.error({
      message: data.text,
    });
  }
};

export default useProcessAddHeartItem;
