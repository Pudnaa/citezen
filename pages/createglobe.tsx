import useSWR from "swr";
import fs from "fs";
import path from "path";
import { serverData } from "service/Service";
import _ from "lodash";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetServerSideProps } from "next";
import { metaConfig } from "config/metaConfig";

export default function Globe() {
  return (
    <div style={{ color: "green", fontSize: 16 }}>
      Орчуулгын файл амжилттай үүслээ.
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  let param = {
    systemMetaGroupId: "1455701097791",
    pagingWithoutAggregate: "0",
    criteria: {},
    paging: {
      offset: "1",
      pageSize: "1000",
    },
  };

  const { result } = await serverData(
    metaConfig.serverUrl,
    metaConfig.COMMAND_DATAVIEW,
    param,
    metaConfig.metaDev
  );
  delete result.aggregatecolumns;
  delete result.paging;
  const data = _.values(result);

  let translation = {};
  data.map((item, index) => {
    translation = { ...translation, [item.code]: item.mongolian };
  });

  fs.writeFileSync(
    path.resolve("./public/locales/mn/translation.json"),
    JSON.stringify(translation),
    "utf8"
  );

  return {
    props: {},
  };
};
