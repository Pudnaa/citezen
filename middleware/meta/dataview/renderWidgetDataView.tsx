import _ from "lodash";
import { FC } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useSWR from "swr";
import { jsonParse } from "util/helper";
import { decode } from "html-entities";
import { WidgetWrapperStore } from "@cloud/Custom/Wrapper/WidgetWrapper";
import DefaultWidget from "@components/cloud/Custom/Default/DefaultWidget";

type PropsType = {
  listConfig: any;
  sectionTitle: string;
};

const RenderWidgetDataView: FC<PropsType> = ({ listConfig, sectionTitle }) => {
  if (_.isEmpty(listConfig)) return null;

  let { data, error } = useSWR(`/api/get-data?metaid=${listConfig.metadataid}`);

  const parameters = `&parameters=${JSON.stringify({
    id: listConfig.metadataid,
  })}`;
  const metaConfigAll = useSWR(
    `/api/get-process?processcode=META_DATA_MOBILE_004${parameters}`
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  delete data.aggregatecolumns;
  delete data.paging;
  data = _.values(data);
  // let MetaConfig = MetaConfigAll.data;

  if (!metaConfigAll) return <div>Meta тохиргоо дуудаж байна...</div>;

  const metaConfig = {
    ...metaConfigAll.data,
    gridJsonConfig: jsonParse(
      decode(metaConfigAll.data?.meta_group_grid_options_mobile?.jsonconfig)
    ),
    pathConfig: _.values(
      metaConfigAll.data?.meta_group_grid_options_mobile
        ?.meta_group_config_mobile
    ),
  };

  const killerObj = {
    ...listConfig,
    metaConfig,
    otherattr: jsonParse(listConfig.otherattr),
    bpsectiondtl: _.values(listConfig.bpsectiondtl),
    sectionTitle,
  };

  //jagaa - url-д layout=raw гэсэн байвал бүх widget-ийг хэвлэхгүй
  const router = useRouter();
  const layoutRaw = router?.query?.layout || "";

  const RenderComponent = dynamic(
    () =>
      import(
        `@components/cloud/${listConfig.componentpath}/${listConfig.widgetcode}`
      ),
    {
      loading: () => (
        <DefaultWidget
          listConfig={listConfig}
          config={killerObj}
          otherattr={killerObj.otherattr}
          datasrc={data}
        />
      ),
    }
  );

  if (layoutRaw === "raw") {
    return (
      <DefaultWidget
        listConfig={listConfig}
        config={killerObj}
        otherattr={killerObj.otherattr}
        datasrc={data}
      />
    );
  } else {
    return (
      <WidgetWrapperStore
        config={killerObj}
        otherattr={killerObj.otherattr}
        datasrc={data}
      >
        <RenderComponent />
      </WidgetWrapperStore>
    );
  }
};

export default RenderWidgetDataView;
