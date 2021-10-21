import React, { FC } from "react";
import {
  positionToPath,
  otherAttrToObj,
  renderPositionType,
} from "util/helper";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomButton,
} from "@components/common/Atom";

type PropsType = {
  item: any;
  otherAttr: any;
};

const MainImage: FC<PropsType> = ({ item, otherAttr }) => {
  //Шууд зураг орж ирнэ.
  //эсвэл fal fa-database гэх мэт icon орж ирнэ.

  if ((item || "fa").startsWith("fa")) {
    return <AtomIcon item={item} customClassName={otherAttr.className} />;
  } else {
    return (
      // <MotoImageCloudinary
      //   defaultClassName={otherAttr.className}
      //   image={item}
      // />
      <></>
    );
  }
  // return "Dd";
};

export default MainImage;
