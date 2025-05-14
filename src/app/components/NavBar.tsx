"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div>
      {/* Dark backdrop when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      <nav className="fixed z-50 transition-all top-4 left-4 right-4 ">
        <div className=" bg-white rounded-xl ">
          {/* Desktop navigation */}
          <div
            className="hidden lg:flex flex-row justify-between items-center h-[72px]"
            style={{ padding: 19 }}
          >
            <div className="">
              <ul className="flex-row flex gap-3 font-cabin">
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
            <div>
              <Image
                src={require("../../../public/logooo.svg")}
                alt="logo"
                className="w-full h-10"
              />
            </div>
            <div className="flex flex-row gap-3 items-center font-cabin">
              <p className="font-cabin font-medium ">
                <a href="" className="text-[#173330]">
                  Open for work
                </a>
              </p>
              <span
                className="flex flex-row gap-2 bg-[#173330] rounded-lg items-center"
                style={{ padding: 15 }}
              >
                <p className="text-white font-cabin font-medium">Contact</p>
                <div className="bg-[#DAF42E] h-8 w-8 rounded-full flex items-center justify-center">
                  <ChevronRight />
                </div>
              </span>
            </div>
          </div>
          {/* end of desktop navigation */}

          {/* mobile nav */}
          <div
            className="lg:hidden flex items-center justify-between h-15"
            style={{ padding: 15, paddingLeft: 20, paddingRight: 20 }}
          >
            <Image
              src={require("../../../public/logooo.svg")}
              alt="logo"
              className="w-[75px] h-[20px] md:w-[150px] md:h-[40px] "
            />
            <button
              onClick={toggleMenu}
              className="text-gray-500  focus:outline-none z-50"
            >
              {isMenuOpen ? (
                <X className="lg:h-8 lg:w-8 w-6 h-6" />
              ) : (
                <Menu className="md:h-8 md:w-8 w-6 h-6" />
              )}
            </button>
          </div>
          {/* end of mobile navigation */}

          <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-xl">
              <div
                className="border-t border-gray-200 "
                style={{ marginLeft: 20 }}
              >
                <div className="flex flex-row mt-3">
                  <ChevronRight />
                  <p>Services</p>
                </div>

                <ul style={{ marginLeft: 35 }} className="">
                  <li className="mb-3 mt-3">
                    <a href="#">UX & Design</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Subpage 2</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Subpage 3</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Subpage 4</a>
                  </li>
                </ul>
                <p className="mt-4">
                  <a href="#">Projects</a>
                </p>
                <p className=" mt-4 mb-3">
                  {" "}
                  <a href="#">News</a>
                </p>
              </div>
              <div className="flex items-center justify-around pt-4 border-t border-gray-200">
                <span
                  className="flex flex-row gap-2 bg-[#173330] rounded-lg items-center w-full justify-between"
                  style={{
                    padding: 15,
                    margin: 20,
                    paddingLeft: 25,
                    paddingRight: 25,
                  }}
                >
                  <p className="text-white">Reach out</p>
                  <div className="bg-[#DAF42E] h-8 w-8 rounded-full flex items-center justify-center">
                    <ChevronRight />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
