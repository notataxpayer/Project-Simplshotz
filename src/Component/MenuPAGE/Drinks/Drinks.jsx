import React from "react";
import { useNavigate } from "react-router-dom";

const Drinks = () => {
  const navigate = useNavigate();

  const redirectToFoods = () => {
    navigate("/foods");
  };
  const redirectToSideDish = () => {
    navigate("/sidedish");
  };

  return (
    <div className="mb-12 justify-items-center items-center justify-center flex flex-col">
      <div className="mx-40 flex flex-col items-center justify-center">
        <div className="flex flex-row mt-24 ml-24">
          <img
            src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1701770784/download_12_iqcgll.png"
            alt="image 1"
            className="h-[300px] pointer-events-none rounded-l-3xl"
          />
          <div className="flex flex-col bg-green-light rounded-r-3xl items-center ">
            <div className="font-Poppins font-extrabold text-green-rift text-3xl w-10/12 text-justify mt-9 leading-loose ">
              <p className="">
                <span className="font-bold">Tantizing Drinks</span>{" "}
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
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701770858/download_6_enxrf2.png"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Teh Tarik
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Teh tarik yang nikmat bisa disajikan cold / hot dengan request
                gula juga!.{" "}
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
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701770858/download_7_ml6dkj.png"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Kopi Tubruk
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Kopi tubruk yang nikmat untuk menjadi teman sejati nongkrong
                malam kamu!{" "}
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
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701770858/download_8_djo8yt.png"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Es Cendol
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Es cendol dengan isian yang banyak disajikan pastinya cold
                membuat suasana panas menjadi adem seketika{" "}
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
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701770858/download_9_qba4pg.png"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Sekoteng
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                minuman khas Jawa Tengah yang terbuat dari air jahe yang biasa
                dihidangkan dalam keadaan panas dan dikonsumsi pada malam hari.{" "}
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
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[270px] lg:w-[340px] rounded-t-xl flex rounded-b-none"
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701770859/download_10_k66w7q.png"
                }
                alt="MissingImg"
              />
              {/* <p className="absolute pt-56 font-bold text-white pl-52 text-2xl">
              #FAROVIT
            </p> */}
            </div>
            <div className="bg-white rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-extrabold text-xl font-Poppins text-md ml-2 mt-5">
                Es Campur
              </div>
              <div className="text-black text-xs mr-2 ml-5 mt-4 font-bold font-Poppins">
                Es campur yang segar ini bisa request untuk disajikan dalam
                gelas besar ataupun dalam mangkok! bisa request es nya mau
                seberapa loh!{" "}
              </div>
              <div className="text-green-rift text-sm mt-9 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
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
          onClick={redirectToSideDish}
        >
          Side Dish
        </button>
      </div>
    </div>
  );
};

export default Drinks;
