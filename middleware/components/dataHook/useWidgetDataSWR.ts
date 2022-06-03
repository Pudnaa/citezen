import useSWR from "swr";
import _ from "lodash";
import { useCloud } from "hooks/use-cloud";
import * as prepareSWR from "util/prepareSWR";

const useWidgetDataSWR = (listConfig?: any, widgetnemgooReady?: any) => {
  const cloudContext = useCloud();
  const criteria = widgetnemgooReady?.criteria;
  const metadataid = listConfig?.metadataid;

  /* ----------------- prepare Parameters ----------------- */
  const myMetaName = cloudContext.metaConstant.ourMetaConstant.metaName;
  const myCriteria = prepareSWR.prepareCriteria(criteria, metadataid);
  const myPaging = prepareSWR.preparePaging(criteria);
  const myDebug = prepareSWR.prepareDebug(metadataid);

  /* --------------------- Call useSWR -------------------- */
  let { data, error, mutate } = useSWR(
    `/api/get-data?metaid=${metadataid}&criteria=${myCriteria}&paging=${myPaging}&metaName=${myMetaName}&debug=${myDebug}`
  );

  /* -------------------- prepare Data -------------------- */
  let aggregatecolumns: string = "";
  let paging: any = {};

  let dataReady = data;
  if (data) {
    aggregatecolumns = dataReady?.aggregatecolumns;
    paging = dataReady?.paging;
    dataReady = _.values(_.omit(dataReady, ["aggregatecolumns", "paging"]));
  }

  /* ----------------------- return ----------------------- */
  return [dataReady, error, mutate, paging, aggregatecolumns];
};

export default useWidgetDataSWR;
