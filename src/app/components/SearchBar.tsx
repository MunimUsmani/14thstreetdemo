export default function PizzaSearch() {
  return (
    <div className="w-full h-[11.4rem] bg-[#fff8ee] relative mt-5">
      <div className="absolute top-[60%] w-full flex flex-col sm:flex-row justify-between items-center px-6 sm:px-16 mt-2 font-[Barlow]">
        <h1 className="text-black text-xl sm:text-2xl font-bold tracking-wide text-center sm:text-left mb-4 sm:mb-0">
          FIND YOUR 14 STREET PIZZA
        </h1>
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="SEARCH"
            className="w-full sm:w-[400px] h-10 bg-white border border-gray-300 rounded-full px-4 pr-12 placeholder-gray-400 text-sm uppercase focus:outline-none"
          />
          <button className="absolute right-0 top-0 h-10 w-20 flex items-center justify-center bg-[#1B8B00] rounded-full hover:bg-[#167000] transition-colors">
            <img
              src="/Assets/search.png"
              alt="Search Icon"
              className="w-6 h-6 invert brightness-0"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
