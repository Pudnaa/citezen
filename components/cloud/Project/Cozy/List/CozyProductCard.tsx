import { FC } from "react";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";
import CozyProductItemToBasketButton from "../Basket/CozyProductItemToBasketButton";
import useGetItemFromBasket from "../Basket/useGetItemFromBasket";

type PropsType = {
  item?: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

// export default function CozyProductCard() {
const CozyProductCard: FC<PropsType> = ({
  item,
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  // console.log("🚀 ~ CozyProductCard ~ item", item);
  const itemInBasket = useGetItemFromBasket(item.id);

  return (
    <>
      <BlockDiv
        customClassName={`rounded-lg bg-white ${customClassName}`}
        customStyle={{
          height: "350px",
          ...customStyle,
        }}
        divNumber="CozyProductCardOuter"
        divNamePrefix={divNamePrefix}
      >
        <BlockDiv
          customClassName="relative h-full"
          divNumber="CozyProductCardInner"
          divNamePrefix={divNamePrefix}
        >
          {/* Зураг */}
          <RenderAtom
            item={item?.position2}
            defaultAtom="image"
            customClassName="w-full h-full object-contain object-center p-0"
            customStyle={{ height: "210px" }}
            divNamePrefix={divNamePrefix}
          />
          <BlockDiv
            customClassName="p-3"
            divNumber="CozyProductCardBody"
            divNamePrefix={divNamePrefix}
          >
            {/* Ангилал */}
            <RenderAtom
              item={item?.position41}
              defaultAtom="text"
              customClassName="block pb-2 font-normal"
              customStyle={{
                fontSize: "12px",
                lineHeight: "14px",
                color: "#A0A0A0",
              }}
              divNamePrefix={`${divNamePrefix}category`}
            />
            {/* Гарчиг */}
            <RenderAtom
              item={item?.position1}
              defaultAtom="title"
              customClassName="font-medium"
              customStyle={{
                fontSize: "14px",
                lineHeight: "18px",
                color: "#3C3C3C",
              }}
              customProps={{
                truncateRow: 2,
              }}
              divNamePrefix={divNamePrefix}
            />
            {/* Тайлбар */}
            <RenderAtom
              item={item?.position3}
              defaultAtom="text"
              divNamePrefix={divNamePrefix}
            />
          </BlockDiv>
          <BlockDiv
            customClassName="flex flex-row items-center justify-between absolute bottom-0 inset-x-0 p-3"
            divNumber="CozyProductCardBottom"
            divNamePrefix={`${divNamePrefix}`}
          >
            {/* Үнэ */}
            <RenderAtom
              item={item?.position4}
              defaultAtom="currency"
              customClassName="text-cozy-second font-bold"
              divNamePrefix={`${divNamePrefix}price`}
            />
            <CozyProductItemToBasketButton
              item={item}
              itemInBasket={itemInBasket}
              divNamePrefix={divNamePrefix}
            />
          </BlockDiv>
        </BlockDiv>
      </BlockDiv>
    </>
  );
};

export default CozyProductCard;
