import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import Link from "next/link";
import { useUser } from "hooks/use-user";
import {
  AtomImage,
  AtomText,
  AtomTitle,
  AtomIcon,
  AtomInput,
} from "@components/common/Atom";
export default function HorizontalNavigation() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    renderPositionType,
    Title,
  } = useContext(WidgetWrapperContext);

  const userContext = useUser();
  const [sideBar, setsideBar] = useState();
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);

  if (isEmpty(datasrc)) return null;

  return (
    <>
      <div className="h-full w-full">
        {/* Code block starts */}
        <nav
          role="navigation"
          className="px-4 w-full mx-auto block"
          style={{ background: "#F8F9FA" }}
        >
          <div
            className={`justify-between h-14 flex items-center ${
              otherattr?.insideDiv?.className || ""
            }`}
          >
            <div className="h-full flex items-center py-3">
              <AtomImage
                item="https://cloud.veritech.mn/app/storage/uploads/process/logo.png"
                customClassName="flex items-center pl-2"
                link="/page/16312403374741"
              />
            </div>
            <div className="flex items-center justify-end ">
              <div className="flex items-center ">
                <AtomInput
                  item=""
                  icon="far fa-search"
                  value={undefined}
                  placeholder="Хайх..."
                  type="text"
                  customClassName="w-full"
                />

                <div className="h-full flex items-center relative mx-5">
                  <AtomIcon
                    item="far fa-bell"
                    customClassName="text-xl text-gray-600"
                  />
                  <div className="absolute top-0 right-0">
                    <div className="animate-ping w-2 h-2 rounded-full bg-citizen" />
                  </div>
                </div>
              </div>
              <div className="hidden xl:flex items-center">
                <div className="ml-6 relative">
                  <div
                    className="flex items-center relative"
                    onClick={() => setProfile(!profile)}
                  >
                    {profile && (
                      <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 ">
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-citizen focus:text-citizen focus:outline-none">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-user"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={12} cy={7} r={4} />
                              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>

                            <Link href="/page/16322760249471">
                              <a>
                                {" "}
                                <span className="ml-2">Миний мэдээлэл</span>
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2  hover:text-citizen focus:text-citizen focus:outline-none flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-help"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={17} x2={12} y2="17.01" />
                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                          </svg>
                          <span className="ml-2">Тусламж</span>
                        </li>
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-citizen flex items-center focus:text-citizen focus:outline-none">
                          <Link href="/logout">
                            <a>
                              {" "}
                              <i
                                className="far fa-sign-out-alt text-gray-600 pl-1"
                                style={{ fontSize: 14 }}
                              ></i>
                              <span className="ml-3">Гарах</span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    )}
                    <div className="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                      <img
                        className="rounded-full h-10 w-10 object-cover"
                        src={
                          userContext.userData
                            ? "https://dev.veritech.mn/" +
                              userContext.userData.emppicture
                            : ""
                        }
                        alt="logo"
                      />
                    </div>
                    <div className="ml-2 text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                        width={20}
                        height={20}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        {/* Sidebar ends */}
        {/* Code block ends */}
      </div>
    </>
  );
}

const menuData = [
  { title: "Нүүр", icon: "far fa-car" },
  { title: "Санхүү", icon: "far fa-car" },
  { title: "Профайл", icon: "far fa-car" },
];
