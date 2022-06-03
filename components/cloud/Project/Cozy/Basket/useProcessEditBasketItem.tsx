import fetchJson from "lib/fetchJson";

const useProcessEditBasketItem = async (
  item: any,
  qty: any,
  basketMutate: any
) => {
  const processName = "clSdmSalesOrderItemDtlDv_002";
  const processParameters = {
    id: item?.salesorderdetailid,
    orderQty: qty,
    lineTotalPrice: item?.unitprice * qty,
  };
  const processResult: any = await fetchJson(
    `/api/get-process?processcode=${processName}&parameters=${JSON.stringify(
      processParameters
    )}`
  );
  basketMutate();

  return null;
};

export default useProcessEditBasketItem;
