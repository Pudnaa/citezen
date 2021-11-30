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
} from "@components/common/Atom";

export default function Card110() {
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
  //console.log("Card110 config", config);
  //  console.log("Card110 datasrc", datasrc);
  //console.log("Card110 otherattr", otherattr);
  //   console.log("Card110 positionConfig", positionConfig);

  return (
    <div className='w-full flex justify-center py-12 px-4'>
      {datasrc.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className='bg-gray-100 dark:bg-gray-800 rounded-md px-4 py-4 lg:px-8 lg:py-7 w-full md:w-10/12  lg:w-9/12 xl:w-1/2'
          >
            <div className='sm:flex w-full justify-between'>
              <AtomTitle
                item={renderPositionType(item, "position1", positionConfig)}
                link=''
                customStyle={{}}
                customClassName='text-base md:text-xl font-bold leading-tight text-brand'
                truncateRow={2}
              />
            </div>
            <div className='mt-6'>
              <div className='flex items-center '>
                <div className='h-4 w-4 bg-green-300 text-white dark:text-black rounded-full flex justify-center items-center font-bold'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-check'
                    width={14}
                    height={14}
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M5 12l5 5l10 -10' />
                  </svg>
                </div>
                <AtomText
                  item={renderPositionType(item, "position3", positionConfig)}
                  customClassName='text-sm leading-5 font-semibold py-4 text-black mr-16 pl-10'
                />
                {/* <p className="text-sm md:text-base leading-none text-gray-600 dark:text-gray-300 pl-2">Subscribe button with outlined input </p> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
