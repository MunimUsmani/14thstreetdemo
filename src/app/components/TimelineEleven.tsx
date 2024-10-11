import React from "react";
import Image from "next/image";

export default function PizzaStorefront2012() {
  return (
    <div className="relative h-[510px] font-[Barlow] overflow-hidden flex">
      <div className="w-1/2 pl-8 relative">
        <span className="absolute top-[15%] left-[60%] transform -translate-y-1/2 text-[250px] font-bold text-black z-10 mt-16 font-[Barlow]">
          20
        </span>
        <div className="h-full flex items-center font-[Barlow] font-semibold">
          <p className="text-lg pl-30 mt-48 m-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div className="w-1/2 relative">
        <Image
          src="/Assets/22.jpg"
          alt="14th Street Pizza Storefront"
          layout="fill"
          objectFit="cover"
          className="grayscale"
        />

        <span className="absolute top-[15%] right-[59%] transform -translate-y-1/2 text-[250px] font-bold text-white z-10 mt-16 font-[Barlow]">
          22
        </span>
      </div>
    </div>
  );
}
