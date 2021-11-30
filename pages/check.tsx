import { useEffect } from "react";

// export default function check() {
//   function handlerClick() {
//     window.location.href =
//       "/check2?state=dddssssssssssssssddddsds&scope=22222222222222222222222222222222222222dsddddddddddddddddddddddddd";
//   }

//   return (
//     <>
//       <div className="bg-gray-100 w-screen h-screen flex justify-start  justify-center w-full pt-10">
//         <p className="text-2xl">Түр хүлээнэ үү ...</p>
//         <button
//           // disabled={shouldFetch}
//           className={`flex items-center justify-center transition-colors duration-300 focus:shadow-outline`}
//           onClick={handlerClick}
//         >
//           шилжих
//           {/* {data} */}
//         </button>
//       </div>
//     </>
//   );
// }

export default function check() {
  useEffect(() => {
    if (window.opener) {
      if (localStorage) {
        localStorage.setItem("authcallbacklink", window.location.href);
      }
      window.close();
    }
  });
  return <p className="text-xl">Түр хүлээнэ үү...</p>;
}
