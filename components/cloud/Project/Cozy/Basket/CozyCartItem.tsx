import { FC } from "react";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { useCloud } from "hooks/use-cloud";
import RenderMolecule from "@molecule/RenderMolecule";
import useProcessEditBasketItem from "./useProcessEditBasketItem";
import BlockDiv from "@components/common/Block/BlockDiv";
import { useSession } from "next-auth/react";

type PropsType = {
  item?: any;
  index?: number;
  onClickQty?: any;
  onClickRemove?: any;
  basketMutate?: any;
  salesorderid?: string;
};

const CozyCartItem: FC<PropsType> = ({
  item,
  index,
  onClickQty,
  onClickRemove,
  basketMutate,
  salesorderid,
}) => {
  const { data: session, status }: any = useSession();
  const cloudContext = useCloud();

  let imgSrc = item?.profilephoto;
  if (imgSrc.startsWith("storage/")) {
    imgSrc = `${cloudContext.metaConstant.ourMetaConstant.imageRootURL}${imgSrc}`;
  }

  return (
    <BlockDiv
      customClassName="flex items-center justify-between py-2.5 w-full gap-x-3"
      divNumber="CozyCartItemOuter"
      divNamePrefix=""
    >
      <BlockDiv
        customClassName="flex-none"
        divNumber="CozyCartItemLeft"
        divNamePrefix=""
      >
        {/* Зураг */}
        <RenderAtom
          item={{
            value: imgSrc,
          }}
          defaultAtom="image"
          customClassName="border border-solid border-gray-300 rounded-lg object-center object-contain w-24 h-24 p-2 block"
        />
      </BlockDiv>
      <BlockDiv
        customClassName="grow w-full"
        divNumber="CozyCartItemRight"
        divNamePrefix=""
      >
        <BlockDiv
          customClassName="flex items-center justify-between w-full"
          divNumber="CozyCartItemMiddleBlock"
          divNamePrefix=""
        >
          <RenderAtom
            item={{
              value: item?.itemname,
            }}
            defaultAtom="title"
            customClassName="font-medium"
            customStyle={{
              color: "#3C3C3C",
              fontSize: "14px",
              lineHeight: "16px",
            }}
            customProps={{
              truncateRow: 1,
            }}
          />
          <RenderAtom
            item={{ value: "fas fa-times" }}
            defaultAtom="icon"
            customClassName={`text-gray-500 hover:text-gray-800 cursor-pointer`}
            onClick={(e: any) => {
              e.preventDefault();
              onClickRemove(
                session,
                salesorderid,
                index,
                {
                  ...item,
                  rowstate: "removed",
                },
                basketMutate
              );
            }}
          />
        </BlockDiv>
        <BlockDiv
          customClassName="flex justify-between w-full items-center"
          divNumber="CozyCartItemMiddleBlock"
          divNamePrefix=""
        >
          {/* Үнэ */}
          <RenderAtom
            item={{
              value: item?.unitprice,
            }}
            defaultAtom="currency"
            customClassName="font-bold text-sm text-cozy-second"
          />
        </BlockDiv>

        <BlockDiv
          customClassName="flex items-center justify-between pt-2 w-full"
          divNumber="CozyCartItemBottomBlock"
          divNamePrefix=""
        >
          {/* Товч - Нэмэх хасах */}
          <RenderMolecule
            moleculeConfig={{
              type: "MoleculeButtonNumberBetween",
              className: "",
              style: { width: "104px" },
              props: {
                onClick: (e: any) => {
                  useProcessEditBasketItem(item, e + "", basketMutate);
                },
                defaultValue: item?.orderqty,
                minValue: 1,
              },
            }}
          />
          {/* Нийт үнэ */}
          <RenderAtom
            item={{
              value: String(item.unitprice * item.orderqty),
            }}
            defaultAtom="currency"
            customClassName={`text-lg lg:text-lg font-bold text-gray-800`}
          />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};
export default CozyCartItem;
