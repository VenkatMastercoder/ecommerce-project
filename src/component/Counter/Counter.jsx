import { useEffect, useState } from "react";

const Counter = () => {
  //  let value = 5;

  const [value, setValue] = useState(10);

  console.log("Inital Render");

  useEffect(() => {
    console.log("useEffect Called");
    setValue(value+1)
  },[]);

  return (
    <>
      {console.log("component Called")}
      <p>{value}</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}>
        +
      </button>
      <button
        onClick={() => {
          console.log("button clicked");

          setValue(value - 1);
          // value = value - 1
          console.log(value);
        }}>
        -
      </button>
    </>
  );
};

export default Counter;
