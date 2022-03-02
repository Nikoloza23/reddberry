import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firstPage" element={<Page1 />} />
        <Route path="/secondPage" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
