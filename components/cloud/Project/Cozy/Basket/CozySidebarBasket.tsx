import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import { Drawer, Empty } from "antd";
import _ from "lodash";
import useProcessBasketList from "./useProcessBasketList";
import useProcessEmptyBasket from "./useProcessEmptyBasket";
import BlockDiv from "@components/common/Block/BlockDiv";
import { useSession } from "next-auth/react";
import CozyBasketList from "./CozyBasketList";

type PropsType = {
  type?: "default" | "modern";
  toggle?: boolean;
  setToggle?: any;
  item?: any;
  customClassName?: string;
  customStyle?: object;
};

const CozySidebarBasket: FC<PropsType> = ({
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
    <Drawer
      title={<>Таны сагс ({basketList.length})</>}
      placement="right"
      visible={toggle}
      mask={true}
      width={420}
      closable={true}
      closeIcon={<i className="fas fa-times"></i>}
      onClose={() => {
        setToggle(false);
      }}
    >
      <div className="w-full h-full max-h-full overflow-hidden">
        {basketList.length > 0 ? (
          <div className="relative h-full w-full">
            <BlockDiv
              customClassName="shopping_cart_items_container overflow-auto scrollbar-thumb-gray-300  scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full h-full pr-3"
              divNumber="CozyBasketDrawerScrollBlock"
              divNamePrefix=""
            >
              <CozyBasketList />

              <RenderAtom defaultAtom="line" />

              <BlockDiv
                customClassName="flex items-center justify-end"
                divNumber="CozyBasketDrawerActions"
                divNamePrefix=""
              >
                <RenderAtom
                  item={{
                    value: "Хоослох",
                  }}
                  defaultAtom="button"
                  customClassName=""
                  customProps={{
                    type: "dotted",
                    color: "cozy",
                    icon: "far fa-trash mr-3",
                  }}
                  onClick={(e: any) => {
                    e.preventDefault();
                    useProcessEmptyBasket(
                      session,
                      basketList[0]?.salesorderid,
                      basketMutate
                    );
                  }}
                />
              </BlockDiv>
            </BlockDiv>
            <style>
              {`
                    .shopping_cart_items_container {
                        height: calc(100% - 140px);
                        min-height:0px;
                    }
                  `}
            </style>

            <BlockDiv
              customClassName="flex items-center justify-between py-3"
              divNumber="CozyBasketDrawerBottomBlock"
              divNamePrefix=""
            >
              <div className="text-lg">Нийт дүн: </div>
              <RenderAtom
                item={{
                  value: String(totalPrice),
                }}
                defaultAtom="currency"
                customClassName={`text-2xl lg:text-2xl font-bold text-gray-800`}
              />
            </BlockDiv>

            {/* Захиалах button */}
            <RenderAtom
              item={{
                value: "Захиалах",
                positionnemgoo: {
                  type: "button",
                  url: { path: "/checkout" },
                },
              }}
              customClassName="cursor-pointer text-white hover:text-white bg-cozy text-center w-full flex justify-center py-2 text-2xl rounded-full mb-2"
            />
          </div>
        ) : (
          <Empty
            className="mt-16 opacity-50"
            description="Хүссэн бараагаа сонгож сагсанд хийгээрэй."
            image="https://res.cloudinary.com/dzih5nqhg/image/upload/v1649150439/cozy/shopping-cart_1_shfxq5.png"
          />
        )}
      </div>
    </Drawer>
  );
};

export default CozySidebarBasket;
