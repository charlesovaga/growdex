import React, { useState } from 'react'
import axios from 'axios'

const JoinWaitlist = ({ placeholder = "Enter your email" }) => {
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
      await axios.post("https://growdex-l2j0.onrender.com/api/join-waitlist",{ email, firstName })
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
    <div className="flex flex-col items-center gap-2 w-full max-w-md mx-auto">
    <form
      onSubmit={handleJoin}
      className="flex flex-col md:flex-row xl:flex-row items-center justify-center gap-4 md:gap-2 w-full"
    >
      {/* First Name input */}
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First name"
        required
        className="py-3 px-5 rounded-md text-black bg-white outline-none w-full md:w-auto md:max-w-[180px] xl:max-w-[200px]"
      />
  
      {/* Mobile stacked email + button */}
      <div className="flex flex-col gap-3 sm:hidden xl:hidden w-full md:w-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className="w-full py-3 px-5 rounded-md text-black bg-white outline-none"
        />
        <button
          type="submit"
          disabled={loading || !email || !firstName}
          className="bg-yellow-200 hover:bg-yellow-300 text-black font-semibold px-4 py-3 rounded-md transition w-full"
        >
          {loading ? (
            "Joining..."
          ) : (
            <span className="flex flex-row justify-center gap-2 items-center">
              <span>Join Waitlist</span>
              <span>→</span>
            </span>
          )}
        </button>
      </div>
  
   {/* Desktop & XL: email + button side by side */}
<div className="hidden sm:flex xl:flex w-full md:w-auto items-center space-x-2">
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder={placeholder}
    required
    className="flex-none py-3 px-5 rounded-md text-black bg-white outline-none w-[140px] xl:w-[160px]"
  />
  <button
    type="submit"
    disabled={loading || !email || !firstName}
    className="bg-yellow-200 hover:bg-yellow-300 text-black font-semibold px-5 py-2.5 rounded-md transition whitespace-nowrap"
  >
    {loading ? (
      "Joining..."
    ) : (
      <span className="flex flex-row items-center gap-1">
        <span>Join Waitlist</span>
        <span>→</span>
      </span>
    )}
   
  </button>
 
</div>


    </form>
  
    {message && (
      <div className="text-sm text-center text-gray-700 mt-2">{message}</div>
    )}
    <p className="text-xs mt-4 text-white">By Providing your email, you're agreeing to our <span className='underline'>Terms of service</span> and Privacy Notice</p>
  </div>
  
  
  )
}

export default JoinWaitlist
