import { FC } from "react";
import { useRouter } from "next/router";
import _ from "lodash";
import Link from "next/link";
import { useCloud } from "hooks/use-cloud";

type PropsType = {
  item?: any;
  color?: string;
  customClassName?: string;
  children: any;
  props?: any;
};

const AtomLinkV2: FC<PropsType> = ({
  item = {},
  color = "sso",
  customClassName = "",
  children,
  props,
}) => {
  if (_.isEmpty(item)) return children;

  const router = useRouter();
  const cloudContext = useCloud();
  const keepQuery = item?.keepQuery || false;

  // console.log("FFFFFFFFF router", router);
  //   console.log("path", path);
  //   console.log("query", query);

  // console.log("myHrefdd", item);
  if (!_.isEmpty(item?.baseUrl)) {
    return (
      <a
        href={item.baseUrl}
        target="_blank"
        className={`hover:text-${color} ${customClassName}`}
      >
        {children}
      </a>
    );
  }

  //үсрэх href объектоо бэлдэж байна.shallow="true"
  //nemgoo-оос path ирвэл түүнийг тавина.
  //path асуудалтай байвал query-г тавина.
  const urlObject = prepareHrefInternal(
    router,
    item,
    cloudContext.hostObject,
    keepQuery
  );
  // console.log("myHrefdd", urlLink);
  return (
    <Link href={urlObject} {...item?.props} as={urlObject}>
      <a className={`hover:text-${color} ${customClassName}`}>{children}</a>
    </Link>
  );
};

export default AtomLinkV2;

/* ------------------------------------------------------ */
/*                   PREPAREHREFINTERNAL                  */
/* ------------------------------------------------------ */
function prepareHrefInternal(
  router: any,
  item: any,
  hostObject: any,
  keepQuery: boolean
) {
  // console.log("DDDDDDDDDDDDD", item);
  const { baseUrl = "", path = "", query = {} } = item;

  /*
		path гэдэг нь
				"path": "{slug}"
				"path": "/news/{slug}"
		/ тэмдэгтээр эхэлсэн байвал цоо шинэ зам руу үсэрнэ.
		/-гүй байвал одоо байгаа зам дээрээ үсэрнэ. сүүлийн path-ийг өөрчлөөд үсэрнэ.
		query гэдэг нь
			"query": {
				"cozycategoryid": "{id}"
			}
	*/
  // console.log("PPPPPPPPPPPP", router);
  // let myPath = router?.asPath.split("?")[0];

  let myPath = "";
  let myQuery = keepQuery
    ? _.omit(
        router?.query,
        "detect" // энэ нөхөр router.query дотор явдгийг устгах хэрэгтэй.
      )
    : {};

  // console.log("DDDDDDD myPath 01: ", myPath, "   path: ", path);

  const domainType = hostObject?.domainType;

  //Энэ кодыг цаашдаа сайжруулах ёстой.
  if (_.isEmpty(path)) {
    switch (domainType) {
      case "default":
      case "sub":
        myPath = "/" + hostObject?.slug || "";
        break;
      case "local":
        myPath =
          "/" + hostObject?.domain?.rootDomain + "/" + hostObject?.slug || "";
        break;
      default:
        break;
    }

    myQuery = { ...myQuery, ...query }; //ERP-аас ирсэн query-тэйгээ нэгтгэж бэлдэнэ.
  } else {
    if (path.startsWith("/")) {
      switch (domainType) {
        case "default":
        case "sub":
          myPath = "/" + path;
          break;
        case "local":
          myPath = "/" + hostObject?.domain?.rootDomain + path;
          break;
        default:
          break;
      }

      myQuery = { ...query }; //Query-г хоосолно. Шинэ цэс рүү үсэрч байна.
    } else {
      //Энд сүүлийн slug-ийг өөрчилдөг код оруулна.

      myQuery = { ...query }; //Query-г хоосолно. Шинэ цэс рүү үсэрч байна.
    }
  }

  // console.log("myPath02 :>> ", myPath);
  // console.log("hostObject", hostObject);
  // console.log("myQuery :>> ", myQuery);
  // console.log("router :>> ", router);

  return {
    pathname: myPath,
    query: myQuery,
  };
}
