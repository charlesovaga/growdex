// // // import React from 'react'

// // // const Nav = () => {
// // //   return (
// // //     <div className="sticky top-6 z-50 w-full flex justify-center">
// // //       {/* Rounded navbar background */}
// // //       <div className="bg-white/90 backdrop-blur-md shadow-md rounded-full px-6 md:px-12 py-3 flex items-center justify-between w-[95%] max-w-5xl">
// // //         <div className="text-lg md:text-xl font-bold text-gray-800">Growdex</div>

// // //         <div className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
// // //           <a href="#">How It Works</a>
// // //           <a href="#">Integrations</a>
// // //           <a href="#">Pricing</a>
// // //         </div>

// // //         <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
// // //           Join Waitlist
// // //         </button>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Nav


// // import React, { useState, useEffect } from 'react'
// // import logo from "../../../assets/Frame 1686560934.png"
// // import { Link } from 'react-router-dom'

// // const Nav = () => {
// //   const [scrolled, setScrolled] = useState(false)

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10)
// //     }

// //     window.addEventListener('scroll', handleScroll)
// //     return () => window.removeEventListener('scroll', handleScroll)
// //   }, [])

// //   return (
// //     <div className={`w-full z-50 flex justify-center ${scrolled ? 'sticky top-6' : ''}`}>
// //       <div
// //         className={`transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-4 w-[95%] max-w-5xl 
// //         ${scrolled
// //           ? 'bg-white/90 backdrop-blur-md shadow-md rounded-full'
// //           : 'bg-transparent'}`
// //         }
// //       >
      
// //         <div className="flex justify-start gap-2">
// //   <img src={logo} alt="" />
// // <Link to="/">
  
// // <div className="text-lg md:text-xl font-bold text-gray-800">Growdex</div>
// //     {/* <img src={Azonto_Logo} alt="Azonto Logo" className="w-44 h-auto" /> */}
// //   </Link>
// // </div>
// //         <div className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
// //           <a href="#">How It Works</a>
// //           <a href="#">Integrations</a>
// //           <a href="#">Pricing</a>
// //         </div>
// //         <a href="#waitlist-banner">
// //         <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
// //           Join Waitlist
          
// //         </button>
// //         </a>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Nav


// // // Hambugger ADDED

// // import React, { useState, useEffect } from 'react'
// // import logo from "../../../assets/Frame 1686560934.png"
// // import { Link } from 'react-router-dom'

// // const Nav = () => {
// //   const [scrolled, setScrolled] = useState(false)
// //   const [isOpen, setIsOpen] = useState(false)

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10)
// //     }

// //     window.addEventListener('scroll', handleScroll)
// //     return () => window.removeEventListener('scroll', handleScroll)
// //   }, [])

// //   return (
// //     <div className={`w-full z-50 flex justify-center ${scrolled ? 'sticky top-6' : ''}`}>
// //       <div
// //         className={`transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-4 w-[95%] max-w-5xl 
// //         ${scrolled
// //           ? 'bg-white/90 backdrop-blur-md shadow-md rounded-full'
// //           : 'bg-transparent'}`}
// //       >
// //         <div className="flex justify-start gap-2 items-center">
// //           <img src={logo} alt="Logo" />
// //           <Link to="/">
// //             <div className="text-lg md:text-xl font-bold text-gray-800 cursor-pointer">Growdex</div>
// //           </Link>
// //         </div>

// //         {/* Desktop nav links */}
// //         <div className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
// //           <a href="#">How It Works</a>
// //           <a href="#">Integrations</a>
// //           <a href="#">Pricing</a>
// //         </div>

// //         {/* Join Waitlist button (desktop) */}
// //         <a href="#waitlist-banner" className="hidden md:block">
// //           <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
// //             Join Waitlist
// //           </button>
// //         </a>

// //         {/* Hamburger button (mobile) */}
// //         <button
// //           onClick={() => setIsOpen(true)}
// //           className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
// //           aria-label="Toggle menu"
// //         >
// //           <span className="block h-0.5 w-full bg-gray-800 rounded" />
// //           <span className="block h-0.5 w-full bg-gray-800 rounded" />
// //           <span className="block h-0.5 w-full bg-gray-800 rounded" />
// //         </button>
// //       </div>

