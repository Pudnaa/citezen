import { useContext, useState, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomFade,
  AtomImage,
} from "@components/common/Atom";

export default function ShoppingCart4() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  const [show, setshow] = useState(true);
  const [search, setSearch] = useState(false);
  const [total, setTotal] = useState(0);
  var total1 = 0;

  if (isEmpty(datasrc)) return null;
  // console.log("ShoppingCart4 config", config);
  // console.log("ShoppingCart4 datasrc", datasrc);
  // console.log("ShoppingCart4 otherattr", otherattr);
  // console.log("ShoppingCart4 positionConfig", positionConfig);
  useEffect(() => {
    setTotal(total1);
  }, [total1]);
  const increment = (item: any) => {
    total1 +=
      parseInt(renderPositionType(item, "position4", positionConfig)) *
      parseInt(renderPositionType(item, "position47", positionConfig));
  };
  return (
    <div className="pb-12">
      <div className="bg-gray-50 py-7">
        <div className="2xl:mx-auto 2xl:container lg:px-20 2xl:px-0 md:px-6 px-4  ">
          <div className="w-full flex justify-end items-center  flex-row space-x-8">
            <button className="flex flex-row space-x-2 text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
              <svg
                onClick={() => setSearch(!search)}
                id="searchIcon"
                className="fill-stroke  mt-1"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 11C5 15.4183 8.58172 19 13 19C17.4183 19 21 15.4183 21 11C21 6.58172 17.4183 3 13 3C8.58172 3 5 6.58172 5 11Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.99961 20.9999L7.34961 16.6499"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="searchBar"
                className={`mt-1 w-full text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500  border-b border-gray-300 px-2 ${
                  search ? "block" : "hidden"
                }`}
                type="text"
                placeholder="Search"
              />
            </button>
            <button className="text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
              <svg
                className="fill-stroke  mt-1"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => setshow(!show)}
              className="text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            >
              <svg
                className="fill-stroke "
                width={24}
                height={33}
                viewBox="0 0 24 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 31C9.55228 31 10 30.5523 10 30C10 29.4477 9.55228 29 9 29C8.44772 29 8 29.4477 8 30C8 30.5523 8.44772 31 9 31Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 31C20.5523 31 21 30.5523 21 30C21 29.4477 20.5523 29 20 29C19.4477 29 19 29.4477 19 30C19 30.5523 19.4477 31 20 31Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 10H5L7.68 23.39C7.77144 23.8504 8.02191 24.264 8.38755 24.5583C8.75318 24.8526 9.2107 25.009 9.68 25H19.4C19.8693 25.009 20.3268 24.8526 20.6925 24.5583C21.0581 24.264 21.3086 23.8504 21.4 23.39L23 15H6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.41 12.126C13.7753 12.126 13.1687 12.0233 12.59 11.818C12.0113 11.6127 11.5213 11.3233 11.12 10.95L11.554 10.04C12.422 10.7493 13.3693 11.104 14.396 11.104C15.0773 11.104 15.614 10.9127 16.006 10.53C16.398 10.1473 16.594 9.64333 16.594 9.018C16.594 8.374 16.4073 7.84667 16.034 7.436C15.6607 7.02533 15.1473 6.82 14.494 6.82C13.5513 6.82 12.8093 7.212 12.268 7.996H11.428V2.13H17.154V3.11H12.562V6.638C13.1033 6.09667 13.8173 5.826 14.704 5.826C15.32 5.826 15.8567 5.95667 16.314 6.218C16.7713 6.47933 17.1213 6.848 17.364 7.324C17.616 7.79067 17.742 8.33667 17.742 8.962C17.742 9.578 17.6067 10.124 17.336 10.6C17.0653 11.076 16.678 11.4493 16.174 11.72C15.6793 11.9907 15.0913 12.126 14.41 12.126Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="text-gray-800 hover:text-black">
              <svg
                className="fill-stroke  mt-1"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 12H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 18H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        id="menu"
        className={`2xl:mx-auto 2xl:container lg:px-20 2xl:px-0 md:px-6 px-4 justify-end ${
          show ? "flex" : "hidden"
        }`}
      >
        <div className="pt-11 sm:px-6 px-4 pb-4 sm:pb-6 flex-col space-y-12 w-full sm:w-3/4 xl:w-2/4 2xl:w-2/6 shadow-lg relative ">
          <svg
            className="  transform absolute rotate-90 top-0 right-12 -mt-5 "
            width="30px"
            height="30px"
            viewBox="0 0 9 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth={1}
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Tooltips-"
                transform="translate(-874.000000, -1029.000000)"
                fill="#FFFFFF"
              >
                <g
                  id="Group-3-Copy-16"
                  transform="translate(850.000000, 975.000000)"
                >
                  <g id="Group-2" transform="translate(24.000000, 0.000000)">
                    <polygon
                      id="Triangle"
                      transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                      points="4.5 57.5 12.5 66.5 -3.5 66.5"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="relative flex flex-col sm:flex-row w-full justify-start sm:space-x-4 "
                >
                  <div className="px-3.5 py-1.5 bg-gray-50 flex justify-center">
                    <AtomImage
                      item={renderPositionType(
                        item,
                        "position2",
                        positionConfig
                      )}
                      customClassName="w-auto"
                      alt={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                    />
                  </div>
                  <div className="flex justify-center items-start flex-col mt-4 sm:mt-0">
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      customClassName="text-base leading-4 text-gray-800"
                    />
                    <br />
                    <AtomText
                      item={
                        "Quantity " +
                        renderPositionType(item, "position47", positionConfig)
                      }
                      customClassName="text-sm leading-none mt-2 text-gray-600"
                    />
                    <br />
                    <AtomCurrency
                      type="mnt"
                      item={(
                        parseInt(
                          renderPositionType(item, "position4", positionConfig)
                        ) *
                        parseInt(
                          renderPositionType(item, "position47", positionConfig)
                        )
                      ).toString()}
                      customClassName="text-xl font-semibold leading-5 mt-5 text-gray-800"
                    />
                    {increment(item)}
                  </div>
                  <div className="absolute top-2 right-2 sm:right-0 sm:inset-y-3">
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                      <svg
                        className="text-gray-800 hover:text-black fill-stroke"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          <div className="flex justify-center items-center w-full flex-col space-y-2">
            <div className="flex justify-between items-center w-full">
              <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                Total
              </p>
              <AtomCurrency
                item={total.toString()}
                type="mnt"
                customClassName="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800"
              />
            </div>
            <div className="flex justify-between items-center sm:flex-row flex-col w-full sm:space-x-4 space-y-4 sm:space-y-0">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-900 leading-4 py-4 hover:text-black text-gray-800 w-full font-medium">
                View Cart
              </button>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 bg-gray-800 hover:bg-black leading-4 py-4 text-white w-full font-medium">
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
