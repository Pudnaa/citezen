import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import { Empty } from "antd";
import _ from "lodash";
import useProcessBasketList from "../Basket/useProcessBasketList";
import useProcessEmptyBasket from "../Basket/useProcessEmptyBasket";
import BlockDiv from "@components/common/Block/BlockDiv";
import { useSession } from "next-auth/react";
import CozyBasketList from "../Basket/CozyBasketList";

type PropsType = {
  type?: "default" | "modern";
  toggle?: boolean;
  setToggle?: any;
  item?: any;
  customClassName?: string;
  customStyle?: object;
};

const CozyCheckoutBasketList: FC<PropsType> = ({
  type = "default",
  toggle = false,
  setToggle,
  item,
  customClassName = "",
  customStyle = {},
}) => {
  const { data: session, status }: any = useSession();
  const { basketList, basketMutate, totalPrice } = useProcessBasketList();

  return (
    <BlockDiv
      customClassName="w-full h-full max-h-full overflow-hidden"
      divNumber="CozyCheckoutBasketListOuter"
    >
      <BlockDiv
        customClassName="w-full h-full max-h-full overflow-hidden"
        divNumber="CozyCheckoutBasketListHeader"
      >
        <RenderAtom
          item={{ value: `Таны сагс (${basketList.length})` }}
          defaultAtom="title"
          customClassName="font-semibold"
          customStyle={{ fontSize: "20px", lineHeight: "23px" }}
        />
        <RenderAtom defaultAtom="line" />
      </BlockDiv>
      <BlockDiv
        customClassName="w-full h-full max-h-full overflow-hidden"
        divNumber="CozyCheckoutBasketListBody"
      >
        {basketList.length > 0 ? (
          <div className="relative h-full w-full">
            <BlockDiv
              customClassName="overflow-auto scrollbar-thumb-gray-300  scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full h-full pr-3"
              divNumber="CozyCheckoutBasketListBlock"
              divNamePrefix=""
            >
              <CozyBasketList />
            </BlockDiv>
          </div>
        ) : (
          <Empty
            className="mt-16 opacity-50"
            description="Хүссэн бараагаа сонгож сагсанд хийгээрэй."
            image="https://res.cloudinary.com/dzih5nqhg/image/upload/v1649150439/cozy/shopping-cart_1_shfxq5.png"
          />
        )}
      </BlockDiv>

      <BlockDiv
        customClassName=""
        divNumber="CozyCheckoutBasketListBottom pt-10"
      >
        <RenderAtom defaultAtom="line" />

        <BlockDiv
          customClassName="flex items-center justify-between py-3"
          divNumber="CozyCheckoutBasketListBottomItem"
        >
          <RenderAtom
            item={{
              value: "Нийт дүн",
            }}
            defaultAtom="text"
            customClassName={`font-semibold text-[#3C3C3C]`}
            customStyle={{ fontSize: "16px", lineHeight: "19px" }}
          />
          <RenderAtom
            item={{
              value: String(totalPrice),
            }}
            defaultAtom="currency"
            customClassName={`font-semibold text-[#3C3C3C]`}
            customStyle={{ fontSize: "16px", lineHeight: "19px" }}
          />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};

export default CozyCheckoutBasketList;
