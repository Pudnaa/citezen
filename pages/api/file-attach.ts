import axios from "axios";
import { serverDataFileUpload } from "../../service/Service";
import { meta } from "../../config/service";

import { jsonParse } from "util/jsonParse";

export default async (req: any, res: any) => {
  const processcode = req.body.processcode || "";
  const parameters = req.body.parameters || {};

  const result = await serverDataFileUpload(meta.fileAttach,parameters);
  res.status(200).json(result)
}