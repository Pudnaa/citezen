import { FC } from "react";
import {
  jsonParse,
  positionToPath,
  otherAttrToObj,
  renderPositionType,
} from "util/helper";
import { AtomTitle } from "@components/common/Atom";

type PropsType = {
  config: any;
  datasrc: any;
  otherattr: any;
};

const SimpleWithToggle: FC<PropsType> = ({ config, datasrc, otherattr }) => {
  // console.log("SimpleWithToggle config", config);
  // console.log("SimpleWithToggle datasrc", datasrc);
  // console.log("SimpleWithToggle otherattr", otherattr);

  return (
    <div className="w-full h-full p-4 bg-yellow-100 shadow-citizen rounded-lg">
      <div>
        <div className="lg:flex justify-between items-center">
          <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold">
            Automatically Update My Subscription
          </p>
          <div className="lg:mt-0 mt-4">
            <div className="w-12 h-6 cursor-pointer rounded-full relative shadow-sm">
              <input
                type="checkbox"
                name="toggle"
                id="toggle1"
                className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle1"
                className="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 pb-4 font-normal mt-3">
          Subscription will be updated automatically as long as you don want
          to change this option. Are you sure you want this?
        </p>
      </div>
 
    </div>
  );
};
export default SimpleWithToggle;
