import fetchJson from "lib/fetchJson";

const useProcessRemoveHeartItem = async (
  item: any,
  session?: any,
  listMutate?: any
) => {
  const processName = "metaDmRecordMapDv_005";
  const processParameters = {
    srcRecordId: session?.id, //эзэн өөрөө байх ёстой.
    trgRecordId: item.id,
  };

  console.log("processParameters", processParameters);

  const processResult: any = await fetchJson(
    `/api/get-process?processcode=${processName}&parameters=${JSON.stringify(
      processParameters
    )}`
  );

  console.log("processResult", processResult);

  listMutate();

  return null;
};

export default useProcessRemoveHeartItem;
