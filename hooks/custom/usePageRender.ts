import { useEffect } from "react";
import { usePage } from "hooks/use-page";
// import { getSession, useSession } from "next-auth/react";

const usePageRender = (rawWidgetList: any) => {
  const pageContext = usePage();

  useEffect(() => {
    pageContext.setRawWidgetList(rawWidgetList);
  }, [rawWidgetList]);

  return null;
};

export default usePageRender;
