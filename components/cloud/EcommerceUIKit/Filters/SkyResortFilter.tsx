import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
const SkyResortFilter = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const [showFilters, setShowfilters] = useState(true);
  const [check, setCheck] = useState({
    leather: false,
    cotton: false,
    fabric: false,
    crocodile: false,
    wool: false,
    large: false,
    medium: false,
    small: false,
    mini: false,
    luxesignatire: false,
    luxelondon: false,
  });

  const {
    leather,
    cotton,
    fabric,
    crocodile,
    wool,
    large,
    medium,
    small,
    mini,
    luxesignatire,
    luxelondon,
  } = check;

  // console.log("Filter1 config", config);
  //console.log("skyresortFilter readyDatasrc", readyDatasrc);
  // console.log("Filter1 widgetnemgooReady", widgetnemgooReady);
  // console.log("Filter1 positionConfig", positionConfig);

  const changeHandler = (e: any) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
  };

  const applyFilters = (e: any) => {
    setCheck({
      ...check,
      leather: false,
      cotton: false,
      fabric: false,
      crocodile: false,
      wool: false,
      large: false,
      medium: false,
      small: false,
      mini: false,
      luxesignatire: false,
      luxelondon: false,
    });
  };
  const colors = readyDatasrc[0];
  const colorsList = renderPositionType(colors, "position31", positionConfig);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-5 w-full`}
    >
      <div>
        <select
          name=""
          id=""
          className="rounded-3xl h-10 w-full focust:outline-none border-gray-400 border-2 font-medium 
					focus:border-skyresort hover:border-skyresort"
          style={{ color: "#323232", fontSize: "16px" }}
        >
          <option
            value=""
            data-icon="far fa-calendar"
            selected
            disabled
            hidden
            className="text-black fa"
          >
            Өдөр сонгох
          </option>
          <option value="" className="fa">
            Өдөр сонгох
          </option>
          <option value="" className="">
            heasd
          </option>
          <option value="">hey</option>
        </select>
      </div>

      <div>
        <select
          name=""
          id=""
          className="rounded-3xl h-10 w-full focust:outline-none border-gray-400 font-medium border-2 
					focus:border-skyresort hover:border-skyresort"
          style={{ color: "#323232", fontSize: "16px" }}
        >
          <option value="">Том хүн</option>
          <option value="">hey</option>
          <option value="">hey</option>
        </select>
      </div>
    </div>
  );
};

export default SkyResortFilter;
