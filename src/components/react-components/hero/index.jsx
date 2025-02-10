import React from "react";

const Banner = ({ title }) => {
  return (
    <div className="h-[calc(100vh-128px)] bg-gray-100 text-black flex items-center justify-center">
      <div className="max-w-7xl h-full flex justify-center items-center flex-col gap-5">
        <h1 className="text-center text-8xl font-bold">Hello!!!!</h1>
        <p className="text-xl">
          Just The <span className="font-bold">{title}</span> Page, Nothing
          Special Here 😁😁😁
        </p>
      </div>
    </div>
  );
};

export default Banner;
