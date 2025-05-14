"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Section3() {
  return (
    <div className="bg-[url('/background-blue-1.png')] mt-16 pb-40 lg:pt-16 md:pb-20 w-full bg-no-repeat bg-cover ">
      <div className="px-6 flex flex-col md:flex-row gap-5 md:px-10 lg:px-24 lg:gap-28">
        <div className="md:w-[50%] lg:px-14 flex flex-col justify-between">
          <h1 className="font-cabin text-[37px] lg:text-[55px] md:text-[40px]  font-bold leading-[1.2em] text-white/90 pt-16">
            What Our Clients Have to Say About Us
          </h1>
          <div className="hidden lg:flex flex-row gap-3 bg-white/90 p-4 rounded-xl mt-8 items-center justify-center w-[200px] h-[60px] ">
            <p className="font-cabin text-[#173330] font-medium">
              Let's talk now
            </p>
            <div className="bg-[#173330] h-8 w-8 rounded-full flex items-center justify-center">
              <ChevronRight className="text-[#D2F65A]" />
            </div>
          </div>
        </div>
        <div className="mt-16 md:w-[50%]  lg:px-14">
          <Image
            src={require("../../../public/Youtube-post-community-25-e1742119071253-1024x357.png")}
            alt="numph"
            className="w-40 h-auto md:w-28 lg:w-40"
          />
          <h1 className=" mt-16 font-cabin text-white/85 text-lg font-medium md:text-xl ">
            “Agenzi has been an invaluable partner for years. Their dedication
            to quality and attention to detail make them my go-to choice for any
            future projects. If you’re looking for a studio that truly values
            their work, I highly recommend them”
          </h1>

          <div className="flex flex-row mt-8  md:mt-10 gap-3 items-center">
            <Image
              src={require("../../../public/Man2-768x584.webp")}
              alt="logo"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex flex-col ">
              <h3 className="font-cabin text-lg text-white/90 font-medium">
                Thomas Clarckson
              </h3>
              <p className="  text-white/90 font-cabin tracking-tighter text-sm md:tracking-normal font-medium">
                CEO, Agenzi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
