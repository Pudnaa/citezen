import React, { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { CartItem } from "@components/cloud/Custom/Card";
import { AtomTitle } from "@components/common/Atom";
import IndigoBlockGrayBg from "@cloud/WebApplicationUIKit/Navigation/Tab/IndigoBlockGrayBg";

import { isEmpty } from "lodash";
const Card101 = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext);
  // console.log("Dd", readyDatasrc);
  return (
    <>
      <AtomTitle
        item="Шинэ мэдээ"
        link=""
        customStyle={{}}
        customClassName="text-xl text-citizen-title font-semibold"
        truncateRow={0}
      />

      <IndigoBlockGrayBg
        items={["Борлуулалт", "Маркетинг", "Хүний нөөц", "Санхүү"]}
        styling="border"
        active="border-blue-600 text-blue-600"
      />
      <div className="grid grid-cols-3 gap-4 pt-8">
        {readyDatasrc.map((item: any, index: any) => (
          <CartItem
            key={item?.id || index}
            item={item}
            position={positionConfig}
            type={4}
          />
        ))}
      </div>
    </>
  );
};

export default Card101;
