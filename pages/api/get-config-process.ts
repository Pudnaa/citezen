import { serverData } from "../../service/Service";
import { metaConfig } from "../../config/metaConfig";

import { jsonParse } from "util/jsonParse";

export default async (req: any, res: any) => {
  const processcode = req.query.processcode || "";
  const parameters = jsonParse(req.query.parameters || "{}");

  const { result } = await serverData(
    metaConfig.serverUrl,
    processcode,
    parameters
  );

  let getData: any = null;
  if (result.getdataprocesscode) {
    getData = await serverData(
      metaConfig.serverUrl,
      result.getdataprocesscode,
      {
        id: "16340320450671",
      }
    );
    getData = getData.result;
  }

  res.status(200).json({ result, getData });
};
