import { FC } from "react";
import RenderAtom from "@components/common/Atom/RenderAtom";
import ModalSkyResortProductReview from "@components/common/Modals/ModalSkyResortProductReview";

type PropsType = {
  item?: any;
  type?: string;
};

const SkyResortCard: FC<PropsType> = ({ item, type = "default" }) => {
  // console.log("🚀 ~ item", item);
  // const isNemelt = type === "compact";
  const isNemelt = false;
  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <div className="w-full h-auto bg-white flex-none relative">
        <RenderAtom
          item={item?.position2}
          defaultAtom="image"
          customClassName="w-full h-auto rounded-t-xl"
        />
        <div className="absolute top-2 right-2">
          <RenderAtom
            item={item?.position51}
            defaultAtom="tag"
            customProps={{ color: "green-300" }}
          />
        </div>
      </div>

      <div className="p-5 text-gray-600">
        {!isNemelt && (
          <RenderAtom
            item={item?.position1}
            defaultAtom="title"
            customProps={{
              truncateRow: 2,
            }}
            customClassName={`hover:text-skyresort duration-300`}
          />
        )}
        {isNemelt && <ModalSkyResortProductReview item={item} />}

        <hr className="my-5" />

        <RenderAtom
          item={item?.position3}
          defaultAtom="text"
          customClassName=""
          customProps={{
            truncateRow: 4,
          }}
        />

        <hr className="my-5" />

        <div className="flex flex-row items-baseline space-x-4">
          <RenderAtom item={item?.position4} defaultAtom="currency" />
          <RenderAtom
            item={item?.position92}
            defaultAtom="text"
            customClassName=""
          />
        </div>
      </div>

      {!isNemelt && (
        <div className="grow w-full p-5 h-full">
          <div className="w-full">
            <RenderAtom item={item?.position9} defaultAtom="text" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SkyResortCard;
