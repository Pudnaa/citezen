import { useState, useEffect } from "react";
import { useUser } from "hooks/use-user";
import { useCloud } from "hooks/use-cloud";
// import { getSession, useSession } from "next-auth/react";

const useCloudRender = (
  userSession: any,
  generalConfig: any,
  rawWidgetList: any,
  metaConstant: any,
  hostObject?: object
) => {
  const userContext = useUser();
  const cloudContext = useCloud();

  useEffect(() => {
    userContext.setUData(userSession);
    cloudContext.setGlobalConfig(generalConfig);
    cloudContext.setRawWidgetList(rawWidgetList);
    cloudContext.setMetaConstant(metaConstant);
    cloudContext.setHostObject(hostObject);
  }, []);

  return null;
};

export default useCloudRender;
