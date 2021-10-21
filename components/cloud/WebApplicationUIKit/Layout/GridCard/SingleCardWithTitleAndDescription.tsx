import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { AtomTitle, AtomList } from "@components/common/Atom";
import { isEmpty } from "lodash";

import { jsonParse } from "util/helper";
import { decode } from "html-entities";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

const SingleCardWithTitleAndDescription = () => {
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

  if (isEmpty(datasrc)) return null;

  // console.log("SingleCardWithTitleAndDescription config", config);
  // console.log("SingleCardWithTitleAndDescription datasrc", datasrc);
  // console.log("SingleCardWithTitleAndDescription otherattr", otherattr);

  let readyData = { ...datasrc[0] };
  readyData.speclist1 = jsonParse(decode(datasrc[0].speclist1));
  readyData.speclist2 = jsonParse(decode(datasrc[0].speclist2));

  return (
    <AtomList
      list={readyData.speclist1}
      customClassName="mt-5"
      valueClassName="font-semibold text-gray-700"
    />
  );
};

export default SingleCardWithTitleAndDescription;
