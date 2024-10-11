"use client";
import React from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

interface YearComponentProps {
  year: number;
  imageSrc: string;
  text: string;
}

const YearComponent: React.FC<YearComponentProps> = ({
  year,
  imageSrc,
  text,
}) => {
  const isEvenYear = year % 2 === 0;

  return (
    <div className="flex h-full">
      <Parallax
        translateY={["-30px", "30px"]}
        easing="easeOutQuad"
        className="relative h-[510px] font-[Barlow] overflow-hidden flex w-full"
      >
        {/* Image Section */}
        <div
          className={`w-1/2 relative ${
            isEvenYear ? "order-2" : "order-1"
          } p-0 m-0`}
        >
          <Image
            src={imageSrc}
            alt={`${year} Pizza Storefront`}
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
          <span
            className={`absolute top-[15%] ${
              isEvenYear ? "right-[67%]" : "left-[60%]"
            } transform -translate-y-1/2 text-[250px] font-bold text-white z-10 mt-16 font-[Barlow]`}
          >
            {year.toString().slice(-2)}
          </span>
        </div>

        {/* Text Section */}
        <div
          className={`w-1/2 relative flex items-center ${
            isEvenYear ? "order-1" : "order-2"
          } p-0 m-0`}
        >
          <span
            className={`absolute top-[15%] ${
              isEvenYear ? "left-[60%]" : "left-0"
            } transform -translate-y-1/2 text-[250px] font-bold text-black z-10 mt-16 font-[Barlow]`}
          >
            20
          </span>
          <div className="h-full flex items-center font-[Barlow] font-semibold bg-white">
            <p className="text-lg mt-48 ml-8">{text}</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

const YearlyParallax: React.FC = () => {
  const years = Array.from({ length: 14 }, (_, i) => 2011 + i);

  return (
    <ParallaxProvider>
      <div className="space-y-0 w-screen">
        {" "}
        {/* Set full width to remove side margins */}
        {years.map((year, index) => (
          <div
            key={year}
            className={`h-[510px] sticky top-0 flex items-center justify-center w-full ${
              index === years.length - 1 ? "mb-12" : "" // Add bottom margin only to the last card
            }`}
          >
            <YearComponent
              year={year}
              imageSrc={`/Assets/${year.toString().slice(-2)}.jpg`}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type of specimen book."
            />
          </div>
        ))}
      </div>
    </ParallaxProvider>
  );
};

export default YearlyParallax;
