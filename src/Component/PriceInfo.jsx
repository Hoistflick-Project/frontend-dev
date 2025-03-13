import React from "react";

const PriceInfo = () => {
  return (
    <div className="relative priceInfo bg-white font-Inter flex flex-col md:w-[26.5rem] border-[1px] border-[#E9EAF0] p-6 shadow-sm h-max rounded-2xl">
      <header className="border-b-[#E9EAF0] border-b-[1px] p-6 flex flex-col gap-3">
        <div className="w-full flex gap-2 items-center">
          <h2 className="text-primaryColor text-2xl">$14.00</h2>
          <p className="text-[#8C94A3]">$26.00</p>
          <span className="flex-1"></span>
          <p className="bg-[#FFEEE8] text-[#1612EE] px-3 py-2 text-sm">
            56% off
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-red-500">
          <img src="/SVGs/clock.svg" alt="" />

          <p>2 days left at this price!</p>
        </div>
      </header>
      <div className="flex flex-col gap-4 border-b-[#E9EAF0] border-b-[1px] p-6 text-[#1D2026] text-sm">
        <div className="each flex justify-center items-center gap-2">
          <img src="/SVGs/updated.svg" alt="" />
          <p>Updated on</p>
          <span className="flex-1"></span>
          <p className="text-[#6E7485]">12/04/2022</p>
        </div>
        <div className="each flex justify-center items-center gap-2">
          <img src="/SVGs/updated.svg" alt="" />
          <p>Duration</p>
          <span className="flex-1"></span>
          <p className="text-[#6E7485]">4hours:25mins</p>
        </div>
        <div className="each flex justify-center items-center gap-2">
          <img src="/SVGs/student.svg" alt="" />
          <p>Students Enrolled</p>
          <span className="flex-1"></span>
          <p className="text-[#6E7485]">69,419,618</p>
        </div>
        <div className="each flex justify-center items-center gap-2">
          <img src="/SVGs/lang.svg" alt="" />
          <p>Language</p>
          <span className="flex-1"></span>
          <p className="text-[#6E7485]">English</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b-[#E9EAF0] border-b-[1px] p-6">
        <div className="flex gap-6">
          <button className="text-primaryBlue w-full rounded-xl px-[1rem] py-[12px] bg-white font-Roboto border-[1px] border-primaryBlue">
            Add To Cart
          </button>
          <button className="text-primaryBlue w-full rounded-xl px-[1rem] py-[12px] bg-white font-Roboto border-[1px] border-primaryBlue">
            Save
          </button>
        </div>
        <button className="text-white rounded-xl px-[1rem] py-[12px] bg-primaryBlue font-Roboto">
          Enroll Now
        </button>
      </div>

      <div className="flex flex-col gap-3 border-b-[#E9EAF0] border-b-[1px] p-6 text-[#4E5566] text-sm">
        <h1 className="text-base font-medium">This course includes:</h1>
        <div className="each flex items-center gap-3">
          <img src="/SVGs/lifetime.svg" alt="" />
          <p>Lifetime access</p>
        </div>
        <div className="each flex items-center gap-3">
          <img src="/SVGs/free.svg" alt="" />
          <p>Free exercises file & downloadable resources</p>
        </div>
        <div className="each flex items-center gap-3">
          <img src="/SVGs/shareable.svg" alt="" />
          <p>Shareable certificate of completion</p>
        </div>
        <div className="each flex items-center gap-3">
          <img src="/SVGs/access.svg" alt="" />
          <p>Access on mobile , tablet and TV</p>
        </div>
        <div className="each flex items-center gap-3">
          <img src="/SVGs/onlinecourse.svg" alt="" />
          <p>100% online course</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6 text-[#4E5566] text-sm">
        <h1 className="text-base font-medium">Share this course:</h1>
        <div className="flex items-center gap-2">
          <button className="bg-[#F5F7FA] px-5 py-3.5 copy flex justify-center items-center gap-1">
            <img src="/SVGs/copy.svg" alt="" />
            <p>Copy link</p>
          </button>
          <button className="bg-[#F5F7FA] p-3.5 flex justify-center items-center">
            <img src="/SVGs/facebook.svg" alt="" />
          </button>
          <button className="bg-[#F5F7FA] p-3.5 flex justify-center items-center">
            <img src="/SVGs/x.svg" alt="" />
          </button>
          <button className="bg-[#F5F7FA] p-3.5 flex justify-center items-center">
            <img src="/SVGs/whatsapp.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;
