import React from "react";
import * as FaIcons from "react-icons/fa";
import * as Io5Icons from "react-icons/io5";

interface WhyChooseComponentProps {
  icon: string;
  num: string;
  title: string;
  paragraph: string;
}

function WhyChooseComponent({
  icon = "FaRegHandPaper",
  num = "01",
  title = "Default Title",
  paragraph = "Default paragraph text",
}: WhyChooseComponentProps) {
  // Combine all icon libraries
  const AllIcons = {
    ...FaIcons,
    ...Io5Icons,
  };

  // Get the specific icon component
  const IconComponent = AllIcons[icon as keyof typeof AllIcons];

  return (
    <div className="mt-8 mb-10">
      <div className="bg-white/90 w-12 h-12 rounded-xl flex items-center justify-center">
        {IconComponent &&
          React.createElement(IconComponent, {
            className: "text-[#173330] h-9 w-9",
          })}
      </div>

      <div className="flex flex-row gap-3 items-baseline mt-6 md:mt-7 lg:mt-10">
        <h1 className="font-cabin text-3xl text-white/90 font-medium lg:font-semibold">
          {title}
        </h1>
        <p className="text-white/90 font-cabin">({num})</p>
      </div>
      <p className="text-white/60 mt-4 md:mt-6 text-sm tracking-wide lg:text-[15px] lg:leading-loose lg:font-medium">
        {paragraph}
      </p>
    </div>
  );
}

export default WhyChooseComponent;
