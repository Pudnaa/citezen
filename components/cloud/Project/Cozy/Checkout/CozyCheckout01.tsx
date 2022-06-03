import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderMolecule from "@molecule/RenderMolecule";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { useSession } from "next-auth/react";
import useWidgetDataSWR from "middleware/components/dataHook/useWidgetDataSWR";

const CozyCheckout01 = () => {
  const { data: session, status }: any = useSession();

  //хэрэглэгчийн мэдээллийг авчирна.
  const [dataSrc, dataError, dataMutate] = useWidgetDataSWR(
    { metadataid: "1641286248021150" },
    {
      criteria: {
        defaultQuery: {
          filterCustUserId: [
            {
              operator: "=",
              operand: session?.id,
            },
          ],
        },
      },
    }
  );

  const userInfo = dataSrc[0];
  console.log("userInfo", userInfo);

  const contactInfoList = [
    {
      title: "Эцэг эхийн нэр",
      type: "text",
      name: "deliveryContactLastname",
      value: userInfo.lastname || "",
      placeholder: "Эцгийн нэр",
    },
    {
      title: "Нэр",
      type: "text",
      name: "deliveryContactLastname",
      value: userInfo.firstname || "",
      placeholder: "Таны нэр",
    },
    {
      title: "Гар утас",
      type: "number",
      name: "deliveryContactPhone",
      value: userInfo.firstphone || "",
      placeholder: "Утасны дугаар",
    },
    {
      title: "Гэрийн утас",
      type: "number",
      name: "deliveryContactPhone2",
      value: userInfo.firstphone || "",
      placeholder: "Утасны дугаар",
    },
    {
      title: "И-мэйл",
      type: "email",
      name: "email",
      value: userInfo.firstemail || "",
      placeholder: "Имэйл",
    },
  ];

  return (
    <BlockDiv
      customClassName="flex p-6 rounded-lg bg-white w-full flex-col"
      divNumber="CozyCheckout01Outer"
    >
      <BlockDiv
        customClassName="flex flex-row items-center gap-x-5"
        divNumber="CozyCheckout01TitleBlock"
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

      <BlockDiv
        customClassName="mt-6 grid grid-cols-3 w-full gap-x-4 gap-y-7"
        divNumber="CozyCheckout01FormBlock"
      >
        {contactInfoList.map((item: any, index: number) => {
          return (
            <RenderMolecule
              key={item?.id || index}
              moleculeConfig={{
                type: "MoleculeInput",
                props: {
                  input: {
                    className:
                      "border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-cozy focus:border-cozy",
                    style: {
                      height: "40px",
                      fontSize: "14px",
                      lineHeight: "20px",
                    },
                    placeholder: item?.placeholder,
                  },
                  label: {
                    title: item.title,
                    className: "font-normal ml-3 mb-3 block",
                    style: {
                      color: "#3C3C3C",
                      fontSize: "14px",
                      lineHeight: "16px",
                    },
                  },
                  defaultValue: item?.value,
                },
              }}
              {...{
                item: {
                  // title: readyDatasrc[0]?.position1,
                },
                divNamePrefix: "appaddress",
              }}
            />
          );
        })}
      </BlockDiv>

      <RenderAtom
        item={{
          value:
            "Таны хувийн мэдээллийг зөвхөн тантай харилцахад ашиглах болно.",
        }}
        defaultAtom="text"
        customClassName="block p-5 rounded-lg mt-7"
        customStyle={{
          background: "#FFE4BB70",
        }}
      />
    </BlockDiv>
  );
};

export default CozyCheckout01;
