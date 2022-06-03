import fetchJson from "lib/fetchJson";

const useProcessRemoveBasketItem = async (
	session: any,
	salesorderid: string,
	index: number,
	item: any,
	basketMutate: any,
) => {
	const processName = "clSdmSalesOrderItemDtlDv_005";
	const processParameters = {
		customerId: session?.id, //эзэн өөрөө байх ёстой.
		custUserId: session?.crmuserid,
		salesorderid: salesorderid, //захиалгын order id тавьж өгнө.
		id: item.salesorderdetailid,
		itemId: item.itemid,
	};

	// console.log("processParameters", processParameters);

	const processResult: any = await fetchJson(
		`/api/get-process?processcode=${processName}&parameters=${JSON.stringify(
			processParameters,
		)}`,
	);
	basketMutate();

	return null;
};

export default useProcessRemoveBasketItem;
