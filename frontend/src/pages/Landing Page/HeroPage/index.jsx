// import React, { useState } from "react";
import Hero from "../HeroPage/Hero";
import Nav from "../HeroPage/Nav";
// import BottomLogos from "../HeroPage/BottomLogos";
// import IncreaseProductivity from "../HeroPage/IncreaseProductivity"
// import WhyWeUseAzonto from "../HeroPage/WhyWeUseAzonto";
// import SpinningAzonto from "../HeroPage/SpinningAzonto";
import DashboardLayer from "../HeroPage/DashboardLayer";
import OurUserKindWords from "../HeroPage/OurUserKindWords.jsx";
import MovingCards from "../HeroPage/MovingCards";
import FrequentlyAskedQuestions from "../HeroPage/FrequentlyAskedQuestions";
// import WhyWeUseAzontoReverse from "../HeroPage/WhyWeUseAzontoReverse";
import Integrations from "../HeroPage/Integrations"
import { useState } from "react";
import Banner from "../HeroPage/Banner";
import Footer from "../HeroPage/Footer";
// import Property from "../../../Assets/Property 1=Hero 19 1.png";

const LandingPage = () => {
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);

  return (
  <>
  {/* ✅ Nav OUTSIDE hero container */}
  {/* <Nav onCompanyHover={setIsCompanyHovered} /> */}

  <div
    className="font-sans bg-center bg-no-repeat bg-cover relative "
    // style={{ backgroundImage: `url(${Property})` }}
  >
    {/* Blur overlay */}
    {/* <div
      className={`absolute inset-0 transition-all duration-1000 ease-in-out 
        ${isCompanyHovered ? "backdrop-blur-md bg-white/10" : "backdrop-blur-0 bg-transparent"}
      `}
    ></div> */}

    {/* Hero */}
    {/* <div
      className={`relative z-10 transition-all duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform transform ${
        isCompanyHovered
          ? "opacity-300 blur-[10px] translate-y-0 scale-[0.98]"
          : "opacity-100 blur-0 translate-y-0 scale-100"
      }`}
    > */}
    <div
  className={`relative z-10 transition-all duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ${
    isCompanyHovered
      ? "opacity-80 blur-[10px]"
      : "opacity-100 blur-0"
  }`}
>
{/* 
      <Hero /> */}
    </div>
  </div>

  {/* Other sections */}
  <div
  className={`relative z-10 transition-all duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ${
    isCompanyHovered
      ? "opacity-80 blur-[10px]"
      : "opacity-100 blur-0"
  }`}
>
  {/* <BottomLogos />
  <WhyWeUseAzonto />
  <IncreaseProductivity/>
  <SpinningAzonto />
  <WhyWeUseAzontoReverse /> */}
  <Nav/>
   <Hero /> 
  <DashboardLayer />
  <OurUserKindWords />
  {/* <MovingCards />
  <Integrations/> */}
  <FrequentlyAskedQuestions /> 
  <Banner />
  <Footer />
  </div>
</>

  );
};

export default LandingPage;
