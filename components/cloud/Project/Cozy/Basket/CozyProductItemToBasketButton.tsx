import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";
import useToggle from "@customhook/useToggle";
import RenderMolecule from "@molecule/RenderMolecule";
import { useSession } from "next-auth/react";
import useProcessAddBasketItem from "./useProcessAddBasketItem";
import useProcessEditBasketItem from "./useProcessEditBasketItem";
import useProcessBasketList from "./useProcessBasketList";
import useDidMountEffect from "util/useDidMountEffect";

type PropsType = {
  item?: any;
  itemInBasket?: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

// export default function CozyProductItemToBasketButton() {
const CozyProductItemToBasketButton: FC<PropsType> = ({
  item,
  itemInBasket,
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  const { toggle, setToggle } = useToggle(itemInBasket ? false : true);
  const { data: session, status }: any = useSession();
  const { basketList, basketMutate, totalPrice } = useProcessBasketList();

  useDidMountEffect(() => {
    setToggle(itemInBasket ? false : true);
  }, [itemInBasket]);

  return (
    <>
      {toggle ? (
        <RenderAtom
          item={{ value: "Сагс" }}
          defaultAtom="button"
          divNamePrefix={`${divNamePrefix}basket`}
          customClassName="rounded-full h-9 py-auto text-cozy hover:bg-cozy"
          customStyle={{ width: "104px" }}
          customProps={{
            type: "primary-border",
            color: "cozy",
            icon: "far fa-bag-shopping mr-2",
          }}
          onClick={(e: any) => {
            useProcessAddBasketItem(item, session, setToggle, basketMutate);
          }}
        />
      ) : (
        <RenderMolecule
          moleculeConfig={{
            type: "MoleculeButtonNumberBetween",
            className: "",
            style: { width: "104px" },
            props: {
              onClick: (e: any) => {
                useProcessEditBasketItem(itemInBasket, e + "", basketMutate);
              },
              defaultValue: itemInBasket?.orderqty,
              minValue: 1,
            },
          }}
        />
      )}
    </>
  );
};

export default CozyProductItemToBasketButton;
