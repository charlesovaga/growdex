// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Area,
//   CartesianGrid,
// } from "recharts";
// import {
//   Home,
//   FileText,
//   Tag,
//   Users,
//   Shield,
//   MessageCircle,
// } from "lucide-react";

// const Dashboard = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [dailyChange, setDailyChange] = useState(0);

// //   useEffect(() => {
// //     console.log("Traffic data:", data?.trafficData);
// //     axios
// //       .get("http://localhost:5000/api/admin-dashboard/dashboard")
// //       .then((res) => {
// //         const apiData = res.data;

// //         const monthNames = [
// //           "Jan",
// //           "Feb",
// //           "Mar",
// //           "Apr",
// //           "May",
// //           "Jun",
// //           "Jul",
// //           "Aug",
// //           "Sep",
// //           "Oct",
// //           "Nov",
// //           "Dec",
// //         ];
// //         console.log("Traffic data:", data?.trafficData);
// //         const fullTrafficData = monthNames.map((name, i) => {
// //           const monthNum = i + 1;
// //           const monthData = apiData.trafficData.find(
// //             (d) => d.month === monthNum
// //           );
// //           return {
// //             month: monthNum,
// //             traffic: monthData ? monthData.traffic : 0,
// //           };
// //         });

// //         setData({
// //           ...apiData,
// //           trafficData: fullTrafficData,
// //         });
// //         setLoading(false);
// //         console.log("Traffic data:", data?.trafficData);
// //       })
// //       .catch((err) => {
// //         console.error("Error fetching dashboard data:", err);
// //         setLoading(false);
// //       });
// //   }, []);
// useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/admin-dashboard/dashboard")
//       .then((res) => {
//         const apiData = res.data;
  
//         const monthNames = [
//           "Jan","Feb","Mar","Apr","May","Jun",
//           "Jul","Aug","Sep","Oct","Nov","Dec",
//         ];
  
//         const fullTrafficData = monthNames.map((name, i) => {
//             const monthNum = i + 1;
//             const year = new Date().getFullYear();
//             const date = new Date(year, monthNum - 1, 1).getTime(); //  convert to timestamp
//             const monthData = apiData.trafficData.find((d) => d.month === monthNum);
          
//             return {
//               month: monthNum,
//               traffic: monthData ? monthData.traffic : 0,
//               date, // now a number, safe for Recharts
//             };
//           });
          
//         setData({
//           ...apiData,
//           trafficData: fullTrafficData,
//         });
  
//         // calculate dailyChange
//         if (fullTrafficData.length >= 2) {
//           const today = fullTrafficData[fullTrafficData.length - 1].traffic;
//           const yesterday = fullTrafficData[fullTrafficData.length - 2].traffic;
//           setDailyChange(yesterday === 0 ? 0 : ((today - yesterday) / yesterday * 100).toFixed(1));
//         } else {
//           setDailyChange(0);
//         }
  
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching dashboard data:", err);
//         setLoading(false);
//       });
//   }, []);
  
  

//   if (loading) return <p>Loading...</p>;
//   if (!data) return <p>No data available</p>;

//   const COLORS = ["#000", "#CFCFFF", "#FF8042", "#0088FE"];
//   // ⬇️ Paste daily change calc here
// // const dailyChange = (() => {
// //     const len = data.trafficData.length;
// //     if (len < 2) return 0; // not enough data yet
  
// //     const today = data.trafficData[len - 1]?.traffic || 0;
// //     const yesterday = data.trafficData[len - 2]?.traffic || 0;
  
