// "@ts-expect-error"

import React from "react";
import Image from "next/image";
import { ShoppingBasket } from "lucide-react";

const relatedProducts = [
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

const ProductDescription = () => {
  return (
    <div className="bg-[#FFF8EE] p-4 sm:p-8 font-[Barlow]">
      <div className="mb-8">
        <div className="flex border-b border-gray-300">
          <h2 className="text-xl font-bold text-[#D01717] mr-8 pb-2 border-b-2 border-[#D01717]">
            DESCRIPTION
          </h2>
          <h2 className="text-xl font-bold text-black">REVIEWS (70)</h2>
        </div>
        <p className="mt-4 text-sm font-semibold text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-black text-center">
          RELATED PRODUCTS
        </h2>
        <div className="flex gap-4 mt-20">
          {relatedProducts.map((product, index) => (
            <div
              key={index}
              className={`group relative ${
                index === 3 ? "hidden xl:block" : ""
              }`}
              style={{ height: "250px", width: "280px" }}
            >
              <div className="absolute inset-x-0 bottom-0 bg-white rounded-lg shadow-md transition-all duration-500 ease-in-out group-hover:h-[calc(100%+3rem)] group-hover:-top-16" />
              <div className="relative bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out">
                <div className="flex justify-center -mt-12 sm:-mt-16 mb-2 sm:mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="rounded-t-lg"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#3A3A3A]">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D01717] font-bold text-lg sm:text-xl">
                    {product.price}
                  </span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#176D08] rounded flex items-center justify-center">
                    <ShoppingBasket className="text-white" size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
