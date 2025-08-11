

// Responsivness
import React from "react";
// import Azonto_Logo from "../../../Assets/Azonto_logo.png";
import { Link } from "react-router-dom";
import frame3 from "../../../assets/gg_facebook.png"
import frame2 from "../../../assets/prime_twitter (1).png"
import frame5 from "../../../assets/ri_linkedin-fill.png"
import frame4 from "../../../assets/mingcute_instagram-fill.png"
import logo from "../../../assets/Frame 1686560934.png"

export default function Footer() {
  const [openModal, setOpenModal] = React.useState(null);

const modalContent = {
  privacy: {
    title: "Privacy Policy",
    content: "Here goes your Privacy Policy content... Explain what user data you collect, store, and protect."
  },
  terms: {
    title: "Terms & Conditions",
    content: "These are your Terms and Conditions... Cover usage rules, restrictions, liability disclaimers, etc."
  },
  cookie: {
    title: "Cookie Policy",
    content: "This is your Cookie Policy... Detail what cookies are used, their purpose, and how users can opt out."
  },
};
const modalRef = React.useRef();

React.useEffect(() => {
  if (openModal && modalRef.current) {
    // Scroll smoothly to modal container
    modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}, [openModal]);


  return (
    <div className="w-full bg-white overflow-hidden">

     <footer className="bg-white  text-gray-700 max-w-7xl mx-auto">

     <div className="pt-10 xl:pt-16 px-6 xl:ml-8 flex flex-col xl:flex-row justify-between items-start w-full gap-3 xl:gap-70">

  {/* Logo & Description */}
 {/* Logo & Description */}
<div className="max-w-md space-y-6 mb-14 xl:mb-0">
<div className="flex justify-start gap-2">
  <img src={logo} alt="" />
<Link to="/">
  
  <h2 className="text-xl font-bold text-black">Growdex</h2>
    {/* <img src={Azonto_Logo} alt="Azonto Logo" className="w-44 h-auto" /> */}
  </Link>
</div>

  {/* Mobile: Single line */}
  {/* <p className="text-gray-600 text-sm  mt-6 block md:hidden">
    Transaction life-cycle management solution for your business.
  </p> */}

  {/* Desktop: With line breaks */}
  <p className="text-gray-600 text-xs mt-2">
  Connect and manage your campaigns <br /> across all major social and ad platforms, <br /> seamlessly, powerfully, and in one place
  </p>

  {/* ✅ Company Address */}
  
  {/* <p className="text-black text-sm mt-24 ">
 <span className="font-bold"> Contact us: <br /></span>
    12 Ikorodu Road, Maryland, Lagos, Nigeria
  </p> */}
</div>


  {/* Link Sections */}
  <div className="flex flex-col xl:flex-col flex-1 gap-6">
  <div className="grid grid-cols-1 xl:grid-cols-4 gap-10 md:gap-4">
    {/* Product */}
    <div>
      <h4 className="font-semibold mb-4 text-black text-xl">Product</h4>
      <ul className="space-y-3 text-sm whitespace-nowrap text-gray-600">
        <li>Waitlist</li>
        <li>Pricing (Coming Soon)</li>
        <li>Features</li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h4 className="font-semibold mb-4 text-black text-xl">Company</h4>
      <ul className="space-y-3 text-sm text-gray-600 whitespace-nowrap">
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h4 className="font-semibold mb-4 text-black text-xl">Resources</h4>
      <ul className="space-y-3 text-sm text-gray-600">
        <li>Newsletter</li>
        <li>Pricing</li>
        <li>FAQ</li>
      </ul>
    </div>

   {/* Follow us */}
<div>
  <h4 className="font-semibold mb-4 text-black text-xl md:text-xl">Follow Us</h4>
  <ul className="space-y-3 text-sm text-gray-600">
    <div className="flex justify-start xl:justify-start mt-2 md:mt-4 space-x-12 md:space-x-6">
      <a
        href="https://www.facebook.com/share/15LvScWKn7/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={frame3}
          alt="Facebook"
          className="w-7 h-7 md:w-4 md:h-4"
        />
      </a>
      <a
        href="https://x.com/growdexhq?s=21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={frame2}
          alt="Twitter/X"
          className="w-7 h-7 md:w-4 md:h-4"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/growdexhq/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={frame5}
          alt="LinkedIn"
          className="w-7 h-7 md:w-4 md:h-4"
        />
      </a>
      <a
        href="https://www.instagram.com/growdexhq/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={frame4}
          alt="Instagram"
          className="w-7 h-7 md:w-4 md:h-4"
        />
      </a>
    </div>
  </ul>
</div>

  </div>
  

 


 
</div>

  {/* <div className="flex jusify-center mt-24 space-x-6">
  <img src={frame3} alt="" className="w-6 h-6" />
  <img src={frame2} alt="" className="w-6 h-6" />
</div> */}
</div>


{/* Bottom Bar */}
<div className="border-t border-gray-300 py-6 mt-4 md:px-8">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start text-sm text-gray-500 gap-4">
  <div className="flex flex-row items-center flex-wrap gap-x-2 gap-y-2">
  <button onClick={() => setOpenModal("privacy")} className="hover:text-black text-black font-semibold text-xs">
    Privacy Policy
  </button>
  {/* <span className="text-gray-800 hidden md:inline">|</span> */}
  <span className="text-gray-800 md:inline">|</span>

  <button onClick={() => setOpenModal("terms")} className="hover:text-black text-black font-semibold text-xs">
    Terms & Conditions
  </button>
  {/* <span className="text-gray-800 hidden md:inline">|</span> */}
  <span className="text-gray-800 md:inline">|</span>

  <button onClick={() => setOpenModal("cookie")} className="hover:text-black text-black font-semibold text-xs">
    Cookie Policy
  </button>
</div>

    <div className="text-gray-800 flex flex-col">
    © 2025 Growdex LLC.
   <span className="mt-2"> Built with ❤️for MSMEs, founders, and modern marketers.</span> 
   {/* <span className="text-gray-800 md:hidden"> All Rights Reserved</span> */}
    </div>
  </div>
</div>

</footer>
{openModal && (
  <div ref={modalRef} className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex justify-center items-center px-4">

    <div className="bg-white text-black rounded-lg shadow-xl w-full max-w-lg p-6 relative max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-xl font-semibold">{modalContent[openModal].title}</h2>
        <button
          onClick={() => setOpenModal(null)}
          className="text-black hover:text-red-500 font-bold text-xl"
        >
          &times;
        </button>
      </div>
      <div className="text-gray-700 text-sm leading-relaxed space-y-4">
        <p>{modalContent[openModal].content}</p>
      </div>
    </div>
  </div>
)}


   </div>
  
  );
}


// // Responsivness
// import React from "react";
// // import Azonto_Logo from "../../../Assets/Azonto_logo.png";
// import { Link } from "react-router-dom";
// import frame3 from "../../../Assets/Frame 2.png"
// import frame2 from "../../../Assets/prime_twitter.png"
// import frame5 from "../../../Assets/Frame 5.png"
// import frame4 from "../../../Assets/Logo Instagram Png.jpg"

// export default function Footer() {
//   const [openModal, setOpenModal] = React.useState(null);

// const modalContent = {
//   privacy: {
//     title: "Privacy Policy",
//     content: "Here goes your Privacy Policy content... Explain what user data you collect, store, and protect."
//   },
//   terms: {
//     title: "Terms & Conditions",
//     content: "These are your Terms and Conditions... Cover usage rules, restrictions, liability disclaimers, etc."
//   },
//   cookie: {
//     title: "Cookie Policy",
//     content: "This is your Cookie Policy... Detail what cookies are used, their purpose, and how users can opt out."
//   },
// };
// const modalRef = React.useRef();

// React.useEffect(() => {
//   if (openModal && modalRef.current) {
//     // Scroll smoothly to modal container
//     modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
//   }
// }, [openModal]);


//   return (
//     <div className="w-full bg-white overflow-hidden">

//      <footer className="bg-white  text-gray-700 max-w-7xl mx-auto">

//      <div className="pt-10 xl:pt-16 px-6 xl:ml-8 flex flex-col xl:flex-row justify-between items-start w-full gap-3 xl:gap-120">

//   {/* Logo & Description */}
//  {/* Logo & Description */}
// <div className="max-w-md space-y-6 mb-14 xl:mb-0">
//   <Link to="/">
//   <h2 className="text-xl font-bold text-black">Growdex</h2>
//     {/* <img src={Azonto_Logo} alt="Azonto Logo" className="w-44 h-auto" /> */}
//   </Link>

//   {/* Mobile: Single line */}
//   <p className="text-gray-600 text-sm  mt-6 block md:hidden">
//     Transaction life-cycle management solution for your business.
//   </p>

//   {/* Desktop: With line breaks */}
//   <p className="text-gray-600 text-xs mt-2 hidden md:block">
//   Connect and manage your campaigns <br /> across all major social and ad platforms, <br /> seamlessly, powerfully, and in one place
//   </p>

//   {/* ✅ Company Address */}
  
//   {/* <p className="text-black text-sm mt-24 ">
//  <span className="font-bold"> Contact us: <br /></span>
//     12 Ikorodu Road, Maryland, Lagos, Nigeria
//   </p> */}
// </div>


//   {/* Link Sections */}
//   <div className="flex flex-col xl:flex-col flex-1 gap-6">
//   <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 md:gap-14">
//     {/* Product */}
//     <div>
//       <h4 className="font-semibold mb-4 text-black text-xl">Product</h4>
//       <ul className="space-y-3 text-sm whitespace-nowrap text-gray-600">
//         <li><Link to="/dashboard">Waitlist</Link></li>
//         <li><Link to="/reconciliations">Pricing (Coming Soon)</Link></li>
//         <li><Link to="/chargebacks">Chargeback Management</Link></li>
//       </ul>
//     </div>

//     {/* Company */}
//     <div>
//       <h4 className="font-semibold mb-4 text-black text-xl">Company</h4>
//       <ul className="space-y-3 text-sm text-gray-600 whitespace-nowrap">
//         <li><Link to="/about">About Us</Link></li>
//         <li><Link to="/contact">Contact Us</Link></li>
//       </ul>
//     </div>

//     {/* Resources */}
//     <div>
//       <h4 className="font-semibold mb-4 text-black text-xl">Resources</h4>
//       <ul className="space-y-3 text-sm text-gray-600">
//         <li><Link to="/blog">Newsletter</Link></li>
//         <li><Link to="/pricing-plan">Pricing</Link></li>
//         <li><Link to="/faq">FAQ</Link></li>
//       </ul>
//     </div>
//   </div>
  

// <div className="flex justify-start xl:justify-center mt-14 space-x-6">
//   <Link to="/Facebook">
//     <img src={frame3} alt="Facebook" className="w-6 h-6" />
//   </Link>
//   <Link to="/https://x.com/growdexhq?s=21">
//     <img src={frame2} alt="Twitter" className="w-6 h-6" />
//   </Link>
//   <Link to="/https://www.linkedin.com/company/growdexhq/">
//     <img src={frame5} alt="Linkedin" className="w-6 h-6" />
//   </Link>
//   <Link to="/https://www.instagram.com/growdexhq/profilecard/?igsh=MTd2eXZodm83eWh5cA==">
//     <img src={frame4} alt="Instagram" className="w-6 h-6" />
//   </Link>
// </div>

 
// </div>

//   {/* <div className="flex jusify-center mt-24 space-x-6">
//   <img src={frame3} alt="" className="w-6 h-6" />
//   <img src={frame2} alt="" className="w-6 h-6" />
// </div> */}
// </div>


// {/* Bottom Bar */}
// <div className="border-t border-gray-300 py-6 mt-4 px-8">
//   <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start text-sm text-gray-500 gap-4">
//   <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 space-y-2 md:space-y-0">
//   <button onClick={() => setOpenModal("privacy")} className="hover:text-black text-black font-semibold text-md">
//     Privacy Policy
//   </button>
//   <span className="text-gray-800 hidden md:inline">|</span>

//   <button onClick={() => setOpenModal("terms")} className="hover:text-black text-black font-semibold text-md">
//     Terms & Conditions
//   </button>
//   <span className="text-gray-800 hidden md:inline">|</span>

//   <button onClick={() => setOpenModal("cookie")} className="hover:text-black text-black font-semibold text-md">
//     Cookie Policy
//   </button>
// </div>

//     <div className="text-gray-800 flex flex-col">
//     © 2025 Growdex LLC.
//    <span className="mt-2"> Built with ❤️for MSMEs, founders, and modern marketers.</span> <span className="text-gray-800 md:hidden"> All Rights Reserved</span>
//     </div>
//   </div>
// </div>

// </footer>
// {openModal && (
//   <div ref={modalRef} className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex justify-center items-center px-4">

//     <div className="bg-white text-black rounded-lg shadow-xl w-full max-w-lg p-6 relative max-h-[80vh] overflow-y-auto">
//       <div className="flex justify-between items-center border-b pb-3 mb-4">
//         <h2 className="text-xl font-semibold">{modalContent[openModal].title}</h2>
//         <button
//           onClick={() => setOpenModal(null)}
//           className="text-black hover:text-red-500 font-bold text-xl"
//         >
//           &times;
//         </button>
//       </div>
//       <div className="text-gray-700 text-sm leading-relaxed space-y-4">
//         <p>{modalContent[openModal].content}</p>
//       </div>
//     </div>
//   </div>
// )}


//    </div>
  
//   );
// }
