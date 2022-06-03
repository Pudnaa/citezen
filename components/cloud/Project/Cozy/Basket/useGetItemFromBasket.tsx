import _ from "lodash";
import useProcessBasketList from "./useProcessBasketList";

const useGetItemFromBasket = (itemid: string) => {
  const { basketList, basketMutate, totalPrice } = useProcessBasketList();

  const itemInBasket = _.find(basketList, { itemid: itemid });

  return itemInBasket;
};

export default useGetItemFromBasket;
