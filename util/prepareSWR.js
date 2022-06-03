import _ from "lodash";
import { replaceTemplate } from "util/helper";
import { prepareQueryCriteriaV2 } from "lib/urlFunctions";
import { useCloud } from "hooks/use-cloud";
import { toBoolean } from "util/helper";

/* ------------------------------------------------------ */
/*                        CRITERIA                        */
/* ------------------------------------------------------ */
export function prepareCriteria(criteria, metadataid) {
  const cloudContext = useCloud();

  /* ------------------- criteria бэлдэх ------------------ */
  //URL-аас ирж байгаа бүх query-г авах эсэх. ignoreUrlQuery гээгүй бол авахаар хийгдсэн байгаа.
  const urlQueryAll = !toBoolean(criteria?.ignoreUrlQuery || false)
    ? cloudContext.cloudURL.query
    : {};

  //fromurl гэсэн тохиргооны дагуу авах query. ERP-аас ирнэ.
  const fromUrlQuery = criteria?.fromurl || {};

  //ERP-аас цаанаас өгсөн Query-үүд
  const defaultQuery = criteria?.defaultQuery || {};

  const queryReady = replaceTemplate(
    {
      ...defaultQuery,
      ...urlQueryAll,
      ...fromUrlQuery,
    },
    cloudContext.cloudURL.query
  );

  const myDebug = prepareDebug(metadataid);

  return JSON.stringify(prepareQueryCriteriaV2(queryReady, myDebug));
}

/* ------------------------------------------------------ */
/*                         PAGING                         */
/* ------------------------------------------------------ */
export function preparePaging(criteria) {
  const cloudContext = useCloud();

  return JSON.stringify({
    offset: replaceTemplate(criteria?.paging?.offset, {
      offset: cloudContext.cloudURL?.listOption?.paging?.offset,
    }),
    pageSize: replaceTemplate(criteria?.paging?.pagesize, {
      pagesize: cloudContext.cloudURL?.listOption?.paging?.pagesize,
    }),
    sortColumnNames: {
      [cloudContext.cloudURL?.listOption?.sorting?.sortcolumnnames]: {
        sortType: cloudContext.cloudURL?.listOption?.sorting?.sorttype,
      },
    },
  });
}

/* ------------------------------------------------------ */
/*                          DEBUG                         */
/* ------------------------------------------------------ */
export function prepareDebug(metadataid) {
  const debugList = ["1646967234234909"];
  return _.includes(debugList, metadataid);
}
