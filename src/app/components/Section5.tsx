"use client";
import React from "react";
import { whyChooseUs } from "../data";
import WhyChooseComponent from "./WhyChooseComponent";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

function Section5() {
  return (
    <div className="bg-[url('/hero-bg-scaled.webp')] mt-14 bg-cover w-full">
      <div className="px-6 pt-16 md:px-10 lg:px-[240px] pb-20 flex flex-row gap-10">
        <div>
          <h1 className="font-cabin text-[40px] lg:text-[55px] font-bold leading-[1.2em] text-white/90">
            Why choose <br className=" lg:hidden" /> Agenzi?
          </h1>
          <div className="md:grid grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <WhyChooseComponent
                title={item.title}
                num={item.num}
                paragraph={item.paragraph}
                icon={item.icon}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:flex border rounded-xl px-6 py-8 relative backdrop-blur-lg bg-white/10 border-white/30 shadow-lg">
          <div className="flex flex-col justify-between">
            <div className="flex flex-row ">
              <h1 className="font-cabin text-[35px] font-bold leading-[1.2em] text-white/90">
                Own your <br />
                digital <br />
                presence and <br />
                make an <br />
                impact.
              </h1>
              <p className="flex items-end font-cabin text-white/90">(05)</p>
            </div>
            <Image
              src={require("../../../public/40x-768x841.png")}
              alt="trustedcustomer"
              // className="bg-contain"
            />

            <div className="hidden lg:flex flex-row gap-3 bg-white/90 p-4 rounded-xl mt-8 items-center justify-center w-full h-[60px] ">
              <p className="font-cabin text-[#173330] font-medium">
                Let's talk now
              </p>
              <div className="bg-[#173330] h-8 w-8 rounded-full flex items-center justify-center">
                <ChevronRight className="text-[#D2F65A]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
