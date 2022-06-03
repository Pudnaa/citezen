import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderMolecule from "@molecule/RenderMolecule";
import { signOut, useSession } from "next-auth/react";

export default function UniversalCard() {
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

	const { data: session, status }: any = useSession();

	return (
		<>
			{readyDatasrc.map((item: any, index: number) => {
				return (
					<RenderMolecule
						key={item?.id || index}
						moleculeConfig={{
							type: "MoleculeCard",
							className: "",
							props: {},
						}}
						{...{
							item: {
								title: item?.position1,
								image: item?.position2,
								description: item?.position3,
								button: item?.position10,
							},
						}}
					/>
				);
			})}
		</>
	);
}
