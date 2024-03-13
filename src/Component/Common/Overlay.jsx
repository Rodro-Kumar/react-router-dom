import React from "react";
import Button from "../Common/Button";

const Overlay = ({
  className,
  DiscooutRightText,
  Discout,
  AdsHeading,
  btnTitle,
}) => {
  return (
    <>
      <div className={className}>
        <h3 className="text-4xl font-DMsans font-bold text-primaryFontColor pb-9">
          {AdsHeading ? AdsHeading : "Phones Sale "}
        </h3>
        <p className="text-base font-DMsans font-normal text-[#262626c4] pb-12">
          Up to
          <span className="text-[40px] font-bold text-black px-2 align-middle">
            {Discout ? Discout : "30%"}
          </span>
          {DiscooutRightText ? DiscooutRightText : "sale for all phones!"}
        </p>
        <Button>{btnTitle ? btnTitle : "Shop Now"}</Button>
      </div>
    </>
  );
};

export default Overlay;
