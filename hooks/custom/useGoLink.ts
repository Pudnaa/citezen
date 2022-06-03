import _ from "lodash";

const useGoLink = (router: any, urlObject: any) => {
  // console.log("EEEEEEEEEE", url);
  // console.log("EEEEEEEEEE", router);
  // console.log("EEEEEEEEEE LAST", {
  //   pathname: router.asPath.split("?")[0],
  //   query: url?.query,
  // });

  const oldUrlQuery =
    urlObject?.props?.keepQuery || false
      ? _.omit(
          router?.query,
          "detect" // энэ нөхөр router.query дотор явдгийг устгах хэрэгтэй.
        )
      : {};
  const silentQuery = urlObject?.props?.shallow ? { silent: true } : {};
  const newQuery = urlObject?.query || {};

  const queryReady = {
    ...oldUrlQuery,
    ...silentQuery,
    ...newQuery,
  };

  //Хэрвээ query-ээс Element устгуулах бол value-д нь removeIt гэж бичээрэй.
  _.keys(queryReady).forEach((key) => {
    if (queryReady[key] === "removeIt") {
      delete queryReady[key];
    }
  });

  router.push(
    {
      pathname: router.asPath.split("?")[0],
      query: queryReady,
    },
    undefined,
    urlObject.props
  );

  return null;
};

export default useGoLink;
