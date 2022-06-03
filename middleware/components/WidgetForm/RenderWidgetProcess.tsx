import _ from "lodash";
import { useContext, useEffect, useState, FC } from "react";
import { Tabs } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useSWR from "swr";
import { processTransform } from "util/processTransform";
import FormWrapper, { FormSectionWrapper } from "./FormWrapper";
import RenderField from "./RenderField";
import RenderWidgetProcessField from "./RenderWidgetProcessField";
import WidgetCustomRenderProcess from "../WidgetStandardProcess/WidgetCustomRenderProcess";
import { FormMetaContextProvider as MetaStore } from "context/Meta/FormMetaContext";
import { runExpression } from "@util/expression";
import Skeleton from "@components/common/Skeleton/Skeleton";
import { toBoolean, jsonParse, decrypt } from "util/helper";
import { prepareRawUrlQueryToCriteria } from "lib/urlFunctions";
import Header from "./Header/Header";
import axios from "axios";
import { useUser } from "hooks/use-user";
import { useSession } from "next-auth/react";
type PropsType = {
	listConfig: any;
	dialog?: any;
	headerType?: string;
};

const { TabPane } = Tabs;

const RenderWidgetProcess: FC<PropsType> = ({
	listConfig,
	dialog,
	headerType,
}) => {
	const router = useRouter();
	// const { userData } = useUser();
	const { data: session } = useSession();
	const userData = session;
	// console.log("dddddddddddddf dffsdfsfdsf userdata", userdata);
	const widgetnemgooReady = listConfig.widgetnemgooReady;
	const [formDataInitDataState, setFormDataInitDataState] = useState<any>({});
	const [processExpression, setProcessExpression] = useState<any>({});
	const [processConfigState, setProcessConfigState] = useState<any>();
	const [processParams, setProcessParams] = useState<any>({ header: [] });

	delete router.query.detect;
	const parameters = `&parameters=${JSON.stringify({
		id: listConfig.metadataid,
	})}&getparameters=${JSON.stringify({
		...router.query,
	})}`;

	const listConfigParse = {
		...listConfig,
		otherattr: jsonParse(listConfig?.otherattr),
	};
	const runExpressionAsync = async (userData: any) => {
		let processParamsvar: any = {},
			formDataInitDatavar: any = {};

		const { data } = await axios.get(
			`/api/get-config-process?processcode=META_BUSINESS_PROCESS_LINK_BP_GET_004${parameters}`,
		);

		console.log("process config ", data);

		processParamsvar = await processTransform(data.result, userData);

		formDataInitDatavar = data.getData
			? await _.merge(processParamsvar.__dataElement, data.getData)
			: await _.merge(processParamsvar.__dataElement, router.query);

		const expResult: any = await runExpression(
			"all",
			processExpression,
			processParamsvar,
			formDataInitDatavar,
		);

		setProcessParams(processParamsvar);
		setFormDataInitDataState(expResult?.data);
		setProcessExpression(expResult?.expression);
		setProcessConfigState(data);
	};

	useEffect(() => {
		if (!_.isEmpty(userData) || _.isNull(userData))
			runExpressionAsync(userData);
	}, [userData]);
	// console.log("type Нямкааааа", processParams);
	if (processConfigState && processConfigState.result.iswithlayout == "1") {
		return (
			<MetaStore
				formInitData={formDataInitDataState}
				formExpression={processExpression}
				processConfig={processParams}
			>
				<FormSectionWrapper>
					<RenderWidgetProcessField
						processSection={processConfigState.result}
					/>
				</FormSectionWrapper>
			</MetaStore>
		);
	} else if (processConfigState) {
		const { header } = processParams;

		const groupByTabname = _.groupBy(header, function (n) {
			return n.tabname;
		});
		const renderTypeView = () => {
			if (listConfig.widgetcode) {
				return (
					<WidgetCustomRenderProcess
						listConfig={listConfig}
						processData={processParams}
						formDataInit={formDataInitDataState}
						formConfig={processConfigState}
					/>
				);
			} else {
				return (
					<FormWrapper
						dialog={dialog}
						title={`${processConfigState?.result?.metadataname || ""}`}
					>
						<Header
							header={header}
							processParams={processParams}
							listConfigParse={listConfigParse}
							processConfig={processConfigState}
						/>
						{header.map((item: any, index: number) => {
							if (!item.tabname && item.datatype === "group") {
								return (
									<RenderField
										key={item?.id || index}
										field={item}
										attr={processParams.details}
										sectionConfig={listConfigParse}
										className=""
										style=""
										rowIndex=""
										labelClassName=""
									/>
								);
							}
						})}
						<Tabs>
							{header.map((item: any, index: number) => {
								if (item.tabname) {
									let isContent = _.filter(
										groupByTabname[item.tabname],
										(item2) => {
											return item2.isshow === "1";
										},
									);
									if (isContent.length)
										return (
											<TabPane tab={item.tabname} key={item?.id || index}>
												<RenderField
													field={item}
													attr={processParams.details}
													sectionConfig={listConfigParse}
												/>
											</TabPane>
										);
								}
							})}
						</Tabs>
					</FormWrapper>
				);
			}
		};

		return (
			<MetaStore
				formInitData={formDataInitDataState}
				formExpression={processExpression}
				processConfig={processParams}
			>
				{renderTypeView()}
			</MetaStore>
		);
	} else {
		return (
			<>
				<Skeleton type="loading" />
			</>
		);
	}
};

export default RenderWidgetProcess;
