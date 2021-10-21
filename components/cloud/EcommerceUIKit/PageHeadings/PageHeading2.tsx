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
const PageHeadign2 = () => {
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
      // console.log("PageHeadign2 config", config);
      // console.log("PageHeadign2 datasrc", datasrc);
      // console.log("PageHeadign2 otherattr", otherattr);
      // console.log("PageHeadign2 positionConfig", positionConfig);
    return (
        <div className="px-4 md:px-6 py-16 lg:px-20 2xl:px-0 2xl:mx-auto 2xl:container">
            <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-3xl lg:text-4xl font-semibold leading-9 text-gray-800">Sneakers</p>
                <p className="text-base leading-4 text-gray-600">
                    Home {">"} Female {">"}Sneakers
                </p>
            </div>
        </div>
    );
};

export default PageHeadign2;
