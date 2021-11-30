import { serverData } from "service/Service";
import { jsonParse } from "util/helper";
import { metaConfig } from "config/metaConfig";

export default async (req: any, res: any) => {
  const metaName: string = req.query.metaName || "metaDev";
  const ourMetaConstant = (metaConfig as any)[metaName];

  let param = {
    systemMetaGroupId: req.query.metaid || "",
    pagingWithoutAggregate: req.query.pagingwithoutaggregate || "0",
    criteria: {
      ...jsonParse(req.query.criteria || ""),
      ...jsonParse(req.query.criteriaraw || ""),
    },
    paging: {
      offset: req.query.offset || "1",
      pageSize: req.query.pagesize || "200",
    },
  };

  const { result } = await serverData(
    ourMetaConstant.serverUrl,
    metaConfig.dataview,
    param,
    ourMetaConstant,
  );

  res.status(200).json(result);
};
