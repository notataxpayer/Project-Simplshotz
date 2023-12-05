import React from "react";
import { useNavigate } from "react-router-dom";

const SideDish = () => {
  const navigate = useNavigate();

  const redirectToFoods = () => {
    navigate("/foods");
  };
  const redirectToDrinks = () => {
    navigate("/drinks");
  };

  return (
    <div className="mb-12 justify-items-center items-center justify-center flex flex-col">
      <div className="mx-40 flex flex-col items-center justify-center">
        <div className="flex flex-row mt-24 ml-24">
          <img
            src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1701771067/download_17_ynso6n.png"
            alt="image 1"
            className="h-[300px] pointer-events-none rounded-l-3xl"
          />
          <div className="flex flex-col bg-green-light rounded-r-3xl items-center ">
            <div className="font-Poppins font-extrabold text-green-rift text-3xl w-10/12 text-justify mt-9 leading-loose ">
              <p className="">
                <span className="font-bold">Surprising Side Dish</span>{" "}
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
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701771148/download_13_m28e7q.png"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Sambal
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Tambah sambal untuk menjadi teman makan mu! bisa request tingkat
                kepedasan dengan 3 level (Biasa / Banget / Sangat Pedas){" "}
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
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701771148/download_14_sleezo.png"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Krupuk Udang
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Nambah krupuk udang nya untuk menjadi kriuk kriuk saat kamu
                makan! disajikan juga dengan tambahan saos sambal!{" "}
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
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701771148/download_15_yopkts.png"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Urap
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Sayur urap cocok dimakan disaat cuaca sedang panas! disajikan
                dengan berbagai sayur dicampur dan diberi parutan kelapa
                diatasnya{" "}
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
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701771149/download_18_t9g7bq.png"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Perkedel Kentang
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Perkedel kentang dibuat secara homemade melalui kentang lokal
                dengan menggunakan bumbu khas simpleshotz loh!{" "}
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
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701771148/download_16_baticn.png"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Sayur Asem
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Sayuran yang berisi kacang panjang, manisa, jagung dan daging
                ayam ini seger banget! bisa request untuk tambah isiannya (Ayam
                / Kulit / Campur){" "}
              </div>
              <div className="text-green-rift text-sm mt-5 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
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
          onClick={redirectToFoods}
        >
          Foods Menu
        </button>
        <button
          className="bg-violet-cust rounded-lg py-4 px-12"
          onClick={redirectToDrinks}
        >
          Drinks Dish
        </button>
      </div>
    </div>
  );
};

export default SideDish;
