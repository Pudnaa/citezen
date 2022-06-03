import { useEffect, useRef } from "react";

//Анхны render дээр ажиллахгүй. https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render

export default function useDidMountEffect(func, deps) {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
}
