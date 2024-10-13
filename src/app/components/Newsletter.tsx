import Image from "next/image";

export default function NewsletterSubscription() {
  return (
    <div className="bg-red-700 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden font-[Barlow]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-2/5 mb-6 lg:mb-0 lg:ml-20 flex justify-center lg:justify-start">
          <Image
            src="/Assets/global-ft-pic2.png"
            alt="Pizza"
            width={400}
            height={400}
            className="object-contain max-w-full h-auto"
          />
        </div>

        <div className="w-full lg:w-3/5 text-white lg:pl-8 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            JOIN FOR HOT OFFERS
          </h2>
          <p className="mb-4 text-sm leading-snug">
            If we go all out... We do it well! Subscribe to the newsletter to
            get the most
            <br className="hidden sm:inline" />
            exclusive promos.
          </p>
          <form className="w-[380px] max-w-md mx-auto lg:mx-0">
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-[380px] px-4 py-4 pr-32 rounded-md text-gray-400 placeholder-gray-400 text-sm"
                required
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-2 bg-green-700 hover:bg-green-800 text-white font-bold px-6 rounded-r-md text-sm uppercase m-2 "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
