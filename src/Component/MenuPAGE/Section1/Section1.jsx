import React from "react";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();

  const redirectToDrinks = () => {
    navigate("/drinks");
  };
  const redirectToSideDish = () => {
    navigate("/sidedish");
  };

  return (
    <div className="mb-12 justify-items-center items-center justify-center flex flex-col">
      <div className="mx-40 flex flex-col items-center justify-center">
        <div className="flex flex-row mt-24">
          <img
            src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700630551/noodle_obhew1.jpg"
            alt="image 1"
            className="h-[300px] pointer-events-none rounded-l-3xl"
          />
          <div className="flex flex-col bg-green-light rounded-r-3xl items-center ">
            <div className="font-Poppins font-extrabold text-green-rift text-3xl w-10/12 text-justify mt-9 leading-loose ">
              <p className="">
                <span className="font-bold">Delicious Meal</span>{" "}
                <span className="font-medium">Will Be Served Here</span>
              </p>
            </div>
            <div className="text-green-rift underline mt-20 mr-80 text-lg font-bold font-Poppins">
              SIMPLSHOTZ
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap mt-20 gap-20 justify-center">
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
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1700627765/rendang3_tbtr2f.jpg"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Rendang
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Daging rendang yang empuk dengan bumbu rendang yang khas
                sumatera membuat menu ini paling nikmat disantap bersama
                keluarga{" "}
              </div>
              <div className="text-green-rift text-sm mt-9 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
                More Details
              </div>
            </div>
          </div>
          <div
            className="flex flex-col border-black border-2 rounded-2xl"
            id="card-1"
          >
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[270px] lg:w-[340px] rounded-t-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701770663/sate1_jmtbd6.jpg"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Sate
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Sate daging isi 10 tusuk per porsi nya, terdapat 3 pilihan
                daging (Ayam / Sapi / Kambing){" "}
              </div>
              <div className="text-green-rift text-sm mt-9 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
                More Details
              </div>
            </div>
          </div>
          <div
            className="flex flex-col border-black border-2 rounded-2xl"
            id="card-1"
          >
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[270px] lg:w-[340px] rounded-t-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701770677/soto3_w6ygqw.jpg"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Soto Ayam
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Soto Ayam dengan kuah yang segar dan tentunya disajikan hangat,
                lengkap dengan 1 porsi nasi hangat. Bisa pilih untuk isi ayam
                nya (Daging saja / Kulit Saja / Daging + kulit){" "}
              </div>
              <div className="text-green-rift text-sm mt-7 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
                More Details
              </div>
            </div>
          </div>
          <div
            className="flex flex-col border-black border-2 rounded-2xl"
            id="card-1"
          >
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[270px] lg:w-[340px] rounded-t-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701770683/bakso3_c4wjz3.jpg"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Bakso Malang
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Bakso dengan bumbu khas malang dengan isi yang banyak, ada 3
                pentol kecil, 1 pentol besar, 1 pentol kasar + isi telur puyuh,
                gorengan dan 1 siomay{" "}
              </div>
              <div className="text-green-rift text-sm mt-7 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
                More Details
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 font-extrabold text-xl ">And we will add More!</div>
      <div className="mt-14 flex flex-row gap-12 text-white font-bold text-3xl">
        <button
          className="bg-orange-cust rounded-lg py-4 px-8"
          onClick={redirectToDrinks}
        >
          Drinks Menu
        </button>
        <button
          className="bg-violet-cust rounded-lg py-4 px-12"
          onClick={redirectToSideDish}
        >
          Side Dish
        </button>
      </div>
    </div>
  );
};

export default Section1;
