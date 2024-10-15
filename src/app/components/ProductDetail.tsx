// @ts-ignore
"use client";
import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingBasket, Minus, Plus } from "lucide-react";
interface SelectedOptions {
  crust: string;
  size: string;
  sideline: string;
  drink: string;
}

interface ExtraToppings {
  stuffed: boolean;
  meat: boolean;
  cheese: boolean;
}

export default function Component() {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    crust: "Original",
    size: "20 Inch Slice Pizza",
    sideline: "Cheesy Bread",
    drink: "Coke",
  });
  const [extraToppings, setExtraToppings] = useState<ExtraToppings>({
    stuffed: false,
    meat: false,
    cheese: false,
  });

  // Handle option changes for radio buttons (pizza crust, size, sideline, drink)
  const handleOptionChange = (
    category: keyof SelectedOptions, // category must be a key of SelectedOptions
    value: string
  ) => {
    setSelectedOptions((prev) => ({ ...prev, [category]: value }));
  };

  // Handle topping changes for checkboxes (extra toppings)
  const handleToppingChange = (topping: keyof ExtraToppings) => {
    setExtraToppings((prev) => ({ ...prev, [topping]: !prev[topping] }));
  };

  return (
    <div className="flex gap-8 p-6 bg-[#FFF8EE] font-[Barlow]">
      <div className="w-1/2">
        <Image
          src="/Assets/MaskGroup19.png"
          alt="Slice Combo"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
      <div className="w-1/2">
        <div className="text-sm uppercase tracking-wide text-[#d62300] font-semibold">
          24/7 DEALS
        </div>
        <h1 className="text-4xl font-bold mt-2 mb-1">SLICE COMBO</h1>
        <p className="text-gray-600 mb-6 text-sm">
          20" Original Slice Pizza + Sideline Half + Regular Drink
        </p>

        <div className="mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-base font-semibold mb-4 text-[#d62300]">
            SELECT OPTIONS
          </h2>
          <div className="space-y-4">
            {/* Pizza Crust */}
            <div>
              <h3 className="font-semibold mb-2 text-sm">Pizza Crust</h3>
              <div className="flex gap-4">
                {["Original", "Original Signature"].map((crust) => (
                  <label key={crust} className="flex items-center">
                    <input
                      type="radio"
                      name="crust"
                      value={crust}
                      checked={selectedOptions.crust === crust}
                      onChange={() => handleOptionChange("crust", crust)}
                      className="mr-2 w-4 h-4 border-2 border-gray-300 checked:border-none checked:bg-[#32b04a] focus:ring-0"
                    />
                    <span className="text-sm">{crust}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pizza Size */}
            <div>
              <h3 className="font-semibold mb-2 text-sm">Pizza Size</h3>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="size"
                  value="20 Inch Slice Pizza"
                  checked={selectedOptions.size === "20 Inch Slice Pizza"}
                  onChange={() =>
                    handleOptionChange("size", "20 Inch Slice Pizza")
                  }
                  className="mr-2 w-4 h-4 border-2 border-gray-300 checked:border-none checked:bg-[#32b04a] focus:ring-0"
                />
                <span className="text-sm">20 Inch Slice Pizza</span>
              </label>
            </div>

            {/* Sideline */}
            <div>
              <h3 className="font-semibold mb-2 text-sm">Sideline (Half)</h3>
              <div className="flex gap-4">
                {["Cheesy Bread", "Garlic Bread"].map((sideline) => (
                  <label key={sideline} className="flex items-center">
                    <input
                      type="radio"
                      name="sideline"
                      value={sideline}
                      checked={selectedOptions.sideline === sideline}
                      onChange={() => handleOptionChange("sideline", sideline)}
                      className="mr-2 w-4 h-4 border-2 border-gray-300 checked:border-none checked:bg-[#32b04a] focus:ring-0"
                    />
                    <span className="text-sm">{sideline}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-sm">
                Soft Drink (Regular)
              </h3>
              <div className="flex gap-4">
                {["Coke", "Sprite"].map((drink) => (
                  <label key={drink} className="flex items-center">
                    <input
                      type="radio"
                      name="drink"
                      value={drink}
                      checked={selectedOptions.drink === drink}
                      onChange={() => handleOptionChange("drink", drink)}
                      className="mr-2 w-4 h-4 checked:border-none checked:bg-[#32b04a] focus:ring-0"
                    />
                    <span className="text-sm">{drink}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-base font-semibold mb-2">Extra Toppings</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Stuffed", price: 99 },
              { name: "Meat", price: 69 },
              { name: "Cheese", price: 69 },
            ].map((topping) => (
              <label key={topping.name} className="flex items-center">
                <input
                  type="checkbox"
                  checked={
                    extraToppings[
                      topping.name.toLowerCase() as keyof ExtraToppings
                    ]
                  }
                  onChange={() =>
                    handleToppingChange(
                      topping.name.toLowerCase() as keyof ExtraToppings
                    )
                  }
                  className="mr-2 w-4 h-4 border-2 border-gray-300 rounded checked:bg-[#32b04a] checked:text-white checked:ring-2 checked:ring-white focus:ring-0"
                />
                <span className="text-sm">
                  {topping.name} (Rs. {topping.price})
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center">
            <span className="text-sm font-semibold mr-2">QUANTITY:</span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-8 h-8 flex items-center justify-center text-gray-500"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-8 h-8 flex items-center justify-center text-gray-500"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <button className="bg-[#32b04a] text-white px-6 py-2 rounded-md font-semibold text-sm uppercase flex items-center">
            <ShoppingBasket className="text-white mr-2" size={20} />
            Add to cart
          </button>
          <button className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center">
            <Heart className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="text-3xl font-bold text-[#d62300]">RS. 899.00</div>
      </div>
    </div>
  );
}
