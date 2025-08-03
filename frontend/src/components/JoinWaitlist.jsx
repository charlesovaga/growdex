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
    <div className="flex flex-col items-center gap-2 w-full max-w-md">
      <form onSubmit={handleJoin} className="relative w-full">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          required
          className="py-3 px-5 mb-3 rounded-md text-black bg-white outline-none"
        />
        <div className="relative w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="w-full py-3 px-5 pr-40 rounded-md text-black bg-white outline-none"
          />
         <button
  type="submit"
  disabled={loading || !email || !firstName}
  className="absolute top-1 right-2 bg-yellow-200 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-md transition"
>
  {loading ? (
    'Joining...'
  ) : (
    <span className="flex flex-col items-start sm:flex-row sm:items-center">
      <span>Join Waitlist</span>
      <span className="ml-0 sm:ml-2">→</span>
    </span>
  )}
</button>

        </div>
      </form>
      {message && (
        <div className="text-sm text-center text-gray-700 mt-2">{message}</div>
      )}
    </div>
  )
}

export default JoinWaitlist
