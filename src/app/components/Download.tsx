"use client";

import Image from "next/image";

export default function DownloadApp() {
  return (
    <section className="relative min-h-screen w-full bg-[#FFF8EE] flex flex-col justify-center items-center px-8 md:flex-row md:justify-between md:px-[250px] py-20">
      <div className="relative h-[400px] w-[40%] flex-shrink-0 hidden md:block">
        <Image
          src="/Assets/Group798.png"
          alt="Mobile App"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="w-full md:w-[55%] text-center md:text-left font-[Barlow]">
        <h1 className="text-4xl font-barlow font-bold mb-6 tracking-tight">
          DOWNLOAD OUR APP
        </h1>
        <p className="text-xl mb-10 leading-relaxed max-w-2xl font-barlow">
          Get our best offers direct to your device and order 14th street pizza
          wherever you go.
        </p>
        <div className="flex flex-col sm:flex-col md:flex-row justify-center md:justify-start space-y-6 md:space-y-0 md:space-x-6">
          <Image
            src="/Assets/google-store.png"
            alt="Google Play"
            width={220}
            height={66}
            className="cursor-pointer mx-auto md:mx-0"
          />
          <Image
            src="/Assets/app-store.png"
            alt="App Store"
            width={220}
            height={66}
            className="cursor-pointer mx-auto md:mx-0"
          />
        </div>
      </div>

      <div className="hidden md:block absolute h-[115px] w-[90px] top-[10%] right-[7%]">
        <Image
          src="/Assets/h3_vector9.png"
          alt="Coffee"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="hidden md:block absolute h-[120px] w-[110px] bottom-[10%] left-[5%]">
        <Image
          src="/Assets/h3_vector10.png"
          alt="Capsicum"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