// //       {/* Fullscreen mobile menu modal */}
// //       {isOpen && (
// //         <div className="fixed inset-0 bg-white z-50 flex flex-col">
// //           {/* Top bar with logo, Join button, close button */}
// //           <div className="flex items-center justify-between p-4 border-b border-gray-200">
// //             <div className="flex items-center gap-2">
// //               <img src={logo} alt="Logo" className="h-8" />
// //               <div className="text-lg font-bold text-gray-800">Growdex</div>
// //             </div>
// //             <a href="#waitlist-banner">
// //               <button
// //                 onClick={() => setIsOpen(false)}
// //                 className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
// //               >
// //                 Join Waitlist →
// //               </button>
// //             </a>
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               aria-label="Close menu"
// //               className="text-2xl font-bold text-gray-800 ml-4"
// //             >
// //               ×
// //             </button>
// //           </div>

// //           {/* Menu links centered vertically */}
// //           <nav className=" flex flex-col justify-start items-center space-y-10 text-2xl font-semibold text-gray-800">
// //             <a href="#" onClick={() => setIsOpen(false)}>How It Works</a>
// //             <a href="#" onClick={() => setIsOpen(false)}>Integrations</a>
// //             <a href="#" onClick={() => setIsOpen(false)}>Pricing</a>
// //           </nav>

// //           {/* Footer */}
// //           <footer className="p-4 text-center text-gray-500 border-t border-gray-200 text-sm">
// //             © Growdex 2025
// //           </footer>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // export default Nav


// import React, { useState, useEffect } from 'react'
// import logo from "../../../assets/Frame 1686560934.png"
// import { Link } from 'react-router-dom'
// import bytesize from "../../../assets/bytesize_close.png"
// import hambugger from "../../../assets/menu hamburger (1).png"

// const Nav = () => {
//   const [scrolled, setScrolled] = useState(false)
//   const [isOpen, setIsOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Lock body scroll when menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = ''
//     }

//     return () => {
//       document.body.style.overflow = ''
//     }
//   }, [isOpen])

//   return (
// <div className={`w-full z-50 flex justify-center ${scrolled && !isOpen ? 'sticky top-6' : ''}`}>

//       <div
//         className={`transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-4 w-[95%] max-w-5xl 
//           ${scrolled
//             ? 'bg-white/90 backdrop-blur-md shadow-md rounded-full'
//             : 'bg-transparent'}`}
//       >
//         <div className="flex justify-start gap-2 items-center">
//           <img src={logo} alt="Logo" />
//           <Link to="/">
//             <div className="text-lg md:text-xl font-bold text-gray-800 cursor-pointer">Growdex</div>
//           </Link>
//         </div>

        

//         {/* Desktop nav links */}
//         <div className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
//           <a href="#">How It Works</a>
//           <a href="#">Integrations</a>
//           <a href="#">Pricing</a>
//         </div>

//         {/* Join Waitlist button (desktop) */}
//         <a href="#waitlist-banner" className="hidden md:block">
//           <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
//             Join Waitlist
//           </button>
//         </a>

//         {/* Hamburger button (mobile) */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
//           aria-label="Toggle menu"
//         >

//           <img src={hambugger} alt="" />
//           {/* <span className="block h-0.5 w-full bg-gray-800 rounded" />
//           <span className="block h-0.5 w-full bg-gray-800 rounded" />
//           <span className="block h-0.5 w-full bg-gray-800 rounded" /> */}
//         </button>
//       </div>

//       {/* Fullscreen mobile menu modal */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-white z-50 flex flex-col h-screen overflow-auto">
//           {/* Top bar with logo, Join button, close button */}
//           <div className="flex items-center justify-between p-4 border-b border-gray-200">
//             <div className="flex items-center gap-2">
//               <img src={logo} alt="Logo" className="h-8" />
//               <div className="text-lg font-bold text-gray-800">Growdex</div>
//             </div>
//             <a href="#waitlist-banner">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
//               >
//                 Join Waitlist →
//               </button>
//             </a>
//             <button
//               onClick={() => setIsOpen(false)}
//               aria-label="Close menu"
//               className="text-2xl font-bold text-gray-800 ml-4"
//             >
//               <img src={bytesize} alt="" />
//             </button>
//           </div>

