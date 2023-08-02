import React from "react";

const Herobanner = () => {
  return (
    <div className="md:p-10 p-4 mt-8 text-center bg-gray-200/60 rounded-lg ">
      <div className="">
        <h5 className="text-gray-600 uppercase tracking-[5px] text-sm font-semibold">
          Welcome to bueltin
        </h5>
        <h2 className="md:text-3xl text-xl font-bold md:leading-[46px] mt-3 md:px-44">
          Craft narratives ✍🏻 that ignite{" "}
          <span className="text-green-700">inspirtaion</span> 💡,
          <span className="text-green-700">knowledge</span> 📕, and
          <span className="text-green-700"> entertainment</span> 🎬
        </h2>
      </div>
    </div>
  );
};

export default Herobanner;
