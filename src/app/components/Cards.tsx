"use client";

import Image from "next/image";
import { ShoppingBasket } from "lucide-react";

const deals = [
  {
    name: "Slice Combo",
    description: "20 Original Slice Pizza + Sideline Half + Regular Drink",
    price: "Rs.899.00",
    image: "/Assets/deal.png",
  },
  {
    name: "Super Saver",
    description: "20 Original Slice Pizza + Sideline Half + Regular Drink",
    price: "Rs.2,899.00",
    image: "/Assets/deal.png",
  },
  {
    name: "Big Hunt",
    description: "20 Original Slice Pizza + Sideline Half + Regular Drink",
    price: "Rs.4,999.00",
    image: "/Assets/deal.png",
  },
];

export default function Cards() {
  return (
    <div className="bg-[#FFF8EE] p-4 sm:p-8 relative font-[Barlow]">
      <h2 className="text-2xl sm:text-4xl font-bold mb-10 sm:mb-20 text-[#3A3A3A]">
        24/7 DEALS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {deals.map((deal, index) => (
          <div
            key={index}
            className={`group relative ${index === 3 ? "hidden xl:block" : ""}`}
          >
            <div className="absolute inset-x-0 bottom-0 bg-white rounded-lg shadow-md transition-all duration-500 ease-in-out group-hover:h-[calc(100%+3rem)] group-hover:-top-16" />
            <div className="relative bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out">
              <div className="flex justify-center -mt-12 sm:-mt-16 mb-2 sm:mb-4">
                <Image
                  src={deal.image}
                  alt={deal.name}
                  width={150}
                  height={100}
                  className="rounded-t-lg"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#3A3A3A]">
                {deal.name}
              </h3>
              <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                {deal.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#D01717] font-bold text-lg sm:text-xl">
                  {deal.price}
                </span>
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#176D08] rounded flex items-center justify-center">
                  <ShoppingBasket className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-4 right-4">
        <Image
          src="/Assets/h3_vector4.png"
          alt="Pizza slice"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}
