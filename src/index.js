/*
 * Created Date: Monday, January 31st 2022, 12:16:50 am
 * Author: Hichem
 * Master 2 GL Groupe 1
 * Copyright (c) 2022 Aitouakli Hichem
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Birds from "./pages/Birds";
import Food from "./pages/Food";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const footerStyle = {
  width: "100%",
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/Food" element={<Food />} />
      </Routes>
      <div style={footerStyle}>©Aitouakli Hichem, Groupe 1 Master 2 GL, 2022</div>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
