"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import Card from "./Card";
import { cardData } from "../data";
import { motion, useScroll, useTransform } from "framer-motion";

function Section1() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // For the left side - sticky then scroll
  const leftY = useTransform(
    scrollYProgress,
    [0, 0.8, 1], // At 80% scroll, start moving the left side
    ["0%", "0%", "-100%"]
  );

  return (
    <section
      ref={sectionRef}
      className="pt-20 px-4 flex flex-col md:flex-row gap-10 md:gap-20 lg:px-28 relative mb-0 bg-[#F8F9FA] "
    >
      {/* left - sticky container */}
      <motion.div
        className="md:w-[70%] lg:w-[50%] md:mt-20 md:h-auto md:sticky md:top-20 sticky"
        style={{ y: leftY }}
      >
        {/* logo */}
        <Image
          src={require("../../../public/logooo.svg")}
          alt="logo"
          className="w-auto h-6 mb-8 hidden lg:block"
        />
        <h1 className="font-cabin text-[38px] font-bold leading-[1.2em] text-[#173330]">
          Digital solutions that make an impact
        </h1>
        <p className="mt-6 font-cabin tracking-wider leading-relaxed">
          Effective digital solutions aren't built in isolation. Success comes
          from a seamless collaboration between strategy, creativity, and
          technology. At Agenzi, we develop tailored digital solutions that
          drive engagement, enhance user experiences, and deliver measurable
          results. By combining innovation with a deep understanding of your
          business, we create impactful digital experiences that truly make a
          difference.
        </p>

        <div className="flex flex-row mt-8 gap-3 items-center">
          <Image
            src={require("../../../public/man111-295x300.webp")}
            alt="logo"
            className="w-auto h-16 rounded-full"
          />
          <div className="flex flex-col ">
            <h3 className="font-semibold font-cabin text-lg">Elias Norden</h3>
            <p className="font-cabin tracking-tighter text-sm md:tracking-normal">
              CEO & Head Of Design
            </p>
          </div>
        </div>
        <div className="w-[230px] h-auto py-4 bg-[#173330] rounded-xl mt-8 ">
          <div className="flex flex-row justify-center items-center">
            <p className="font-cabin text-white/90">Let's start working</p>
            <div className="bg-[#173330] rounded-full flex items-center justify-center">
              <ChevronRight className="text-[#D2F65A]" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* right - scrolling content */}
      <div className=" ">
        <motion.div
          className="flex flex-col gap-4 py-20"
          //   style={{
          //     y: useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]),
          //   }}
        >
          {cardData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              num={item.num}
              paragraph={item.paragraph}
              image={item.image}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Section1;
