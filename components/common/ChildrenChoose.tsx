import { FC } from "react";
import _ from "lodash";
import RenderMolecule from "@molecule/RenderMolecule";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";

type PropsType = {
  item?: any;
  childrenConfig?: any;
};

const ChildrenChoose: FC<PropsType> = ({ item, childrenConfig, ...props }) => {
  // {
  //     "type": "Atom",
  //     "props": {
  //         "type": "image",
  //         "className": "font-bold text-xl uppercase",
  //         "style": {}
  //     }
  // },
  // {
  //     "type": "Molecule",
  //     "props": {
  //         "type": "MoleculeBanner",
  //         "className": ""
  //     }
  // }

  const propsss: any = { ...props };

  console.log("childrenConfig", childrenConfig);
  console.log("propsss", propsss?.item);

  switch (childrenConfig?.type) {
    case "Atom":
      console.log("ЭЭЭЭЭЭЭЭЭЭЭНД ОРЖ БАЙНА");
      return (
        <>
          <RenderAtom
            item={item}
            defaultAtom={childrenConfig?.props?.type || "text"}
            // defaultAtom="text"
            customClassName={childrenConfig?.props?.className}
            customStyle={{ ...childrenConfig?.props?.style }}
            {...childrenConfig?.props}
          />
        </>
      );

    // case "Molecule":
    //   return <RenderMolecule moleculeConfig={childrenConfig} {...props} />;

    default:
      return null;
      break;
  }
};

export default ChildrenChoose;
