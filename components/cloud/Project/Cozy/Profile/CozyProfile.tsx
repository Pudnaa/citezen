import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import CozyProfileAvatar from "./CozyProfileAvatar";
import CozyProfileOrderTable from "./CozyProfileOrderTable";
import BlockDiv from "@components/common/Block/BlockDiv";

function CozyProfile() {
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

  console.log("🚀 ~ CozyProfile ~ readyDatasrc", readyDatasrc);

  const [nav, setNav] = useState(1);

  return (
    <BlockDiv customClassName="container flex gap-x-6 pt-6 mx-auto bg-transparent">
      <BlockDiv
        customClassName="flex-none w-full bg-white rounded-xl"
        customStyle={{ width: "300px" }}
      >
        <CozyProfileAvatar setNav={setNav} nav={nav} />
      </BlockDiv>

      <BlockDiv customClassName="flex-1 w-full bg-white rounded-xl">
        <CozyProfileOrderTable display={nav === 1 ? true : true} />
        <div
          className={`${
            nav === 0
              ? "flex opacity-100 h-full w-full"
              : "opacity-0 h-0 overflow-hidden"
          }`}
        ></div>
      </BlockDiv>
    </BlockDiv>
  );
}

export default CozyProfile;
