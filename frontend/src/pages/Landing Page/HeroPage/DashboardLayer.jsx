// export default function FeaturesGrid() {
//   const features = [
    
//     {
//       title: "Integrated Email Marketing",
//       description:
//         "Build and automate email campaigns alongside your paid ads, no extra tools needed",
//       icon: "📩"
//     },
    
//       {
//         title: "Smart Budget Allocation",
//         description:
//           "Get AI-driven recommendations on how to split and spend your ad budget effectively.",
//         icon: "💰", // Budget / money
//       },
//       {
//         title: "Real-Time Analytics",
//         description:
//           "Monitor impressions, clicks, conversions, and ROI across platforms as they happen.",
//         icon: "📊", // Analytics / data
//       },
//       {
//         title: "Easy Account Integration",
//         description:
//           "Securely connect your ad accounts in just a few steps.",
//         icon: "🔗", // Linking accounts
//       }
//     ]
    
  
  

//   return (
//     <section className="py-20 px-4 bg-white text-center">
//       {/* Heading */}
//       <div className="max-w-2xl mx-auto mb-12 border-b-2 border-l-2 border-r-2 border-gray-300 border-dotted">
//   <h2 className="text-4xl font-bold mb-4">One-Click Multi-Platform Ad Creation</h2>
//   <p className="text-gray-500 mb-4">
//   Launch your campaign across Google, Meta, TikTok, LinkedIn, X, and Email, all at once
//   </p>
// </div>


//       {/* Grid with Dotted Outer and Inner Borders */}
//       <div
//         className="max-w-5xl mx-auto border-2 border-dotted"
//         style={{
//           borderColor: "#D1D5DB",
//           backgroundImage: "radial-gradient(#E5E7EB 1px, transparent 1px)",
//           backgroundSize: "20px 20px",
//         }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-dotted divide-gray-300">
//           {features.map((feature, idx) => (
//             <div key={idx} className="p-8">
//               <div className="text-3xl mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-500 text-sm">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


export default function FeaturesGrid() {
  const features = [
    {
      title: "Integrated Email Marketing",
      description:
        "Build and automate email campaigns alongside your paid ads, no extra tools needed",
      icon: "📩",
    },
    {
      title: "Smart Budget Allocation",
      description:
        "Get AI-driven recommendations on how to split and spend your ad budget effectively.",
      icon: "💰",
    },
    {
      title: "Real-Time Analytics",
      description:
        "Monitor impressions, clicks, conversions, and ROI across platforms as they happen.",
      icon: "📊",
    },
    {
      title: "Easy Account Integration",
      description: "Securely connect your ad accounts in just a few steps.",
      icon: "🔗",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white text-center">
   <div className="relative max-w-2xl mx-auto mb-12 border-b-2 border-l-2 border-r-2 border-gray-300 border-dotted rounded-t-lg rounded-b-lg">
  <h2 className="text-4xl font-bold mb-4">One-Click Multi-Platform Ad Creation</h2>
  <p className="text-gray-500 mb-4">
    Launch your campaign across Google, Meta, TikTok, LinkedIn, X, and Email, all at once
  </p>

  {/* Corner circles */}
  <span className="absolute w-4 h-4 bg-white border-2 border-gray-300 rounded-full -bottom-1 -left-1"></span>
  <span className="absolute w-4 h-4 bg-white border-2 border-gray-300 rounded-full -bottom-1 -right-1"></span>

</div>


      {/* Feature Grid with dotted middle lines */}
      <div
        className="relative max-w-5xl mx-auto border-2 border-dotted border-gray-300"
        style={{
          backgroundImage: "radial-gradient(#E5E7EB 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        {/* Corner circles */}
        <span className="absolute w-4 h-4 bg-white border-2 border-gray-300 rounded-full -top-2 -left-2"></span>
        <span className="absolute w-4 h-4 bg-white border-2 border-gray-300 rounded-full -top-2 -right-2"></span>
        <span className="absolute w-4 h-4 bg-white border-2 border-gray-300 rounded-full -bottom-2 -left-2"></span>
        <span className="absolute w-4 h-4 bg-white border-2 border-gray-300 rounded-full -bottom-2 -right-2"></span>

        {/* Center joint circle */}
        <span className="absolute w-4 h-4 bg-white border-2 border-gray-300 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></span>

        {/* Middle dotted lines */}
        <span className="absolute top-1/2 left-0 w-full border-t- border-dotted border-gray-300"></span>
        <span className="absolute left-1/2 top-0 h-full border-l- border-dotted border-gray-300"></span>

        {/* Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-10 flex flex-col items-center text-center transition
                ${idx < 2 ? "border-b-2 border-dotted border-gray-300" : ""}
                ${idx % 2 === 0 ? "border-r-2 border-dotted border-gray-300" : ""}
              `}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
