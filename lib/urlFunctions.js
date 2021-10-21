export const prepareQuery = (query) => {
  const myQuery = { ...query };
  delete myQuery.pagesize;
  delete myQuery.offset;
  delete myQuery.sortcolumnnames;
  delete myQuery.sorttype;
  delete myQuery.viewtype;

  return myQuery;
};

export const preparePaging = (query, listShortConfig) => {
  return {
    pagesize:
      query?.pagesize || listShortConfig?.listOption?.paging?.pagesize || "12",
    offset: query?.offset || listShortConfig?.listOption?.paging?.offset || "1",
  };
};

export const prepareSorting = (query, listShortConfig) => {
  // sortcolumnnames=createddate
  // sorttype=desc

  return {
    sortcolumnnames:
      query?.sortcolumnnames ||
      listShortConfig?.listOption?.paging?.sortcolumnnames ||
      "createddate",
    sorttype:
      query?.sorttype ||
      listShortConfig?.listOption?.paging?.sorttype ||
      "desc",
  };
};

export const prepareViewtype = (query, listShortConfig) => {
  return {
    viewtype:
      query?.viewtype ||
      listShortConfig?.listOption?.viewtype?.viewtype ||
      "classic",
    mainimagedisplay:
      listShortConfig?.listOption?.viewtype?.mainimagedisplay || "contain",
  };
};

// export const prepareUrlQueryToCriteria = (query) => {
//   const tempCriteria = encodeCriteria(
//     {
//       ...query,
//     } || {}
//   );

//   return `&criteria=${JSON.stringify(tempCriteria)}`;
// };

export const prepareRawUrlQueryToCriteria = (query) => {
  // console.log("query", query);

  let myQuery = {};
  let productCriteriaOperand = "0=0";
  Object.keys(query).map((item, index) => {
    const key = item;
    const value = query[item];

    switch (true) {
      case key === "title":
        //%like% гэсэн форматаар хайх ёстой.
        break;
      case key.charAt(0) === "*":
        //*-оор эхэлсэн тусгай талбар гэсэн үг
        const encodedValue = JSON.parse(atob(value || "") || "{}");
        // myQuery = { [key.substring(1)]: encodedValue, ...myQuery };

        if (productCriteriaOperand === "0=0") {
          productCriteriaOperand = `ii.item_id in (select book_id from kpi where(kpi.indicator_id=${encodedValue.indicatorId} and (Kpi.value = to_char(${encodedValue.value})  )))`;
        } else {
          productCriteriaOperand += `and ii.item_id in (select book_id from kpi where(kpi.indicator_id=${encodedValue.indicatorId} and (Kpi.value = to_char(${encodedValue.value})  )))`;
        }
        break;
      default:
        myQuery = { [key]: value, ...myQuery };
        break;
    }
  });

  // console.log("myQuery", myQuery);
  const myProductCriteria = [
    {
      operator: "=",
      operand: productCriteriaOperand,
      // operand: "0=0",
      // operand:
      // "ii.item_id in (select book_id from kpi where(kpi.indicator_id=16102833423851 and (Kpi.value = to_char(16102833423931)  ))) and ii.item_id in (select book_id from kpi where(kpi.indicator_id=16102833255371 and (Kpi.value = to_char(16102833255421)  )))",
    },
  ];
  // console.log("myProductCriteria", myProductCriteria);

  const tempRawCriteria =
    {
      criteria: myProductCriteria,
      ...myQuery,
    } || {};
  return `&criteriaraw=${JSON.stringify(tempRawCriteria)}`;
};
