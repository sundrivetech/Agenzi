"use client";

function Stories({
  title,
  paragraph,
  image,
  label,
}: {
  title: string;
  paragraph: string;
  image: string;
  label: string[];
}) {
  return (
    <div>
      <div
        className=" relative  min-h[500px] lg:min-h-[500px] rounded-xl px-5 lg:px-12 py-[60px] flex flex-col  bg-cover bg-center  "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="z-10">
          <h1 className="font-cabin text-[35px] font-medium text-white/90">
            {title}
          </h1>
          <div className="flex-row flex gap-3 mt-4 lg:mt-8">
            {label.map((tag, index) => (
              <p
                key={index}
                className="bg-white rounded-sm px-5 py-1.5 text-[12px] font-semibold font-cabin text-center  flex items-center"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <p className="text-white/90 font-medium font-cabin mt-6 z-10 lg:mt-16">
          {paragraph}
        </p>

        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
      </div>
    </div>
  );
}

export default Stories;
