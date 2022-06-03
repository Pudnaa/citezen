import { FC, useContext, useState, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import useSWR from "swr";
import { useUser } from "hooks/use-user";
import { getItemObject } from "util/helper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import fetchJson from "lib/fetchJson";
// import { useSession } from "next-auth/react";
function CheckoutUserInfo() {
  const { config, dataMutate, positionConfig } =
    useContext(WidgetWrapperContext);
  const { userData } = useUser();
  const [userInfo, setUserInfo] = useState<any>({});
  const [profile, setProfile] = useState(userData);
  const userContext = useUser();
  const [session, setSession] = useState(userContext?.userData);
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

  // console.log("userInfo", userInfo);
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
      <div className="bg-white shadow-sm p-8 rounded-lg mt-">
        <div className="flex border-b pb-4 space-x-4 items-center">
          <span className="w-10 h-10 pt-1 rounded-full bg-skyresort text-xl  text-center text-white">
            1
          </span>
          <p className="text-lg font-medium text-gray-800">
            Холбоо барих мэдээлэл
          </p>
        </div>

        <div className="grid grid-cols-3 mt-7 gap-x-4 gap-y-7">
          {HolbooBarihMedeelel &&
            HolbooBarihMedeelel.map((item: any, index: number) => {
              return (
                <label key={index} className="flex flex-col justify-between">
                  <p className="font-semibold text-sm text-gray-800 pl-3">
                    {item.title}
                  </p>
                  <input
                    type={item.type}
                    value={item.value}
                    readOnly
                    className="mt-2 w-full bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-skyresort
										focus:border-skyresort"
                  />
                </label>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default CheckoutUserInfo;
