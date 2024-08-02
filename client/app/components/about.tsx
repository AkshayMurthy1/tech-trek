import React from "react";
import Link from "next/link";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500"] });

function About() {
  return (
    <>
      <section className=" flex justify-center text-center mt-10 text-white">
        <div className=" flex justify-center">
          <div
            className={`md:w-[60vw] w-[80vw] space-y-5 md:h-[30vh] h-[35vh] py-10 px-10 text-2xl bg-blue-400/90 rounded-3xl ${quicksand.className}`}
          >
            <p className=" flex items-center">
              TechTrek Marketplace & Ventures is an innovative platform designed
              to foster a vibrant community where students can trade ideas,
              projects, skills and more!
            </p>

            <div className=" mt-5 hidden">
              <Link href="/ourteam" className="">
                <button className=" bg-blue-900 hover:bg-tech-blue hover:shadow-white hover:shadow-2xl px-3 py-2 rounded-2xl">
                  Our Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
