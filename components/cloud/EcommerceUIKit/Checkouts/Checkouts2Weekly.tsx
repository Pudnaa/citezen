import { useContext, useState, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";

import RenderAtom from "@components/common/Atom/RenderAtom";
import { useSession } from "next-auth/react";
import fetchJson from "lib/fetchJson";
const Checkouts2Weekly = () => {
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
  const { data: session, status }: any = useSession();
  // console.log("Checkouts2Weekly config", config);
  // console.log("Checkouts2Weekly readyDatasrc", readyDatasrc);
  // console.log("Checkouts2Weekly widgetnemgooReady", widgetnemgooReady);
  // console.log("Checkouts2Weekly positionConfig", positionConfig);
  const [userInfo, setUserInfo] = useState<any>({});
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
    dataInfo = _.values(dataInfo);

    setUserInfo(dataInfo[0]);
    return dataInfo[0];
  };

  useEffect(() => {
    if (_.isEmpty(userInfo)) handleFilterData();
  }, [userInfo]);
  const item = readyDatasrc[0];
  const HolbooBarihMedeelel = [
    {
      title: "Эцэг эхийн нэр",
      type: "text",
      value: userInfo.lastname || "",
    },
    {
      title: "Нэр",
      type: "text",
      value: userInfo.firstname || "",
    },
    {
      title: "Гар утас",
      type: "number",
      value: userInfo.firstphone || "",
    },
    {
      title: "Гэрийн утас",
      type: "number",
      value: userInfo.firstphone || "",
    },
    {
      title: "И-мэйл",
      type: "email",
      value: userInfo.firstemail || "",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-start items-start space-y-9">
        <div className="flex md:p-6 xl:p-2 bg-white w-full  flex-col justify-start items-start">
          <div className="flex gap-3">
            <p className="text-lg bg-cozy text-white rounded-full h-7 w-7 flex items-center justify-center ">
              1
            </p>
            <RenderAtom
              item={{ value: "Холбоо барих мэдээлэл" }}
              defaultAtom="title"
              customClassName="text-lg md:text-xl font-normal  leading-normal text-gray-900 tracking-tighter"
            />
          </div>
          <div className="w-full  flex flex-col justify-start items-start mt-2">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full  gap-3">
              {HolbooBarihMedeelel &&
                HolbooBarihMedeelel.map((item: any, index: number) => {
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
                        value={item.value}
                        readOnly
                        className="mt-2 w-full bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cozy
										focus:border-cozy"
                      />
                    </label>
                  );
                })}
            </div>
          </div>
          <div className=" mt-5 p-3 bg-yellow-100 rounded">
            <p>
              “Covid 19”-н нөхцөл байдлаас шалтгаалаад захиалгын татан авалт,
              хүргэлтэд их цаг хугацаа шаардаж байгааг эрхэм хэрэглэгч та
              ойлгоорой.
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
            .checkbox:checked + .check-icon {
                display: flex;
            }`}
      </style>
    </>
  );
};

export default Checkouts2Weekly;
