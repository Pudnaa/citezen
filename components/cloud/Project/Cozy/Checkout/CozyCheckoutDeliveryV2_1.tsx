import { FC, useState, useEffect } from "react";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import fetchJson from "lib/fetchJson";
import { useSession } from "next-auth/react";
import Select from "react-select";
import moment from "moment";
type PropsType = {
  orderObject?: any;
  setOrderObject?: any;
  formRef?: any;
};

const CozyCheckoutDeliveryV2_1: FC<PropsType> = ({
  orderObject,
  setOrderObject,
  formRef,
}) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const { data: session, status }: any = useSession();

  const options = [{ value: "1552282571200", label: "Улаанбаатар" }];
  const options1 = [
    { value: "1104", label: "Баянгол" },
    { value: "1110", label: "Баянзүрх" },
    { value: "1122", label: "Хан-Уул" },
  ];
  const options2 = [
    { value: "625263", label: "6" },
    { value: "625264", label: "7" },
    { value: "625265", label: "8" },
  ];

  return (
    <div className="flex  items-center space-y-9 mt-6">
      <div className="flex md:p-6 xl:p-4 rounded-lg bg-white w-full  flex-col justify-start items-start">
        <BlockDiv
          customClassName="flex flex-row items-center gap-x-5"
          divNumber="CozyPayment03TitleBlock"
        >
          <RenderAtom
            item={{ value: "2" }}
            defaultAtom="text"
            customClassName="bg-cozy text-white rounded-full h-7 w-7 flex items-center justify-center font-medium"
            customStyle={{ fontSize: "16px", lineHeight: "19px" }}
          />
          <RenderAtom
            item={{ value: "Хүргэх хаяг" }}
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
            <div>
              <p className="pl-2 mb-1">Аймаг / Хот</p>
              <Select options={options} name="deliveryDistrictId" />
            </div>
            <div>
              <p className="pl-2 mb-1">Сум / Дүүрэг</p>
              <Select options={options1} name="deliveryCityId" />
            </div>
            <div>
              <p className="pl-2 mb-1">Баг / Хороо</p>
              <Select options={options2} name="deliveryStreetId" />
            </div>
          </div>
        </div>
        <div className="mt-4 w-full  ">
          <p className="pl-2 mb-1">Дэлгэрэнгүй хаяг</p>
          <textarea
            placeholder=""
            name="deliveryAddress"
            className="rounded-lg border border-gray-300 focus:border-cozy active:border-cozy w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CozyCheckoutDeliveryV2_1;
