import React from "react";
import { Nav } from "./Component/Navbar";
// import { Homepage } from './Component/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import MenuHome from "../src/Component/Menu/Menu";
import About from "./Pages/About";
import Reservasi from "../src/Component/Reservasi/Reserve/Reservasi";
import Faq from "./Pages/Faq";
import Foods from "../src/Component/MenuPAGE/Section1/Section1";
import Drinks from "../src/Component/MenuPAGE/Drinks/Drinks";
import SideDish from "../src/Component/MenuPAGE/SideDish/SideDish";
import NoPagesFound from "./Pages/err404";
import { Footer } from "./Component/Footer";

const App = () => {
  return (
    <div className="">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" index element={<Home />} />
          <Route path="/Menu" index element={<Menu />} />
          <Route path="/Menu2" index element={<MenuHome />} />
          <Route path="/About" index element={<About />} />
          <Route path="/Faq" index element={<Faq />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/reservasi" element={<Reservasi />} />
          <Route path="/sidedish" element={<SideDish />} />
          <Route path="*" index element={<NoPagesFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
