import React from "react";

const Footer = () => {
  return (
    <div className=" bg-green-light">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center items-center my-8">
          <img
            src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700628145/logo_fxzdnb.png"
            alt="image 1"
            className="h-2/3 full cursor-pointer"
          />
          <div className="font-Poppins text-5xl ml-4 text-black font-extrabold">
            SIMPLSHOTZ
          </div>
        </div>
        <div className="text-black">
          <hr />
        </div>
        <div className="flex flex-row my-12 gap-8 justify-center items-center mx-auto">
          <img
            src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622898/wa_j0mbgv.png"
            alt="image 1"
            className="h-[40px] w-[40px] cursor-pointer"
          />
          <img
            src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622898/ig_jsaiyf.png"
            alt="image 1"
            className="h-[40px] w-[40px] cursor-pointer"
          />
          <img
            src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622898/tktk_skstn0.png"
            alt="image 1"
            className="h-[40px] w-[40px] cursor-pointer"
          />
          <img
            src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1700622898/Yt_pjycit.png"
            alt="image 1"
            className="h-[40px] w-[40px] cursor-pointer"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-6 mb-12">
          <div className="font-bold font-Poppins text-black">
            © 2023, Kelompok 2 - imk 2023
          </div>
          <div className="font-bold font-Poppins text-black">
            Privacy — Terms
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
