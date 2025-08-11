import React from "react";
import JoinWaitlist from "../../../components/JoinWaitlist";

function Banner() {
  return (
    <div id="waitlist-banner" className="relative px-4 md:px-0 min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Watermark background text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#f3f3f3_1px,_transparent_1px)] [background-size:40px_40px] z-0">
        <div className="absolute inset-0 text-gray-300 text-[2rem] opacity-20 font-bold leading-[3rem] select-none pointer-events-none whitespace-nowrap">
          <div className="w-full h-full flex flex-wrap items-center justify-center gap-10">
            {Array.from({ length: 100 }).map((_, i) => (
              <span key={i}>Growdex</span>
            ))}
          </div>
        </div>
      </div>

      {/* Foreground card */}
      <div className="z-10 bg-black text-white px-8 py-12 rounded-[2rem] max-w-3xl w-full text-center shadow-lg">
  <h1 className="text-4xl md:text-3xl font-extrabold mb-4">
    {/* Large screen */}
    <span className="hidden sm:inline">
      Save Time and Effort <br /> with <span className="text-white">Growdex</span>
    </span>
    {/* Mobile */}
    <span className="inline sm:hidden">
      Save Time and Effort with <span className="text-white">Growdex</span>
    </span>
  </h1>

  <p className="text-gray-300 text-base md:text-xs mb-6">
    {/* Large screen */}
    <span className="hidden sm:inline">
      Run Smarter Ads Everywhere with Growdex. Use one AI-powered dashboard to launch and <br />
      manage campaigns across all major ad platforms, faster, easier, and in one click.
    </span>
    {/* Mobile */}
    <span className="inline sm:hidden">
      Run Smarter Ads Everywhere with Growdex. Use one AI-powered dashboard to launch and manage
      campaigns across all major ad platforms, faster, easier, and in one click.
    </span>
  </p>

  <div className="relative max-w-md mx-auto mt-6 w-full">
    <div className="">
      <JoinWaitlist placeholder="Your email" />
    </div>
  </div>
</div>

    </div>
  );
}

export default Banner;
