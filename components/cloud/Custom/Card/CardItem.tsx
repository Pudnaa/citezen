import { FC } from "react";
import {
  positionToPath,
  otherAttrToObj,
  renderPositionType,
} from "util/helper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import {
  AtomList,
  AtomTitleV2,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomLink,
  AtomImageV2,
} from "@components/common/Atom";

type PropsType = {
  item: any;
  position: any;
  type: any;
};

const CartItem: FC<PropsType> = ({ item, position, type }) => {
  // console.log("Card101", position);

  return (
    <div>
      <div className=" w-full relative  bg-white dark:bg-gray-800 ">
        <AtomImageV2
          item={item?.position2}
          customClassName="h-48 w-full  rounded-t-lg object-cover object-center"
        />
        <div className="py-6 px-6 bg-gray-100  rounded-b-lg ">
          {renderPositionType(item, "position40", position) && (
            <p className="sm:text-base text-sm text-gray-500">
              {renderPositionType(item, "position40", position)}
            </p>
          )}
          <RenderAtom
            item={item?.position1}
            defaultAtom="title"
            customClassName="text-base font-semibold leading-6 text-gray-800"
            customProps={{
              truncateRow: 2,
            }}
          />

          <p className="text-xs font-medium leading-5 text-gray-400 mt-4 line-clamp-3">
            {item?.description}
          </p>
        </div>
        {/* <div className="border-t-2 mt-4 border-gray-200">
					<div className="px-6 py-4 flex">
						<div className="w-1/2 items-center">
							<p className="text-sm leading-4 text-green-500 cursor-pointer flex items-center text-center pt-1.5">
								{renderPositionType(item, "position45", position)}
							</p>
						</div>
						<div className="w-1/2 flex items-center">
							<div className="w-1/2 flex items-center justify-center">
								<AtomIcon
									// item={item.icon}
									item="far fa-commenting"
									checked={false}
									hoverSolid={true}
									customClassName="text-lg"
								/>
								<p className="text-sm leading-4 text-gray-400 ml-2">
									{renderPositionType(item, "position81", position)}
								</p>
							</div>
							<div className="w-1/2 flex items-center justify-center">
								<AtomIcon
									// item={item.icon}
									item="far fa-heart"
									checked={false}
									hoverSolid={true}
									customClassName="text-lg"
								/>
								<p className="text-sm leading-4 text-gray-400 ml-2">
									{renderPositionType(item, "position82", position)}
								</p>
							</div>
						</div>
				
					</div>
				</div> */}
      </div>
    </div>
  );
};

export default CartItem;
