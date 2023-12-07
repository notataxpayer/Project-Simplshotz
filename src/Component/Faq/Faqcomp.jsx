import React from "react";

const Faqcomp = () => {
  return (
    <div className="my-24">
      <div className="flex flex-col ">
        <div className="mt-4 ml-48 font-bold text-2xl">PENAWARAN TERBAIK</div>
        <div className="mt-12 flex flex-row flex-wrap gap-16 justify-center">
          <div className="flex flex-col rounded-2xl" id="card-1">
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[320px] lg:w-[340px] rounded-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701950719/Media_cj9kpc.png"
                }
                alt="MissingImg"
              />
            </div>
            <div className=" rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-normal text-xl font-Poppins text-md  mt-7">
                Paket Hemat "Rasa Nusantara"
              </div>
              <div className="text-black text-sm mt-16 mr-4 mb-4 font-Poppins font-normal cursor-pointer flex">
                More Details
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl" id="card-2">
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[320px] lg:w-[340px] rounded-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701950717/Media-1_gucn6m.png"
                }
                alt="MissingImg"
              />
            </div>
            <div className=" rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-normal text-xl font-Poppins text-md  mt-7">
                Diskon Hari Spesial "Kuliner Indonesia"
              </div>
              <div className="text-black text-sm mt-9 mr-4 mb-4 font-Poppins font-normal cursor-pointer flex">
                More Details
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl" id="card-3">
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[320px] lg:w-[340px] rounded-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701950718/Media-2_rs6h01.png"
                }
                alt="MissingImg"
              />
            </div>
            <div className="rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-normal text-xl font-Poppins text-md  mt-7">
                Beli Satu Gratis Satu "Kopi Tubruk Duo"
              </div>
              <div className="text-black text-sm mt-9 mr-4 mb-4 font-Poppins font-normal cursor-pointer flex">
                More Details
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl" id="card-4">
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[320px] lg:w-[340px] rounded-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701950723/Media-3_bsdevi.png"
                }
                alt="MissingImg"
              />
            </div>
            <div className=" rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-normal text-xl font-Poppins text-md  mt-7">
                Happy Hour "Es Campur Seger"
              </div>
              <div className="text-black text-sm mt-16 mr-4 mb-4 font-Poppins font-normal cursor-pointer flex">
                More Details
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl" id="card-5">
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[320px] lg:w-[340px] rounded-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701950723/Media-4_tvwxvi.png"
                }
                alt="MissingImg"
              />
            </div>
            <div className=" rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-normal text-xl font-Poppins text-md  mt-7">
                Merchandise untuk Pemesanan Online "Jelajahi Nusantara"
              </div>
              <div className="text-black text-sm mt-9 mr-4 mb-4 font-Poppins font-normal cursor-pointer flex">
                More Details
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl" id="card-6">
            <div className="flex">
              <img
                className="mx-auto pointer-events-none h-[150px] w-[200px] lg:h-[320px] lg:w-[340px] rounded-xl flex "
                src={
                  "https://res.cloudinary.com/dnyrrcacd/image/upload/v1701950716/Media-5_hmeqnc.png"
                }
                alt="MissingImg"
              />
            </div>
            <div className="rounded-b-2xl w-[340px] h-[180px]">
              <div className="text-black font-normal text-xl font-Poppins text-md  mt-7">
                Loyalty Card "Rasa Indonesia Setiap Langkah"
              </div>
              <div className="text-black text-sm mt-9 mr-4 mb-4 font-Poppins font-normal cursor-pointer flex">
                More Details
              </div>
            </div>
          </div>
        </div>
        <div className="my-12 text-2xl flex mx-auto font-bold">
          And We Will Add More!
        </div>
      </div>
    </div>
  );
};

export default Faqcomp;
