import React from "react";
import "./App.css";
import Header from "./components/header/header";
import ROUTES, { RenderRoutes } from "./components/routes/routes";
import AuthProvider from "./components/auth/auth";

import MainRoute from "./components/routes/main-route";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Header></Header>
        {/* <RenderRoutes routes={ROUTES} /> */}
        <MainRoute />
      </div>
    </AuthProvider>
  );
}

export default App;
