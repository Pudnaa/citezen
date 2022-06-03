import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderMolecule from "@molecule/RenderMolecule";

const Checkouts2Weekly2 = () => {
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
  const [show2, setshow2] = useState(false);

  console.log("🚀 ~ Checkouts2Weekly2 ~ readyDatasrc", readyDatasrc);
  const item = readyDatasrc[0];
  return (
    <BlockDiv customClassName="" divNumber="Checkouts2Weekly2Outer">
      <BlockDiv customClassName="" divNumber="Checkouts2Weekly2Inner">
        <BlockDiv
          customClassName="flex flex-row items-center gap-x-5"
          divNumber="Checkouts2Weekly2TitleBlock"
        >
          <RenderAtom
            item={{ value: "3" }}
            defaultAtom="text"
            customClassName="bg-cozy text-white rounded-full h-9 w-9 flex items-center justify-center font-medium"
            customStyle={{ fontSize: "16px", lineHeight: "19px" }}
          />
          <RenderAtom
            item={{ value: "Хүргэх хуваарь" }}
            defaultAtom="title"
            customClassName="font-medium text-gray-900"
            customStyle={{
              fontSize: "20px",
              lineHeight: "23px",
              color: "#3C3C3C",
            }}
          />
        </BlockDiv>
        <RenderAtom
          item={{ value: "Огноо" }}
          defaultAtom="text"
          customClassName="text-gray-600 block mt-6 mb-2 ml-2"
        />
        <BlockDiv
          customClassName="grid grid-cols-3 gap-x-5"
          divNumber="Checkouts2Weekly2ButtonBlock"
        >
          <RenderMolecule
            moleculeConfig={{
              type: "MoleculeInput",
              props: {
                input: {
                  className: "rounded-lg border-cozy",
                  style: {
                    height: "40px",
                    fontSize: "14px",
                    lineHeight: "20px",
                  },
                  placeholder: "Огноо оруулна уу...",
                },
              },
            }}
            {...{
              item: {
                // icon: "far fa-user",
                // icon2: "far fa-car",
                title: readyDatasrc[0]?.position1,
                image: readyDatasrc[0]?.position2,
                description: readyDatasrc[0]?.position3,
                mainnumber: readyDatasrc[0]?.position4,
                button: readyDatasrc[0]?.position90,
              },
              divNamePrefix: "appaddress",
            }}
          />
          <RenderAtom
            item={{ value: "Маргааш" }}
            defaultAtom="button"
            customProps={{ type: "primary", color: "cozy" }}
            customClassName="rounded-lg"
          />
          <RenderAtom
            item={{ value: "Нөгөөдөр" }}
            defaultAtom="button"
            customProps={{ type: "primary-border", color: "gray-500" }}
            customClassName="rounded-lg"
          />
        </BlockDiv>
        <BlockDiv
          customClassName="grid grid-cols-3 gap-x-5 mt-5"
          divNumber="Checkouts2Weekly2TimeBlock"
        >
          {readyDatasrc.map((item: any, index: number) => {
            return (
              <RenderMolecule
                key={item?.id || index}
                moleculeConfig={{
                  type: "MoleculeCard",
                  className: "bg-gray-50 p-5 rounded-lg",
                  style: { background: "#F5F5F5" },
                }}
                {...{
                  item: {
                    title: item?.position1,
                    image: item?.position2,
                    description: item?.position3,
                    mainnumber: item?.position4,
                    button: item?.position90,
                  },
                  divNamePrefix: "",
                }}
              />
            );
          })}
        </BlockDiv>

        <RenderAtom
          item={{
            value:
              "Covid 19-н нөхцөл байдлаас шалтгаалаад захиалгын татан авалт, хүргэлтэд их цаг хугацаа шаардаж байгааг эрхэм хэрэглэгч та ойлгоорой.",
          }}
          defaultAtom="text"
          customClassName="block p-5 rounded-lg mt-5"
          customStyle={{
            background: "#FFE4BB70",
          }}
        />
        <RenderMolecule
          moleculeConfig={{
            type: "MoleculeCheckbox",
            className: "mt-5",
            style: {},
          }}
          {...{
            item: [
              {
                title: "Яаралтай хүргэлтээр (30 мин - 2 цаг)",
              },
            ],
            divNamePrefix: "",
          }}
        />
      </BlockDiv>
    </BlockDiv>
  );
};

export default Checkouts2Weekly2;
