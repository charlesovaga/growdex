import React from "react";
import AppRouter from "./Router.jsx";
import { Toaster } from "react-hot-toast";

function App() {
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
