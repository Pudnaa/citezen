import { serverData } from "../../service/Service";
import { jsonParse } from "util/helper";
import { meta } from "../../config/service";

export default async (req: any, res: any) => {
  let param = {
    systemMetaGroupId: req.query.metaid || "",
    pagingWithoutAggregate: req.query.pagingwithoutaggregate || "0",
    criteria: {
      ...jsonParse(req.query.criteria || ""),
      ...jsonParse(req.query.criteriaraw || ""),
    },
    paging: {
      offset: req.query.offset || "1",
      pageSize: req.query.pagesize || "5000",
    },
  };

  const { result } = await serverData(meta.serverUrl, meta.dataview, param);

  res.status(200).json(result);
};
