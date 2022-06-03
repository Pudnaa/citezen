import { useContext, useState } from "react";
import { useSession } from "next-auth/react";
import { useCloud } from "hooks/use-cloud";
import _ from "lodash";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";

import { getSlugItem } from "util/helper";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import RenderMolecule from "@molecule/RenderMolecule";
import CozyHeaderUserMenu from "./CozyHeaderUserMenu";

export default function CozyHeaderMenu() {
  const {
    config,
    readyDatasrc,
    defaultValue,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("🚀 ~ CozyHeaderMenu ~ readyDatasrc", readyDatasrc);
  const cloudContext = useCloud();
  const { data: session, status }: any = useSession();

  //Active цэсийг олж өгнө.
  const mySlug = getSlugItem(cloudContext.hostObject, 0);
  const defaultActive = _.findIndex(readyDatasrc, (e: any) => {
    return e.slug === mySlug;
  });

  return (
    <BlockDiv customClassName="" divNumber="CozyHeaderMenuOuter">
      <BlockDiv
        customClassName="container mx-auto h-14 flex flex-row items-center"
        divNumber="CozyHeaderMenuInner"
      >
        <BlockDiv
          customClassName="flex-none"
          customStyle={{
            width: "240px",
          }}
          divNumber="CozyHeaderMenuZone01"
        ></BlockDiv>
        <BlockDiv
          customClassName="flex-1 flex items-center justify-start w-full"
          divNumber="CozyHeaderMenuLeft"
        >
          <RenderMolecule
            moleculeConfig={{
              type: "MoleculeMenu",
              className: "flex flex-row",
              props: {
                active: { className: "", style: { fontWeight: "700" } },
              },
            }}
            {...{
              item: readyDatasrc,
              defaultActive: defaultActive,
              divNamePrefix: "menus",
            }}
          />
        </BlockDiv>
        <BlockDiv
          customClassName="shrink-0 flex flex-row items-center gap-x-7"
          // customStyle={{ width: "150px" }}
          divNumber="CozyHeaderMenuRight"
        >
          {session && (
            <BlockDiv
              customClassName="flex flex-row items-center gap-x-4"
              divNumber="CozyHeaderMenuRightIcons"
            >
              <RenderAtom
                item={{ value: "far fa-cog" }}
                defaultAtom="icon"
                customClassName="text-xl text-gray-200"
              />
              <RenderAtom
                item={{ value: "far fa-bell" }}
                defaultAtom="icon"
                customClassName="text-xl text-gray-200"
              />
            </BlockDiv>
          )}
          <BlockDiv customClassName="" divNumber="CozyHeaderMenuRightUserBlock">
            <CozyHeaderUserMenu />
          </BlockDiv>
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
}
