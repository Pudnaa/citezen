import { useSession } from "next-auth/react";
import useSWR from "swr";
import _ from "lodash";

const useProcessHeartList = () => {
	const { data: session, status }: any = useSession();

	let criteria = {
		filterCustUserId: [
			{
				operator: "=",
				operand: session?.id,
			},
		],
	};

	const metaId = 1606832696996; //heartList Dataview

	const {
		data,
		error,
		mutate: heartMutate,
	} = useSWR(
		`/api/get-data?metaid=${metaId}&criteria=${JSON.stringify(criteria)}`,

		// { refreshInterval: 3000, revalidateOnFocus: false }
		{ refreshInterval: 0, revalidateOnFocus: false },
	);

	delete data?.aggregatecolumns;
	delete data?.paging;
	const dataSrc = _.values(data) || [];

	return { heartList: dataSrc, heartMutate };
};

export default useProcessHeartList;
