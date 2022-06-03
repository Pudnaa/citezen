import { FC } from "react";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import RenderAtom from "@components/common/Atom/RenderAtom";
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
  // console.log(item);
  if (isEmpty(item)) return null;
  //console.log("🚀 ~ item", item);
  // console.log("🚀 ~ positionConfig", positionConfig);

  // console.log("C8ColCardItem positionO", position);
  // console.log("C8ColCardItem iconStyle", iconStyle);

  //   positionConfig: {
  //     "position2": {
  //         "id": "16312468985401",
  //         "sectionid": "16312444179581",
  //         "positionname": "position2",
  //         "fieldpath": "icon",
  //         "widgetnemgooReady": ""
  //     },
  //     "position1": {
  //         "id": "16312468985411",
  //         "sectionid": "16312444179581",
  //         "positionname": "position1",
  //         "fieldpath": "title",
  //         "widgetnemgooReady": ""
  //     }
  // }

  return (
    <div className="w-full h-full bg-white rounded-lg p-4 mr-3 text-xs hover:text-white group cursor-pointer bg-gradient-to-br from-white to-white hover:from-green-200 hover:to-green-200  flex flex-row items-center">
      <div className="inline mr-4">
        <MainImage
          item={renderPositionType(item, "position2", positionConfig)}
          positionnemgooReady={positionConfig["position2"]["widgetnemgooReady"]}
        />
      </div>

      <RenderAtom
        item={item?.position1}
        defaultAtom="text"
        customClassName="text-sm font-medium inline text-gray-600"
        customProps={{
          truncateRow: 2,
        }}
      />
      {/* <AtomTitle
        item={renderPositionType(item, "position1", positionConfig)}
        link=""
        customStyle={{}}
        customClassName="text-sm font-medium inline text-gray-600"
        truncateRow={0}
      /> */}
    </div>
  );
};

export default C8ColCardItem;
