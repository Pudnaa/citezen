import { useContext } from "react";
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
const Highlight2 = () => {
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
  // console.log("Highlight2 config", config);
  // console.log("Highlight2 datasrc", datasrc);
  // console.log("Highlight2 otherattr", otherattr);
  // console.log("Highlight2 positionConfig", positionConfig);
  return (
    <div className=" 2xl:container 2xl:mx-auto md:py-12 py-9">
      <div className="bg-gray-50 overflow-hidden">
        {/* <marquee behavior="scroll" direction="left" scrollamount="20">
          <div className="  lg:py-8 lg:px-20 md:p-6 py-6 px-4 flex lg:space-x-20 space-x-12">
            <div className=" flex flex-none space-x-2 justify-center items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3334 14.7735V16.0001C29.3318 18.8754 28.4007 21.673 26.6792 23.9759C24.9576 26.2788 22.5378 27.9634 19.7806 28.7787C17.0233 29.5939 14.0764 29.496 11.3794 28.4996C8.68232 27.5032 6.37962 25.6616 4.8147 23.2496C3.24977 20.8375 2.50647 17.9842 2.69565 15.1152C2.88483 12.2462 3.99636 9.51525 5.86445 7.32957C7.73255 5.1439 10.2571 3.62065 13.0617 2.98701C15.8662 2.35336 18.8004 2.64326 21.4268 3.81348"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.3333 5.33301L16 18.6797L12 14.6797"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" flex-none text-base leading-4 font-normal text-gray-800">
                Worldwide Delivery
              </p>
            </div>
            <div className=" flex flex-none space-x-2 justify-center items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3334 14.7735V16.0001C29.3318 18.8754 28.4007 21.673 26.6792 23.9759C24.9576 26.2788 22.5378 27.9634 19.7806 28.7787C17.0233 29.5939 14.0764 29.496 11.3794 28.4996C8.68232 27.5032 6.37962 25.6616 4.8147 23.2496C3.24977 20.8375 2.50647 17.9842 2.69565 15.1152C2.88483 12.2462 3.99636 9.51525 5.86445 7.32957C7.73255 5.1439 10.2571 3.62065 13.0617 2.98701C15.8662 2.35336 18.8004 2.64326 21.4268 3.81348"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.3333 5.33301L16 18.6797L12 14.6797"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" flex-none text-base leading-4 font-normal text-gray-800">
                Cruelty Free
              </p>
            </div>
            <div className=" flex flex-none space-x-2 justify-center items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3334 14.7735V16.0001C29.3318 18.8754 28.4007 21.673 26.6792 23.9759C24.9576 26.2788 22.5378 27.9634 19.7806 28.7787C17.0233 29.5939 14.0764 29.496 11.3794 28.4996C8.68232 27.5032 6.37962 25.6616 4.8147 23.2496C3.24977 20.8375 2.50647 17.9842 2.69565 15.1152C2.88483 12.2462 3.99636 9.51525 5.86445 7.32957C7.73255 5.1439 10.2571 3.62065 13.0617 2.98701C15.8662 2.35336 18.8004 2.64326 21.4268 3.81348"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.3333 5.33301L16 18.6797L12 14.6797"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" flex-none text-base leading-4 font-normal text-gray-800">
                Drug Free
              </p>
            </div>
            <div className=" flex flex-none space-x-2 justify-center items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3334 14.7735V16.0001C29.3318 18.8754 28.4007 21.673 26.6792 23.9759C24.9576 26.2788 22.5378 27.9634 19.7806 28.7787C17.0233 29.5939 14.0764 29.496 11.3794 28.4996C8.68232 27.5032 6.37962 25.6616 4.8147 23.2496C3.24977 20.8375 2.50647 17.9842 2.69565 15.1152C2.88483 12.2462 3.99636 9.51525 5.86445 7.32957C7.73255 5.1439 10.2571 3.62065 13.0617 2.98701C15.8662 2.35336 18.8004 2.64326 21.4268 3.81348"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.3333 5.33301L16 18.6797L12 14.6797"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" flex-none text-base leading-4 font-normal text-gray-800">
                Recycleable
              </p>
            </div>
            <div className=" flex flex-none space-x-2 justify-center items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3334 14.7735V16.0001C29.3318 18.8754 28.4007 21.673 26.6792 23.9759C24.9576 26.2788 22.5378 27.9634 19.7806 28.7787C17.0233 29.5939 14.0764 29.496 11.3794 28.4996C8.68232 27.5032 6.37962 25.6616 4.8147 23.2496C3.24977 20.8375 2.50647 17.9842 2.69565 15.1152C2.88483 12.2462 3.99636 9.51525 5.86445 7.32957C7.73255 5.1439 10.2571 3.62065 13.0617 2.98701C15.8662 2.35336 18.8004 2.64326 21.4268 3.81348"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.3333 5.33301L16 18.6797L12 14.6797"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" flex-none text-base leading-4 font-normal text-gray-800">
                money-Back Guarantee
              </p>
            </div>
            <div className=" flex flex-none space-x-2 justify-center items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3334 14.7735V16.0001C29.3318 18.8754 28.4007 21.673 26.6792 23.9759C24.9576 26.2788 22.5378 27.9634 19.7806 28.7787C17.0233 29.5939 14.0764 29.496 11.3794 28.4996C8.68232 27.5032 6.37962 25.6616 4.8147 23.2496C3.24977 20.8375 2.50647 17.9842 2.69565 15.1152C2.88483 12.2462 3.99636 9.51525 5.86445 7.32957C7.73255 5.1439 10.2571 3.62065 13.0617 2.98701C15.8662 2.35336 18.8004 2.64326 21.4268 3.81348"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.3333 5.33301L16 18.6797L12 14.6797"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" flex-none text-base leading-4 font-normal text-gray-800">
                No side Effects
              </p>
            </div>
          </div>
        </marquee> */}
      </div>
      <style>
        {`
            #outerDiv{
                animation: bannermove 13s linear infinite;
                animation-delay: 6.75s;
           }
            @keyframes bannermove {
                0% {
                    transform: translateX(100%);
                }
                100% {
                    transform: translateX(-100%);
                }
            }
            `}
      </style>
    </div>
  );
};

export default Highlight2;
