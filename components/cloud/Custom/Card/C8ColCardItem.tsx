import { FC } from "react";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import { isEmpty } from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
} from "@components/common/Atom";
import MainImage from "@cloud/Custom/Image/MainImage";

type PropsType = {
  item: any;
  positionConfig: any;
};

const C8ColCardItem: FC<PropsType> = ({ item, positionConfig }) => {
  if (isEmpty(item)) return null;
  console.log("🚀 ~ item", item);
  console.log("🚀 ~ positionConfig", positionConfig);

  // console.log("C8ColCardItem positionO", position);
  // console.log("C8ColCardItem iconStyle", iconStyle);

  //   positionConfig: {
  //     "position2": {
  //         "id": "16312468985401",
  //         "sectionid": "16312444179581",
  //         "positionname": "position2",
  //         "fieldpath": "icon",
  //         "otherattr": ""
  //     },
  //     "position1": {
  //         "id": "16312468985411",
  //         "sectionid": "16312444179581",
  //         "positionname": "position1",
  //         "fieldpath": "title",
  //         "otherattr": ""
  //     }
  // }

  return (
    <div className="w-full h-full bg-white rounded-lg p-4 mr-3 text-xs hover:text-white group cursor-pointer bg-gradient-to-br from-white to-white hover:from-sso hover:to-sso-gradientfinish flex flex-row items-center">
      <div className="inline mr-4">
        <MainImage
          item={renderPositionType(item, "position2", positionConfig)}
          otherAttr={jsonParse(positionConfig["position2"]["otherattr"])}
        />
      </div>
      <AtomTitle
        item={renderPositionType(item, "position1", positionConfig)}
        link=""
        customStyle={{}}
        customClassName="text-sm font-bold inline"
        truncateRow={0}
      />
    </div>
  );
};

export default C8ColCardItem;
