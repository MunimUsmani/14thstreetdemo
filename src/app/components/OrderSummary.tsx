"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function PizzaOrderComponent() {
  const [quantities, setQuantities] = useState([1, 1, 1]);
  const [promoCode, setPromoCode] = useState("");

  const itemPrice = 899.0;
  const deliveryCharge = 125.0;
  const taxRate = 0.15;

  const subtotal = quantities.reduce(
    (sum, quantity) => sum + quantity * itemPrice,
    0
  );
  const tax = subtotal * taxRate;
  const total = subtotal + deliveryCharge + tax;

  const updateQuantity = (index: any, delta: any) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + delta);
    setQuantities(newQuantities);
  };

  return (
    <div className="bg-[#FFF8EE] p-8 font-[Barlow] max-w-7xl mx-auto">
      <div className="flex space-x-6">
        <div className="flex-grow space-y-4">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="bg-[#FFF8EE] rounded-xl shadow-md p-4 flex flex-col h-30"
            >
              <div className="flex items-center space-x-4 flex-grow">
                <Image
                  src="/Assets/deal.png"
                  alt="Slice Combo"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
                <div className="flex-grow space-y-1">
                  <h1 className="text-xl font-bold">SLICE COMBO</h1>
                  <p className="text-xs text-gray-400 font-semibold">
                    20" Original Slice Pizza + Sideline Roll + Regular Drink
                  </p>
                  <p className="text-sm font-semibold">
                    Original + 20 inch Slice Pizza + Cheesy Bread
                  </p>
                  <p className="text-sm font-semibold">Coke + Stuffed</p>
                </div>
                <div className="flex flex-row items-end space-y-0 space-x-6 mb-14">
                  <div className="flex items-center space-x-2 border rounded-md px-2 py-1">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="text-green-700"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-6 text-center text-sm">
                      {quantities[index]}
                    </span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="text-green-700"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-xl font-bold whitespace-nowrap">
                    RS. {itemPrice.toFixed(2)}
                  </div>
                  <button className="bg-red-500 text-white p-2 rounded-md">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <button className="bg-[#226416] text-white text-sm px-4 py-2 rounded-md mt-2 self-end font-bold">
                ADD MORE ITEMS
              </button>
            </div>
          ))}
        </div>

        <div className="w-80 space-y-4">
          {/* Order Summary Card */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-[#2D2D2D] text-white p-4 rounded-t-lg">
              <h2 className="text-lg font-bold">ORDER SUMMARY</h2>
            </div>
            <div className="pt-4 px-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Charges</span>
                <span>Rs. {deliveryCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax (15%)</span>
                <span>Rs. {tax.toFixed(2)}</span>
              </div>
              <div className="bg-[#226416] text-white font-bold text-md flex justify-between py-3 px-4 rounded-b-lg -mx-4 mt-2">
                <span>Grand total (Incl. Tax)</span>
                <span>Rs. {total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-[#2D2D2D] text-white p-4 rounded-t-lg">
              <h2 className="text-md font-bold">
                TO APPLY PROMO CODE, PLEASE LOGIN
              </h2>
            </div>
            <div className="p-4 flex items-center justify-between bg-white rounded-b-lg">
              <span className="text-gray-400 text-md">Promo Code</span>
              <button className="bg-[#226416] text-white px-4 py-2 rounded-md text-sm font-bold">
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
