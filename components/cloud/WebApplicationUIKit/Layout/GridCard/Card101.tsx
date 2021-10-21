import React, { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { CartItem } from "@components/cloud/Custom/Card";
import { AtomTitle } from "@components/common/Atom";

const Card101 = () => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);

  return (
    <>
      <Title />
      <div className="grid grid-cols-3 gap-4 pt-4">
        {datasrc &&
          datasrc.map((item: any, index: any) => (
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
