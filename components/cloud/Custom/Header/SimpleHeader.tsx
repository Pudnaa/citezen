import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import Link from "next/link";
import { useUser } from "hooks/use-user";
import { AtomImage } from "@components/common/Atom";
import { isEmpty } from "lodash";

export default function HeaderSimple() {
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
  
  const [sideBar, setSideBar] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuSm, setShowMenuSm] = useState(false);
  const [search, setSearch] = useState(false);
  const userContext = useUser();
  
  if (isEmpty(datasrc)) return null;

  return (
    <div className="dark:bg-gray-900">
      <div className=" mx-auto relative">
        <div className="py-2">
          <div className="flex items-center justify-between">
            <AtomImage
              item="https://cloud.veritech.mn/app/storage/uploads/process/logo.png"
              customClassName=""
              link="#"
            />

            <div className="text-left w-full">
              <h2 className="text-gray-800 dark:text-gray-100 font-bold text-lg mt-4">
                {config.sectionTitle}
              </h2>
            </div>

            <div className="lg:w-3/12 flex items-center lg:justify-end space-x-6 lg:space-x-4 xl:space-x-6">
              <div className="flex items-center pl-3 bg-white  rounded-lg border-gray-400 border">
                <svg
                  className="text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 17.5L12.5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  className="py-2.5 pl-1 w-full focus:outline-none text-sm rounded text-gray-600 placeholder-gray-500 border-0"
                  placeholder="Хайх "
                />
              </div>

              <div className="hidden md:flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full border border-white text-center ">
                  <i className="far fa-user mt-1" style={{ fontSize: 19 }}></i>{" "}
                </div>
                <span>
                  {" "}
                  {userContext.userData ? userContext.userData.personname : ""}
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-2">
                <Link href="logout">
                  <a>
                    <i
                      className="far fa-sign-out-alt text-black"
                      title="Гарах"
                      style={{ fontSize: 19 }}
                    ></i>
                  </a>
                </Link>
              </div>
              {/* <Icons data={dataIcons1} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
