"use client";
import Navbar from "./NavBar";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  // Items to be scrolled infinitely
  const scrollItems = [
    "Performance",
    <FaStar className="text-[#D2F65A]" />,
    "Branding & Content Marketing that Engages",
    <FaStar className="text-[#D2F65A]" />,
    "Email Marketing and Automation for Growth",
    <FaStar className="text-[#D2F65A]" />,
    "SEO & PPC Campaigns that Deliver Results",
    <FaStar className="text-[#D2F65A]" />,
    "High-Converting Social Media Advertising",
    <FaStar className="text-[#D2F65A]" />,
  ];

  // Create duplicate array for seamless scrolling
  const fullScrollItems = [...scrollItems, ...scrollItems];

  return (
    <div className="bg-[url('/background-blue-1.png')]  w-full bg-no-repeat bg-cover h-[1050px] md:h-[969px]">
      <Navbar />
      <div className="flex min-h-[400px] w-full pt-56 items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="items-center justify-center flex flex-col mb-5">
            <div className="flex flex-row gap-2 mb-2">
              <FaStar className="text-[#D2F65A]" />
              <FaStar className="text-[#D2F65A]" />
              <FaStar className="text-[#D2F65A]" />
              <FaStar className="text-[#D2F65A]" />
              <FaStar className="text-[#D2F65A]" />
            </div>
            <Image
              src={require("../../../public/Customers-e1742031449132.png")}
              alt="trustedcustomer"
              className="h-16 w-auto mb-2"
            />
            <p className="text-white/80 font-medium font-cabin">
              Trusted by 800+ clients
            </p>
          </div>
          <div className="px-12">
            <p className="text-[55px] lg:text-[70px] font-bold tracking-wider leading-[1.3em] font-cabin text-white/90 text-center ">
              We design solutions <br /> that{" "}
              <span className="text-[#D2F65A]">drive business</span>
            </p>
          </div>
          <div>
            <p className="px-4 text-center font-cabin text-white/80 mt-3 leading-6 lg:text-xl">
              By combining innovation with a deep understanding of your
              business, we create <br className="hidden lg:block" />
              impactful digital experiences that truly make a difference.
            </p>
          </div>
          <div className="flex flex-row gap-3 bg-white/90 p-4 rounded-xl mt-8 items-center justify-center">
            <p className="font-cabin text-[#173330] font-medium">
              Let's start working
            </p>
            <div className="bg-[#173330] h-8 w-8 rounded-full flex items-center justify-center">
              <ChevronRight className="text-[#D2F65A]" />
            </div>
          </div>
        </div>
      </div>

      {/* Infinite scroll section using Framer Motion */}
      <div className="overflow-hidden w-full mt-[135px]  md:mt-48 lg:mb-0 ">
        <motion.div
          className="flex justify-center items-center"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 6,
              ease: "linear",
            },
          }}
        >
          {/* First set of items */}
          {fullScrollItems.map((item, index) => (
            <div
              key={`scroll-item-${index}`}
              className="whitespace-nowrap px-8 py-4 text-white/90 font-cabin text-lg"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
