import { FC } from "react";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { useSession } from "next-auth/react";
import BlockDiv from "@components/common/Block/BlockDiv";

type PropsType = {
	nav: number;
	setNav: any;
};

const CozyProfileAvatar: FC<PropsType> = ({ nav, setNav }) => {
	const { data: session } = useSession();
	const isZahialgiinTuuh = nav === 1;

	return (
		<BlockDiv
			customClassName="rounded-xl py-5 px-6"
			divNumber="CozyProfileAvatarOuter"
		>
			<BlockDiv
				customClassName="flex flex-row items-center border-b pb-5 space-x-5"
				divNumber="CozyProfileAvatarTitle"
			>
				<RenderAtom
					defaultAtom="image"
					item={{
						value:
							//session?.user?.image ||
							"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
					}}
					customClassName={`object-cover rounded-full shadow-2xl w-10 h-10`}
				/>

				<RenderAtom
					item={{ value: session?.user.name || "Нэр" }}
					defaultAtom="title"
					customClassName={`text-base font-bold text-gray-600`}
				/>
			</BlockDiv>
			<div className="py-5">
				{/* <div
          className={`flex space-x-3 items-center border-r-2 py-2.5 cursor-pointer text-gray-400 hover:text-gray-600
           ${isHuwiinMedeelel && "border-cozy"}`}
          onClick={() => {
            setNav(0);
          }}
        >
          <div
            className={`relative rounded-full border border-cozy w-7 h-7`}
          >
            <i className="far fa-cog absolute left-1.5 top-1 text-cozy"></i>
          </div>

          <RenderAtom
            item={{ value: "Хувийн мэдээлэл" }}
            defaultAtom="text"
            customClassName={`uppercase text-sm ${
              isHuwiinMedeelel && "text-black"
            }`}
          />
        </div> */}
				<div
					className={`flex space-x-3 items-center border-r-2 py-2.5 cursor-pointer text-gray-400 hover:text-gray-600
           ${isZahialgiinTuuh && "border-cozy text-black hover:text-black"}`}
					onClick={() => {
						setNav(1);
					}}
				>
					<BlockDiv customClassName="rounded-full border border-cozy w-8 h-8 flex items-center justify-center">
						<RenderAtom
							item={{ value: "far fa-truck text-cozy" }}
							defaultAtom="icon"
							customClassName={``}
						/>
					</BlockDiv>
					<RenderAtom
						item={{ value: "Захиалгын түүх" }}
						defaultAtom="text"
						customClassName={`uppercase text-sm ${
							isZahialgiinTuuh && "text-black"
						}`}
					/>
				</div>
				{/* <div
          className={`flex space-x-3 items-center border-r-2 ${
            isTaalagdsanBaraa && "border-cozy"
          } py-2.5 cursor-pointer text-gray-400 hover:text-gray-600`}
          onClick={() => {
            setNav(2);
          }}
        >
          <div className="relative rounded-full border border-cozy w-7 h-7">
            <i className="far fa-heart absolute left-1.5 top-1 text-cozy"></i>
          </div>
          <RenderAtom
            item={{ value: "Таалагдсан бараа" }}
            defaultAtom="text"
            customClassName={`uppercase text-sm ${
              isTaalagdsanBaraa && "text-black"
            }`}
          />
        </div> */}
			</div>
		</BlockDiv>
	);
};

export default CozyProfileAvatar;
