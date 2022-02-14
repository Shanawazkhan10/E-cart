import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Screens/HomePage/Homepage";
import Header from "./Component/Header/Header";
import Carts from "./Screens/Cart/Carts";

function App() {
  return (
    <div className="App">
      {/* use of react router dom */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Carts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
