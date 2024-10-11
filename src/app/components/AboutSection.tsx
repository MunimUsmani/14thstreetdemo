import Image from "next/image";

export default function Component() {
  return (
    <div className="bg-[#FFF8EE] font-[Barlow] p-4 md:p-8 lg:p-12 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-center mb-6">
          ABOUT 14 STREET PIZZA
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-center font-semibold">
          Home of the biggest, yummiest pizza in town!
        </p>
        <p className="text-sm md:text-base lg:text-md text-center mt-4 m-8 font-semibold">
          Evolving from a traditional family recipe, 14th Street Pizza Co. has
          come a long way. It was launched on 14th February 2011 and has
          established a strong identity in the pizza delivery business in
          Pakistan in only a year - so much so, that it was hard to keep up with
          the thriving demand when it was launched. That's when the real test
          began, but we faced the challenge with gusto and were soon back on the
          table with a bigger team and a bigger kitchen. The introducer of the
          20 inch pizza in Pakistan, 14th Street Pizza Co. has grown from being
          a corner pizza delivery place to one of the most recognized pizza
          delivery places in Karachi, with plans of expanding to other cities
          and countries soon.
        </p>
      </div>
      <Image
        src="/Assets/h1_vector2.png"
        alt="Pizza Logo"
        width={100}
        height={100}
        className="absolute top-4 right-4 w-16 md:w-24 lg:w-20"
      />
      <Image
        src="/Assets/h1_vector3.png"
        alt="Pizza Slice"
        width={100}
        height={100}
        className="absolute bottom-4 right-4 w-16 md:w-24 lg:w-20 mr-20"
      />
      <Image
        src="/Assets/h1_vector1.png"
        alt="French Fries"
        width={100}
        height={100}
        className="absolute bottom-4 left-4 w-16 md:w-24 lg:w-20 ml-10 mb-20"
      />
    </div>
  );
}
