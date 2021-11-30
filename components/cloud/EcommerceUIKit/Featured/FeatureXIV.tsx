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
  AtomFade,
  AtomImage,
} from "@components/common/Atom";

const FeatureXIV = () => {
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
  const [image, setImage] = useState(true);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const list = [image, image2, image3];
  const [btn, setBtn] = useState(false);
  const [btn2, setBtn2] = useState(true);
  const [btn3, setBtn3] = useState(true);
  const list1 = [btn, btn2, btn3];

  if (isEmpty(datasrc)) return null;
  // console.log("FeatureXIV config", config);
  // console.log("FeatureXIV datasrc", datasrc);
  // console.log("FeatureXIV otherattr", otherattr);
  // console.log("FeatureXIV positionConfig", positionConfig);
  const item = datasrc[0];
  const images = renderPositionType(item, "position31", positionConfig);

  const toggleImage = (value: number) => {
    switch (value) {
      case 0:
        setImage(true);
        setImage2(false);
        setImage3(false);

        setBtn(false);
        setBtn2(true);
        setBtn3(true);
        break;
      case 1:
        setImage(false);
        setImage2(true);
        setImage3(false);

        setBtn(true);
        setBtn2(false);
        setBtn3(true);
        break;
      case 2:
        setImage(false);
        setImage2(false);
        setImage3(true);

        setBtn(true);
        setBtn2(true);
        setBtn3(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-strech justify-center py-12 mx-6">
        <div className="relative lg:w-3/5  flex justify-center image-height">
          {images &&
            images.map((item1: any, index1: number) => {
              return (
                <AtomImage
                  key={index1}
                  item={renderPositionType(item1, "position2", positionConfig)}
                  customClassName={
                    list[index1]
                      ? "transform-visible block absolute w-auto h-full"
                      : "transform-hidden"
                  }
                  alt={renderPositionType(item, "position1", positionConfig)}
                />
              );
            })}
        </div>
        <div className="relative lg:w-2/5 flex flex-col-reverse lg:flex-col justify-center lg:ml-8">
          <div className="mt-10 lg:mt-0">
            <p className="text-2xl">
              From{" "}
              <AtomCurrency
                type="mnt"
                item={renderPositionType(item, "position4", positionConfig)}
                customClassName="text-yellow-600 font-bold "
              />
            </p>
            <AtomText
              item={renderPositionType(item, "position3", positionConfig)}
              customClassName="text-base leading-normal text-gray-600 mt-6 lg:w-10/12"
            />
            <div>
              <AtomButton
                item={renderPositionType(item, "position45", positionConfig)}
                color=""
                customClassName="bg-gray-800 py-4 px-8 text-base font-medium text-center text-white mt-10 lg:mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-600 w-full md:w-auto"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6 lg:mt-12">
            {images &&
              images.map((item1: any, index1: number) => {
                return (
                  <button
                    key={index1}
                    onClick={() => toggleImage(index1)}
                    className={`flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:opacity-70
                      ${list1[index1] ? "block" : "hidden"} `}
                  >
                    <AtomImage
                      item={renderPositionType(
                        item1,
                        "position2",
                        positionConfig
                      )}
                      customClassName="w-40 h-30"
                      alt={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                    />
                  </button>
                );
              })}
          </div>
        </div>
      </div>
      <style>
        {`
                .transform-hidden {
                transform: scale(0.1);
                opacity: 0;
            }

            .transform-visible {
                animation: transformScale 0.7s ease-in-out;
                transform: scale(1);
                opacity: 1;
            }
            .image-height {
                height: 581px;
            }
             @keyframes transformScale {
                from {
                    transform: scale(0.1);
                    opacity: 0;
                }

                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
            
            `}
      </style>
    </div>
  );
};

export default FeatureXIV;
