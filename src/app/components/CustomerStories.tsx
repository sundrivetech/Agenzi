import { ChevronRight } from "lucide-react";
import React from "react";
import { customerStoriesData } from "../data";
import Stories from "./Stories";

function CustomerStories() {
  return (
    <div className="px-4 mt-10 lg:px-28">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="px-2">
          <h1 className="font-cabin text-[45px] lg:text-[55px] font-bold leading-[1.2em] text-[#173330]">
            Customer stories
          </h1>
          <p className=" mt-2 font-cabin  font-normal lg:font-medium ">
            Each day, we create practical solutions that simplify everyday life.
            Our clients range from the public sector to private businesses.
          </p>
        </div>

        <div className="lg:flex flex-row gap-2 items-center hidden">
          <p className="font-cabin font-medium">Read more</p>
          <div className="bg-[#D2F65A] h-8 w-8 rounded-full flex items-center justify-center">
            <ChevronRight className="text-[#173330]" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-8 md:grid md:grid-cols-2 mt-10">
        {customerStoriesData.map((item) => (
          <Stories
            title={item.title}
            image={item.image}
            paragraph={item.paragraph}
            label={item.label}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerStories;
