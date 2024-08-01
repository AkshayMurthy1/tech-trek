import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({subsets: ['latin'], weight: ['800'] })

function Lander() {
  return (
    <>
      <Navbar />
      <section className="pt-20 h-screen flex items-center justify-center">
        <div className="md:grid md:grid-cols-2 gap-4 items-center justify-items-center">
          {/* Mobile Image */}
          <div className="items-center justify-center md:hidden flex">
            <Image
              src="/assets/scientist-lander.png"
              height={265}
              width={265}
              alt="Lander Image"
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-center px-8 md:pl-24 flex-col md:flex-row ">
            <div className=" flex flex-col md:space-y-5 space-y-4 mt-8 md:mt-0 md:text-left text-center">
              <h3 className="  bg-gradient-to-r from-tech-blue via-white to-tech-blue bg-clip-text text-3xl font-extrabold text-transparent">
                TechTrek Marketplace
              </h3>
              <div className=" flex flex-col">
                <h2 className="md:text-6xl text-5xl text-balance text-white">
                  Your personal hub for tech,
                </h2>
                <span className=" text-5xl text-white">education, and more!</span>
              </div>
              <h4 className=" text-gray-300">Forge your trek in tech!</h4>
              <Link href="/#About">
                <button className=" bg-tech-blue mr-auto py-2 px-3 rounded-2xl hover:bg-black hover:border hover:border-tech-blue hover:text-white shadow-white shadow-2xl ">
                  Explore More!
                </button>
              </Link>
            </div>
          </div>

          {/* Desktop Image */}
          <div className=" items-center justify-center md:flex hidden">
            <Image
              src="/assets/scientist-lander.png"
              height={350}
              width={350}
              alt="Lander Image"
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Lander;
