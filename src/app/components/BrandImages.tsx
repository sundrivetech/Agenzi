"use client";
import Image from "next/image";
import React from "react";

function BrandImages({ url }: { url: string }) {
  return (
    <div className=" border lg:px-6 border-gray-200 rounded-lg   items-center justify-center flex">
      <Image src={url} alt="brand" />
    </div>
  );
}

export default BrandImages;
