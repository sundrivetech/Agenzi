"use client";
import Image from "next/image";
import { IoLogoInstagram, IoLogoPinterest } from "react-icons/io5";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function Footer() {
  return (
    <div className=" px-4 lg:px-36">
      <div className="bg-[url('/hero-bg-scaled.webp')] mt-14 bg-cover w-full pt-10 px-10 rounded-xl">
        <div className="flex flex-col gap-40">
          <div className="flex md:justify-between  justify-center items-center gap-6 flex-col md:flex-row ">
            <div className="flex gap-20 items-center justify-center ">
              <Image
                src={require("../../../public/logocolor.svg")}
                alt="logo"
                className="w-auto h-9"
              />
              <div className=" hidden gap-3 lg:flex flex-row justify-center items-center backdrop-blur-sm bg-white/10  px-2 py-2 rounded-lg">
                <IoCheckmarkCircleSharp className="text-white/90" />
                <p className="text-white/90 font-cabin font-semibold">
                  All out members are certified professionals
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-1 ">
              <div className="bg-white w-8 h-8 rounded-full items-center justify-center flex">
                <IoLogoInstagram className="w-auto h-5" />
              </div>
              <div className="bg-white w-8 h-8 rounded-full items-center justify-center flex">
                <IoLogoPinterest className="w-auto h-5" />
              </div>
            </div>
          </div>
          <div className="">
            <hr className="opacity-40" />
            <div className="flex flex-row justify-between mt-5 mb-5">
              <div className="">
                <ul className="flex-row flex gap-3 font-cabin text-white/90">
                  <li className="font-cabin font-medium">
                    <a href="">Home</a>
                  </li>
                  <li className="font-cabin font-medium">
                    <a href="">Services</a>
                  </li>
                  <li className="font-cabin font-medium">
                    <a href="">Projects</a>
                  </li>
                  <li className="font-cabin font-medium">
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="hidden md:flex flex-row justify-center items-center gap-4">
                <p className="text-white/90 font-cabin font-medium">
                  Grow your business with us
                </p>
                <div className="  h-4 w-px  bg-white opacity-40"></div>
                {/* <hr className="border-t border-gray-300" /> */}
                <p className="text-white/90 font-cabin font-medium">
                  <a href="#">Contact</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-gray-600/40 text-md mt-5 mb-5 md:text-sm font-cabin ">
          Agenzi | UX & Design | inspirtion from juno Studio
        </p>
      </div>
    </div>
  );
}

export default Footer;
