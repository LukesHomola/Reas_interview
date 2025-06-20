import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/index.css";
import "./css/colors.css";

import Header from "./components/header";
import Home from "./components/home";
import OfferForm from "./components/OfferForm";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chci-nabidku" element={<OfferForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
