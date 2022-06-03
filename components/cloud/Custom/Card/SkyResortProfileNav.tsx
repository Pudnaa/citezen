import { FC } from "react";
import RenderAtom from "@components/common/Atom/RenderAtom";
// import ModalcozyProductReview from "@components/common/Modals/ModalcozyProductReview";
import { useSession } from "next-auth/react";
type PropsType = {
  nav: number;
  setNav: any;
};

const cozyProfileNav: FC<PropsType> = ({ nav, setNav }) => {
  const { data: session } = useSession();
  // const userContext = useUser();
  // const [session, setSession] = useState(userContext?.userData);
  const isHuwiinMedeelel = nav === 0;
  const isZahialgiinTuuh = nav === 1;
  const isTaalagdsanBaraa = nav === 2;
  // const isNemelt = type === "compact";
  const isNemelt = false;
  // console.log("userfull - ", profile);
  return (
    <div className="rounded-xl bg-white py-5 px-6">
      <div className="border-b flex pb-5 space-x-5">
        <div>
          <RenderAtom
            defaultAtom="image"
            item={{
              value:
                //session?.user?.image ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            }}
            customClassName={`object-cover rounded-full shadow-2xl w-10 h-10`}
          />
        </div>
        <div className="flex items-center">
          <RenderAtom
            item={{ value: session?.user.name || "Нэр" }}
            defaultAtom="title"
            customClassName={`text-base font-bold text-gray-600`}
          />
          {/* <div className="flex space-x-2">
            <i className="fas fa-phone-alt"></i>
            <RenderAtom
              item={{ value: "Утас: 88888952" }}
              defaultAtom="text"
              customClassName={``}
            />
          </div> */}
        </div>
      </div>
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
          <div className="relative rounded-full border border-cozy w-8 h-8">
            <i className="far fa-truck absolute left-2 top-1 text-cozy"></i>
          </div>
          <RenderAtom
            item={{ value: "Захиалгийн түүх" }}
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
    </div>
  );
};

export default cozyProfileNav;
