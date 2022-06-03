import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderMolecule from "@molecule/RenderMolecule";

const CozyPayment04 = () => {
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
  // console.log("🚀 ~ CozyPayment04 ~ readyDatasrc", readyDatasrc);

  return (
    <BlockDiv customClassName="" divNumber="CozyPayment04Outer">
      <BlockDiv customClassName="" divNumber="CozyPayment04Inner">
        <BlockDiv
          customClassName="flex flex-row items-center gap-x-5"
          divNumber="CozyPayment04TitleBlock"
        >
          {JSON.stringify(readyDatasrc)}
          <RenderAtom
            item={{ value: "4" }}
            defaultAtom="text"
            customClassName="bg-cozy text-white rounded-full h-9 w-9 flex items-center justify-center font-medium"
            customStyle={{ fontSize: "16px", lineHeight: "19px" }}
          />
          <RenderAtom
            item={{ value: "Төлбөрийн нөхцөл" }}
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
          customClassName="grid grid-cols-2 gap-5 mt-5"
          divNumber="CozyPayment04CardBlock"
        >
          {readyDatasrc.map((item: any, index: number) => {
            return (
              <RenderMolecule
                key={item?.id || index}
                moleculeConfig={{
                  type: "MoleculeCard",
                  className:
                    "bg-gray-50 p-5 rounded-lg bg-[#F5F5F5] hover:bg-cozy hover:text-white cursor-pointer",
                }}
                {...{
                  item: {
                    title: item?.position1,
                    subtitle: item?.position40,
                    image: item?.position2,
                    description: item?.position3,
                    mainnumber: item?.position4,
                    button: item?.position10,
                  },
                  divNamePrefix: "cozy4",
                }}
              />
            );
          })}
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};

export default CozyPayment04;
