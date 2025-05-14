"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Section6() {
  return (
    <div className="px-4">
      <div className="flex flex-col justify-center items-center mt-28">
        <h1 className="font-cabin text-[37px] lg:text-[55px] md:text-[40px]  font-bold text-[#173330] text-center">
          Is it time to elevate your <br className="hidden lg:block" />
          project to the next level?
        </h1>
        <p className="font-cabin  text-center">
          Let’s elevate your project—get in touch and discover how we can make
          it happen.
        </p>
        <div className="w-[230px] h-auto py-4 bg-[#173330] rounded-xl mt-8 ">
          <div className="flex flex-row justify-center items-center">
            <p className="font-cabin text-white/90">Let's start working</p>
            <div className="bg-[#173330] rounded-full flex items-center justify-center">
              <ChevronRight className="text-[#D2F65A]" />
            </div>
          </div>
        </div>

        <div className="items-center justify-center flex flex-col mb-5 mt-5">
          <p className="text-[#173330] font-medium font-cabin">
            Trusted by 800+ clients
          </p>
          <Image
            src={require("../../../public/Customers-e1742031449132.png")}
            alt="trustedcustomer"
            className=" h-16 lg:h-10 w-auto mb-2 mt-1 "
          />
        </div>
      </div>
    </div>
  );
}

export default Section6;
