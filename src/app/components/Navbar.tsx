"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBasket, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="absolute top-[3%] w-full bg-white py-2 px-4 sm:px-6 lg:px-16 z-20 hidden lg:block">
        <div className="flex justify-between items-center">
          <Image
            src="/Assets/footer-logo.png"
            alt="14th Street Pizza"
            width={100}
            height={72}
            className="object-contain"
          />
          <div className="flex space-x-8 font-semibold font-[Barlow]">
            <Link href="/" className="text-lg hover:text-[#BB1112]">
              HOME
            </Link>
            <Link href="/AboutUs" className="text-lg hover:text-[#BB1112]">
              ABOUT US
            </Link>
            <Link href="/Location" className="text-lg hover:text-[#BB1112]">
              LOCATION
            </Link>
            <Link href="/Contact" className="text-lg hover:text-[#BB1112]">
              CONTACT US
            </Link>
            <Link href="/Detail" className="text-lg hover:text-[#BB1112]">
              DETAIL
            </Link>
            <Link href="/Cart" className="text-lg hover:text-[#BB1112]">
              CART
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-9 h-9 bg-[#176D08] rounded flex items-center justify-center">
              <ShoppingBasket className="text-white" size={24} />
            </div>
            <button className="bg-[#BB1112] text-white font-semibold py-2 px-4 rounded font-[Barlow]">
              SIGNUP
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="absolute top-[3%] w-full bg-white py-2 px-4 z-20 lg:hidden">
        <div className="flex justify-between items-center">
          <Menu className="text-3xl text-black" onClick={toggleSidebar} />
          <Image
            src="/Assets/footer-logo.png"
            alt="14th Street Pizza"
            width={80}
            height={60}
            className="object-contain"
          />
          <div className="w-9 h-9 bg-[#176D08] rounded flex items-center justify-center">
            <ShoppingBasket className="text-white" size={24} />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-500 ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transition-transform duration-500 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Image
              src="/Assets/footer-logo.png"
              alt="14th Street Pizza"
              width={80}
              height={60}
              className="object-contain"
            />
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="py-4">
            <Link
              href="/"
              className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-[#BB1112]"
            >
              HOME
            </Link>
            <Link
              href="/AboutUs"
              className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-[#BB1112]"
            >
              ABOUT US
            </Link>
            <Link
              href="/Location"
              className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-[#BB1112]"
            >
              LOCATION
            </Link>
            <Link
              href="/Contact"
              className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-[#BB1112]"
            >
              CONTACT US
            </Link>
            <Link
              href="/Detail"
              className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-[#BB1112]"
            >
              DETAIL
            </Link>
            <Link
              href="/Cart"
              className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-[#BB1112]"
            >
              CART
            </Link>

            <button className="mt-4 w-[50%] bg-[#BB1112] text-white font-bold py-2 px-2 rounded ml-2">
              SIGNUP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
