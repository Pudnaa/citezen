import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import useToggle from "@customhook/useToggle";
import _ from "lodash";
import accounting from "accounting";
import CozySidebarBasket from "./CozySidebarBasket";
import useProcessBasketList from "./useProcessBasketList";
import AtomTooltipV2 from "@components/common/Atom/V2/AtomTooltipV2";

type PropsType = {
  item: any;
  customClassName?: string;
  customStyle?: object;
};

const CozyBasketButton: FC<PropsType> = ({
  item,
  customClassName = "",
  customStyle = {},
}) => {
  const { toggle, setToggle } = useToggle(false);
  const { basketList, basketMutate, totalPrice } = useProcessBasketList();

  return (
    <>
      <AtomTooltipV2 item={{ text: "Таны сагс (дарвал Сагс харагдана)" }}>
        <BlockDiv
          divNumber="divCozyBasketButton10"
          customClassName={`w-full relative flex flex-col cursor-pointer ${customClassName}`}
          customStyle={customStyle}
          onClick={() => setToggle(!toggle)}
        >
          {/* Зүүн талын Icon */}
          <BlockDiv
            divNumber="CozyBasketButtonLeftBlock"
            customClassName="absolute flex items-center h-full bg-cozy text-white rounded-full rounded-br-none px-5"
          >
            <div className="flex items-center relative w-full h-full">
              <RenderAtom
                item={{ value: item.icon2 }}
                defaultAtom="icon"
                customClassName="text-xl"
              />
              {basketList.length > 0 && (
                <div className="absolute top-0 -right-1">
                  <div className="animate-ping w-2 h-2 rounded-full bg-white" />
                </div>
              )}
            </div>
          </BlockDiv>
          <input
            className="focus:outline-none focus:border focus:border-gray-100 h-10 flex items-center px-5 pl-20 text-lg font-bold rounded-full w-full placeholder:text-gray-400 cursor-pointer"
            style={{ background: "#F5F5F5" }}
            placeholder="Хоосон"
            value={accounting.formatMoney(totalPrice, {
              symbol: "₮",
              format: "%v%s",
              precision: 0,
              thousand: ",",
            })}
            readOnly
          />
        </BlockDiv>
      </AtomTooltipV2>

      {toggle && <CozySidebarBasket toggle={toggle} setToggle={setToggle} />}
    </>
  );
};

export default CozyBasketButton;
