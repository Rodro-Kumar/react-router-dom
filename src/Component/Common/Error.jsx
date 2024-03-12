import React from "react";
import { BiCommentError } from "react-icons/bi";

const Error = () => {
  return (
    <div>
      <div className="container">
        <div className="py-10 flex flex-col items-center">
          <BiCommentError className="text-6xl mb-4 text-red-900" />
          <h1 className="text-red-800 text-4xl font-sans font-semibold">
            Error<span className="text-gray-900">!</span>
          </h1>
          <p>Something wrong</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
