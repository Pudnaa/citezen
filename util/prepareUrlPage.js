import _ from "lodash";

export default function prepareUrlPage(req, resolvedUrl) {
  //req буюу Domain-ийн мэдээлэл ирнэ. headers, url гэсэн хоёр гол бүтэцтэй.
  const host = req.headers.host;
  const path = resolvedUrl;
  // console.log("req", req);
  // console.log("host ", host);
  // console.log("path", path);

  const url = new URL("https://" + host + path);
  // console.log("00 url", url);

  // console.log("path ===", _.split(path, "/", 2)[1]);
  const tempPath = _.split(url.pathname, "/", 3); //http://localhost:3000/cloudddd/cloud/weekly гэсэн байвал эхний cloudddd гэдэг үгийг авна.

  let defaultPage = "weekly";
  if (url.hostname == "document-ten.vercel.app") {
    defaultPage = "doc";
  }

  const pageKeys = _.keys(pages);
  let myHost = {
    domain: _.replace(host, "/", ""),
    slug: tempPath[1] || "home",
  };
  let myPath = {
    domain: tempPath[1] || defaultPage,
    slug: tempPath[2] || "home",
  };
  // console.log("myHost ===", myHost);
  // console.log("myPath ===", myPath);

  // const env = process.env.NODE_ENV; //development, production

  let destinationPage = { title: "weekly", ...pages.weekly };
  let destinationSlug = { ...pages.weekly.home };

  for (let index = 0; index < pageKeys.length; index++) {
    //бүх page Key-ээр гүйнэ.
    const element = pageKeys[index];
    if (_.includes(myHost.domain, element)) {
      //ирсэн URL дотор уг Key байгаа эсэхийг шалгаж байвал тэр Page-ийг өгнө.
      destinationPage = { title: element, ...pages[element] };
      destinationSlug = {
        ...(pages[element]?.[myHost.slug] || pages[element]?.home),
      };
      break;
    }
    if (_.includes(myPath.domain, element)) {
      //ирсэн URL дотор уг Key байгаа эсэхийг шалгаж байвал тэр Page-ийг өгнө.
      destinationPage = { title: element, ...pages[element] };
      destinationSlug = {
        ...(pages[element]?.[myPath.slug] || pages[element]?.home),
      };
      break;
    }
  }

  // console.log("destinationPage", destinationPage);
  // console.log("destinationSlug", destinationSlug);

  return [destinationPage, destinationSlug];
}

const pages = {
  skyresort: {
    home: {
      pageid: "1637833515834270",
    },
  },
  skyresortold: {
    home: {
      pageid: "16342674207241",
    },
    detail: {
      pageid: "16342674214531",
    },
  },
  weekly: {
    home: {
      pageid: "1633341769293727",
    },
    detail: {
      pageid: "4444444444",
    },
    service: {
      pageid: "999999999999",
    },
  },
  moto: {
    home: {
      pageid: "1636611994257118",
    },
    detail: {
      pageid: "",
    },
  },
  citizen: {
    home: {
      pageid: "16312403374741",
    },
    servicelist: {
      pageid: "1633330159627742",
    },
    profile: {
      pageid: "16322760249471",
    },
    test: {
      pageid: "16317177103571",
    },
    newsdetail: {
      pageid: "1637212649075818",
    },
    accountbalance: {
      pageid: "1635306013805130",
    },
    accountstatement: {
      pageid: "1636432313251413",
    },
  },
  orgilshop: {
    home: {
      pageid: "1634264977111862",
    },
    detail: {
      pageid: "",
    },
  },
  doc: {
    home: {
      pageid: "16377298350471",
    },
    detail: {
      pageid: "16377298799021",
    },
    ask: {
      pageid: "16377299737221",
    },
    doc: {
      pageid: "1634529375628816",
    },
  },
};
