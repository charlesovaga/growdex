import React from "react";
import JoinWaitlist from "../../../components/JoinWaitlist";

function Banner() {
  return (
    <div id="waitlist-banner" className="relative px-4 md:px-0 min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Watermark background text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#f3f3f3_1px,_transparent_1px)] [background-size:40px_40px] z-0">
        <div className="absolute inset-0 text-gray-400 text-[2rem] opacity-20 font-bold leading-[3rem] select-none pointer-events-none whitespace-nowrap">
          <div className="w-full h-full flex flex-wrap items-center justify-center gap-10">
            {Array.from({ length: 100 }).map((_, i) => (
              <span key={i}>Growdex</span>
            ))}
          </div>
        </div>
      </div>

      {/* Foreground card */}
      <div className="z-10 bg-black text-white px-8 py-12 rounded-[2rem] max-w-3xl w-full text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Save Time and Effort <br /> with <span className="text-white">Growdex</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-6">
        Run Smarter Ads Everywhere with Growdex

Use one AI-powered dashboard to launch and manage campaigns across all major ad platforms, faster, easier, and in one click.
        </p>
        <div className="relative max-w-md mx-auto mt-6 w-full">
  {/* <input
    type="email"
    placeholder="Enter company email"
    className="w-full py-3 px-5 pr-40 rounded-md text-black bg-white outline-none"
  /> */}
  {/* <button
    className="absolute top-1/2 right-2 -translate-y-1/2 bg-yellow-200 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-md transition"
  >
    Join Waitlist →
  </button> */}
        <div className="">
    <JoinWaitlist placeholder="Your email" />
  </div>
</div>

      </div>
    </div>
  );
}

export default Banner;
