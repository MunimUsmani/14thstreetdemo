import Image from "next/image";

export default function HeroContact() {
  return (
    <div className="relative">
      <div className="bg-yellow-400 relative overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
        <Image
          src="/Assets/MaskGroup42.png"
          alt="Pizza and Tomato"
          layout="fill"
          objectFit="cover"
          className="absolute bottom-0 left-0 right-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-white text-center mt-14">
            CONTACT US
          </h1>
        </div>
      </div>
    </div>
  );
}
