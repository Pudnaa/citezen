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
  positionnemgooReady?: any;
};

const MainImage: FC<PropsType> = ({ item, positionnemgooReady }) => {
  //Шууд зураг орж ирнэ.
  //эсвэл fal fa-database гэх мэт icon орж ирнэ.
  // console.log(item);
  if ((item || "fa").startsWith("fa")) {
    return (
      <AtomIcon item={item} customClassName={positionnemgooReady?.className} />
    );
  } else {
    return (
      <>
        <img src={item} className="w-10 h-10" alt="dd" />
      </>
    );
  }
  // return "Dd";
};

export default MainImage;
