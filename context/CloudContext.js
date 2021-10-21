import { createContext, useState } from "react";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";
import {
  prepareQuery,
  preparePaging,
  prepareSorting,
  prepareViewtype,
} from "lib/urlFunctions";

const CloudContext = createContext();

export const CloudStore = (props) => {
  const router = useRouter();
  const menu = router.pathname.split("/")[1]; //"news"

  // console.log("SSSSSSSSSSSSSTTTTTTTTTT", router);

  const initialCloudURL = {
    asPath: router.asPath, //Browser дээр байгаа URL-ийг түүхийгээр авах
    breadcrumb: router.pathname.split("/"), //0: "" 1: "news", 3: "detail"
    menu: menu,
    urlIdValue: router.asPath.split("/")[2] || "", //detailid баахан тоо
    pathname: router.pathname, //"/news/[id]"
    menuType: "list",
    query: { ...prepareQuery(router.query) }, //Бүх шүүлтүүрүүд байна
    listOption: {
      paging: preparePaging(router.query),
      sorting: prepareSorting(router.query),
      viewtype: prepareViewtype(router.query),
      total: "0",
      listShortConfig: {},
    },
  };

  const [cloudURL, setCloudURL] = useState(initialCloudURL);
  const [globalConfig, setGlobalConfig] = useState({
    bodyDefault: {
      className: "bg-ssoBackground min-h-screen min-w-screen font-roboto",
      style: {},
    },
    sectionDefault: {
      className:
        "w-full h-full bg-white p-4 shadow-citizen overflow-hidden rounded-lg",
      style: {},
    },
    widgetDefault: {
      color: "gray-500",
      className:
        "w-full h-full bg-white p-4 shadow-citizen overflow-hidden rounded-lg",
      style: {},
      title: {
        className: "text-lg leading-6 font-bold text-gray-700",
        style: {},
      },
    },
  });

  const buildURL = (
    addNewQuery,
    removeQueryKey = undefined,
    pathname = undefined,
    options = {},
    clearOtherQuery = false
  ) => {
    //mglfirm солигдсон бол mglmark-ийг цэвэрлэх хэрэгтэй.
    let oldQuery = cloudURL.query || {};
    delete oldQuery[removeQueryKey];
    if (clearOtherQuery) oldQuery = {};

    //newQuery нь хоосон value-тай ирэх үе байна. Энэ үед түүнийг бас устгана.
    let newQuery = {};
    Object.entries(addNewQuery).map(([key, value]) => {
      if (!isEmpty(value)) {
        newQuery[key] = value;
      } else {
        delete oldQuery[key];
      }
    });

    router.push(
      {
        pathname: pathname || cloudURL.pathname,
        query: {
          ...oldQuery,
          ...newQuery,
        },
      },
      undefined,
      { shallow: true, scroll: true, ...options }
    );
  };

  const clearQuery = () => {
    router.push(
      {
        pathname: cloudURL.pathname,
        query: {},
      },
      undefined,
      { shallow: true }
    );
  };

  const updateListOption = (listShortConfig, total) => {
    setCloudURL({
      ...cloudURL,
      listOption: {
        ...cloudURL.listOption,
        paging: preparePaging(router.query, listShortConfig),
        sorting: prepareSorting(router.query, listShortConfig),
        viewtype: prepareViewtype(router.query, listShortConfig),
        total: total,
        listShortConfig: listShortConfig,
      },
    });
  };

  const buildCloudURL = (item, link, isWhole = false) => {
    // console.log("**********buildCloudURL", item, link);

    let key = "";
    if (isWhole) {
      key = link?.label;
    } else {
      // metaid[484848][itemcategoryid]=151515151515 гэсэн Query зам үүсэх ёстой.
      key = `metaid[${link?.metaid}][${link?.label}]`;
    }
    buildURL(
      {
        [key]: item?.[link?.path],
      }, //Нэмэгдэж буй гол query
      undefined,
      cloudURL.pathname, //pathname - автоматаар авчихна
      // "page/16324190057771", //pathname - автоматаар авчихна
      {}, //shallow гэх мэт нэмэлт options,
      false //clear URL other query
    );
  };

  console.log("globalConfig", globalConfig);

  return (
    <CloudContext.Provider
      value={{
        cloudURL,
        updateListOption,
        buildURL,
        clearQuery,
        buildCloudURL,
        globalConfig,
        setGlobalConfig,
      }}
      displayName="CloudStore"
    >
      {props.children}
    </CloudContext.Provider>
  );
};

export default CloudContext;
