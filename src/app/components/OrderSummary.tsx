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
    <div className="bg-[#FDF8F3] p-4 space-y-2 font-[Barlow]">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="bg-white rounded-md shadow-md p-4 flex items-center space-x-4"
        >
          <Image
            src="/Assets/deal.png"
            alt="Slice Combo"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold">SLICE COMBO</h2>
            <p className="text-xs text-gray-600">
              20" Original Slice Pizza + Sideline Roll + Regular Drink
            </p>
            <p className="text-xs">
              Original + 20 inch Slice Pizza + Cheesy Bread
            </p>
            <p className="text-xs">Coke + Stuffed</p>
          </div>
          <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
            <button
              onClick={() => updateQuantity(index, -1)}
              className="text-green-700"
            >
              <Minus size={16} />
            </button>
            <span className="w-6 text-center text-sm">{quantities[index]}</span>
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
          <button className="bg-red-500 text-white p-2 rounded-full">
            <Trash2 size={16} />
          </button>
          <button className="bg-green-700 text-white text-sm px-4 py-2 rounded-md">
            ADD MORE ITEMS
          </button>
        </div>
      ))}

      <div className="bg-[#2D2D2D] text-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">ORDER SUMMARY</h2>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span>Rs. {deliveryCharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (15%)</span>
            <span>Rs. {tax.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Grand total (Incl. Tax)</span>
          <span>Rs. {total.toFixed(2)}</span>
        </div>
        <div className="bg-[#1A1A1A] p-2 rounded mb-4 text-center text-sm">
          TO APPLY PROMO CODE, PLEASE LOGIN
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Promo Code"
            className="flex-grow p-2 border rounded text-black"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button className="bg-green-700 text-white px-4 py-2 rounded">
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
}