//           {/* Menu links centered vertically */}
//           <nav className="flex flex-col justify-start mt-24 items-center space-y-10 text-2xl font-semibold text-gray-800 flex-grow">
//             <a href="#" onClick={() => setIsOpen(false)}>How It Works</a>
//             <a href="#" onClick={() => setIsOpen(false)}>Integrations</a>
//             <a href="#" onClick={() => setIsOpen(false)}>Pricing</a>
//           </nav>

//           {/* Footer */}
//           <footer className="p-4 text-center text-gray-500 border-t border-gray-200 text-sm">
//             © Growdex 2025
//           </footer>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Nav



import React, { useState, useEffect } from 'react'
import logo from "../../../assets/Frame 1686560934.png"
import { Link } from 'react-router-dom'
import bytesize from "../../../assets/bytesize_close.png"
import hambugger from "../../../assets/menu hamburger (1).png"

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
<div className={`w-full z-50 flex justify-center ${scrolled && !isOpen ? 'sticky top-6' : ''}`}>

      <div
        className={`transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-4 w-[95%] max-w-5xl 
          ${scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md rounded-full'
            : 'bg-transparent'}`}
      >
<div className="flex items-center justify-between gap-4 px-4 w-full max-w-5xl mx-auto ">
  {/* Left: Logo */}
  <div className="flex items-center text- gap-2 -ml-6 md:ml-0">
    <img src={logo} alt="Logo" />
    <Link to="/">
      <div className="text-lg md:text-xl font-bold text-gray-800 cursor-pointer">Growdex</div>
    </Link>
  </div>

  {/* Middle: Desktop Navigation */}
  <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
    <a href='#' to="/how-it-works" className="hover:text-black transition">How it Works</a>
    <a href='#' to="/integration" className="hover:text-black transition">Integration</a>
    <a href='#' to="/pricing" className="hover:text-black transition">Pricing</a >
    <Link to="/blog" className="hover:text-black transition">Blog</Link>
  </div>

  {/* Right: Join Waitlist + Hamburger */}
  <div className="flex items-center gap-4">
    {/* Join Waitlist */}
    <a href="#waitlist-banner" className="flex-shrink-0">
      <button className="bg-black text-white px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap">
      Join Waitlist →
      </button>
    </a>

    {/* Hamburger (mobile only) */}
    <button
      onClick={() => setIsOpen(true)}
      className="md:hidden flex items-center justify-center w-8 h-8"
      aria-label="Toggle menu"
    >
      <img src={hambugger} alt="menu" />
    </button>
  </div>
</div>


      </div>

      {/* Fullscreen mobile menu modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col h-screen overflow-auto">
          {/* Top bar with logo, Join button, close button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-8" />
              <div className="text-lg font-bold text-gray-800">Growdex</div>
            </div>
            <a href="#waitlist-banner">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                Join Waitlist →
              </button>
            </a>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-2xl font-bold text-gray-800 ml-4"
            >
              <img src={bytesize} alt="" />
            </button>
          </div>

          {/* Menu links centered vertically */}
          <nav className="flex flex-col justify-start mt-24 items-center space-y-10 text-2xl font-semibold text-gray-800 flex-grow">
            <a href="#" onClick={() => setIsOpen(false)}>How It Works</a>
            <a href="#" onClick={() => setIsOpen(false)}>Integrations</a>
            <a href="#" onClick={() => setIsOpen(false)}>Pricing</a>
            <Link to="/blog" className="hover:text-black transition">Blog</Link>
          </nav>

          {/* Footer */}
          <footer className="p-4 text-center text-gray-500 border-t border-gray-200 text-sm">
            © Growdex 2025
          </footer>
        </div>
      )}
    </div>
  )
}

export default Nav