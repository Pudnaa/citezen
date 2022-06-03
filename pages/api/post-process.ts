import { serverData } from "../../service/callERPServices";
import { metaConfig } from "../../config/metaConfig";

import { jsonParse } from "util/jsonParse";

export default async (req: any, res: any) => {
	const metaName: string = req?.query?.metaName || "metaDev";
	const ourMetaConstant = metaConfig?.[metaName];
	const processcode = req.body.processcode || "";
	const parameters = req.body.parameters || {};
	const config = req.body.headerParam || "";

	// const metaName: string = req?.query?.metaName || "metaDev";

	// const ourMetaConstant = (metaConfig as any)[metaName];

	const result = await serverData(
		ourMetaConstant.serverUrl,
		processcode,
		parameters,
		ourMetaConstant,
		config,
	);

	res.status(200).json(result);
};
