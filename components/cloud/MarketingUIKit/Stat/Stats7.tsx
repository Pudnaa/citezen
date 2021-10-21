import React,{FC} from "react";
import {positionToPath,otherAttrToObj,renderPositionType} from "util/helper";

// const Stats7Row = ({
//   item,
//   position  
// }) => {
//   return (<div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
//     {item[position.position3] && (<h2 className="text-weekly-dark lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">{item[position.position3]}</h2>)}
//     {item[position.position4] && (<p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">{item[position.position4]}</p>)}
//   </div>)
// }

type PropsType = {
  config: any;
  datasrc: any;
  otherattr: any;
};

const Stats7: FC<PropsType> = ({config, datasrc, otherattr}) => {
    let positionConfig = positionToPath(config.bpsectiondtl);
    return (
      <div className="dark:bg-gray-900">
      <div className="pb-20">
        <div className={`mx-auto bg-gradient-to-l from-indigo-600 to-indigo-700 h-96 ${otherattr.classname}`} style={{...otherattr.style}}>
          <div className="mx-auto container w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <div className="mt-20">
                <h2 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">{otherattr.title}</h2>
              </div>
              <div className="mt-6 mx-2 md:mx-0 text-center">
                <p className="lg:text-lg md:text-base leading-6 text-sm  text-white">{otherattr.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">        
           dataloop
          </div>
        </div>
      </div>
    </div>
    );
}
export default Stats7