// //     if (yesterday === 0) return 0; // avoid divide by zero
// //     return (((today - yesterday) / yesterday) * 100).toFixed(1);
// //   })();

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#1E1E1E] text-gray-200 p-6">
//         <h1 className="text-lg font-bold mb-6">Blog Admin Panel</h1>
//         <nav className="space-y-4">
//           <a className="flex items-center gap-3 hover:text-white" href="#">
//             <Home size={18} /> Dashboard
//           </a>
//           <a className="flex items-center gap-3 hover:text-white" href="#">
//             <FileText size={18} /> Posts
//           </a>
//           <a className="flex items-center gap-3 hover:text-white" href="#">
//             <Tag size={18} /> Categories
//           </a>
//           <a className="flex items-center gap-3 hover:text-white" href="#">
//             <Users size={18} /> Users
//           </a>
//           <a className="flex items-center gap-3 hover:text-white" href="#">
//             <Shield size={18} /> Roles
//           </a>
//           <a className="flex items-center gap-3 hover:text-white" href="#">
//             <MessageCircle size={18} /> Comments
//           </a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-50 p-8">
//         {/* Topbar */}
//         <div className="flex justify-between items-center mb-8">
//           <div className="text-2xl font-semibold">Dashboard</div>
//           <div className="flex gap-4 items-center">
//             <button className="bg-black text-white px-4 py-2 rounded-lg">
//               + New
//             </button>
//             <button className="text-sm font-medium text-gray-600">
//               View Blog
//             </button>
//             <span className="text-sm text-gray-600">Hello, Admin</span>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-4 gap-6 mb-8">
//           {data.stats.map((s, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow">
//               <p className="text-gray-500">{s.title}</p>
//               <h2 className="text-2xl font-bold">{s.value}</h2>
//               {s.change && (
//                 <p
//                   className={`text-sm ${
//                     s.change.startsWith("+")
//                       ? "text-green-500"
//                       : "text-red-500"
//                   }`}
//                 >
//                   {s.change}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>

//        {/* Traffic Chart */}
// <div className="bg-white p-6 rounded-xl shadow mb-8">
//   <div className="flex items-center justify-between mb-4">
//     <h3 className="font-semibold">Site Traffic</h3>
//     <div className="text-right">
//       <p className="text-2xl font-bold">
//         {data.trafficData.length > 0
//           ? data.trafficData[data.trafficData.length - 1].traffic
//           : 0}
//       </p>
//       <span
//         className={`text-sm ${
//           dailyChange >= 0 ? "text-green-500" : "text-red-500"
//         }`}
//       >
//         {dailyChange >= 0 ? `+${dailyChange}%` : `${dailyChange}%`}
//       </span>
//     </div>
//   </div>
//   <ResponsiveContainer width="100%" height={280}>
//   <LineChart
//     data={data.trafficData}
//     margin={{ top: 10, right: 16, left: 8, bottom: 0 }}
//   >
//     <CartesianGrid vertical={false} stroke="#E5E7EB" />

//     <XAxis
//       dataKey="date"
//       tick={{ fontSize: 12, fill: "#6B7280" }}
//       axisLine={false}
//       tickLine={false}
//       tickFormatter={(date) =>
//         new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })
//       }
//     />

//     <YAxis
//       domain={[0, Math.max(...data.trafficData.map(d => d.traffic)) * 1.1 || 100]}
//       tickFormatter={(v) => `${v}`}
//       tick={{ fontSize: 12, fill: "#6B7280" }}
//       axisLine={false}
//       tickLine={false}
//       width={44}
//     />

//     <Tooltip
//       contentStyle={{
//         background: "#fff",
//         borderRadius: 8,
//         border: "1px solid #E5E7EB",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
//         padding: "8px 12px",
//       }}
//       labelStyle={{ color: "#374151", fontWeight: 600 }}
//       itemStyle={{ color: "#111827" }}
//       cursor={false}
//       labelFormatter={(date) =>
//         new Date(date).toLocaleDateString("en-US", {
//           month: "long",
//           day: "numeric",
//           year: "numeric",
//         })
//       }
//       formatter={(value) => [`${value}`]} //  Only one Traffic label
//     />

//     <defs>
//       <linearGradient id="trafficShadow" x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor="#111827" stopOpacity={0.25} />
//         <stop offset="100%" stopColor="#111827" stopOpacity={0} />
//       </linearGradient>
//     </defs>
// <Area
//   type="monotone"
//   dataKey="traffic"
//   stroke="none"
//   fill="url(#trafficShadow)"
//   dot={false}
//   tooltipType="none" //  Prevent this Area from contributing to tooltip
// />


//     <Line
//       type="monotone"
//       dataKey="traffic"
//       stroke="#111827"
//       strokeWidth={1.5}
//       dot={false}
//       activeDot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
//     />
//   </LineChart>
// </ResponsiveContainer>

// </div>


