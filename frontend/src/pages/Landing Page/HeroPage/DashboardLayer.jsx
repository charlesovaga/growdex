export default function FeaturesGrid() {
  const features = [
    
    {
      title: "Integrated Email Marketing",
      description:
        "Build and automate email campaigns alongside your paid ads, no extra tools needed",
      icon: "📩"
    },
    
      {
        title: "Smart Budget Allocation",
        description:
          "Get AI-driven recommendations on how to split and spend your ad budget effectively.",
        icon: "💰", // Budget / money
      },
      {
        title: "Real-Time Analytics",
        description:
          "Monitor impressions, clicks, conversions, and ROI across platforms as they happen.",
        icon: "📊", // Analytics / data
      },
      {
        title: "Easy Account Integration",
        description:
          "Securely connect your ad accounts in just a few steps.",
        icon: "🔗", // Linking accounts
      }
    ]
    
  
  

  return (
    <section className="py-20 px-4 bg-white text-center">
      {/* Heading */}
      <div className="max-w-2xl mx-auto mb-12 border-b-2 border-l-2 border-r-2 border-gray-300 border-dotted">
  <h2 className="text-4xl font-bold mb-4">One-Click Multi-Platform Ad Creation</h2>
  <p className="text-gray-500 mb-4">
  Launch your campaign across Google, Meta, TikTok, LinkedIn, X, and Email, all at once
  </p>
</div>


      {/* Grid with Dotted Outer and Inner Borders */}
      <div
        className="max-w-5xl mx-auto border-2 border-dotted"
        style={{
          borderColor: "#D1D5DB",
          backgroundImage: "radial-gradient(#E5E7EB 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-dotted divide-gray-300">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
