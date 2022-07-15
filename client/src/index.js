import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import Speed from "./components/Speed";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/speed" element={<Speed />}></Route>
      </Routes>
    </ScrollToTop>
  </BrowserRouter>
);

reportWebVitals();
