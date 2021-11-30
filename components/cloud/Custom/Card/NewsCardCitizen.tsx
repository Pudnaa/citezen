import { FC } from "react";
import {
  positionToPath,
  otherAttrToObj,
  renderPositionType,
} from "util/helper";

import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomLink,
  AtomImage,
} from "@components/common/Atom";
type PropsType = {
  item: any;
  position: any;
  type: any;
};

const NewsCardCitizen: FC<PropsType> = ({ item, position, type }) => {
  //console.log("fuk cardstylewithfeaturedpostandpolls", item);

  return (
    <div className=" w-full rounded bg-gray-100 dark:bg-gray-800">
      <div>
        <AtomImage
          item={renderPositionType(item, "position2", position)}
          customClassName="h-auto w-auto rounded object-cover object-center"
        />
      </div>
      <div className="py-5 px-5 font-medium">
        <div className="flex justify-between">
          <AtomText
            item={renderPositionType(item, "position5", position)}
            customClassName="text-xs text-gray-500"
          />
          <AtomText
            item={renderPositionType(item, "position40", position)}
            customClassName="text-xs text-green-600"
          />
        </div>
        {/*
            link={`1636537588261137?id=${renderPositionType(
            item,
            "position45",
            position
          )}`}
           */}
        <AtomTitle
          item={renderPositionType(item, "position1", position)}
          customClassName="mt-4 text-base text-gray-700"
          link="1636537588261137"
        />
      </div>
    </div>
  );
};

export default NewsCardCitizen;
