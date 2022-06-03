import { useSession } from "next-auth/react";
import useSWR from "swr";
import _ from "lodash";

const useProcessBasketList = () => {
	const { data: session, status }: any = useSession();

	let criteria = {
		filterCustUserId: [
			{
				operator: "=",
				operand: session?.crmuserid,
			},
		],
	};

	const basketMetaId = 1641194757169149; //basketList Dataview

	const {
		data: basketList,
		error,
		mutate: basketMutate,
	} = useSWR(
		`/api/get-data?metaid=${basketMetaId}&criteria=${JSON.stringify(criteria)}`,

		// { refreshInterval: 3000, revalidateOnFocus: false }
		{ refreshInterval: 0, revalidateOnFocus: false },
	);

	delete basketList?.aggregatecolumns;
	delete basketList?.paging;
	const dataSrc = _.values(basketList) || [];

	const totalPrice = _.sumBy(dataSrc, (item: any) => {
		return item.unitprice * item.orderqty;
	});

	return { basketList: dataSrc, basketMutate, totalPrice };
};

export default useProcessBasketList;
