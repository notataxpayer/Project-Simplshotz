import React from "react";
import { Button } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";

const Homepage = () => {
  return (
    <div className="mt-12 mb-12 font-Figtree justify-center flex font-bold text-2xl bg-cover">
      <div id="container" className="flex flex-row">
        <div className="lg:mx-12 md:py-24 lg:pb-48  flex flex-col items-center lg:items-start lg:w">
          <div className="leading-normal lg:pl-14 text-4xl text-center text-black lg:text-left lg:text-6xl font-bold lg:mb-6 mb-12 md:mb-24 pb-2 md:text-5xl z-20">
            SIMPLSHOTZ
            {/* THE <span className="text-deep-orange-600">TRUE TASTE</span>
            <br />
            OF INDONESIAN
            <br />
            <span className="text-deep-orange-600">FOOD</span> */}
          </div>
          <div className="z-20 mt-52 lg:mt-0 py-12 md:py-24 md:mx-12 lg:mx-0 md:mb-[-100px]  bg-cover md:bg-cover  items-center justify-center lg:items-start lg:py-0 lg:bg-none flex flex-col lg:flex-none">
            <div className="text-justify text-black pb-6 font-bold lg:w-8/12 text-sm sm:text-base px-12 md:px-24 lg:px-0 lg:ml-16 lg:mt-0 lg:text-justify md:text-center md:text-xl md:pt-4 lg:text-base">
              Cinta pada Kesederhanaan, Cinta pada Rasa di Simpl & Shotz. Cinta
              kami pada makanan sederhana mencerminkan cinta kami pada rasa yang
              autentik. Setiap hidangan di Simpl & Shotz adalah perpaduan indah
              antara kesederhanaan dan kelezatan.
            </div>
            <div className="ml-16 font-extrabold font-Poppins">
              FOLLOW US ON
            </div>
            <div className="flex flex-row ml-16 mt-4 gap-4">
              <img
                src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622898/wa_j0mbgv.png"
                alt="image 1"
                className="h-full w-full cursor-pointer"
              />
              <img
                src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622898/ig_jsaiyf.png"
                alt="image 1"
                className="h-full w-full cursor-pointer"
              />
              <img
                src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622898/tktk_skstn0.png"
                alt="image 1"
                className="h-full w-full cursor-pointer"
              />
              <img
                src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622898/Yt_pjycit.png"
                alt="image 1"
                className="h-full w-full cursor-pointer"
              />
            </div>
            <div className="mt-4 ml-16 font-extrabold font-Poppins flex flex-row"></div>
            <Button
              variant="gradient"
              className="rounded-xl w-1/4 py-4 mt-2 ml-14"
              type
              color="light-green"
            >
              <div className="text-black font-Poppins font-extrabold">
                Jelajahi !
              </div>
            </Button>
          </div>
        </div>
        <div className="mt-20 mr-12">
          <Carousel className="rounded-xl h-[400px] w-full">
            <img
              src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622143/1_l6ayzl.jpg"
              alt="image 1"
              className="h-full w-full"
            />
            <img
              src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700627846/pexels-bishop-tamrakar-3926124_vupyik.jpg"
              alt="image 2"
              className="h-full w-full"
            />
            <img
              src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1694662941/IMK/024930300_1589347291-masakan-indonesia-featured-212892_t8ws28.jpg"
              alt="image 3"
              className="h-full w-full"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
