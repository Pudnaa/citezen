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
import BlockDiv from "@components/common/Block/BlockDiv";
import useNumber from "@customhook/useNumber";

type PropsType = {
  item?: any;
  itemInBasket?: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const CozyProductItemToBasketButtonNumber: FC<PropsType> = ({
  item,
  itemInBasket,
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  const { toggle, setToggle } = useToggle(itemInBasket ? false : true);
  const { data: session, status }: any = useSession();
  const { basketList, basketMutate, totalPrice } = useProcessBasketList();
  const { number, setNumber } = useNumber(1);

  // useDidMountEffect(() => {
  //   setToggle(itemInBasket ? false : true);
  // }, [itemInBasket]);

  return (
    <BlockDiv customClassName="flex flex-row items-center gap-x-3">
      <RenderMolecule
        moleculeConfig={{
          type: "MoleculeButtonNumberBetween",
          className:
            "bg-white text-cozy border border-cozy border-solid rounded-full",
          style: { width: "104px" },
          props: {
            onClick: (e: number) => {
              setNumber(e);
            },
            defaultValue: number,
            minValue: 1,
            button: {
              className: "text-cozy",
              icon: { className: "text-cozy" },
            },
          },
        }}
      />
      <RenderAtom
        item={{ value: "Сагс" }}
        defaultAtom="button"
        divNamePrefix={`${divNamePrefix}basket`}
        customClassName="rounded-full h-9 py-auto hover:bg-cozy/75"
        customStyle={{ width: "104px" }}
        customProps={{
          type: "primary",
          color: "cozy",
          icon: "far fa-bag-shopping mr-2",
        }}
        onClick={(e: any) => {
          useProcessAddBasketItem(item, session, null, basketMutate, number);
        }}
      />
    </BlockDiv>
  );
};

export default CozyProductItemToBasketButtonNumber;
