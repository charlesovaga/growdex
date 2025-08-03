// import React from "react";
// import { FiPlus, FiX } from "react-icons/fi";

// function FaqItem({ question, answer, isOpen, onClick }) {
//   return (
//     <div
//       className={`mb-6 transition-all duration-300 ease-in-out ${
//         isOpen ? "bg-yellow-50 rounded-3xl p-6" : "border-b"
//       }`}
//     >
//       <div
//         className={`flex justify-between items-start cursor-pointer ${
//           isOpen ? "" : "pb-4"
//         }`}
//         onClick={onClick}
//       >
//         <h3 className="text-xl font-bold leading-snug text-black">{question}</h3>
//         <div className="ml-4 mt-1 text-yellow-500 text-xl">
//           {isOpen ? <FiX /> : <FiPlus />}
//         </div>
//       </div>

//       {isOpen && (
//         <div className="mt-3 text-base text-gray-500 leading-relaxed">
//           {answer}
//         </div>
//       )}
//     </div>
//   );
// }

// export default FaqItem;


import React from "react";
import { FiPlus, FiX } from "react-icons/fi";

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className={`mb-6   ${
        isOpen ? "bg-yellow-50 rounded-3xl p-6" : "border-b mt-14"
      }`}
    >
     <div className="flex justify-between items-start cursor-pointer mt-4 mb-10" onClick={onClick}>
  <h3 className={`text-3xl font-bold ${isOpen ? "text-gray-900 font-bold" : "text-black"}`}>
    {question}
  </h3>
  <div className="ml-4 mt-1 text-3xl text-gray-500">
    {isOpen ? <FiX /> : <FiPlus className="text-yellow-500" />}
  </div>
</div>


      {isOpen && (
        <div className="mt-18 text-xl text-gray-500 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FaqItem;
