import React, { useEffect, useState } from "react";
import AppRouter from "./Router.jsx";
import { Toaster } from "react-hot-toast";
import Loader from "./components/loader/Loader.jsx";
import { bootstrapAuth } from "./utils/bootstrapAuth.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    bootstrapAuth().finally(() => {
      console.log("Hiding loader now");
      setLoading(false);
    });
  }, []);
  

  if (loading) return <Loader/>;

  return (
    <div>
      <AppRouter />

  
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#16a34a", // green
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#dc2626", // red
              color: "#fff",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
