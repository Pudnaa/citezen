import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import {
  positionToPath,
  otherAttrToObj,
  renderPositionType,
} from "util/helper";
import { isEmpty } from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomButton,
  AtomImage,
} from "@components/common/Atom";
type ItemPropsType = {
  item?: any;
  config?: any;
  otherattr?: any;
  positionConfig?: any;
};
const CTA3: FC<ItemPropsType> = ({ item }) => {
  const { config, datasrc, otherattr, positionConfig } =
    useContext(WidgetWrapperContext);

  return (
    <>
      {item
        ? item
        : datasrc &&
          datasrc.map((item: any, index: any) => (
            <CTA3Item
              key={index}
              item={item}
              config={config}
              otherattr={otherattr}
              positionConfig={positionConfig}
            />
          ))}
    </>
  );
};
export default CTA3;

const CTA3Item: FC<ItemPropsType> = ({
  item,
  config,
  otherattr,
  positionConfig,
}) => {
  if (isEmpty(item)) return null;

  const isMoto = otherattr.type === "moto";
  return (
    <div className="">
      <div className="relative rounded-xl">
        <img
          src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png"
          alt="city view"
          className={`w-full h-full rounded-lg object-center object-fill absolute block ${
            isMoto ? "hidden" : ""
          } `}
        />
        {isMoto && (
          <AtomImage
            item={renderPositionType(item, "position2", positionConfig)}
            customClassName="w-full h-full rounded-xl object-center object-fill absolute block"
          />
        )}
        {isMoto && (
          <div className="relative bg-gradient-to-r from-black to-transparent py-14 pl-16 flex flex-col justify-between rounded-xl">
            <div className="text-xl font-bold 2xl:text-4xl leading-8 text-white">
              <AtomTitle
                item={renderPositionType(item, "position1", positionConfig)}
                link=""
                customStyle={{}}
                customClassName=""
              />
              <AtomTitle
                item={renderPositionType(item, "position3", positionConfig)}
                link=""
                customStyle={{}}
                customClassName="mt-1"
              />
            </div>
            <div className="mt-5">
              <AtomButton
                item={renderPositionType(item, "position45", positionConfig)}
                type="primary-white"
                color=""
                customClassName="text-base font-bold text-black bg-moto sm:w-auto w-full rounded-3xl py-3 px-9 focus:outline-none hover:bg-white hover:text-moto
                hover:border border-moto focus:ring-2 focus:ring-offset-2 focus:ring-moto"
              />
            </div>
          </div>
        )}
        <div
          className={`text-xl relative bg-gradient-to-r from-indigo-700 to-transparent top-0 2xl:py-16 2xl:pl-16 py-8 pl-8 flex flex-col justify-between rounded-md ${
            isMoto ? "hidden" : ""
          }`}
        >
          <div>
            <AtomTitle
              item={renderPositionType(item, "position1", positionConfig)}
              link=""
              customStyle={{}}
              customClassName="text-3xl font-bold 2xl:text-4xl md:leading-10 leading-9 text-white sm:w-auto w-64"
              truncateRow={0}
            />
            <AtomText
              item={renderPositionType(item, "position3", positionConfig)}
              customClassName="text-base leading-6 text-white md:w-10/12 mt-4"
            />
          </div>
          <div className="md:mt-12 mt-20">
            <AtomButton
              item={renderPositionType(item, "position45", positionConfig)}
              type="primary-white"
              color="ssoSecond"
              customClassName="text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
