import React from "react";

const Social = () => {
  return (
    <div className="my-24">
      <div className="flex flex-col">
        <div className="font-Poppins text-wild-watermelon flex justify-center items-center font-extrabold drop-shadow-lg text-4xl">
          OUR SOCIAL MEDIA
        </div>
        <div className="flex flex-row gap-24 ml-8 h-1/3 w-8/12 mt-24">
          <div className="flex flex-col items-center justify-center gap-4 ml-48">
            <img
              src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622898/wa_j0mbgv.png"
              alt="image 1"
              className="h-2/3 full cursor-pointer"
            />
            <div className="font-Poppins font-bold">085155280972</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622898/ig_jsaiyf.png"
              alt="image 1"
              className="h-2/3 full cursor-pointer"
            />
            <div className="font-Poppins font-bold">@Extanquish</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622898/tktk_skstn0.png"
              alt="image 1"
              className="h-2/3 w-full cursor-pointer"
            />
            <div className="font-Poppins font-bold">dymimi</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622898/Yt_pjycit.png"
              alt="image 1"
              className="h-2/3 full cursor-pointer"
            />
            <div className="font-Poppins font-bold">@youtube.com</div>
          </div>
        </div>
        <div className="flex flex-row mt-24">
          <img
            src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700626909/Coupon_wrjhg1.jpg"
            alt="image 1"
            className="h-[300px] pointer-events-none rounded-l-3xl"
          />
          <div className="flex flex-col bg-green-light rounded-r-3xl items-center ">
            <div className="font-Poppins font-extrabold text-white text-3xl w-9/12 text-justify mt-9 leading-loose ">
              FOLLOW US ON MEDIA SOCIAL FOR MORE PROMO
            </div>
            <div className="text-green-rift underline mt-20 mr-80 text-lg font-bold font-Poppins">
              View Available Promo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
