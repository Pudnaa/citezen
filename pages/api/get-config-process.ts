import { serverData } from "../../service/Service";
import { meta } from "../../config/service";

import { jsonParse } from "util/jsonParse";

export default async (req: any, res: any) => {
  const processcode = req.query.processcode || "";
  const parameters = jsonParse(req.query.parameters || "{}");

  const { result } = await serverData(meta.serverUrl, processcode, parameters);

  let getData: any = null;
  if (result.getdataprocesscode) {
    getData = await serverData(meta.serverUrl, result.getdataprocesscode, {
      id: "16312441973961",
    });
    getData = getData.result;
  }

  res.status(200).json({ result, getData });
};
