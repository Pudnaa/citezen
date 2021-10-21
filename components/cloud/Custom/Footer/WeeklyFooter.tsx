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
import Footer1 from "@cloud/Custom/Footer/Footer1";

export default function WeeklyFooter() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);

  return (
    <>
      <Footer1 />
    </>
  );
}
