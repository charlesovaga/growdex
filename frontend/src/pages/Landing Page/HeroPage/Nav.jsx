// import React from 'react'

// const Nav = () => {
//   return (
//     <div className="sticky top-6 z-50 w-full flex justify-center">
//       {/* Rounded navbar background */}
//       <div className="bg-white/90 backdrop-blur-md shadow-md rounded-full px-6 md:px-12 py-3 flex items-center justify-between w-[95%] max-w-5xl">
//         <div className="text-lg md:text-xl font-bold text-gray-800">Growdex</div>

//         <div className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
//           <a href="#">How It Works</a>
//           <a href="#">Integrations</a>
//           <a href="#">Pricing</a>
//         </div>

//         <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
//           Join Waitlist
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Nav


import React, { useState, useEffect } from 'react'
import logo from "../../../assets/Frame 1686560934.png"
import { Link } from 'react-router-dom'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`w-full z-50 flex justify-center ${scrolled ? 'sticky top-6' : ''}`}>
      <div
        className={`transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-4 w-[95%] max-w-5xl 
        ${scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md rounded-full'
          : 'bg-transparent'}`
        }
      >
      
        <div className="flex justify-start gap-2">
  <img src={logo} alt="" />
<Link to="/">
  
<div className="text-lg md:text-xl font-bold text-gray-800">Growdex</div>
    {/* <img src={Azonto_Logo} alt="Azonto Logo" className="w-44 h-auto" /> */}
  </Link>
</div>
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
          <a href="#">How It Works</a>
          <a href="#">Integrations</a>
          <a href="#">Pricing</a>
        </div>
        <a href="#waitlist-banner">
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
          Join Waitlist
          
        </button>
        </a>
      </div>
    </div>
  )
}

export default Nav
