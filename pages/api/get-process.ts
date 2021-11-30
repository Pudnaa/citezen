import { serverData } from "../../service/Service";
import { metaConfig } from "../../config/metaConfig";

import { jsonParse } from "util/jsonParse";

export default async (req: any, res: any) => {
  const metaName: string = req.query.metaName || "metaDev";
  const ourMetaConstant = (metaConfig as any)[metaName];

  const processcode = req.query.processcode || "";
  const parameters = jsonParse(req.query.parameters || "{}");

  // console.log("EEE", req.query);

  const { result } =
    (await serverData(
      ourMetaConstant.serverUrl,
      processcode,
      parameters,
      ourMetaConstant
    )) || {};

  // console.log("RRRRRRRRRR", result, "--");

  res.status(200).json(result);
};
