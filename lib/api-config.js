import { loadProcess } from "util/axiosFunction";
import { isEmpty } from "lodash";

export const loadListConfig = async (id) => {
  if (isEmpty(id)) return {};

  const myMetaConfig =
    (await loadProcess({
      command: "META_DATA_MOBILE_004",
      parameters: {
        id: id || "",
      },
    })) || {};

  return myMetaConfig;
};

export const loadProcessConfig = async (id) => {
  if (isEmpty(id)) return {};

  const myProcessConfig =
    (await loadProcess({
      command: "META_BUSINESS_PROCESS_LINK_BP_GET_004",
      parameters: {
        id: id || "",
      },
    })) || {};

  return myProcessConfig;
};

export const loadListConfigDev = async (id) => {
  if (isEmpty(id)) return {};

  const myMetaConfig =
    (await loadProcess({
      command: "META_DATA_MOBILE_004",
      parameters: {
        id: id || "",
      },
      domain: "dev",
    })) || {};

  return myMetaConfig;
};

export const loadProcessConfigDev = async (id) => {
  if (isEmpty(id)) return {};

  const myProcessConfig =
    (await loadProcess({
      command: "META_BUSINESS_PROCESS_LINK_BP_GET_004",
      parameters: {
        id: id || "",
      },
      domain: "dev",
    })) || {};

  return myProcessConfig;
};
