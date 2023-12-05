import React from "react";
import { Button } from "@material-tailwind/react";

const Menu = () => {
  return (
    <div className="text-lg mt-12 mb-12 flex justify-center items-center font-Figtree">
      <div>
        <div className="text-4xl font-extrabold flex items-start ml-14  flex-row">
          <p className="w-8/12 text-wild-watermelon drop-shadow-lg">
            MENU REKOMENDASI
          </p>
          <div className="items-end justify-end flex w-4/12 pr-12">
            <Button
              variant="gradient"
              className="rounded-xl w-6/12 py-4 mt-2"
              type
              color="light-green"
            >
              <div className="text-black font-Poppins font-extrabold">
                See More!
              </div>
            </Button>
          </div>
        </div>
        <div
          id="container-card"
          className="flex flex-col md:flex-row  gap-16 mt-16 mx-12"
        >
          <div className="flex flex-col" id="card-1">
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[200px] lg:w-[270px] rounded-t-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1694659971/IMK/nasgor1_vzcgcf.jpg"
                }
                alt="MissingImg"
              />
              <p className="absolute pt-40 font-bold text-white pl-32 text-2xl">
                #FAROVIT
              </p>
            </div>
            <div className="bg-green-light rounded-b-xl w-[270px]">
              <div className="text-black font-extrabold font-Poppins text-md ml-2 mt-2">
                Nasi Goreng Jawa
              </div>
              <div className="text-black text-xs mr-2 ml-3 mt-2 font-bold font-Poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
              <div className="text-black text-sm mt-6 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
                More Details
              </div>
            </div>
          </div>
          <div className="flex flex-col" id="card-1">
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[200px] lg:w-[270px] rounded-t-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1694659971/IMK/nasgor1_vzcgcf.jpg"
                }
                alt="MissingImg"
              />
              <p className="absolute pt-40 font-bold text-white pl-32 text-2xl">
                #FAROVIT
              </p>
            </div>
            <div className="bg-green-light rounded-b-xl w-[270px]">
              <div className="text-black font-extrabold font-Poppins text-md ml-2 mt-2">
                Nasi Goreng Jawa
              </div>
              <div className="text-black text-xs mr-2 ml-3 mt-2 font-bold font-Poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
              <div className="text-black text-sm mt-6 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
                More Details
              </div>
            </div>
          </div>
          <div className="flex flex-col" id="card-1">
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[200px] lg:w-[270px] rounded-t-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1694659971/IMK/nasgor1_vzcgcf.jpg"
                }
                alt="MissingImg"
              />
              <p className="absolute pt-40 font-bold text-white pl-32 text-2xl">
                #FAROVIT
              </p>
            </div>
            <div className="bg-green-light rounded-b-xl w-[270px]">
              <div className="text-black font-extrabold font-Poppins text-md ml-2 mt-2">
                Nasi Goreng Jawa
              </div>
              <div className="text-black text-xs mr-2 ml-3 mt-2 font-bold font-Poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
              <div className="text-black text-sm mt-6 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
                More Details
              </div>
            </div>
          </div>
          <div className="flex flex-col" id="card-1">
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[200px] lg:w-[270px] rounded-t-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1694659971/IMK/nasgor1_vzcgcf.jpg"
                }
                alt="MissingImg"
              />
              <p className="absolute pt-40 font-bold text-white pl-32 text-2xl">
                #FAROVIT
              </p>
            </div>
            <div className="bg-green-light rounded-b-xl w-[270px]">
              <div className="text-black font-extrabold font-Poppins text-md ml-2 mt-2">
                Nasi Goreng Jawa
              </div>
              <div className="text-black text-xs mr-2 ml-3 mt-2 font-bold font-Poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
              <div className="text-black text-sm mt-6 mr-4 mb-4 font-Poppins font-bold cursor-pointer items-end justify-end flex">
                More Details
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
