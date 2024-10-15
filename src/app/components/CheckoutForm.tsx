"use client";

import React, { useState } from "react";

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div
      className="bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8 font-[Barlow]"
      style={{ backgroundImage: "url('/Assets/bg.jpg')" }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-white mb-8">
          CHECKOUT
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md bg-[#f5f1e6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Mobile Number"
                className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md bg-[#f5f1e6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md bg-[#f5f1e6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md bg-[#f5f1e6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>
          <div>
            <textarea
              name="specialInstructions"
              id="specialInstructions"
              rows={4}
              placeholder="Special Instructions (Optional)"
              className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md bg-[#f5f1e6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">
              Select Payment Method
            </h3>
            <div className="bg-[#f5f1e6] rounded-md p-4 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    id="cash"
                    name="paymentMethod"
                    type="radio"
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    htmlFor="cash"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Cash
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="card"
                    name="paymentMethod"
                    type="radio"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    htmlFor="card"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Credit/Debit Card
                  </label>
                </div>
              </div>
              {paymentMethod === "card" && (
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-3">
                    <input
                      type="text"
                      name="cardHolderName"
                      id="cardHolderName"
                      placeholder="Card Holder Name"
                      className="w-full px-3 py-2 placeholder-white text-white rounded-md bg-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="col-span-5">
                    <input
                      type="text"
                      name="cardNumber"
                      id="cardNumber"
                      placeholder="Card Number 1234/5678/9012/3456"
                      className="w-full px-3 py-2 placeholder-white text-white rounded-md bg-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      name="expiryDate"
                      id="expiryDate"
                      placeholder="Expiry Date (MM/YYYY)"
                      className="w-full px-3 py-2 placeholder-white text-white rounded-md bg-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      name="cvv"
                      id="cvv"
                      placeholder="CVV"
                      className="w-full px-3 py-2 placeholder-white text-white rounded-md bg-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>
              )}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#a3c9a8] hover:bg-[#92b797] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
