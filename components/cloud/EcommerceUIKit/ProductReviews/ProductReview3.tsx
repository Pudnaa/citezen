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

const ProductReview3 = () => {
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
  if (isEmpty(datasrc)) return null;
  // console.log("ProductReview3 config", config);
  // console.log("ProductReview3 datasrc", datasrc);
  // console.log("ProductReview3 otherattr", otherattr);
  // console.log("ProductReview3 positionConfig", positionConfig);
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
    <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
      <div>
        <h1 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text0gray-800">
          Reviews
        </h1>
        <div className=" mt-4 flex">
          <p className=" font-medium text-base leading-4 text-gray-600 mr-4">
            5/5
          </p>
          {starContainer("", 5)}
        </div>
      </div>

      <hr className=" w-full bg-gray-200 my-10" />

      {datasrc &&
        datasrc.map((item: any, index: number) => {
          return (
            <>
              <div className=" flex lg:flex-row flex-col w-full">
                <div className="lg:w-3/12 w-full lg:block flex justify-between">
                  <div>
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position5",
                        positionConfig
                      )}
                      customClassName="font-normal text-sm leading-3 text-gray-600"
                    />
                    <br />
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      customClassName="font-medium text-base leading-4 text-gray-800 mt-4"
                    />
                  </div>

                  <div className=" lg:hidden  md:flex justify-end hidden items-end flex-col">
                    <p className=" font-normal text-sm leading-3 text-gray-600">
                      Rated:{" "}
                      {renderPositionType(item, "position51", positionConfig)}/5
                    </p>
                    {starContainer(
                      "mt-4",
                      renderPositionType(item, "position51", positionConfig)
                    )}
                  </div>
                </div>
                <div className="w-3/12 lg:block hidden">
                  <p className=" font-normal text-sm leading-3 text-gray-600">
                    Rated:{" "}
                    {renderPositionType(item, "position51", positionConfig)}/5
                  </p>
                  {starContainer(
                    "mt-4",
                    renderPositionType(item, "position51", positionConfig)
                  )}
                </div>
                <div className="lg:w-6/12 w-full lg:mt-0 md:mt-12 mt-10">
                  <AtomTitle
                    item={renderPositionType(item, "position1", positionConfig)}
                    customClassName="font-medium text-xl leading-7 sm:leading-5 text-gray-800"
                  />
                  <AtomText
                    item={renderPositionType(item, "position3", positionConfig)}
                    customClassName="font-normal text-base leading-6 text-gray-600 mt-4"
                  />
                </div>
                <div className=" flex justify-start md:hidden items-start mt-8 flex-col">
                  <p className=" font-normal text-sm leading-3 text-gray-600">
                    Rated:{" "}
                    {renderPositionType(item, "position51", positionConfig)}/5
                  </p>
                  {starContainer(
                    "mt-2",
                    renderPositionType(item, "position51", positionConfig)
                  )}
                </div>
              </div>

              <hr className=" w-full bg-gray-200 my-10" />
            </>
          );
        })}
    </div>
  );
};

export default ProductReview3;
