


// import React, { useState } from "react";
// import FaqItem from "./FaqItem";

// const faqData = {
//   General: [
//     {
//       question: "What types of businesses use AzontoO?",
//       answer:
//         "AzontoO works for retail, fintech, healthcare, logistics, hospitality, and any business that processes payments and needs cashflow visibility.",
//     },
//     {
//       question: " Do you integrate with our bank and payment processor?",
//       answer:
//         "Yes. We support integrations with a wide range of local and international banks, payment processors, and accounting tools.",
//     },
//     {
//       question: "Can AzontoO handle chargebacks from multiple payment channels?",
//       answer:
//         "Absolutely. We consolidate chargebacks from different payment gateways, making it easier to track and resolve disputes.",
//     },
//     {
//       question: " How long does onboarding take?",
//       answer:
//         "Typically, onboarding takes less than 7 days, depending on your integration needs.",
//     },
//     {
//       question: " Is my financial data secure?",
//       answer:
//         "Yes. We use enterprise-grade encryption and comply with global data protection standards.",
//     },
//     {
//       question: "What’s your pricing model?",
//       answer:
//         "Our pricing is based on your transaction volume and selected features. Contact us to get a custom quote.",
//     },
//   ],
//   Payment: [
//     {
//       question: "How do I make payments?",
//       answer: "Payments can be made via credit card, PayPal or bank transfer.",
//     },
//     {
//       question: "Is there a refund policy?",
//       answer: "Yes, you can request a refund within 7 days if conditions are met.",
//     },
//   ],
//   Services: [
//     {
//       question: "Do you offer SEO services?",
//       answer: "Yes, we offer basic and advanced SEO plans.",
//     },
//   ],
//   Refund: [
//     {
//       question: "Can I cancel at any time?",
//       answer: "Yes, cancellation is possible at any point from your dashboard.",
//     },
//   ],
//   Contact: [
//     {
//       question: "How can I reach support?",
//       answer: "You can contact support via chat, email or call.",
//     },
//   ],
// };

// function FrequentlyAskedQuestions() {
 
//     const categories = Object.keys(faqData);
//     const [activeCategory, setActiveCategory] = useState("General");
//     const [openIndex, setOpenIndex] = useState(null);
  
//     const handleToggle = (index) => {
//       setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
//     };
  
//     return (
//       <section className="max-w-5xl mx-auto py-16 px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">
//           Questions asked frequently.
//         </h2>
  
//         <div className="flex flex-wrap justify-center gap-4 mb-6">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => {
//                 setActiveCategory(category);
//                 setOpenIndex(null); // Reset open question on tab switch
//               }}
//               className={`px-4 py-2 rounded-full border ${
//                 activeCategory === category
//                   ? "bg-black text-white"
//                   : "bg-white text-black"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
  
//         <div>
//           {faqData[activeCategory].map((item, index) => (
//             <FaqItem
//               key={index}
//               question={item.question}
//               answer={item.answer}
//               isOpen={openIndex === index}
//               onClick={() => handleToggle(index)}
//             />
//           ))}
//         </div>
//       </section>
//     );
// }

// export default FrequentlyAskedQuestions;


import React, { useState } from "react";
import FaqItem from "./FaqItem";

const faqList = [
  {
    question: "What is Growdex?",
    answer:
      "Growdex is an all-in-one, AI-powered platform that lets you create, run, and manage digital ad campaigns across multiple platforms,  including Google, Meta (Facebook & Instagram), TikTok, LinkedIn, X (Twitter), and Email, all from one simple dashboard.",
  },
  {
    question: "Who is Growdex built for?",
    answer:
      "Growdex is built for anyone who runs digital ads — including small business owners, creators, marketers, founders, freelancers, and startup teams who want better results without the complexity.",
  },
  {
    question: "How is Growdex different from other marketing tools?",
    answer:
      "Most existing tools are expensive, fragmented, or built for large agencies. Growdex is designed to be affordable, AI-powered, and unified,  helping users publish campaigns across platforms in one click, track results in one place, and improve performance with smart recommendations.",
  },
  {
    question: "Do I need to be an expert to use Growdex?",
    answer:
      "Not at all. Growdex is built to be simple and beginner-friendly. Whether you’re a first-time ad buyer or an experienced marketer, our AI will guide you through ad creation, budget setup, and optimization.",
  },
  {
    question: "Can I really launch ads on all platforms from one place?",
    answer:
      "Yes,  that’s our goal. We’re integrating with major ad platforms (Meta, Google, TikTok, LinkedIn, X) so you can connect your accounts, create your ads, and launch campaigns from a single dashboard.",
  },
  {
    question: "What does the AI actually do?",
    answer:
      "Growdex AI helps you run better campaigns by:\n\n• Writing effective ad copy\n• Recommending budget allocation\n• Suggesting creatives tailored to your industry\n• Analyzing performance and providing improvement tips",
  },
  
  {
    question: "How much will it cost to use Growdex?",
    answer:
      "We’re working on an affordable pricing model that supports early-stage businesses. Expect a freemium plan, with flexible upgrades based on usage and advanced features. Pricing will be announced soon.",
  },
  {
    question: "When will Growdex launch?",
    answer:
      "We’re currently building our MVP. Early access for waitlist users will roll out soon. If you haven’t yet, join the waitlist to be among the first to get in.",
  },
  {
    question: "Is my data safe on Growdex?",
    answer:
      "Absolutely. We take data privacy and security seriously. All data is encrypted and stored securely, and we follow platform-level compliance for every integration.",
  },
];

function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-24 text-center">
         Frequently  Asked Questions.
      </h2>

      <div>
        {faqList.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
