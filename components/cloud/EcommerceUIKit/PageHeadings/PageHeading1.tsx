import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { divide, isEmpty } from "lodash";
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
  AtomLink,
} from "@components/common/Atom";
const PageHeading1 = () => {
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
  // console.log("PageHeading1 config", config);
  // console.log("PageHeading1 datasrc", datasrc);
  // console.log("PageHeading1 otherattr", otherattr);
  // console.log("PageHeading1 positionConfig", positionConfig);

  const list = {
    greatCategory: "Тоормоз",
    category: "Тоормозны систем",
  };
  const car = {
    make: "Toyota",
    model: "Corolla saloon",
    engine: "220 SEB (111.021) Petrol 120 hp",
  };

  return otherattr.type === "gocars" ? (
    <div className="py-3">
      <p className="text-2xl font-medium">
        <span className="font-bold">
          {car.make + " " + car.model + " " + car.engine}
        </span>
        -нд тохирсон <span className="font-bold">{list.category}</span>
      </p>
      <div className="w-full flex items-center rounded-lg border mt-5 p-2">
        <AtomLink
          item="/page/1637315553920451"
          children={
            <div className=" bg-gray-100">
              <img
                src="https://www.autodoc.co.uk/atd/img/icon_steps_two.png?1637326861"
                width="26px"
                height="21px"
              />
            </div>
          }
        />
        <div className="flex items-center mx-4 bg-gray-100 w-1/6 justify-center">
          <p className="mr-2 uppercase text-xs break-all max-h-4 tracking-tighter overflow-hidden">
            {list.greatCategory}
          </p>
          <i className="fa fa-sort-desc pb-1 cursor-pointer"></i>
        </div>
        <div className="flex items-center bg-gray-100 justify-center w-1/6">
          <p className="mr-2 uppercase text-xs break-all max-h-4 tracking-tighter overflow-hidden">
            {list.category}
          </p>
          <i className="fa fa-sort-desc pb-1 cursor-pointer"></i>
        </div>
        <div className="flex items-center mx-4 bg-gray-100 justify-center w-1/6">
          <p className="mr-2 uppercase text-xs break-all max-h-4 tracking-tighter overflow-hidden">
            {car.make}
          </p>
          <i className="fa fa-sort-desc pb-1 cursor-pointer"></i>
        </div>
        <div className="flex items-center bg-gray-100 justify-center w-1/6">
          <p className="mr-2 uppercase text-xs break-all max-h-4 tracking-tighter overflow-hidden">
            {car.model}
          </p>
          <i className="fa fa-sort-desc pb-1 cursor-pointer"></i>
        </div>
        <div className="flex items-center mx-4  bg-gray-100 justify-center w-1/6">
          <p className="mr-2 uppercase text-xs break-all max-h-4 overflow-hidden tracking-tighter">
            {car.engine}
          </p>
          <i className="fa fa-sort-desc pb-1 cursor-pointer"></i>
        </div>
      </div>
    </div>
  ) : (
    <div className="py-16 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container flex justify-center items-center">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col justify-start items-start">
          <p className="text-sm leading-none text-gray-600">home - watches</p>
          <div className="mt-2 flex flex-row justify-end items-center space-x-3">
            <p className="text-2xl font-semibold leading-normal text-gray-800">
              Watches
            </p>
            <p className="text-base leading-4 text-gray-600 mt-2">
              (09 products)
            </p>
          </div>
        </div>

        <button className="hover:text-gray-500 text-gray-600 bg-gray-100 py-3.5 px-3 rounded-sm flex flex-row justify-center items-center space-x-3">
          <svg
            className="fill-stroke"
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 14.6452V9.33875"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6.30645V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 14.6452V7.82263"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4.79032V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 14.6452V10.8549"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 7.82258V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 9.33875H7"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 4.79028H15"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 10.8549H23"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="hidden md:block text-sm leading-none">Filters</p>
        </button>
      </div>
    </div>
  );
};

export default PageHeading1;
