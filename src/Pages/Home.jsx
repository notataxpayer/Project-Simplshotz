import React from "react";
import Menu from "../Component/Menu/Menu";
import Homepage from "../Component/Homepage/Homepage";
import Social from "../Component/Social/Social";

const Home = () => {
  return (
    <div className="flex justify-center flex-col items-center font-Poppins">
      <Homepage />
      <Menu />
      <Social />
    </div>
  );
};

export default Home;
