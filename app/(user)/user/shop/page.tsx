import useCountStore from "@/app/store/counterStore";
import React from "react";
import { persist } from "zustand/middleware";
const page = () => {
  const { count, increment, decrement, reset } = useCountStore(
    (state) => state
  );

  return (
    <div>
      <div className=" text-9xl font-bold text-gray-700 mb-8">{count}</div>{" "}
      <button
        onClick={decrement}
        className="bg-gray-200 font-bold py-4 px-8 rounded-full text-2xl transition-colors duration-200 text-gray-800 ho"
      >
        -
      </button>
      <button
        className="bg-gray-200 font-bold py-4 px-8 rounded-full text-2xl transition-colors duration-200 text-gray-800 ho"
        onClick={increment}
      >
        +
      </button>
      <button
        className="bg-gray-200 font-bold py-4 px-8 rounded-full text-2xl transition-colors duration-200 text-gray-800 ho"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default page;
