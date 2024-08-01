"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Navlinks } from "../utils/navroutes";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        setIsVisible(false);
      } else {
        // If scrolling up, show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className=" mx-2">
      
      {/* Navbar */}
      <header
        className={` shadow-lg bg-black/85 fixed w-full top-0 left-0 rounded-3xl transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-2 border-2 rounded-2xl">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-2xl text-tech-blue font-bold" href="/">
                {/* Logo */}
                <Image
                src='/assets/tech-trek-logo.jpg'
                height={60}
                width={60}
                alt='Logo'
                className=" rounded-full"
                />
              </Link>
            </div>
            
            {/* Navlinks */}
            <div className={`flex md:flex-row flex-col items-center md:pb-0 absolute py-5 md:py-0 md:static bg-black md:bg-transparent z-[0] left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in ${
              open ? " top-20" : " left-[-490px] top-20"
              }`}>
              <nav aria-label="Global">
                <ul className="flex md:flex-row  bg-black w-full h-screen text-center px-10 md:px-0 z-[2] md:h-auto md:bg-none flex-col md:gap-6 gap-10 text-md">
                  {Navlinks.map((element, index) => (
                    <li key={index}>
                      <Link
                        className="text-white text-md transition hover:text-tech-blue"
                        href={element.route}
                      >
                        {element.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            {/* Login Button */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-tech-blue px-5 py-2.5 text-sm hover:bg-inherit hover:text-white hover:border-blue-400 hover:border font-medium text-white shadow"
                  href="/login"
                >
                  Get Started
                </Link>
              </div>
              
              {/* Mobile Nav */}
              <div className="block md:hidden">
                <button className="rounded shadow shadow-tech-blue bg-black p-2 text-white transition text-lg " onClick={() => setOpen(!open)}>
                {open ? <RiCloseLargeLine /> : <RxHamburgerMenu />}
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
