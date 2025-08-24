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


// Loader

// src/main.jsx
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { setCredentials, logout } from "./store/slices/authSlice";
import axios from "axios";
import Loader from "./components/loader/Loader";



const Main = () => {
  const [bootstrapped, setBootstrapped] = useState(false);

  useEffect(() => {
    const bootstrapAuth = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/admin/refresh`,
          {},
          { withCredentials: true }
        );
        store.dispatch(setCredentials({ token: res.data.accessToken }));
      } catch (err) {
        store.dispatch(logout());
      } finally {
        // 👇 this always runs, success or fail
        setBootstrapped(true);
      }
    };

    bootstrapAuth();
  }, []);

  if (!bootstrapped) {
    return <Loader />; // only shown briefly on first load
  }

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Main />
  </Provider>
);
