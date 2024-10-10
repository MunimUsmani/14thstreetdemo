"use client";

import React, {
  useRef,
  useState,
  MouseEvent,
  TouchEvent,
  WheelEvent,
} from "react";

const originalItems = [
  "24/7 DEALS",
  "DAYLICIOUS DEALS",
  "SIGNATURE SELECTION PIZZAS",
  "XTREME PIZZA",
  "FOOTLONG PIZZA",
  "CREATE YOUR OWN PIZZA",
  "SIDELINES",
  "DIP",
];

const items = Array.from(
  { length: 1000 },
  (_, i) => originalItems[i % originalItems.length]
);

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += e.deltaY * 2;
  };

  return (
    <div
      className="w-full bg-[#FFF8EE] overflow-hidden py-8 cursor-grab"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUpOrLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
      ref={sliderRef}
    >
      <div className="flex whitespace-nowrap animate-scroll">
        {items.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center min-w-[240px] h-[60px] mx-3 text-base font-[Barlow] font-bold rounded-md transition-colors duration-300 ease-in-out hover:bg-[#BB1112] hover:text-white bg-white"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
