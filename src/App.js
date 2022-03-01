import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Page1 from "./pages/page1/Page1";

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/firstPage" element={<Page1/>} />
      </Routes>
    </div>
  );
}

export default App;
