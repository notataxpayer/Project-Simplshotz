import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const redirectToFoods = () => {
    navigate("/foods");
  };
  const redirectToDrinks = () => {
    navigate("/drinks");
  };
  const redirectToSideDish = () => {
    navigate("/sidedish");
  };

  return (
    <div className="flex justify-center flex-col items-center font-Poppins">
      <div className="flex flex-row bg-black py-3 text-white w-full justify-center items-center gap-12">
        <button onClick={redirectToFoods}>🍲 Foods</button>

        <button onClick={redirectToDrinks}>🍹 Drinks</button>

        <button onClick={redirectToSideDish}>🥟 Side Dish</button>
      </div>
      <div className="flex flex-row my-12 gap-12">
        <div
          className="flex flex-col border-black border-2 rounded-2xl"
          id="card-1"
        >
          <div className="flex">
            <img
              className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[270px] lg:w-[340px] rounded-t-xl flex "
              src={
                "https://res.cloudinary.com/dnyrrcacd/image/upload/v1694659971/IMK/nasgor1_vzcgcf.jpg"
              }
              alt="MissingImg"
            />
            {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
          </div>
          <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
            <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
              Nasi Goreng Jawa
            </div>
            <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
              Nasi Goreng enak dengan bumbu khas jawa yang nendang tersedia
              dengan 3 tingkat kepedasan (Tidak / Lumayan / Banget){" "}
            </div>
            <div className="text-green-rift text-sm mt-9 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
              More Details
            </div>
          </div>
        </div>
        <div
          className="flex flex-col border-black border-2 rounded-2xl"
          id="card-2"
        >
          <div className="flex">
            <img
              className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[270px] lg:w-[340px] rounded-t-xl flex "
              src={
                "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701771292/coffe_ehegvv.jpg"
              }
              alt="MissingImg"
            />
            {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
          </div>
          <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
            <div className="text-black text-xl font-extrabold font-Poppins text-md ml-2 mt-5">
              Kopi Robusta
            </div>
            <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
              Kopi robusta, sebuah kopi yang nikmat untuk menemani hari malam mu
              yang dingin{" "}
            </div>
            <div className="text-green-rift text-sm mt-9 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
              More Details
            </div>
          </div>
        </div>
        <div
          className="flex flex-col border-black border-2 rounded-2xl"
          id="card-3"
        >
          <div className="flex">
            <img
              className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[270px] lg:w-[340px] rounded-t-xl flex "
              src={
                "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701771296/pooding_xy8ovb.jpg"
              }
              alt="MissingImg"
            />
            {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
          </div>
          <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
            <div className="text-black text-xl font-extrabold font-Poppins text-md ml-2 mt-5">
              Choco Pudding
            </div>
            <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
              Choco pudding dengan coklat asli yang khas dan disirima dengan fla
              rasa vanilla diatasnya. Bisa tambah addons ya (Misis / Cookies /
              Oreo / Tidak ada){" "}
            </div>
            <div className="text-green-rift text-sm mt-9 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
              More Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
