import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Card({
  title,
  paragraph,
  image,
  num,
}: {
  title: string;
  paragraph: string;
  image: string;
  num: string;
}) {
  return (
    <motion.div
      className="bg-[url('/hero-bg-scaled.webp')] w-full h-[360px] md:h-[380px] lg:h-[470px] p-10 rounded-md mt-5 bg-cover bg-no-repeat z-10 "
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1], // This is a smooth ease-in-out curve
        },
      }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      <div className="flex flex-col z-10">
        <div className="mb-[30%]">
          <div className="flex flex-row gap-3 items-baseline">
            <h1 className="font-cabin text-3xl text-white/90 font-medium lg:font-semibold">
              {title}
            </h1>
            <p className="text-white/90">({num})</p>
          </div>

          <div className="lg:max-w-[60%] ">
            <p className="text-white/60 mt-4 text-sm tracking-wide lg:text-[15px] lg:leading-loose lg:font-medium">
              {paragraph}
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="font-cabin text-white/80 font-medium">
              Tell me more!
            </p>
          </div>

          <div>
            <div className="bg-white h-20 w-11 rounded-full flex items-center justify-center">
              <div className="bg-green-900 rounded-full">
                <ChevronRight className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={image}
        alt="card image"
        className="w-[200px] lg:w-[250px] h-auto relative bottom-52 left-32 lg:left-[55%] lg:bottom-64 z-0 opacity-70 "
      />
    </motion.div>
  );
}

export default Card;
