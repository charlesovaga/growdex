import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { bootstrapAuth } from "./utils/bootstrapAuth.js";
import Loader from "./components/loader/Loader.jsx";

const root = createRoot(document.getElementById("root"));

async function init() {
  // temporary loader
  root.render(
    <StrictMode>
      <Loader />
    </StrictMode>
  );

  await bootstrapAuth();

  root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}

init();
