"use client";
import React from "react";
import { brandsImage } from "../data";
import Image from "next/image";
import BrandImages from "./BrandImages";

function Brands() {
  return (
    <div className="px-4 relative pt-16">
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-cabin text-[45px] lg:text-[55px] font-bold leading-[1.2em] text-[#173330] ">
          Brands That Trust Us.
        </h1>
        <p className="mt-6 font-cabin tracking-wider leading-relaxed items-center flex text-center">
          We’ve had the pleasure of collaborating with these innovative
          <br className="hidden md:block" />
          companies.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 lg:mx-56  mt-10 ">
        {brandsImage.map((url, index) => (
          <BrandImages key={index} url={url} />
        ))}
      </div>
    </div>
  );
}

export default Brands;
