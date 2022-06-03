import React, { useState, useEffect } from "react";
import Link from "next/link";
import _ from "lodash";
import { useRouter } from "next/router";
import useDidMountEffect from "util/useDidMountEffect";

function Index() {
  const router = useRouter();
  const [test, setTest] = useState(_.random(200, 300));

  const onClick = () => {
    setTest(_.random(200, 300));
  };

  // http://localhost:3000/cozy/test

  useDidMountEffect(() => {
    router.push(
      { pathname: router.asPath.split("?")[0], query: { paar: `dfdf${test}` } },
      undefined,
      {
        shallow: true,
      }
    );
  }, [test]);

  console.log("test :>> ", test);

  const list = [
    {
      src: `https://picsum.photos/200/${test}`,
    },
    {
      src: `https://picsum.photos/200/${test}`,
    },
    {
      src: `https://picsum.photos/200/${test}`,
    },
    {
      src: `https://picsum.photos/200/${test}`,
    },
    {
      src: `https://picsum.photos/200/${test}`,
    },
    {
      src: `https://picsum.photos/200/${test}`,
    },
    {
      src: `https://picsum.photos/200/${test}`,
    },
  ];

  return (
    <>
      <div className="p-20 flex items-center flex-row flex-wrap">
        <img
          // src="https://wallpaperaccess.com/full/6363888.jpg"
          src="https://picsum.photos/200/300"
          className="w-auto h-50"
          onClick={() => onClick()}
        />
      </div>

      <div className="pt-10 p-20 flex items-center flex-row flex-wrap gap-x-3">
        {list.map((item: any, index: number) => {
          return (
            <img
              key={item?.id || index}
              src={item.src}
              className="w-8 h-8"
              onClick={() => onClick()}
            />
          );
        })}
      </div>
      <div className="pt-10 p-20 flex items-center flex-row flex-wrap gap-x-3">
        {list.map((item: any, index: number) => {
          return (
            <Link
              href={{
                pathname: "/_sites/[[...detect]]",
                query: { slug: "test", paar: `dfdf${test}` },
              }}
              as={`/cozy/test?paar=dfdf${test}`}
              shallow={true}
            >
              <a>
                <img
                  key={item?.id || index}
                  src={item.src}
                  className="w-8 h-8"
                />
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default Index;

// router.push(
//   { pathname: router.asPath.split("?")[0], query: { paar: `dfdf${test}` } },
//   undefined,
//   {
//     shallow: true,
//   }
// );
