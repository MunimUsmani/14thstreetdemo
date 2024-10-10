"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function XYZDealTimer(): JSX.Element {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 9,
    hours: 50,
    minutes: 15,
    seconds: 33,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const floatVariant = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative h-[80vh] w-full bg-[url('/Assets/Group814.png')] bg-cover bg-center mt-8">
      <motion.div
        variants={floatVariant}
        animate="animate"
        className="absolute left-[28%] top-[10%] h-[100px] w-[60px] hidden lg:block -ml-4"
      >
        <Image
          src="/Assets/h3_vector7.png"
          alt="Leaf"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      <motion.div
        variants={floatVariant}
        animate="animate"
        className="absolute right-[15%] top-[11%] h-[125px] w-[170px] hidden lg:block"
      >
        <Image
          src="/Assets/h3_vector6.png"
          alt="Pizza"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      <motion.div
        variants={floatVariant}
        animate="animate"
        className="absolute left-[21%] bottom-[5%] h-[100px] w-[105px] hidden lg:block"
      >
        <Image
          src="/Assets/h3_vector8.png"
          alt="Mushrooms"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      <Image
        src="/Assets/Mask Group 35.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="hidden lg:block"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-[Barlow]">
        <h1 className="text-[#DFB206] text-4xl font-bold uppercase tracking-wide ml-8">
          XYZ Deal Timing
        </h1>
        <p className="py-4 text-xl font-light">
          Lorem Ipsum is simply dummy text of the printing
          <br />
          and typesetting industry.
        </p>
        <div className="flex justify-center items-center font-[Barlow] text-4xl font-bold my-8">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <React.Fragment key={unit}>
              <span>{value.toString().padStart(2, "0")}</span>
              {index < Object.entries(timeLeft).length - 1 && (
                <span className="mx-2">:</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex justify-center items-center font-sans text-sm uppercase">
          {Object.keys(timeLeft).map((unit) => (
            <span key={unit} className="mx-4">
              {unit.slice(0, 3)}
            </span>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 rounded-lg border-none bg-[#176D08] text-white text-sm uppercase font-bold hover:bg-[#1c8b0a] transition-colors duration-300">
          Order Now
        </button>
      </div>
    </section>
  );
}
