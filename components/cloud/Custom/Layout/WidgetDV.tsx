import { FC, Suspense } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useSWR from "swr";
import _ from "lodash";

import { jsonParse } from "util/helper";
import { WidgetWrapperStore } from "@cloud/Custom/Wrapper/WidgetWrapper";
import DebugWidget from "@components/cloud/Custom/Default/DebugWidget";
import WidgetRaw from "@components/cloud/Custom/Default/WidgetRaw";
import Skeleton from "@components/common/Skeleton/Skeleton";

type WidgetDVPropsType = {
	listConfig: any;
};

const WidgetDV: FC<WidgetDVPropsType> = ({ listConfig }) => {
	const router = useRouter();

	// if (_.isEmpty(listConfig)) return null;

	//jagaa - url-д layout=raw гэсэн байвал бүх widget-ийг хэвлэхгүй
	const layoutRaw = router?.query?.layout || "";

	let {
		data,
		error,
		mutate: dataMutate,
	} = useSWR(`/api/get-data?metaid=${listConfig.metadataid}`, {
		suspense: true,
	});
	const parameters = `&parameters=${JSON.stringify({
		id: listConfig.metadataid,
	})}`;
	const metaConfigAll = useSWR(
		`/api/get-process?processcode=META_DATA_MOBILE_004${parameters}`,
		{
			suspense: true,
		},
	);

	if (error) return <div>Failed to load</div>;
	// if (!data) return <Skeleton type="loading" />;
	delete data.aggregatecolumns;
	delete data.paging;
	data = _.values(data);
	// let MetaConfig = MetaConfigAll.data;

	const metaConfig = {
		...metaConfigAll.data,
		gridJsonConfig: jsonParse(
			metaConfigAll.data?.meta_group_grid_options_mobile?.jsonconfig,
			true,
		),
		pathConfig: _.values(
			metaConfigAll.data?.meta_group_grid_options_mobile
				?.meta_group_config_mobile,
		),
	};

	const killerObj = {
		...listConfig,
		metaConfig,
		widgetnemgooReady: listConfig.widgetnemgooReady,
		bpsectiondtl: _.values(listConfig.bpsectiondtl),
	};

	if (layoutRaw === "raw") {
		return (
			<WidgetRaw
				listConfig={listConfig}
				config={killerObj}
				widgetnemgooReady={killerObj.widgetnemgooReady}
				datasrc={data}
			/>
		);
	} else {
		return (
			<Suspense fallback={<div>loading</div>}>
				<WidgetWrapperStore
					config={killerObj}
					widgetnemgooReady={killerObj.widgetnemgooReady}
					datasrc={data}
					dataMutate={dataMutate}
				/>
			</Suspense>
		);
	}
};

export default WidgetDV;
