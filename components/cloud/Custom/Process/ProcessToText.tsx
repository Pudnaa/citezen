import { useContext, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import useSWR from "swr";
import { useCloud } from "hooks/use-cloud";
import { replaceTemplate } from "util/helper";

function ProcessToText() {
  const {
    pathConfig,
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
  } = useContext(WidgetWrapperContext);

  const cloudContext = useCloud();

  const { process } = widgetnemgooReady;

  console.log("ProcessToText config", config);
  console.log("ProcessToText readyDatasrc", readyDatasrc);
  console.log("ProcessToText widgetnemgooReady", widgetnemgooReady);
  console.log("ProcessToText positionConfig", positionConfig);
  console.log("ProcessToText pathConfig", pathConfig);

  // const myParameters: any = JSON.parse(
  //   template(JSON.stringify(process?.parameters), cloudContext.cloudURL.query, {
  //     pattern: "{%s}",
  //     ignoreErrors: true,
  //   }) || "{}"
  //   );

  const myParameters: any = replaceTemplate(
    process?.parameters,
    cloudContext.cloudURL.query,
  );

  // console.log("process?.parameters", process?.parameters);
  // console.log("myParameters", myParameters);

  const parameters = `&parameters=${JSON.stringify({
    // filterItemId: cloudContext.cloudURL.query.id,
    // filterPriceTypeId: 5,
    // filterPriceLocationId: null,
    // filterOrderDate: "2021-11-30",
    ...cloudContext.cloudURL.query,
    // filterCompanyDepartmentId: 1000000000,
    // ...process?.parameters,
    ...myParameters,
  })}`;

  const { data, error, mutate } = useSWR(
    `/api/get-process?processcode=${process?.processCode}${parameters}`,
  );

  // console.log("data", data);

  // console.log(
  //   "positionConfig?.position4?.positionnemgooReady",
  //   positionConfig?.position4?.positionnemgooReady
  // );

  return (
    <>
      <RenderAtom
        item={{
          value: positionConfig?.position4?.fieldpath || "Уншиж байна",
          positionnemgoo: positionConfig?.position4?.positionnemgooReady,
        }}
      />
    </>
  );
}
export default ProcessToText;