//         {/* Bottom Grid */}
//         <div className="grid grid-cols-3 gap-6">
//           {/* Top Posts */}
//           <div className="bg-white p-6 rounded-xl shadow col-span-2">
//             <h3 className="font-semibold mb-4">Top posts</h3>
//             <table className="w-full text-sm">
//               <thead className="text-gray-500">
//                 <tr>
//                   <th className="text-left">Post</th>
//                   <th>Date</th>
//                   <th>Category</th>
//                   <th>Comments</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.topPosts.map((p, i) => (
//                   <tr key={i} className="border-t">
//                     <td className="py-2">{p.title}</td>
//                     <td>{new Date(p.createdAt).toLocaleDateString()}</td>
//                     <td>
//                       <span className="px-2 py-1 bg-gray-100 rounded">
//                         {p.category}
//                       </span>
//                     </td>
//                     <td>{p.commentsCount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Device Chart */}
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h3 className="font-semibold mb-4">Used Device</h3>
//             <ResponsiveContainer width="100%" height={200}>
//               <PieChart>
//                 <Pie
//                   data={data.deviceData}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="value"
//                 >
//                   {data.deviceData.map((entry, index) => (
//                     <Cell
//                       key={`cell-${index}`}
//                       fill={COLORS[index % COLORS.length]}
//                     />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

// Aggregate daily

import { useEffect, useState } from "react";
import Dashbord from "../Admin/Dashbord"
import PostPage from "../Admin/PostPage"
import CategoriesPage from "../Admin/CategoriesPage"
import TagPage from "../Admin/TagPage"
import axios from "axios";
import icon2 from "../../../assets/icon-wrap (2).png"
import icon1 from "../../../assets/icon-wrap (1).png"
import icon5 from "../../../assets/icon-wrap (5).png"
import icon from "../../../assets/icon-wrap.png"
import icon3 from "../../../assets/icon-wrap (3).png"
import icon4 from "../../../assets/icon-wrap (4).png"
import icon33 from "../../../assets/Icon (3).png"
import logo from "../../../assets/Frame 12.png"
import notifications from "../../../assets/admin-comments.png"
import cross from "../../../assets/dashicons-plus.png"
import iconHome from "../../../assets/Icon (3).png"
import { logout as logoutAction } from "../../../store/slices/authSlice";

import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AddPost from "./AddPost";
import { ArrowLeft } from "lucide-react";
import axiosInstance from "../../../utils/axiosInstance";
import Loader from "../../loader/Loader";
import { useDispatch } from "react-redux";


const menuItems = [
    { icon: <img src={icon} size={18} />, label: "Dashboard", path: "/admin/dashboard" },
    { icon: <img src={icon2} size={18} />, label: "Posts", path: "/admin/posts" },
    { icon: <img src={icon1} size={18} />, label: "Categories", path: "/admin/categories" },
    { icon: <img src={icon33} size={18} />, label: "Tags", path: "/admin/tags" },
    { icon: <img src={icon3} size={18} />, label: "Users", path: "/admin/users" },
    { icon: <img src={icon4} size={18} />, label: "Roles", path: "/admin/roles" },
    { icon: <img src={icon5} size={18} />, label: "Comments", path: "/admin/comments" },
  ];
  

  

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dailyChange, setDailyChange] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");
  const [admin, setAdmin] = useState(null);
  const location = useLocation(); 
  const dispatch = useDispatch();
const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await axiosInstance.post("/admin/logout");
  } catch (err) {
    console.error("Logout request failed:", err);
  }
  dispatch(logoutAction());  // clear Redux
  navigate("/login");        // redirect
};


//   useEffect(() => {
//     console.log("Traffic data:", data?.trafficData);
//     axios
//       .get("http://localhost:5000/api/admin-dashboard/dashboard")
//       .then((res) => {
//         const apiData = res.data;

//         const monthNames = [
//           "Jan",
//           "Feb",
//           "Mar",
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//           "Nov",
//           "Dec",
//         ];
//         console.log("Traffic data:", data?.trafficData);
//         const fullTrafficData = monthNames.map((name, i) => {
//           const monthNum = i + 1;
//           const monthData = apiData.trafficData.find(
//             (d) => d.month === monthNum
//           );
//           return {
//             month: monthNum,
//             traffic: monthData ? monthData.traffic : 0,
//           };
//         });

