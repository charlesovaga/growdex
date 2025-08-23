import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  CartesianGrid,
} from "recharts";
import cross2 from "../../../assets/Signups Icon.png"
import iconHome from "../../../assets/Icon (3).png"

import viewsIcon from "../../../assets/Views Icon.png";
import usersIcon from "../../../assets/Group 1000004451.png";
import postsIcon from "../../../assets/Signups Icon.png";
import clicksIcon from "../../../assets/Features Icon.png";

const icons = {
    "Pageviews": viewsIcon,
    "Monthly users": usersIcon,
    "Posts": postsIcon,
    "Clicks": clicksIcon,
  };




  const Dashbord = ({ data, dailyChange }) => {

  return (
    <div>
     
        {/* Topbar */}
        {/* <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-semibold">Dashboard</div>
          <div className="flex items-center  text-gray-600 text-sm">
          <div className="flex items-center gap-1 text-gray-600 text-sm">
  <img src={iconHome} alt="" className="w-4 h-4" />
  <span className="cursor-pointer hover:underline">Home</span>
</div>

              <span className="material-icons text-xs">chevron_right</span>
              <span className="font-medium text-gray-900">{activePage}</span>
            </div>
        </div> */}

        {/* Stats Grid */}
{/* Stats Grid */}
<div className="grid grid-cols-4 gap-6 mb-8">
  {data.stats.map((s, i) => (
    <div
      key={i}
      className="bg-white p-6 rounded-xl shadow flex flex-col gap-3"
    >
      {/* Top row: Icon + Title */}
      <div className="flex items-start justify-start gap-2">
        <img
          src={icons[s.title]}
          alt={s.title}
          className="w-5 h-5 rounded-lg"
        />
        <p className="text-gray-500 text-sm">{s.title}</p>
      </div>

      {/* Bottom row: Value + Change */}
      <div className="flex items-start justify-start gap-2">
        <h2 className="text-2xl font-bold">{s.value}</h2>
        {s.change && (
          <p
            className={`text-sm ${
              s.change.startsWith("+") ? "text-green-500" : "text-red-500"
            }`}
          >
            {s.change}
          </p>
        )}
      </div>
    </div>
  ))}
</div>



       {/* Traffic Chart */}
       <div className="bg-white p-6 rounded-xl shadow mb-8">
  <div className="mb-4">
    <h3 className="font-semibold mb-2">Site Traffic</h3>

    {/* Flex container for number + daily change % */}
    <div className="flex items-baseline gap-2">
      <p className="text-2xl font-bold">
        {data.trafficData.length > 0
          ? data.trafficData[data.trafficData.length - 1].traffic
          : 0}
      </p>
      <span
        className={`text-sm ${
          dailyChange >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {dailyChange >= 0 ? `+${dailyChange}%` : `${dailyChange}%`}
      </span>
    </div>
  </div>

  <ResponsiveContainer width="100%" height={280}>
    <LineChart
      data={data.trafficData}
      margin={{ top: 10, right: 16, left: 8, bottom: 0 }}
    >
      <CartesianGrid vertical={false} stroke="#E5E7EB" />

      <XAxis
        dataKey="date"
        tick={{ fontSize: 12, fill: "#6B7280" }}
        axisLine={false}
        tickLine={false}
        tickFormatter={(date) =>
          new Date(date).toLocaleDateString("en-US", {
            month: "short",
            // day: "numeric",
          })
        }
      />

      <YAxis
        domain={[
          0,
          Math.max(...data.trafficData.map((d) => d.traffic)) * 1.1 || 100,
        ]}
        tickFormatter={(v) => v.toFixed(0)} 
        tick={{ fontSize: 12, fill: "#6B7280" }}
        axisLine={false}
        tickLine={false}
        width={44}
      />

      <Tooltip
        contentStyle={{
          background: "#fff",
          borderRadius: 8,
          border: "1px solid #E5E7EB",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          padding: "8px 12px",
        }}
        labelStyle={{ color: "#374151", fontWeight: 600 }}
        itemStyle={{ color: "#111827" }}
        cursor={false}
        labelFormatter={(date) =>
          new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        }
        formatter={(value) => [`${value}`]}
      />

      <defs>
        <linearGradient id="trafficShadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#111827" stopOpacity={0.25} />
          <stop offset="100%" stopColor="#111827" stopOpacity={0} />
        </linearGradient>
      </defs>

      <Area
        type="monotone"
        dataKey="traffic"
        stroke="none"
        fill="url(#trafficShadow)"
        dot={false}
        tooltipType="none"
      />

      <Line
        type="monotone"
        dataKey="traffic"
        stroke="#111827"
        strokeWidth={1.5}
        dot={false}
        activeDot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>




       {/* Bottom Grid */}
<div className="grid grid-cols-3 gap-6">
  {/* Top Posts */}
  <div className="bg-white p-6 rounded-xl shadow col-span-2">
    <h3 className="font-semibold mb-4">Top posts</h3>
    <table className="w-full text-sm border-collapse">
      <thead className="text-gray-500">
        <tr>
          <th className="text-left px-4 py-2">Post</th>
          <th className="text-center px-4 py-2">Date</th>
          <th className="text-center px-4 py-2">Category</th>
          <th className="text-center px-4 py-2">Comments</th>
        </tr>
      </thead>

      <tbody>
        {data.topPosts.map((p, i) => (
          <tr key={i} className="border-t">
            {/* Post */}
            <td className="px-4 py-2 flex items-center gap-3">
              <img
                src={p.featuredImage?.url || p.image || "/placeholder.jpg"}
                alt={p.title}
                className="w-10 h-10 rounded object-cover"
              />
              <span>{p.title}</span>
            </td>

            {/* Date */}
            <td className="px-4 py-2 text-center">
              {new Date(p.createdAt).toLocaleDateString()}
            </td>

            {/* Category */}
            {/* Category */}
<td className="px-4 py-2 text-center">
  {p.categories && p.categories.length > 0 ? (
    <span className="px-2 py-1 bg-gray-100 rounded">
      {p.categories[0]}
    </span>
  ) : (
    <span className="text-gray-400 italic">None</span>
  )}
</td>


            {/* Comments */}
            <td className="px-4 py-2 text-center">{p.commentsCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>



       {/* Device Chart */}
<div className="bg-white p-3 rounded-xl shadow">
  <h3 className="font-semibold flex justify-center mb-1">Used Device</h3>

  <ResponsiveContainer width="100%" height={170}>
    <PieChart>
      <Pie
        data={data.deviceData}
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={80}
        startAngle={90}
        endAngle={-270}
        paddingAngle={2}
        dataKey="value"
      >
        {data.deviceData.map((entry) => {
  if (entry.name === "mobile") {
    return (
      <Cell
        key={entry.name}
        fill="#000000"
        fillOpacity={entry.value > 0 ? 1 : 0.2} // dim when no usage
      />
    );
  }
  if (entry.name === "web") {
    return (
      <Cell
        key={entry.name}
        fill="#8B5CF6"
        fillOpacity={entry.value > 0 ? 1 : 0.2} // dim when no usage
      />
    );
  }
  return null;
})}

      </Pie>
    </PieChart>
  </ResponsiveContainer>

  {/* Legend */}
{/* Legend */}
<div className=" flex justify-center gap-4">
  {data.deviceData.map((d) => {
    // Base colors
    let dotColor = d.name === "mobile" ? "#000000" : "#8B5CF6";

    // Fade if value = 0 (applies to both web & mobile)
    let dotOpacity = d.value > 0 ? 1 : 0.2;

    return (
      <div key={d.name} className="flex items-center gap-2">
        <span
          className="w-3 h-3 rounded-full"
          style={{
            backgroundColor: dotColor,
            opacity: dotOpacity,
          }}
        />
        <span className="text-sm text-gray-600 capitalize">{d.name}</span>
      </div>
    );
  })}
</div>


{/* black even when mobile is 0 */}
{/* Legend */}
{/* <div className="mt-6 flex gap-6">
  {data.deviceData.map((d) => {
    // Dot colors: mobile = black, web = purple
    let dotColor = d.name === "mobile" ? "#000000" : "#8B5CF6";

    return (
      <div key={d.name} className="flex items-center gap-2">
        <span
          className="w-3 h-3 rounded-full"
          style={{
            backgroundColor: dotColor,
            opacity: d.name === "mobile" ? 1 : d.value > 0 ? 1 : 0.2,
          }}
        />
        <span className="text-sm text-gray-600 capitalize">{d.name}</span>
      </div>
    );
  })}
</div> */}

</div>

        </div>
      
    </div>
  )
}

export default Dashbord
