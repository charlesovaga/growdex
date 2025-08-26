// // // src/pages/blog/AdminLogin.tsx
// // import React from "react";
// // import { Mail, Lock } from "lucide-react";
// // import logo from "../../../assets/Frame 1321314599.pngs"

// // export default function AdminLogin() {
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-[#2B2B2B]">
// //       <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-10">
// //         {/* Logo + Title */}
// //         <div className="flex items-center justify-center mb-6">
// //           <img src={logo} alt="Growdex" className="h-10 mr-2" />
// //           <h1 className="text-2xl font-bold">
// //             <span className="text-black">Growdex</span>{" "}
// //             <span className="text-yellow-500">Blog</span>
// //             <span className="text-gray-500 font-medium">Admin</span>
// //           </h1>
// //         </div>

// //         {/* Subtext */}
// //         <p className="text-center text-gray-700 mb-8">
// //           Sign in to start a session
// //         </p>

// //         {/* Form */}
// //         <form className="space-y-6">
// //           {/* Email */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-2">
// //               Email Address
// //             </label>
// //             <div className="relative">
// //               <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
// //               <input
// //                 type="email"
// //                 placeholder="Email Address"
// //                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
// //               />
// //             </div>
// //           </div>

// //           {/* Password */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-2">
// //               Password
// //             </label>
// //             <div className="relative">
// //               <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
// //               <input
// //                 type="password"
// //                 placeholder="Password"
// //                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
// //               />
// //             </div>
// //           </div>

// //           {/* Remember me + Forgot password */}
// //           <div className="flex items-center justify-between text-sm">
// //             <label className="flex items-center text-gray-700">
// //               <input type="checkbox" className="mr-2" />
// //               Remember me
// //             </label>
// //             <a href="#" className="text-gray-600 hover:text-black">
// //               Forgot Password?
// //             </a>
// //           </div>

// //           {/* Login Button */}
// //           <button
// //             type="submit"
// //             className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
// //           >
// //             Login
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import { Mail, Lock } from "lucide-react";
// import axios from "axios";
// import logo from "../../../assets/Frame 1321314599.png";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/admin/login", // adjust to your backend route
//         { email, password },
//         { withCredentials: true } //  allows cookies for refresh token
//       );

//       // Store access token in localStorage
//       localStorage.setItem("adminAccessToken", res.data.accessToken);

//       // Redirect to admin dashboard (example)
//       window.location.href = "/admin/dashboard";
//     } catch (err: any) {
//       console.error("Login failed:", err);
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#2B2B2B]">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-10">
//         {/* Logo + Title */}
//         <div className="flex items-center justify-center mb-6">
//           <img src={logo} alt="Growdex" className="h-10 mr-2" />
//           <h1 className="text-2xl font-bold">
//             <span className="text-black">Growdex</span>{" "}
//             <span className="text-yellow-500">Blog</span>
//             <span className="text-gray-500 font-medium">Admin</span>
//           </h1>
//         </div>

//         {/* Subtext */}
//         <p className="text-center text-gray-700 mb-8">
//           Sign in to start a session
//         </p>

//         {/* Error message */}
//         {error && (
//           <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
//             {error}
//           </div>
//         )}

//         {/* Form */}
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Email Address
//             </label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email Address"
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//           </div>

//           {/* Remember me + Forgot password */}
//           <div className="flex items-center justify-between text-sm">
//             <label className="flex items-center text-gray-700">
//               <input type="checkbox" className="mr-2" />
//               Remember me
//             </label>
//             <a href="#" className="text-gray-600 hover:text-black">
//               Forgot Password?
//             </a>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50"
//           >
//             {loading ? "Signing in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setCredentials, setLoading } from "../../../store/slices/authSlice";
import logo from "../../../assets/Frame 1686560934 (1).png";
import axiosInstance from "../../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const navigate = useNavigate();


 const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(setLoading(true));
  setError("");

  try {
    // const res = await axiosInstance.post(
    //   `${import.meta.env.VITE_API_URL}/api/admin/login`,
    //   { email, password },
    //   { withCredentials: true }
    // );
    const res = await axiosInstance.post(
      "/admin/login",
      { email, password },
    );
    

    // store in Redux or localStorage
    dispatch(
      setCredentials({
        token: res.data.accessToken,
        admin: res.data.admin,
      })
    );

        // Store in localStorage if needed
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("adminData", JSON.stringify(res.data.admin));

    navigate("/admin/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
};


//   return (

//     <div className="min-h-screen flex items-center justify-center bg-[#2B2B2B]">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-10">
//         {/* Logo */}
//         <div className="flex items-center justify-center mb-6">
//           <img src={logo} alt="Growdex" className="h-10 mr-2" />
//           <h1 className="text-2xl font-bold">
//             <span className="text-black">Growdex</span>{" "}
//             <span className="text-yellow-500">Blog</span>
//             <span className="text-gray-500 font-medium">Admin</span>
//           </h1>
//         </div>

//         <p className="text-center text-gray-700 mb-8">
//           Sign in to start a session
//         </p>

//         {error && (
//           <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
//             {error}
//           </div>
//         )}

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Email Address
//             </label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email Address"
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50"
//           >
//             {loading ? "Signing in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );

return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2B2B2B]">
      
      {/* Logo + Title outside the white box */}
      <div className="flex items-center gap-3 mb-6">
        <img src={logo} alt="Growdex" className="h-8" />
        <h1 className="text-2xl font-bold flex items-baseline gap-5">
          <span className="text-white">Growdex</span>
          <span className="text-yellow-300">Blog<span className="text-gray-300 font-medium">Admin</span></span>
         
        </h1>
      </div>
  
      {/* White Card */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-10">
        <p className="text-center text-gray-700 mb-8">
          Sign in to start a session
        </p>
  
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}
  
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
  
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
  
}