//         setData({
//           ...apiData,
//           trafficData: fullTrafficData,
//         });
//         setLoading(false);
//         console.log("Traffic data:", data?.trafficData);
//       })
//       .catch((err) => {
//         console.error("Error fetching dashboard data:", err);
//         setLoading(false);
//       });
//   }, []);
useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch dashboard data
        const dashboardRes = await axiosInstance.get("/admin-dashboard/dashboard")
        ;
  
        const apiData = dashboardRes.data;
  
        const monthNames = [
          "Jan","Feb","Mar","Apr","May","Jun",
          "Jul","Aug","Sep","Oct","Nov","Dec",
        ];
  
        // Build full year months, merge backend data
        const fullTrafficData = monthNames.map((name, i) => {
          const monthNum = i + 1;
          const monthData = apiData.trafficData.find(
            (d) => d.month === monthNum
          );
          return {
            month: monthNum,
            traffic: monthData ? monthData.traffic : 0,
            date: monthData
              ? new Date(monthData.date).getTime()
              : new Date(new Date().getFullYear(), monthNum - 1, 1).getTime(),
          };
        });
  
        setData({
          ...apiData,
          trafficData: fullTrafficData,
        });
  
        // calculate dailyChange using last two months
        if (fullTrafficData.length >= 2) {
          const today = fullTrafficData[fullTrafficData.length - 1].traffic;
          const yesterday = fullTrafficData[fullTrafficData.length - 2].traffic;
        
          const change =
            yesterday === 0
              ? 0
              : ((today - yesterday) / yesterday) * 100;
        
          setDailyChange(Number(change.toFixed(1)));
        } else {
          setDailyChange(0);
        }
        
  
        // Fetch current admin info

        const meRes = await axiosInstance.get("/admin/me", {
          withCredentials: true
        });
        
  
        setAdmin(meRes.data); // { id, email, name }
  
        setLoading(false);
      } catch (err) {
        console.error("Error fetching dashboard/admin data:", err);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    if (location.pathname.includes("/dashboard")) setActivePage("Dashboard");
    else if (location.pathname.includes("/posts")) setActivePage("Posts");
    else if (location.pathname.includes("/categories")) setActivePage("Categories");
    else if (location.pathname.includes("/tags")) setActivePage("Tags");
    else if (location.pathname.includes("/users")) setActivePage("Users");
    else if (location.pathname.includes("/roles")) setActivePage("Roles");
    else if (location.pathname.includes("/comments")) setActivePage("Comments");
  }, [location.pathname]);
  

  if (loading) return <Loader/>;
  if (!data) return <p>No data available</p>;

  const COLORS = ["#000", "#CFCFFF", "#FF8042", "#0088FE"];
  // Paste daily change calc here
// const dailyChange = (() => {
//     const len = data.trafficData.length;
//     if (len < 2) return 0; // not enough data yet
  
//     const today = data.trafficData[len - 1]?.traffic || 0;
//     const yesterday = data.trafficData[len - 2]?.traffic || 0;
  
