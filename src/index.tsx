import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Form from "./pages/Form/Form";
import BackgroundImage from "./pages/BackgroundImg";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="container">
      <Form />
      <BackgroundImage />
    </div>
  </React.StrictMode>
);
