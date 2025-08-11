import Dashboard from "../../../assets/Dashboard Overview (2).png"
import chatMotion from "../../../assets/ChartMotion.png"
import { useState } from "react"
import axios from "axios"





export default function HeroSection({placeholder = "Enter your email"}) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleJoin = async (e) => {
    e.preventDefault()
    if (!email || !firstName) {
      setMessage("Please enter both first name and email")
      return
    }

    setLoading(true)
    setMessage(null)
    try {
      await axios.post("https://growdex-l2j0.onrender.com/api/join-waitlist", { email, firstName })
      setMessage('🎉 You’ve joined the waitlist!')
      setEmail('')
      setFirstName('')
    } catch (err) {
      setMessage('❌ Failed to join. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white min-h-screen flex flex-col items-center px-6 md:px-16 pt-10 pb-24 relative overflow-hidden">
      {/* Background Motion Image */}
      <img
        src={chatMotion}
        alt="Background Motion"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-24 z-0 opacity-5  w-[700px] md:w-[900px]"
      />

   

      {/* Hero Content */}
      <div className="text-center max-w-3xl z-10">
        <div className="inline-block bg-yellow-300 text-black text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Use AI to automate everything
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        Run Smarter Ads Across All  <br /> Platforms  — From One Dashboard.


        </h1>
        <p className="text-gray-600 text-lg mb-8">
        No more switching between Meta, Google, TikTok, Twitter, or Email tools. <br />
With Growdex, create, launch, and track all your digital campaigns from one place, automatically.

        </p>

        <div className="flex flex-col items-center gap-2 w-full ">
        <form onSubmit={handleJoin} className="relative w-full">
        {/* Input */}
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          required
          className="bg-white border shadow-2xl border-gray-300 rounded-md px-2 py-3 mb-2 text-sm pr-30"
        />
        <div className="flex justify-center max-w-xl mx-auto z-10">
  <div className="relative w-full">
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder={placeholder}
      required
      className="bg-white border shadow-2xl border-gray-300 rounded-md px-2 py-3 w-full text-sm pr-40"
    />
    <button 
    type="submit"
    disabled={loading || !email || !firstName}
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white px-5 py-3 rounded-md text-sm font-medium"
    >
        {loading ? 'Joining...' : 'Join Waitlist →'}
   
    </button>
  </div>
</div>
{message && (
        <div className="text-sm text-center text-gray-700 mt-2">{message}</div>
      )}
</form>

</div>
      </div>

      {/* Dashboard Image */}
      <div className="mt-16 w-full max-w-5xl z-10">
        <img
          src={Dashboard}
          alt="Dashboard Preview"
          className="rounded-xl shadow-2xl"
        />
      </div>
    </section>
  );
}


import { FaArrowRight } from 'react-icons/fa';
import Dashboard from "../../../assets/Frame.png"
import Eclipse1 from "../../../assets/Ellipse 18.png"
import Eclipse2 from "../../../assets/Ellipse 19.png"
import Eclipse3 from "../../../assets/Ellipse 20.png"
import Eclipse4 from "../../../assets/Ellipse 21.png"
import Eclipse5 from "../../../assets/Ellipse 22.png"
import arrowVector from "../../../assets/Vector (8).png"

export default function GrowDexHero() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleJoin = async (e) => {
    e.preventDefault()
    if (!email || !firstName) {
      setMessage("Please enter both first name and email")
      return
    }

    setLoading(true)
    setMessage(null)
    try {
      await axios.post("https://growdex-l2j0.onrender.com/api/join-waitlist", { email, firstName })
      setMessage('🎉 You’ve joined the waitlist!')
      setEmail('')
      setFirstName('')
    } catch (err) {
      setMessage('❌ Failed to join. Try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <section className="bg-white relative overflow-hidden py-24 px-6">
   {/* Background faint curves (you can replace with SVGs if needed) */}
<div className="absolute inset-0 pointer-events-none z-0">
  <img src={Dashboard} alt="" className="opacity-10" />
</div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Yellow Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-200 text-black font-medium px-4 py-1 rounded-full text-sm mb-4 mx-auto">
          <span className="inline-block bg-black text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">⚡</span>
          Use AI to automate everything
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Get things done by awesome <br className="hidden md:block" />
          remote team
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-500 mb-8">
          We share common trends and strategies for improving your rental income and
          making sure you stay in high demand.
        </p>

        {/* Waitlist Form */}
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
      
  <input
    type="text"
    placeholder="Name"
    className="border border-gray-300 bg-white px-4 py-2 rounded-lg w-full md:w-[200px] text-sm"
  />
  <input
    type="email"
    placeholder="Email"
    className="border border-gray-300 bg-white px-4 py-2 rounded-lg w-full md:w-[200px] text-sm"
  />
  <button
    type="submit"
    className="bg-black text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 text-sm md:w-[150px]"
  >


            Join Waitlist <FaArrowRight className="text-xs" />
          </button>
        </form>
{/* People already joined */}
<div className="mt-6 flex items-center justify-center gap-4 text-gray-600 text-sm">
  {/* Avatar group */}
  <div className="flex -space-x-4">
    {[Eclipse1, Eclipse2, Eclipse3, Eclipse4, Eclipse5].map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`User ${i + 1}`}
        className="w-8 h-8 rounded-full border-2 border-white"
      />
    ))}
  </div>

  {/* Arrow in the middle */}
  <img src={arrowVector} alt="" className="w-6 h-6" />

  {/* Joined text */}
  <span>200+ people are already waiting</span>
</div>

      </div>
    </section>
  );
}
