import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import { renderPositionType } from "util/helper";
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
import RenderAtom from "@components/common/Atom/RenderAtom";

const ProductDetailOrgil = () => {
  const {
    config,
    datasrc,
    readyDatasrc,
    widgetnemgoo,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  if (isEmpty(datasrc)) return null;

  //console.log("ProductDetailOrgil config", config);
  // console.log("ProductDetailOrgil readyDatasrc", readyDatasrc);
  console.log("ProductDetailOrgil widgetnemgoo", widgetnemgoo);

  const item = readyDatasrc[0];
  console.log("ProductDetailOrgil ~ item", item);
  const images = renderPositionType(item, "position31", positionConfig);
  const colors = renderPositionType(item, "position32", positionConfig);

  return (
    <>
      <div className="bg-yellow-50 w-full h-96">
        <div className="grid grid-cols-12 gap-6 w-full">
          <div className="col-span-6">
            <RenderAtom item={item?.position2} defaultAtom="image" />
          </div>
          <div className="col-span-6">
            <RenderAtom
              item={item?.position1}
              defaultAtom="title"
              customClassName={`text-xl lg:text-2xl font-semibold leading-5 xl:leading-6 text-gray-800`}
            />
            <AtomCurrency
              type="mnt"
              item={renderPositionType(item, "position4", positionConfig)}
              customClassName="text-lg md:text-xl font-medium leading-5 text-gray-600 mt-3"
            />
          </div>
        </div>
        <div className="w-full">
          <AtomText
            item={renderPositionType(item, "position3", positionConfig)}
            customClassName="text-base leading-normal text-gray-600 my-10"
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetailOrgil;
