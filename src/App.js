import React from "react";
import "./App.css";
import Header from "./components/header/header";
import ROUTES, { RenderRoutes } from "./components/routes/routes";

function App() {
  return (
    <>
      <div className="app">
        <RenderRoutes routes={ROUTES} />
      </div>
    </>
  );
}

export default App;
