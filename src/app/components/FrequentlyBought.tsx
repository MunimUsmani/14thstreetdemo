"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBasket } from "lucide-react";
import Marquee from "react-fast-marquee";

const products = [
  {
    id: 1,
    name: "Cola Next",
    price: 80.0,
    image: "/Assets/MaskGroup1.png",
    volume: "350 ml",
  },
  {
    id: 2,
    name: "Fizup Next",
    price: 80.0,
    image: "/Assets/MaskGroup1.png",
    volume: "350 ml",
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    price: 339.15,
    image: "/Assets/Cake.png",
  },
  { id: 4, name: "Chocolate Mousse", price: 339.15, image: "/Assets/Cake.png" },
  { id: 5, name: "Chocolate Mousse", price: 339.15, image: "/Assets/Cake.png" },
  { id: 6, name: "Chocolate Mousse", price: 339.15, image: "/Assets/Cake.png" },
  { id: 7, name: "Chocolate Mousse", price: 339.15, image: "/Assets/Cake.png" },
  { id: 8, name: "Chocolate Mousse", price: 339.15, image: "/Assets/Cake.png" },
];

export default function FrequentlyBoughtTogether() {
  const [quantities, setQuantities] = useState(
    Object.fromEntries(products.map((product) => [product.id, 1]))
  );

  const handleQuantityChange = (id: any, change: any) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + change),
    }));
  };

  return (
    <div className="bg-[#FFF8EE] relative overflow-hidden font-[Barlow] pr-16 pb-8">
      <div className="flex items-start space-x-4">
        <div className="relative w-[35%] h-[20rem] rounded-md overflow-hidden">
          <Image
            src="/Assets/Group 1019.jpg"
            alt="Frequently Bought Together Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex-1 overflow-hidden pl-16 pt-12">
          <Marquee gradient={false} speed={50}>
            <div className="flex space-x-4 px-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center bg-white p-4 rounded-lg shadow min-w-[160px] h-[240px] justify-between"
                >
                  <div className="h-24 w-24 relative mb-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-center mb-1">
                    {product.name}
                  </h3>
                  {product.volume && (
                    <p className="text-xs text-gray-500 mb-1">
                      ({product.volume})
                    </p>
                  )}
                  <p className="text-red-600 font-bold text-sm mb-2">
                    Rs.{product.price.toFixed(2)}
                  </p>
                  {product.id <= 2 ? (
                    <div className="flex items-center border rounded text-sm">
                      <button
                        className="px-3 py-1 text-gray-600"
                        onClick={() => handleQuantityChange(product.id, -1)}
                      >
                        -
                      </button>
                      <span className="px-3">{quantities[product.id]}</span>
                      <button
                        className="px-3 py-1 text-gray-600"
                        onClick={() => handleQuantityChange(product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button className="bg-green-700 text-white px-4 py-2 rounded text-sm flex items-center justify-center w-full">
                      <ShoppingBasket className="mr-1" size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Marquee>
        </div>
        <Image
          src="/Assets/Group989.png"
          alt="Bottle"
          width={70}
          height={70}
          className="absolute left-[30rem] opacity-1"
        />
        <Image
          src="/Assets/Group991.png"
          alt="Cup"
          width={50}
          height={50}
          className="absolute bottom-4 right-[4rem] opacity-1"
        />
      </div>
    </div>
  );
}
