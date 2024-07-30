"use client";

import React, { useState, useEffect } from "react";
import { Navlinks } from "../utils/navroutes";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      <header
        className={` shadow-lg fixed w-full top-0 left-0 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-2 z-{2} border-2 rounded-2xl">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-2xl text-blue-400 font-bold" href="/">
                <div>Tech-Trek</div>
              </a>
            </div>
  
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-md">
                  {Navlinks.map((element, index) => (
                    <li key={index}>
                      <a
                        className="text-black text-md transition hover:text-gray-500/75"
                        href={element.route}
                      >
                        {element.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
  
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-blue-400 px-5 py-2.5 text-sm hover:bg-inherit hover:text-black hover:border-blue-400 hover:border font-medium text-white shadow"
                  href="/login"
                >
                  Get Started
                </a>
              </div>
  
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <RxHamburgerMenu />
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
