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
      await axios.post('http://localhost:5000/api/join-waitlist', { email, firstName })
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
