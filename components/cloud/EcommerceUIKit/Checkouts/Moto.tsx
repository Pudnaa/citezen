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
import RenderAtom from "@components/common/Atom/RenderAtom";

const Moto = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext);
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);

  // console.log("Moto config", config);
  // console.log("Moto readyDatasrc", readyDatasrc);
  // console.log("Moto widgetnemgooReady", widgetnemgooReady);
  // console.log("Moto positionConfig", positionConfig);
  const item = readyDatasrc[0];
  return (
    <div className="py-0 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container">
      <div className="flex flex-col justify-start items-start space-y-9 ">
        <div className="flex p-4 md:p-6 xl:p-10  w-full  flex-col justify-start items-start">
          <div className="w-full flex  justify-between ">
            <RenderAtom
              item={item?.position1}
              defaultAtom="title"
              customClassName="text-lg md:text-xl font-normal  leading-normal text-gray-900 tracking-tighter"
            />
            <div className="flex flex-row items-center gap-3 ">
              <div>
                {readyDatasrc &&
                  readyDatasrc.map((item: any, index: number) => {
                    return (
                      <div className="flex flex-col justify-start items-start w-full">
                        <RenderAtom
                          item={item?.position2}
                          defaultAtom="text"
                          customClassName="text-xs leading-4 text-gray-600 tracking-tighter"
                        />
                      </div>
                    );
                  })}
              </div>
              <div className="rounded-full relative ">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle1"
                  className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
                />
                <label
                  htmlFor="toggle1"
                  className="toggle-label dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                />
              </div>
              <div className="">
                <button className="bg-white text-gray-700 flex items-center justify-center border border-blue-200 rounded hover:border-blue-300 text-xs focus:outline-none">
                  <span className="p-3 ml-3 text-gray-200">Марк</span>
                  <span
                    className="py-3 rounded-r px-2"
                    onClick={() => setshow2(!show2)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                {show2 && (
                  <ul className="bg-white shadow rounded  py-1 right-0 left-0 top-0  dropdown-content">
                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100  px-3 font-normal">
                      Америк
                    </li>
                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
                      Англи
                    </li>
                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
                      Герман
                    </li>
                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
                      Голланд
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <hr className=" w-full mt-3" />
          <div className="w-full  flex flex-col justify-start items-start mt-12 space-y-6 md:space-y-9">
            <div className="grid grid-cols-1 md:grid-cols-4 w-full  gap-3 ">
              {readyDatasrc &&
                readyDatasrc.map((item: any, index: number) => {
                  return (
                    <button className=" flex justify-between items-start bg-gray-200 mt-5 py-4 px-8 rounded   mx-2 my-2 focus:outline-none  hover:shadow-lg ">
                      <div className="flex flex-col items-start">
                        <RenderAtom
                          item={item?.position3}
                          defaultAtom="text"
                          customClassName="text-sm leading-4 text-gray-500  font-bold checkbox checked:border-none "
                        />
                        <RenderAtom
                          item={item?.position4}
                          defaultAtom="text"
                          customClassName="text-sm leading-4 text-gray-500 mt-2 "
                        />
                      </div>
                      <div className="">
                        <RenderAtom
                          item={item?.position5}
                          defaultAtom="text"
                          customClassName="text-sm leading-4 text-gray-500 mt-5 bg-gray-300 rounded-full w-8 h-6  p-1 border border-white   "
                        />
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
            .checkbox:checked + .check-icon {
                display: flex;
            }
            .checkbox:checked {
                /* Apply class right-0*/
                right: 0;
            }
            .checkbox:checked + .toggle-label {
                /* Apply class bg-indigo-700 */
                background-color: #4c51bf;
            }`}
      </style>
    </div>
  );
};

export default Moto;
