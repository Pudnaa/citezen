import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  AtomImage,
  AtomText,
  AtomTitle,
  AtomIcon,
  AtomInput,
} from "@components/common/Atom";
import CloudHeader1 from "@cloud/Custom/Header/Header1";

export default function WeeklyHeader() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetDefault,
  } = useContext(WidgetWrapperContext);

  return (
    <>
      <CloudHeader1 />
    </>
  );
}
