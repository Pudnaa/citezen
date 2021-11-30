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

const ProductReview1 = () => {
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
  const [menu, setMenu] = useState(true);
  const [menu1, setMenu1] = useState(false);
  if (isEmpty(datasrc)) return null;
  // console.log("ProductReview1 config", config);
  // console.log("ProductReview1 datasrc", datasrc);
  // console.log("ProductReview1 otherattr", otherattr);
  // console.log("ProductReview1 positionConfig", positionConfig);
  const item = datasrc;
  const user = renderPositionType(item[0], "position43", positionConfig)[0];
  const user1 = renderPositionType(item[1], "position43", positionConfig)[0];

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
    <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-start items-start w-full space-y-8">
        <div className="flex justify-start items-start">
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Reviews
          </p>
        </div>
        <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-8">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex flex-row justify-between items-start">
              <AtomTitle
                item={renderPositionType(item[0], "position1", positionConfig)}
                customClassName="text-xl md:text-2xl font-medium leading-normal text-gray-800"
              />
              <button onClick={() => setMenu(!menu)} className="ml-4 md:hidden">
                <svg
                  className={"transform " + (menu ? "rotate-180" : "rotate-0")}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 12.5L10 7.5L5 12.5"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {starContainer(
              "mt-2 md-mt-0",
              renderPositionType(item[0], "position51", positionConfig)
            )}
          </div>
          {/* className={"md:block " + (menu1 ? "block" : "hidden")} */}
          <div className={"md:block " + (menu ? "block" : "hidden")}>
            <AtomText
              item={renderPositionType(item[0], "position3", positionConfig)}
              customClassName="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6"
            />
            <div className="hidden md:flex mt-6 flex-row justify-start items-start space-x-4">
              {renderPositionType(item[0], "position31", positionConfig).map(
                (item1: any, index1: number) => {
                  return (
                    <div key={index1}>
                      <AtomImage
                        item={renderPositionType(
                          item1,
                          "position2",
                          positionConfig
                        )}
                        customClassName="w-auto"
                        alt={renderPositionType(
                          item[0],
                          "position1",
                          positionConfig
                        )}
                      />
                    </div>
                  );
                }
              )}
            </div>
            <div
              className="md:hidden carousel pt-8 cursor-none"
              data-flickity='{ "wrapAround": true,"pageDots": false }'
            >
              {renderPositionType(item[0], "position31", positionConfig).map(
                (item1: any, index1: number) => {
                  return (
                    <div key={index1} className="carousel-cell">
                      <div className="md:w-full h-full relative">
                        <AtomImage
                          item={renderPositionType(
                            item1,
                            "position2",
                            positionConfig
                          )}
                          customClassName="w-full h-full object-fit object-cover"
                          alt={renderPositionType(
                            item[0],
                            "position1",
                            positionConfig
                          )}
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
              <div>
                <AtomImage
                  item={renderPositionType(user, "position2", positionConfig)}
                  customClassName="w-auto"
                  alt={renderPositionType(user, "position1", positionConfig)}
                />
              </div>
              <div className="flex flex-col justify-start items-start space-y-2">
                <AtomTitle
                  item={renderPositionType(user, "position1", positionConfig)}
                  customClassName="text-base font-medium leading-none text-gray-800"
                />
                <AtomText
                  item={renderPositionType(user, "position5", positionConfig)}
                  customClassName="text-sm leading-none text-gray-600"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-start flex-col bg-gray-50 md:px-8 py-8">
            <div className="flex flex-col md:flex-row  justify-between w-full">
              <div className="flex flex-row justify-between items-start">
                <AtomTitle
                  item={renderPositionType(
                    item[1],
                    "position1",
                    positionConfig
                  )}
                  customClassName="text-xl md:text-2xl font-medium leading-normal text-gray-800"
                />
                <button
                  onClick={() => setMenu1(!menu1)}
                  className="ml-4 md:hidden"
                >
                  <svg
                    className={
                      "transform " + (menu1 ? "rotate-180" : "rotate-0")
                    }
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 12.5L10 7.5L5 12.5"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {starContainer(
                "mt-2 md:mt-0",
                renderPositionType(item[1], "position51", positionConfig)
              )}
            </div>
            <div className={"md:block " + (menu1 ? "block" : "hidden")}>
              <AtomText
                item={renderPositionType(item[1], "position3", positionConfig)}
                customClassName="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6"
              />
              <div className="mt-6 flex flex-row justify-start items-start space-x-4">
                {renderPositionType(item[1], "position31", positionConfig).map(
                  (item1: any, index1: number) => {
                    return (
                      <div key={index1} className="py-4 px-8 bg-gray-100">
                        <AtomImage
                          item={renderPositionType(
                            item1,
                            "position2",
                            positionConfig
                          )}
                          customClassName="w-auto"
                          alt={renderPositionType(
                            item[1],
                            "position1",
                            positionConfig
                          )}
                        />
                      </div>
                    );
                  }
                )}
              </div>
              <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                <div>
                  <AtomImage
                    item={renderPositionType(
                      user1,
                      "position2",
                      positionConfig
                    )}
                    customClassName="w-auto"
                    alt={renderPositionType(
                      user[1],
                      "position1",
                      positionConfig
                    )}
                  />
                </div>
                <div className="flex flex-col justify-start items-start space-y-2">
                  <AtomTitle
                    item={renderPositionType(
                      user1,
                      "position1",
                      positionConfig
                    )}
                    customClassName="text-base font-medium leading-none text-gray-800"
                  />

                  <AtomText
                    item={renderPositionType(
                      user1,
                      "position5",
                      positionConfig
                    )}
                    customClassName="text-sm leading-none text-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview1;
