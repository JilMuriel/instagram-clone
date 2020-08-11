import React from "react";
import "./App.css";

import Header from "./components/header/header";
import Post from "./components/post/post";

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Header />
      {/* POST */}
      {/* SIDENAV */}
      <Post />
    </div>
  );
}

export default App;
