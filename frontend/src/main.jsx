// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './App.css'
// // import { Provider } from "react-redux";
// // import store from "./store";
// // import App from './App.jsx'

// // import { BrowserRouter } from 'react-router-dom'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //       <Provider store={store}>
// //       <BrowserRouter>
// //       <App />
// //     </BrowserRouter>
// //     </Provider>
// //   </StrictMode>,
// // )

// // src/main.jsx
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./App.css";
// import { Provider } from "react-redux";
// import store from "./store";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { bootstrapAuth } from "./utils/bootstrapAuth.js";
// import Loader from "./components/loader/Loader.jsx"; // optional

// const root = createRoot(document.getElementById("root"));

// async function init() {
//   // show loader until bootstrapAuth finishes
//   root.render(
//     <StrictMode>
//       <Loader /> 
//     </StrictMode>
//   );

//   await bootstrapAuth();

//   // now render the real app
//   root.render(
//     <StrictMode>
//       <Provider store={store}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </Provider>
//     </StrictMode>
//   );
// }

// init();


// // src/main.jsx
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./App.css";
// import { Provider } from "react-redux";
// import store from "./store";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { bootstrapAuth } from "./utils/bootstrapAuth.js";
// import Loader from "./components/loader/Loader.jsx";

// const root = createRoot(document.getElementById("root"));

// async function init() {
//   // Show loader immediately
//   root.render(
//     <StrictMode>
//       <Loader />
//     </StrictMode>
//   );

//   try {
//     await bootstrapAuth(); // fetch user / token restore
//   } catch (err) {
//     console.error("Auth bootstrap failed:", err);
//     // optional: show a toast or fallback UI
//   } finally {
//     // ✅ Always render the real app, even if bootstrapAuth fails
//     root.render(
//       <StrictMode>
//         <Provider store={store}>
//           <BrowserRouter>
//             <App />
//           </BrowserRouter>
//         </Provider>
//       </StrictMode>
//     );
//   }
// }

// init();

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { bootstrapAuth } from "./utils/bootstrapAuth.js";

// Bootstrap auth immediately (no loader render here)
bootstrapAuth();

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
