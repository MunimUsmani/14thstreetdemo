"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FFF8EE] py-8 font-[Barlow]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8 text-center md:text-left">
            <Image
              src="/Assets/footer-logo.png"
              alt="14th Street Pizza Logo"
              width={200}
              height={100}
              className="max-w-full h-auto mx-auto md:mx-0"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8 text-center md:text-left">
            <h2 className="text-xl font-bold mb-4">14th Street Pizza</h2>
            <p className="mb-2">021 111 363 636</p>
            <p className="mb-2">info@14thstreetpizza.com</p>
            <p className="mb-2">
              14th Street Pizza - Gulshan, Plot # AS-7, Row 1/Z, Block-10A
              Gulshan Iqbal, Karachi
            </p>
          </div>

          {/* Column 3 - Open Hours */}
          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8 text-center md:text-left">
            <h2 className="text-xl font-bold mb-4">Open Hours</h2>
            <p className="mb-2">Monday - Sunday</p>
            <p className="mb-2">12:00 PM - 3:00 AM</p>
          </div>

          {/* Column 4 - Social Media */}
          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8 text-center md:text-left">
            <h2 className="text-xl font-bold mb-4">Follow Us On</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <Image
                src="/Assets/fb.png"
                alt="Facebook"
                width={40}
                height={40}
                className="cursor-pointer"
              />
              <Image
                src="/Assets/insta.png"
                alt="Instagram"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Column 5 - App Download */}
          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8 text-center md:text-left">
            <h2 className="text-xl font-bold mb-4">Download Our App</h2>
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <Image
                src="/Assets/google-store.png"
                alt="Google Play Store"
                width={200}
                height={60}
                className="cursor-pointer"
              />
              <Image
                src="/Assets/app-store.png"
                alt="Apple App Store"
                width={200}
                height={60}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 my-8" />

        <div className="text-center text-sm">
          <p>Copyright © 2024 Planet01. All rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
