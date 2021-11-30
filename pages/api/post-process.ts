import { serverData } from "../../service/Service";
import { metaConfig } from "../../config/metaConfig";

import { jsonParse } from "util/jsonParse";

export default async (req: any, res: any) => {
  const processcode = req.body.processcode || "";
  const parameters = req.body.parameters || {};

  const result = await serverData(
    metaConfig.serverUrl,
    processcode,
    parameters,
  );

  res.status(200).json(result);
};
