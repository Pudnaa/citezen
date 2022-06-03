import fetchJson from "lib/fetchJson";

const useProcessEmptyBasket = async (
	session: any,
	salesorderid: string,
	basketMutate: any,
) => {
	const processName = "clSdmSalesOrderItemDtlDv_005";
	const processParameters = {
		salesorderid: salesorderid, //захиалгын order id тавьж өгнө.
		customerId: session?.id, //эзэн өөрөө байх ёстой.
		custUserId: session?.crmuserid,
	};

	const processResult: any = await fetchJson(
		`/api/get-process?processcode=${processName}&parameters=${JSON.stringify(
			processParameters,
		)}`,
	);
	basketMutate();

	return null;
};

export default useProcessEmptyBasket;
