import { FC, useMemo } from "react";
import dynamic from "next/dynamic";
type PropsType = {
  moleculeConfig?: any;
  // className?: string;
  // style?: any;
};

export const RenderMolecule: FC<PropsType> = ({
  moleculeConfig,
  // className,
  // style,
  ...props
}) => {
  const moleculeType = moleculeConfig?.type || "MoleculeCard";

  const RenderComponent: any = useMemo(
    () =>
      dynamic(() =>
        import(`@components/common/Molecule/${moleculeType}`).catch((err) => {
          return () => <>{err}</>;
        })
      ),
    [moleculeConfig, props]
  );

  return (
    <RenderComponent
      customClassName={moleculeConfig?.className}
      customStyle={moleculeConfig?.style}
      {...moleculeConfig?.props}
      {...props}
    />
  );
};

export default RenderMolecule;
