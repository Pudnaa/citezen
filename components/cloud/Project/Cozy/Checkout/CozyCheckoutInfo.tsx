import { FC, useState, useEffect } from "react";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import fetchJson from "lib/fetchJson";
import { useSession } from "next-auth/react";
import useProcessBasketList from "../Basket/useProcessBasketList";
import moment from "moment";

type PropsType = {
  dataOrder?: any;
  setData?: any;
};

const CozyCheckoutInfo: FC<PropsType> = ({ dataOrder, setData }) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const { data: session, status }: any = useSession();
  const { basketList, basketMutate, totalPrice } = useProcessBasketList();
  //console.log("Session", session);
  const handleFilterData = async () => {
    const criteria = {
      filterCustUserId: [
        {
          operator: "=",
          operand: session?.crmuserid,
        },
      ],
    };
    let dataInfo = await fetchJson(
      `/api/get-data?metaid=1641286248021150&pagingwithoutaggregate=1&criteria=${JSON.stringify(
        criteria
      )}`
    );
    // console.log("criteria", criteria);
    // console.log("dataInfodataInfo", dataInfo);
    dataInfo = _.values(dataInfo);
    setUserInfo(dataInfo[0]);
    setData({
      ...dataOrder,
      id: basketList[0]?.salesorderid,
      orderDate: now,
      deliveryContactLastname: dataInfo[0].lastname,
      deliveryContactName: dataInfo[0].firstname,
      deliveryContactPhone: dataInfo[0].firstphone,
      deliveryContactPhone2: dataInfo[0].firstphone,
      email: dataInfo[0].firstemail,
    });
    return dataInfo[0];
  };

  const now = moment().format("YYYY-MM-DD");
  useEffect(() => {
    if (_.isEmpty(userInfo)) handleFilterData();
  }, [userInfo]);

  const contactInfoList = [
    {
      title: "Эцэг эхийн нэр",
      type: "text",
      name: "deliveryContactLastname",
      value: userInfo.lastname || "",
    },
    {
      title: "Нэр",
      type: "text",
      name: "deliveryContactLastname",
      value: userInfo.firstname || "",
    },
    {
      title: "Гар утас",
      type: "number",
      name: "deliveryContactPhone",
      value: userInfo.firstphone || "",
    },
    {
      title: "Гэрийн утас",
      type: "number",
      name: "deliveryContactPhone2",
      value: userInfo.firstphone || "",
    },
    {
      title: "И-мэйл",
      type: "email",
      name: "email",
      value: userInfo.firstemail || "",
    },
  ];

  const updateFieldChanged = (name, index) => (event) => {
    setData({
      ...dataOrder,
      id: basketList[0]?.salesorderid,
      orderDate: now,
      [name]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col justify-start items-start space-y-9">
      <div className="flex md:p-6 xl:p-4 rounded-lg bg-white w-full  flex-col justify-start items-start">
        <BlockDiv
          customClassName="flex flex-row items-center gap-x-5"
          divNumber="CozyPayment03TitleBlock"
        >
          <RenderAtom
            item={{ value: "1" }}
            defaultAtom="text"
            customClassName="bg-cozy text-white rounded-full h-7 w-7 flex items-center justify-center font-medium"
            customStyle={{ fontSize: "16px", lineHeight: "19px" }}
          />
          <RenderAtom
            item={{ value: "Холбоо барих мэдээлэл" }}
            defaultAtom="title"
            customClassName="font-medium text-gray-900"
            customStyle={{
              fontSize: "20px",
              lineHeight: "23px",
              color: "#3C3C3C",
            }}
          />
        </BlockDiv>
        <div className="w-full flex flex-col justify-start items-start mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full  gap-3">
            {contactInfoList.map((item: any, index: number) => {
              return (
                <label
                  key={item?.id || index}
                  className="flex flex-col justify-between"
                >
                  <p className=" text-sm text-gray-800 pl-3 m-0">
                    {item.title}
                  </p>
                  <input
                    type={item.type}
                    placeholder={item.value || ""}
                    name={item.name}
                    defaultValue={item.value}
                    required
                    onChange={updateFieldChanged(item.name, index)}
                    className="mt-2 w-full bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cozy focus:border-cozy"
                  />
                </label>
              );
            })}
          </div>
        </div>

        <RenderAtom
          item={{
            value:
              "Таны хувийн мэдээллийг зөвхөн тантай харилцахад ашиглах болно.",
          }}
          defaultAtom="text"
          customClassName="block p-5 rounded-lg mt-5"
          customStyle={{
            background: "#FFE4BB70",
          }}
        />
      </div>
    </div>
  );
};

export default CozyCheckoutInfo;
