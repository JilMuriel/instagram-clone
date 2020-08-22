import React from "react";
import "./App.css";
import Header from "./components/header/header";
import ROUTES, { RenderRoutes } from "./components/routes/routes";

function App() {
  return (
    <>
      <div className="app">
        <Header>
          <RenderRoutes routes={ROUTES} />
        </Header>
      </div>
    </>
  );
}

export default App;
