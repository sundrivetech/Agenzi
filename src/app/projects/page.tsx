"use client";
import React from "react";
import Navbar from "../components/NavBar";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import CustomerStories from "../components/CustomerStories";
import Footer from "../components/Footer";

function Projects() {
  return (
    <div className="min-h-screen">
      <div className="bg-[url('/background-blue-1.png')] w-full bg-no-repeat bg-cover h-[1170px] md:h-[1310px] lg:h-[1150px]  ">
        <Navbar />

        {/* Top Banner Section */}
        <div className="container mx-auto pt-10 overflow-hidden ">
          <div className="flex flex-col md:flex-row items-center justify-center mb-10 mt-40 gap-4">
            <div className="flex items-center gap-3 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-lg">
              <IoCheckmarkCircleSharp className="text-white text-lg" />
              <p className="text-white font-cabin font-semibold text-nowrap">
                Digital branding experts
              </p>
            </div>
            <div className="flex items-center gap-1 ml-3">
              <FaStar className="text-[#D2F65A]" />
              <FaStar className="text-[#D2F65A]" />
              <FaStar className="text-[#D2F65A]" />
              <FaStar className="text-[#D2F65A]" />
              <FaStar className="text-[#D2F65A]" />
            </div>
            <p className="text-white hidden md:flex font-cabin font-semibold">
              Rated 5/5 on Trustpilot
            </p>
          </div>
          <div>
            <h1 className="font-cabin  text-center text-[60px] md:text-[90px] mb-10 lg:text-[95px] font-bold leading-[1.2em] text-white/90">
              Projects
            </h1>
          </div>

          {/* Project Card */}
          <div className="mx-8 bg-white rounded-xl shadow-lg overflow-hidden lg:h-[600px]">
            <div className="flex flex-col lg:flex-row">
              {/* Project Image */}
              <div className="w-full h-64 md:h-96 lg:h-[600px] relative order-last lg:order-first">
                <Image
                  src="/Skaermbillede-2023-09-04-kl.-13.08.29-2-1-e1695193881160.jpg"
                  alt="Arturel project"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Project Content */}
              <div className="w-full lg:pt-20  p-8 gap-2 flex flex-col ">
                <div className="text-sm font-medium text-gray-500 mb-2 font-cabin">
                  Branding | Paid Social
                </div>
                <h1 className="text-4xl md:text-[60px] leading-[70px] font-bold text-[#173330] mb-4 font-cabin">
                  Taking Arturel to the next level
                </h1>
                <p className="text-gray-600 mb-6 font-cabin">
                  Each day, we create practical solutions that simplify everyday
                  life. Our clients range from the public sector to private
                  businesses.
                </p>

                <button className="flex items-center justify-center gap-2 w-48 py-4 bg-[#173330] rounded-xl hover:bg-[#0f211f] transition-colors">
                  <span className="font-cabin text-white">
                    Let's start working
                  </span>
                  <div className="bg-[#173330] rounded-full">
                    <ChevronRight className="text-[#D2F65A]" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Additional Projects Section can be added here */}
        </div>
      </div>
      <CustomerStories />
      <Footer />
    </div>
  );
}

export default Projects;
