import { useContext, useState } from "react";
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
  AtomImage,
} from "@components/common/Atom";

const ProductReview2 = () => {
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
  const sorts = ["Name", "Date"];
  const [menu, setMenu] = useState(false);
  const [sort, setSort] = useState("Sort by");

  if (isEmpty(datasrc)) return null;
  // console.log("ProductReview2 config", config);
  // console.log("ProductReview2 datasrc", datasrc);
  // console.log("ProductReview2 otherattr", otherattr);
  // console.log("ProductReview2 positionConfig", positionConfig);

  const changeSort = (e: any) => {
    setMenu(false);
    setSort(e.target.textContent);
  };

  const starContainer = (classname: any, num: number) => {
    return (
      <div className={`cursor-pointer flex space-x-2 ${classname}`}>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={num >= 1 ? "#1F2937" : "#D1D5DB"}
          />
        </svg>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={num >= 2 ? "#1F2937" : "#D1D5DB"}
          />
        </svg>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={num >= 3 ? "#1F2937" : "#D1D5DB"}
          />
        </svg>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={num >= 4 ? "#1F2937" : "#D1D5DB"}
          />
        </svg>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={num >= 5 ? "#1F2937" : "#D1D5DB"}
          />
        </svg>
      </div>
    );
  };

  return (
    <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6  px-4 py-9">
      <div className=" text-center">
        <h1 className=" text-gray-800 font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7">
          Reviews
        </h1>
        <p className=" text-gray-600 text-base leading-4 mt-2">
          Join a conversation{" "}
          <a
            href="/"
            className="focus:outline-none focus:text-black focus:underline hover:underline text-gray-800 cursor-pointer"
          >
            Write a review
          </a>
        </p>
        <div className=" flex space-x-4 justify-center items-center lg:mt-5 mt-4">
          <p className=" text-base leading-7 text-gray-600 font-normal">
            Overall rating
          </p>
          {starContainer("", 4)}
          <span className="text-base leading-7 text-gray-600 font-normal">
            4.5/5
          </span>
        </div>
      </div>
      <div className=" flex justify-between lg:mt-12 md:mt-10 mt-12 mb-14">
        <div className=" flex justify-between items-center border border-gray-400 p-2 w-28 md:w-32 h-10">
          <div className="relative w-full">
            <p className=" px-2 text-left leading-4 text-base text-gray-600 py-4 w-full">
              {sort}
            </p>
            <button
              onClick={() => setMenu(!menu)}
              className="focus:outline-none focus:ring-2  focus:ring-gray-500 rounded-full cursor-pointer absolute top-4 right-0"
            >
              <svg
                className={"transform " + (menu ? "rotate-180" : "rotate-0")}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.6665 6.00016L7.99984 11.3335L13.3332 6.00016"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={
                menu
                  ? "shadow absolute z-10 bg-white top-8 w-full mt-3"
                  : "shadow absolute z-10 bg-white top-8 w-full mt-3 hidden"
              }
            >
              <div className="flex flex-col w-full">
                {sorts.map((sort) => (
                  <p
                    key={sort}
                    onClick={changeSort}
                    className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                  >
                    {sort}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" ml-2 sm:ml-0 md:py-2 md:px-3 p-2 border border-gray-400 flex justify-start items-center md:justify-center md:items-center md:w-60 lg:w-64 md:h-auto w-10 h-10 space-x-3">
          <svg
            className="cursor-pointer mt-1"
            width="21"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4359 10.6826L7.88535 7.13203C8.43633 6.41973 8.73438 5.54883 8.73438 4.63281C8.73438 3.53633 8.30645 2.5082 7.53262 1.73301C6.75879 0.957812 5.72793 0.53125 4.63281 0.53125C3.5377 0.53125 2.50684 0.95918 1.73301 1.73301C0.957812 2.50684 0.53125 3.53633 0.53125 4.63281C0.53125 5.72793 0.95918 6.75879 1.73301 7.53262C2.50684 8.30781 3.53633 8.73438 4.63281 8.73438C5.54883 8.73438 6.41836 8.43633 7.13066 7.88672L10.6813 11.4359C10.6917 11.4464 10.704 11.4546 10.7176 11.4603C10.7312 11.4659 10.7458 11.4688 10.7605 11.4688C10.7753 11.4688 10.7899 11.4659 10.8035 11.4603C10.8171 11.4546 10.8294 11.4464 10.8398 11.4359L11.4359 10.8412C11.4464 10.8308 11.4546 10.8184 11.4603 10.8048C11.4659 10.7912 11.4688 10.7766 11.4688 10.7619C11.4688 10.7472 11.4659 10.7326 11.4603 10.719C11.4546 10.7054 11.4464 10.693 11.4359 10.6826ZM6.79844 6.79844C6.21875 7.37676 5.45039 7.69531 4.63281 7.69531C3.81523 7.69531 3.04688 7.37676 2.46719 6.79844C1.88887 6.21875 1.57031 5.45039 1.57031 4.63281C1.57031 3.81523 1.88887 3.04551 2.46719 2.46719C3.04688 1.88887 3.81523 1.57031 4.63281 1.57031C5.45039 1.57031 6.22012 1.8875 6.79844 2.46719C7.37676 3.04688 7.69531 3.81523 7.69531 4.63281C7.69531 5.45039 7.37676 6.22012 6.79844 6.79844Z"
              fill="#4B5563"
            />
          </svg>
          <input
            className="focus:border-none outline-none border-none text-gray-600 text-base leading-4 bg-opacity-0 hidden w-full md:block md:w-full"
            type="text"
            placeholder="Enter Phrase or keywords"
          />
        </div>
      </div>

      {datasrc &&
        datasrc.map((item: any, index: number) => {
          const user = renderPositionType(
            item,
            "position43",
            positionConfig
          )[0];
          return (
            <>
              <div className=" flex justify-between lg:space-x-28 md:space-x-20">
                {starContainer(
                  "",
                  renderPositionType(item, "position51", positionConfig)
                )}
                <div className=" hidden md:block">
                  <div className=" md:w-10/12 lg:pr-5 ">
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      customClassName="text-gray-800 font-medium lg:text-2xl text-xl lg:leading-6 leading-5 mb-4"
                    />

                    <AtomText
                      item={renderPositionType(
                        item,
                        "position3",
                        positionConfig
                      )}
                      customClassName="text-gray-600 text-base leading-6 font-normal mb-8"
                    />
                    <p className=" text-gray-600 text-base leading-4 font-normal mb-4">
                      Posted by{" "}
                      <AtomText
                        item={renderPositionType(
                          user,
                          "position1",
                          positionConfig
                        )}
                        customClassName="text-gray-800 font-medium text-base leading-4"
                      />
                    </p>
                    <p className=" text-gray-600 text-base leading-4 font-normal mb-16">
                      From{" "}
                      <AtomText
                        item={renderPositionType(
                          user,
                          "position3",
                          positionConfig
                        )}
                        customClassName="text-gray-800 text-base leading-4 font-semibold"
                      />
                    </p>

                    <a
                      href="/"
                      className="focus:outline-none focus:text-black focus:underline text-gray-600 text-sm leading-3 hover:underline cursor-pointer"
                    >
                      Report Inappropriate Content
                    </a>
                  </div>
                </div>
                <div className=" flex justify-center lg:w-32 ">
                  <AtomText
                    item={renderPositionType(item, "position5", positionConfig)}
                    customClassName="text-gray-600 text-base leading-4 font-normal w-max block"
                  />
                </div>
              </div>
              <div className=" block md:hidden mt-6">
                <AtomTitle
                  item={renderPositionType(item, "position1", positionConfig)}
                  customClassName="text-gray-800 font-medium lg:text-2xl text-xl lg:leading-6 leading-5 mb-4"
                />
                <AtomText
                  item={renderPositionType(item, "position3", positionConfig)}
                  customClassName="text-gray-600 text-base leading-6 font-normal mb-8"
                />
                <br />

                <p className=" ">
                  Posted by{" "}
                  <AtomText
                    item={renderPositionType(user, "position1", positionConfig)}
                    customClassName="text-gray-800 font-medium text-base leading-4"
                  />
                </p>
                <p className=" text-gray-600 text-base leading-4 font-normal mb-16">
                  From{" "}
                  <AtomText
                    item={renderPositionType(user, "position3", positionConfig)}
                    customClassName="text-gray-800 text-base leading-4 font-semibold"
                  />
                </p>

                <a
                  href="/"
                  className="focus:outline-none focus:text-black focus:underline text-gray-600 text-sm leading-3 hover:underline cursor-pointer"
                >
                  Report Inappropriate Content
                </a>
              </div>

              <hr className=" bg-gray-100 text-gray-100 w-full my-12" />
            </>
          );
        })}
    </div>
  );
};

export default ProductReview2;
