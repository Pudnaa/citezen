import { useSession } from "next-auth/react";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import useGetItemFromBasket from "../Basket/useGetItemFromBasket";
import useGetItemFromHeartList from "../useGetItemFromHeartList";
import CozyProductItemToBasketButtonNumber from "../Basket/CozyProductItemToBasketButtonNumber";
import useProcessAddHeartItem from "../useProcessAddHeartItem";
import useProcessRemoveHeartItem from "../useProcessRemoveHeartItem";
import useProcessHeartList from "../useProcessHeartList";

const CozyProductDetailMainInfo = ({ item }) => {
  const { data: session, status }: any = useSession();

  console.log("🚀 ~ CozyProductDetailMainInfo ~ item", item);
  const itemInBasket = useGetItemFromBasket(item.id);

  const { heartList, heartMutate } = useProcessHeartList();
  const itemInHeart = useGetItemFromHeartList(item.id);

  const blockClassName = "py-5";

  // console.log("🚀 ~ CozyProductDetailMainInfo ~ session", session);

  return (
    <>
      {/* Ангилал */}
      <BlockDiv
        customClassName={`${blockClassName}`}
        divNumber="CozyProductDetailMainInfoBlock"
      >
        <RenderAtom
          item={{ value: "Ангилал" }}
          defaultAtom="text"
          customClassName="text-sm font-semibold leading-normal text-gray-700 block"
        />

        <RenderAtom
          item={{ value: `#${item?.itemcode}` }}
          defaultAtom="text"
          customClassName="text-sm leading-6 text-gray-700 block"
        />
      </BlockDiv>

      {/* Хямдрал */}
      <BlockDiv
        customClassName={`${blockClassName}`}
        divNumber="CozyProductDetailMainInfoBlock"
      >
        <BlockDiv
          customClassName="rounded-lg py-3 px-5 flex flex-row items-center justify-between"
          customStyle={{
            backgroundColor: "#f5f5f5",
          }}
          divNumber="CozyProductDetailMainInfoBlock1SaleBlock"
        >
          <RenderAtom
            item={{ value: "Хямдрал дуусахад" }}
            defaultAtom="text block"
            customClassName="uppercase text-cozy font-medium"
          />
          <RenderAtom
            item={{ value: "30 өдөр 08 цаг 40 минут 16 секунд" }}
            defaultAtom="text block"
            customClassName=""
          />
        </BlockDiv>

        <RenderAtom
          item={item?.position1}
          defaultAtom="title"
          customClassName="font-bold mt-5"
          customStyle={{
            fontSize: "30px",
            lineHeight: "35px",
            color: "#3C3C3C",
          }}
        />

        {/* Үнэ */}
        <RenderAtom
          item={{ value: item.saleprice }}
          defaultAtom="currency"
          customClassName="font-bold mt-3 block"
          customStyle={{
            fontSize: "30px",
            lineHeight: "35px",
            color: "#ED975C",
          }}
        />
      </BlockDiv>

      {/* Холбоотой ангилал */}
      <BlockDiv
        customClassName={`${blockClassName}`}
        divNumber="CozyProductDetailMainInfoBlock"
      >
        <div className="flex items-center justify-start space-x-5">
          <RenderAtom
            item={{ value: "Холбоотой" }}
            defaultAtom="text"
            customClassName="text-sm leading-normal text-gray-700 "
          />
          <div className="flex gap-2">
            <RenderAtom
              item={{ value: "test" }}
              defaultAtom="text"
              customClassName="text-sm leading-normal text-gray-700 border rounded-full px-3 cursor-pointer flex items-center"
              customStyle={{ height: "30px", borderColor: "#E1E1E1" }}
            />
            <RenderAtom
              item={{ value: "test" }}
              defaultAtom="text"
              customClassName="text-sm leading-normal text-gray-700 border rounded-full px-3 cursor-pointer flex items-center"
              customStyle={{ height: "30px", borderColor: "#E1E1E1" }}
            />
          </div>
        </div>
      </BlockDiv>

      {/* Сагс, хүслийн жагсаалт */}
      <BlockDiv
        customClassName={`${blockClassName}`}
        divNumber="CozyProductDetailMainInfoBlock"
      >
        <div className="py-4 w-full xl:w-auto flex flex-row jusitfy-between items-start space-x-4">
          <CozyProductItemToBasketButtonNumber
            item={item}
            itemInBasket={itemInBasket}
            divNamePrefix="productdetail"
          />
          {itemInHeart ? (
            <>
              <RenderAtom
                item={{ value: "Хүслийн жагсаалт" }}
                defaultAtom="button"
                customProps={{
                  type: "text",
                  icon: "fas fa-heart mr-3 text-pink-700",
                  color: "cozy",
                }}
                customClassName="text-pink-700 text-left"
                customStyle={{ height: "35px", lineHeight: "16px" }}
                onClick={(e: any) => {
                  useProcessRemoveHeartItem(item, session, heartMutate);
                }}
              />
            </>
          ) : (
            <>
              <RenderAtom
                item={{ value: "Хүслийн жагсаалтад нэмэх" }}
                defaultAtom="button"
                customProps={{
                  type: "text",
                  icon: "far fa-heart mr-3",
                  color: "cozy",
                }}
                customClassName="text-left"
                customStyle={{ height: "35px", lineHeight: "16px" }}
                onClick={(e: any) => {
                  useProcessAddHeartItem(item, session, heartMutate);
                }}
              />
            </>
          )}
        </div>
      </BlockDiv>

      {/* Хүргэлт, Хугацаа, Буцаах */}
      <BlockDiv
        customClassName={`flex flex-col gap-y-2 ${blockClassName}`}
        divNumber="CozyProductDetailMainInfoBlock"
      >
        {listData.map((item: any, index: number) => {
          return <ListItem2 item={item} key={item?.id || index} />;
        })}
      </BlockDiv>
    </>
  );
};

export default CozyProductDetailMainInfo;

const listData = [
  { title: "Хүргэлт", value: "Үнэгүй" },
  { title: "Хугацаа", value: "3 цаг" },
  {
    title: "Буцаах",
    value:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
  },
];

const ListItem2 = ({ item }) => {
  return (
    <BlockDiv
      customClassName="flex flex-row items-start gap-x-0"
      divNumber="CozyProductDetailMainInfoBlock5Item"
    >
      <RenderAtom
        item={{ value: item.title }}
        defaultAtom="text"
        customClassName="w-24 flex-none font-medium"
      />
      <RenderAtom
        item={{ value: item.value }}
        defaultAtom="text"
        customClassName="grow"
      />
    </BlockDiv>
  );
};
