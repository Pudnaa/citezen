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
const Highlight5 = () => {
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
      // console.log("Highlight5 config", config);
      // console.log("Highlight5 datasrc", datasrc);
      // console.log("Highlight5 otherattr", otherattr);
      // console.log("Highlight5 positionConfig", positionConfig);
    return (
        <div className="2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4 text-center">
            <h2 className=" lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold mb-4">Shopping Made Easy</h2>
            <p className=" font-normal text-base md:leading-4 leading-6 text-gray-600">We make shopping easy with curated designs, free samples and premium styles.</p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-24 md:gap-10 gap-12 lg:mt-20 mt-12">
                {/* Free Samples Grid Card */}
                <div className=" flex flex-col justify-start items-center text-center">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M29.25 17.9996H34.75V31.9996H55.25C55.9793 31.9996 56.6788 31.7099 57.1945 31.1942C57.7103 30.6785 58 29.979 58 29.2496V20.7496C58 20.0203 57.7103 19.3208 57.1945 18.8051C56.6788 18.2894 55.9793 17.9996 55.25 17.9996H47.7725C48.7851 15.9142 49.0209 13.536 48.4376 11.2922C47.8543 9.04847 46.4901 7.08623 44.5901 5.75793C42.69 4.42963 40.3786 3.82233 38.071 4.04511C35.7634 4.26789 33.6109 5.30615 32 6.97339C30.3864 5.31528 28.2356 4.28505 25.9323 4.06683C23.6289 3.84861 21.323 4.45662 19.4266 5.7822C17.5303 7.10777 16.1672 9.06452 15.5809 11.3027C14.9946 13.5409 15.2233 15.9146 16.2262 17.9996H8.75C8.02065 17.9996 7.32118 18.2894 6.80546 18.8051C6.28973 19.3208 6 20.0203 6 20.7496V29.2496C6 29.979 6.28973 30.6785 6.80546 31.1942C7.06082 31.4495 7.36398 31.6521 7.69762 31.7903C8.03127 31.9285 8.38886 31.9996 8.75 31.9996H29.25V17.9996ZM34.75 13.7496C34.75 12.9091 34.9993 12.0874 35.4663 11.3885C35.9333 10.6896 36.597 10.1448 37.3736 9.82315C38.1502 9.50148 39.0047 9.41732 39.8291 9.5813C40.6536 9.74529 41.4108 10.1501 42.0052 10.7444C42.5996 11.3388 43.0044 12.0961 43.1683 12.9205C43.3323 13.7449 43.2482 14.5995 42.9265 15.376C42.6048 16.1526 42.0601 16.8164 41.3612 17.2834C40.6623 17.7504 39.8406 17.9996 39 17.9996H34.75V13.7496ZM20.75 13.7496C20.75 12.6225 21.1978 11.5415 21.9948 10.7444C22.7918 9.94741 23.8728 9.49964 25 9.49964C26.1272 9.49964 27.2082 9.94741 28.0052 10.7444C28.8022 11.5415 29.25 12.6225 29.25 13.7496V17.9996H25C23.8728 17.9996 22.7918 17.5519 21.9948 16.7548C21.1978 15.9578 20.75 14.8768 20.75 13.7496V13.7496Z"
                            fill="#4B5563"
                        />
                        <path d="M34.75 60H51.25C51.9793 60 52.6788 59.7103 53.1945 59.1945C53.7103 58.6788 54 57.9793 54 57.25V36H34.75V60Z" fill="#4B5563" />
                        <path d="M10 57.25C10 57.9793 10.2897 58.6788 10.8055 59.1945C11.3212 59.7103 12.0207 60 12.75 60H29.25V36H10V57.25Z" fill="#4B5563" />
                    </svg>
                    <h3 className=" mt-6 text-xl leading-5 font-semibold text-gray-800">Free Samples</h3>
                    <p className=" mt-4 font-normal text-base leading-6 text-gray-600 lg:px-7 md:px-5">With our free and speedy sample service it will be easy for you to choose the design to your liking. </p>
                </div>

                {/* MonyBack Guarantee card */}

                <div className=" flex flex-col justify-start items-center text-center">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30 60V55.4475C20.0662 54.875 14.0312 49.7575 14 42H23C23.2212 45.2925 25.9825 47.8063 30 48.25V36L26.6537 35.125C19.0287 33.3525 14.9487 28.9513 14.9487 22.365C14.9487 14.6012 20.51 9.51 30 8.75V4H34V8.75C43.6737 9.5375 48.875 14.7175 49 22H40C39.905 18.9925 38.0212 16.5763 34 16.25V27.75L37.8525 28.66C45.9513 30.4325 50 34.625 50 41.5C50 49.5425 44.5325 54.735 34 55.415V60H30ZM30 27V16.25C26.5513 16.44 24.0912 18.5588 24.0912 21.5662C24.0912 24.3538 26.14 26.1763 30 27ZM34 36.75V48.25C38.7687 48.0575 41.0475 45.885 41.0475 42.5288C41.0475 39.4563 38.7687 37.3875 34 36.75Z"
                            fill="#4B5563"
                        />
                    </svg>
                    <h3 className=" mt-6 text-xl leading-5 font-semibold text-gray-800">Money Back Guarantee</h3>
                    <p className=" mt-4 font-normal text-base leading-6 text-gray-600 lg:px-7 md:px-5">We offer you 30 days to analyze the product, if it is not to your liking you can return it.</p>
                </div>

                {/* Friendly Advice card */}

                <div className=" flex flex-col justify-start items-center text-center">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M56.0001 39.0537C56.0964 38.915 56.1889 38.7712 56.2839 38.6362C58.7015 35.0432 59.9951 30.8119 60.0001 26.4813C60.0401 14.0688 49.5676 4 36.6176 4C25.3226 4 15.9001 11.6862 13.6926 21.89C13.3615 23.4022 13.1938 24.9457 13.1926 26.4937C13.1926 38.9188 23.2626 49.2575 36.2126 49.2575C38.2714 49.2575 41.0451 48.6387 42.5664 48.2212C44.0876 47.8037 45.5951 47.2525 45.9851 47.1037C46.3751 46.955 46.9851 46.8025 47.4714 46.9425L57.1489 49.74C57.234 49.7651 57.3242 49.7672 57.4103 49.7459C57.4965 49.7247 57.5754 49.6809 57.639 49.619C57.7026 49.5572 57.7487 49.4795 57.7724 49.394C57.7961 49.3085 57.7966 49.2183 57.7739 49.1325L55.5589 40.6963C55.4051 40.0713 55.3851 39.9538 56.0001 39.0537Z"
                            fill="#4B5563"
                        />
                        <path
                            d="M39.0676 51.9224C38.1057 52.0763 37.1341 52.1619 36.1601 52.1787C30.8563 52.1787 25.8476 50.7787 21.7851 48.1537C19.1864 46.5587 16.9306 44.4631 15.1488 41.9887C11.8888 37.6674 10.1113 32.1749 10.1113 26.4274C10.1113 26.0362 10.1251 25.6599 10.1388 25.2824C10.1438 25.1711 10.1143 25.0609 10.0545 24.9669C9.99462 24.8729 9.90726 24.7997 9.80429 24.757C9.70132 24.7144 9.58772 24.7046 9.47894 24.7288C9.37017 24.753 9.27149 24.8102 9.19633 24.8924C6.20326 28.1673 4.39389 32.3507 4.05719 36.7745C3.72049 41.1983 4.87588 45.6073 7.33883 49.2974C7.64758 49.7687 7.82258 50.1324 7.76883 50.3749L6.00758 59.4074C5.99133 59.4933 5.99788 59.582 6.02658 59.6645C6.05528 59.7471 6.10513 59.8207 6.17115 59.878C6.23717 59.9353 6.31706 59.9743 6.40285 59.9911C6.48864 60.0079 6.57733 60.0019 6.66008 59.9737L15.1601 56.9437C15.4178 56.8418 15.6932 56.7917 15.9703 56.7965C16.2475 56.8012 16.5209 56.8606 16.7751 56.9712C19.3188 57.9712 22.1326 58.5862 24.9463 58.5862C30.3623 58.6039 35.5794 56.5462 39.5251 52.8362C39.6065 52.7568 39.6606 52.6535 39.6795 52.5413C39.6985 52.4291 39.6812 52.3138 39.6303 52.2121C39.5793 52.1104 39.4974 52.0275 39.3962 51.9754C39.2951 51.9233 39.18 51.9048 39.0676 51.9224Z"
                            fill="#4B5563"
                        />
                    </svg>
                    <h3 className=" mt-6 text-xl leading-5 font-semibold text-gray-800">Friendly Advice </h3>
                    <p className=" mt-4 font-normal text-base leading-6 text-gray-600 lg:px-7 md:px-5">Want some answers? Our customer service is available 24/7 for your help.</p>
                </div>
            </div>
        </div>
    );
};

export default Highlight5;
