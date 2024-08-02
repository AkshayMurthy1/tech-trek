import React from "react";
import Image from "next/image";
import { List } from "../utils/featureslist";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500"] });

function Features() {
  return (
    <section className=" h-full mb-[55rem]">
      <div className="h-[80vh] md:mt-24 text-white flex">
        <div className="md:w-1/2 md:px-16 px-10 h-full">
          {List.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col justify-center h-[90vh] space-y-4 text-start">
                <h1 className="md:text-5xl text-4xl text-blue-300">
                  {item.name}
                </h1>
                <div className={`md:text-2xl text-xl ${quicksand.className}`}>
                  {item.description}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="text-center">Yo</div>
        </div>
      </div>
    </section>
  );
}

export default Features;
