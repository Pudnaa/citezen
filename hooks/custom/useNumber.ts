import { useState } from "react";

const useNumber = (
  initnumber: number = 0,
  min: number = -9007199254740991,
  max: number = 9007199254740991
) => {
  const [number, setNumberState] = useState(initnumber);

  const setNumber = (value: number) => {
    if (value < min) return null;
    if (value > max) return null;

    setNumberState(value);
  };

  return { number, setNumber };
};

export default useNumber;