//     if (yesterday === 0) return 0; // avoid divide by zero
//     return (((today - yesterday) / yesterday) * 100).toFixed(1);
//   })();

  return (
<div className="flex bg-[#F0F0F1] min-h-screen">
    {/* Sidebar */}
    <aside
    className={`${
      collapsed ? "w-20" : "w-64"
    } bg-[#1E1E1E] text-gray-200  fixed top-0 left-0 h-full transition-all duration-300 z-50`}
  >

{/* Header */}
<div className=" w-full bg-black py-3 flex items-center justify-center">
  {/* Logo always visible */}
  <img 
    src={logo} 
    alt="Logo" 
    className="w-5 h-5 object-contain" 
  />

  {/* Title only when not collapsed */}
  {!collapsed && (
    <h1 className="font-bold text-lg text-white ml-6">
      <span className="text-orange-400">Blog</span> Admin Panel
    </h1>
  )}
</div>


     <nav className="space-y-2">
     {menuItems.map((item, i) => (
  <Link
    key={i}
    to={item.path}
    onClick={() => setActivePage(item.label)} 
    className={`flex items-center gap-3 w-full px-6 py-2 text-gray-300 hover:text-white hover:bg-black ${
      activePage === item.label ? "bg-black text-white" : ""
    }`}
  >
    <div className="w-10 h-10 flex items-center justify-center">
      {item.icon}
    </div>
    {!collapsed && item.label}
  </Link>
))}
 {/* Logout Button */}
 <button
    onClick={handleLogout}
    className="flex items-center gap-3 w-full px-6 py-2 text-gray-300 hover:text-white hover:bg-red-600 mt-4"
  >
    <div className="w-10 h-10 flex items-center justify-center">
      🚪
    </div>
    {!collapsed && "Logout"}
  </button>

        </nav>




      {/* White Arrow Toggle */}
      <div
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-20 -right-2 w-0 h-0 
          border-t-[10px] border-b-[25px] border-r-[25px] 
          border-transparent border-r-[#F0F0F1]  cursor-pointer"
      ></div>
    </aside>

   

 {/* Main Section */}
 <div
  className="flex-1 flex flex-col min-h-screen bg-[#F0F0F1]"
  style={{ marginLeft: collapsed ? "5rem" : "16rem" }}
>

  
    {/* Top Black Navbar */}
    <div
  className="bg-black text-white flex items-center justify-between px-6 py-3 shadow fixed top-0 z-40 transition-all duration-300"
  style={{
    left: collapsed ? "5rem" : "16rem",
    width: collapsed ? "calc(100% - 5rem)" : "calc(100% - 16rem)",
    height: "56px",
  }}
>


      {/* Left side */}
      <div className="flex items-center gap-6">
        {/* Notification with badge */}
        <div className="flex items-center cursor-pointer">
  <img src={notifications} alt="Notifications" className="h-5 w-5" />
  <span className="text-sm font-semibold  text-white rounded-full px-2 py-0.5">
    2
  </span>
</div>
<Link
  to="/admin/posts/new"
  state={{ header: "Add New Post" }}
  className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded-md text-sm text-white"
>
  <img src={cross} alt="New Blog" className="h-4 w-4" />
  <span>New</span>
</Link>

<button
  onClick={() => window.open("/blog", "_blank")}
  className="text-sm hover:underline"
>
  View Blog
</button>

      </div>

     <div className="flex items-center gap-2 text-sm">
  <img
    src={admin?.profilePic || "/src/assets/default-avatar.svg"}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = "/src/assets/default-avatar.svg";
    }}
    alt="Profile"
    className="w-8 h-8 rounded-full border border-gray-300 bg-white object-cover"
  />
  <span>
    Hello, <span className="font-semibold">{admin?.name || "..."} </span>
  </span>
</div>


    </div>
      {/* Main Content */}
      <main className="flex-1 p-4 pt-20 bg-[#F0F0F1]">
          {/* Topbar */}
          <div className="flex justify-between items-center mb-8">
  {/*  If on Add Post page, show back + title */}
  {location.pathname.includes("/admin/posts/new") ? (
    <div className="flex items-center gap-3">
    <button
  onClick={() => navigate(-1)}
  className="flex items-center ..."
>
  <ArrowLeft size={18} />
  <span>Back</span>
</button>
      <h1 className="text-2xl font-semibold">Add New Post</h1>
    </div>
  ) : (
    // Otherwise show normal activePage title
    <div className="text-2xl font-semibold">{activePage}</div>
  )}
  <div className="flex items-center text-gray-600 text-sm">
    <div className="flex items-center gap-1 text-gray-600 text-sm">
      <img src={iconHome} alt="" className="w-4 h-4" />
      <span className="cursor-pointer hover:underline">Home</span>
    </div>

    <span className="material-icons text-xs">chevron_right</span>
    <span className="font-medium text-gray-900">{activePage}</span>
  </div>
</div>

      <Routes>
  <Route path="dashboard" element={<Dashbord data={data} dailyChange={dailyChange} />} />
 {/* List all posts (default) */}
 <Route path="posts" element={<PostPage />} />

{/* New Post (still renders PostPage) */}
<Route path="posts/new" element={<AddPost createNew />} />

{/* Edit a specific post */}
<Route path="posts/edit/:id" element={<AddPost />} />

  <Route path="users" element={<div>Users Page</div>} />
  <Route path="categories" element={<CategoriesPage />} />
  <Route path="tags" element={<TagPage />} />
  <Route path="roles" element={<div>Roles Page</div>} />
  <Route path="comments" element={<div>Comments Page</div>} />
</Routes>
      </main>
    </div>
    </div>
  );
};

export default Dashboard;