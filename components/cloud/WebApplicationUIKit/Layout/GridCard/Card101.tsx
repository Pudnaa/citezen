import React, { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { CartItem } from "@components/cloud/Custom/Card";
import { AtomTitle } from "@components/common/Atom";
import IndigoBlockGrayBg from "@cloud/WebApplicationUIKit/Navigation/Tab/IndigoBlockGrayBg";

import { isEmpty } from "lodash";
const Card101 = () => {
  const {
    config,
    datasrc,
    readyDatasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  // console.log("Dd", datasrc);
  return (
    <>
      <AtomTitle
        item="Шинэ мэдээ"
        link=""
        customStyle={{}}
        customClassName="text-xl 2xl:w-80 text-gray-600"
        truncateRow={0}
      />

      <IndigoBlockGrayBg
        items={["Борлуулалт", "Маркетинг", "Хүний нөөц", "Санхүү"]}
        styling="border"
        active="border-green-600 text-green-600"
      />
      <div className="grid grid-cols-3 gap-4 pt-4">
        {readyDatasrc.map((item: any, index: any) => (
          <CartItem
            key={index}
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
