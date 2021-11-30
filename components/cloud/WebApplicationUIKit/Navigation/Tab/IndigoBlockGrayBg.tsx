import { useContext, useState, FC } from "react";
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
type PropsType = {
  items: string[];
  styling: string;
  active: string;
};
const IndigoBlockGrayBg: FC<PropsType> = ({ items, styling, active }) => {
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
  const [activeStatus, setActiveStatus] = useState(1);
  if (isEmpty(datasrc)) return null;
  // console.log("IndigoBlockGrayBg config", config);
  // console.log("IndigoBlockGrayBg datasrc", datasrc);
  // console.log("IndigoBlockGrayBg otherattr", otherattr);
  // console.log("IndigoBlockGrayBg positionConfig", positionConfig);
  return (
    <div>
      <div className='sm:hidden relative w-11/12 mx-auto rounded'>
        <div className='absolute inset-0 m-auto mr-4 z-0 w-6 h-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-selector'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#A0AEC0'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' />
            <polyline points='8 9 12 5 16 9' />
            <polyline points='16 15 12 19 8 15' />
          </svg>
        </div>
        <select
          aria-label='Selected tab'
          className='form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10'
        >
          {items &&
            items.map((item: any, index: number) => {
              return (
                <option key={index} className=''>
                  {item}{" "}
                </option>
              );
            })}
        </select>
      </div>
      <div className='justify-start flex-wrap hidden sm:flex'>
        {items &&
          items.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={`py-2 px-2 ${styling} rounded-lg mr-2.5 font-normal cursor-pointer mt-2.5 ${
                  activeStatus === index ? active : ""
                }`}
                onClick={() => setActiveStatus(index)}
              >
                {item}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default IndigoBlockGrayBg;
