import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import CozyProductCard from "@components/cloud/Project/Cozy/List/CozyProductCard";
import RenderAtom from "@components/common/Atom/RenderAtom";
import RenderMolecule from "@molecule/RenderMolecule";
import { Rate, Empty } from "antd";
import _ from "lodash";
export default function CozyHomeDataview() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const { settings } = widgetnemgooReady || "";
  const filter = settings?.filter || "";
  const [filterItem, setFilterItem] = useState("");
  const [active, setActive] = useState(0);

  _.filter(readyDatasrc, {
    filtertype: filterItem,
  });
  const selectdata = () => {
    const data = readyDatasrc;
    if (_.isEmpty(filterItem)) {
      return data;
    } else {
      return _.filter(readyDatasrc, {
        filtertype: filterItem,
      });
    }
  };

  const onFilterEvent = (e: any, item: any) => {
    e.preventDefault();
    let filterItem = item;
    if (item == "Бүгд") {
      filterItem = "";
    }
    setFilterItem(filterItem);
  };

  return (
    <BlockDiv customClassName="w-full" divNumber="CozyHomeDataviewOuter">
      <BlockDiv
        customClassName="w-full flex flex-row items-center justify-between"
        divNumber="CozyHomeDataviewHeader"
      >
        <RenderAtom
          item={{ value: "Хэрэглэгч танд" }}
          defaultAtom="title"
          customClassName="leading-6 font-medium text-left mb-7 uppercase"
          customStyle={{
            fontSize: "38px",
            lineHeight: "47px",
            color: "rgb(60, 60, 60)",
          }}
        />
        {/* <RenderMolecule
					moleculeConfig={{
						type: "MoleculeMenu",
						className: "",
					}}
					{...{
						item: menuList,
						defaultActive: 0,
						divNamePrefix: "menus",
					}}
				/> */}

        <ul className="flex gap-4 items-center  ">
          {filter?.filterStr?.map((item: any, index: any) => {
            return (
              <li
                key={item?.id || index}
                className={`list-item cursor-pointer hover:border-b-2 hover:border-cozy text-citizen-title  text-lg py-2 border-b-2 ${
                  active === index
                    ? "border-cozy font-bold"
                    : "hover:text-cozy border-transparent "
                }`}
                onClick={(e: any) => onFilterEvent(e, item)}
              >
                <span onClick={() => setActive(index)}>{item}</span>
              </li>
            );
          })}
        </ul>
      </BlockDiv>
      {selectdata().length != 0 ? (
        <BlockDiv
          customClassName="w-full grid grid-cols-5 gap-5"
          divNumber="CozyHomeDataviewInner"
        >
          {selectdata().map((item: any, index: number) => {
            return (
              <CozyProductCard
                key={item?.id || index}
                item={item}
                customClassName="col-span-1"
                divNamePrefix="dv"
              />
            );
          })}
        </BlockDiv>
      ) : (
        <Empty description="Хоосон" className="pt-16 h-80" />
      )}
      <RenderAtom
        item={{
          value: "Бүгдийг харах",
          positionnemgoo: {
            atom: {
              type: "button",
              className:
                "cursor-pointer rounded-full px-6 py-3 font-bold bg-transparent border-solid text-[#67748E] hover:text-white hover:bg-[#67748E]",
              style: {
                fontSize: "14px",
                lineHeight: "16px",
                borderColor: "#67748E",
              },
              props: {
                type: "primary-border",
              },
            },
            tooltip: { text: "Бүгдийг харах" },
            url: {
              path: "/product",
            },
          },
        }}
        defaultAtom="button"
        customClassName="mt-10 mx-auto"
      />
    </BlockDiv>
  );
}

const menuList = [
  { position1: { value: "Онцлох" } },
  { position1: { value: "Эрэлттэй" } },
  { position1: { value: "Нэмэгдсэн" } },
  { position1: { value: "Хямдралтай" } },
];
