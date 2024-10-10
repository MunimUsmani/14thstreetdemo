"use client";
import Image from "next/image";

export default function PopularDeals() {
  return (
    <section className="h-[10%] w-full bg-[#FFF8EE] flex flex-col md:flex-row items-center justify-center gap-[20px] p-4 md:p-0 mb-16">
      <div className="cursor-pointer h-[60vh] md:h-[70vh] w-full md:flex-1 max-w-full md:max-w-[calc(35%-20px)] border border-gray-300 relative flex justify-between">
        <Image
          src="/Assets/Mask Group 20.png"
          alt="Deal 1"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="cursor-pointer h-[60vh] md:h-[70vh] w-full md:flex-1 max-w-full md:max-w-[calc(35%-20px)] border border-gray-300 relative flex justify-between">
        <Image
          src="/Assets/Mask Group 21.png"
          alt="Deal 2"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Deal 3 */}
      <div className="cursor-pointer h-[60vh] md:h-[70vh] w-full md:flex-1 max-w-full md:max-w-[calc(35%-20px)] border border-gray-300 relative flex justify-between">
        <Image
          src="/Assets/Mask Group 22.png"
          alt="Deal 3"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
