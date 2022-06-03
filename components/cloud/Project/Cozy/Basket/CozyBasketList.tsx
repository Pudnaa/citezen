import { Empty } from "antd";
import _ from "lodash";
import CozyCartItem from "./CozyCartItem";
import useProcessEditBasketItem from "./useProcessEditBasketItem";
import useProcessRemoveBasketItem from "./useProcessRemoveBasketItem";
import useProcessBasketList from "./useProcessBasketList";
import BlockDiv from "@components/common/Block/BlockDiv";

export default function CozyBasketList() {
  const { basketList, basketMutate, totalPrice } = useProcessBasketList();

  return (
    <BlockDiv customClassName="" divNumber="CozyBasketListOuter">
      <BlockDiv
        customClassName="flex flex-col divide-y"
        divNumber="CozyBasketListInner"
      >
        {!_.isEmpty(basketList) ? (
          <>
            {basketList.map((item: any, index: number) => {
              return (
                <CozyCartItem
                  key={item?.id || index}
                  item={item}
                  index={index}
                  onClickQty={useProcessEditBasketItem}
                  onClickRemove={useProcessRemoveBasketItem}
                  basketMutate={basketMutate}
                  salesorderid={basketList[0]?.salesorderid}
                />
              );
            })}
          </>
        ) : (
          <>
            <Empty
              className="mt-16 opacity-50"
              description="Хүссэн бараагаа сонгож сагсанд хийгээрэй."
              image="https://res.cloudinary.com/dzih5nqhg/image/upload/v1649150439/cozy/shopping-cart_1_shfxq5.png"
            />
          </>
        )}
      </BlockDiv>
    </BlockDiv>
  );
}
