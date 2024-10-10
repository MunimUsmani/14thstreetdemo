import Image from "next/image";

export default function LoyaltyProgram() {
  return (
    <section className="flex flex-col lg:flex-row w-full bg-[#FFF8EE] relative font-[Barlow]">
      <div className="absolute top-0 left-4 w-16 h-16 lg:w-20 lg:h-20">
        <Image
          src="/Assets/h3_vector5.png"
          alt="Cheese slice"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <div className="lg:hidden w-full">
        <div className="w-full h-80 relative">
          <Image
            src="/Assets/reward.png"
            alt="People enjoying pizza"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6 pt-8">
          <h2 className="text-2xl font-bold">
            Earn Points Every Time You Order With Our Exclusive Loyalty Program
          </h2>
          <p className="text-base mt-2">
            Treat yourself, then let us treat you!
          </p>
          <p className="text-sm mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="bg-[#176D08] text-white font-bold py-2 px-4 rounded uppercase text-xs w-full mt-6">
            PLACE YOUR FIRST ORDER NOW AND EARN POINTS
          </button>
        </div>
      </div>

      <div className="hidden lg:flex w-full">
        <div className="w-1/2 flex items-center justify-center p-12 pt-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-2">
              Earn Points Every Time You Order With Our Exclusive Loyalty
              Program
            </h2>
            <p className="text-lg mb-6">
              Treat yourself, then let us treat you!
            </p>
            <p className="text-base mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="bg-[#176D08] text-white font-bold py-3 px-6 rounded uppercase text-sm">
              PLACE YOUR FIRST ORDER NOW AND EARN POINTS
            </button>
          </div>
        </div>
        <div className="w-1/2 relative h-[500px]">
          <Image
            src="/Assets/reward.png"
            alt="People enjoying pizza"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
