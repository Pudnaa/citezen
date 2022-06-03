import { useContext } from "react";
import { useSession } from "next-auth/react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";
import HeaderSearchInput from "@components/cloud/Project/Cozy/Header/HeaderSearchInput";
import CozyBasketButton from "@components/cloud/Project/Cozy/Basket/CozyBasketButton";
import CozyHeartControl from "../CozyHeartControl";

export default function CozyHeaderMain() {
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

  const { data: session, status }: any = useSession();

  const item = readyDatasrc[0] || {};

  return (
    <>
      <BlockDiv
        customClassName={`w-full h-24 flex items-center transition ease-in-out`}
        divNumber="CozyHeaderMainOuter"
      >
        <BlockDiv
          customClassName="container mx-auto flex flex-row items-center"
          divNumber="CozyHeaderMainInner"
        >
          <BlockDiv
            customClassName="flex-none"
            customStyle={{
              width: "240px",
            }}
            divNumber="CozyHeaderMainZone01"
          >
            <RenderAtom item={item.position2} defaultAtom="image" />
          </BlockDiv>
          <BlockDiv customClassName="grow" divNumber="CozyHeaderMainZone02">
            <BlockDiv
              customClassName="flex flex-row items-center justify-start mr-6"
              divNumber="divBetween"
            >
              <HeaderSearchInput
                item={{
                  icon: item.position49,
                  ...item,
                }}
              />
            </BlockDiv>
          </BlockDiv>
          <BlockDiv
            customClassName="flex-none"
            divNumber="CozyHeaderMainZone03"
          >
            <BlockDiv
              customClassName="flex gap-x-4 items-center"
              divNumber="CozyHeaderMain501"
            >
              {session && (
                <>
                  <RenderAtom
                    item={{
                      value: "far fa-gift",
                      positionnemgoo: {
                        tooltip: { text: "Бэлгийн жагсаалт" },
                      },
                    }}
                    defaultAtom="icon"
                    customClassName="text-xl"
                  />
                  <CozyHeartControl />
                  <RenderAtom
                    item={{
                      value: "far fa-wallet",
                      positionnemgoo: {
                        tooltip: { text: "Хэтэвч" },
                      },
                    }}
                    defaultAtom="icon"
                    customClassName="text-xl"
                  />
                </>
              )}
              <BlockDiv
                customClassName="flex items-center ml-3"
                divNumber="CozyHeaderMain502"
              >
                <CozyBasketButton
                  item={{
                    icon: item.position50,
                    ...item,
                  }}
                  customClassName="w-52"
                />
              </BlockDiv>
            </BlockDiv>
          </BlockDiv>
        </BlockDiv>
      </BlockDiv>
    </>
  );
}
