import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import C8ColCardItem from "@cloud/Custom/Card/C8ColCardItem";

const C8ColListingCardModern = () => {
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
  // console.log("C8ColListingCardModern config", config);
  // console.log("C8ColListingCardModern datasrc", datasrc);
  // console.log("C8ColListingCardModern otherattr", otherattr);

  return (
    <div className={`w-full flex flex-col justify-center`}>
      <Title />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4">
        {datasrc &&
          datasrc.map((item: any, index: any) => {
            return (
              <C8ColCardItem
                key={index}
                item={item}
                positionConfig={positionConfig}
              />
            );
          })}
      </div>
    </div>
  );
};

export default C8ColListingCardModern;
