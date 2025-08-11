import React from "react";
import image from "../../../assets/Frame 1321314599 (2).png";

const OurUserKindWords = () => {
  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt="Integrations Arc"
        className="w-full h-auto object-cover sm:object-contain"
        style={{
          minWidth: "170%", // default for mobile
        }}
      />

      {/* Override on larger screens */}
      <style>
        {`
          @media (min-width: 640px) {
            img[alt="Integrations Arc"] {
              min-width: 100% !important;
            }
          }
        `}
      </style>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl sm:text-xl md:text-5xl font-bold mb-2">
          Integrate with  <br />multiple platforms
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-2xl max-w-md">
        Integrate with all the leading social platforms across the internet
        </p>
      </div>
    </div>
  );
};

export default OurUserKindWords;
