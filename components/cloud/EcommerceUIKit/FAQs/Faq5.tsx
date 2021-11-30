import { useContext, useState, Fragment } from "react";
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

export default function Faq5() {
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
  // console.log("Faq5 config", config);
  // console.log("Faq5 datasrc", datasrc);
  // console.log("Faq5 otherattr", otherattr);
  // console.log("Faq5 positionConfig", positionConfig);
  return (
    <div>
      <div className=" 2xl:container 2xl:mx-auto relative">
        <div className=" w-full h-full bg-black bg-opacity-30 absolute top-0 left-0 text-center">
          <div className=" w-full h-full flex justify-center items-center flex-col">
            <h1 className="lg:text-4xl text-3xl lg:leading-9 leading-7 text-white font-semibold">
              FAQs
            </h1>
            <p className=" font-medium md:text-xl md:leading-5 text-lg leading-7 text-white mt-8 sm:w-full w-9/12 ">
              Find Answers to Frequently Asked Questions
            </p>
          </div>
        </div>
        <img
          className=" lg:block hidden w-full"
          src="https://i.ibb.co/vzV3ZG5/Rectangle-6-8.png"
          alt="Image with ladies bag and accessories"
        />
        <img
          className=" lg:hidden sm:block hidden w-full"
          src="https://i.ibb.co/TmrtnBV/Rectangle-6-7.png"
          alt="Image with ladies bag and accessories"
        />
        <img
          className=" block sm:hidden w-full"
          src="https://i.ibb.co/dmTNcWD/img.png"
          alt="Image with ladies bag and accessories"
        />
      </div>
      <div className=" 2xl:w-5/12 lg:mx-auto lg:w-7/12 w-full md:py-12 md:px-6 py-12 px-4">
        {datasrc &&
          datasrc.map((item: any, index: number) => {
            return (
              <Fragment>
                <div>
                  <AtomTitle
                    item={renderPositionType(item, "position1", positionConfig)}
                    customClassName="font-medium md:text-2xl md:leading-6 text-xl leading-7 text-gray-800"
                  />
                  <div className=" md:mt-6 mt-4">
                    {renderPositionType(item, "position31", positionConfig).map(
                      (item1: any, index1: number) => {
                        return index1 + 1 !==
                          renderPositionType(item, "position31", positionConfig)
                            .length ? (
                          <Fragment>
                            <AtomText
                              item={renderPositionType(
                                item1,
                                "position3",
                                positionConfig
                              )}
                              customClassName="font-normal text-base leading-6 text-gray-600"
                            />
                            <br />
                            <br />
                          </Fragment>
                        ) : (
                          <AtomText
                            item={renderPositionType(
                              item1,
                              "position3",
                              positionConfig
                            )}
                            customClassName="font-normal text-base leading-6 text-gray-600"
                          />
                        );
                      }
                    )}
                  </div>
                </div>
                <hr className=" w-full my-8" />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}
