"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year1: 20,
    year2: 11,
    image: "/Assets/11.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 12,
    image: "/Assets/12.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 13,
    image: "/Assets/13.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 14,
    image: "/Assets/14.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 15,
    image: "/Assets/15.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 16,
    image: "/Assets/16.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 17,
    image: "/Assets/17.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 18,
    image: "/Assets/18.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 19,
    image: "/Assets/19.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 20,
    image: "/Assets/20.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 21,
    image: "/Assets/21.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 22,
    image: "/Assets/22.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 23,
    image: "/Assets/23.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
  {
    year1: 20,
    year2: 24,
    image: "/Assets/24.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
  },
];

export default function About() {
  const sectionRefs = useRef([]);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowWidth = window.innerWidth;
      const scrollY = window.scrollY;
      const aboutWrapper = document.getElementById("about-main-wrapper");

      if (
        (scrollY > 6500 && windowWidth < 1367) ||
        (scrollY > 6900 && windowWidth < 1458) ||
        (scrollY > 7550 && windowWidth < 1599) ||
        (scrollY > 9250 && windowWidth < 1966)
      ) {
        aboutWrapper?.classList.remove("sticky");
      } else {
        aboutWrapper?.classList.add("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    sectionRefs.current.forEach((section, index) => {
      const textElement = textRefs.current[index];
      const imageElement = imageRefs.current[index];

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
        .fromTo(textElement, { y: "50%" }, { y: "-50%", ease: "none" }, 0)
        .fromTo(imageElement, { y: "-20%" }, { y: "20%", ease: "none" }, 0);

      // Pin effect
      ScrollTrigger.create({
        trigger: section,
        start: "top 14.5%",
        end: "100% 50%",
        pin: index !== timelineData.length - 1,
        pinSpacing: false,
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const formatYear = (year) => {
    return <span>{year}</span>;
  };

  return (
    <>
      <section className="bg-[#fff8ee] overflow-hidden font-[Barlow]">
        {timelineData.map((yearContent, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`container-fluid px-0 relative bg-[#fff8ee] ${
              index % 2 === 0 ? "text-left" : "text-right"
            } h-screen`} // Added h-screen for full viewport height sections
          >
            <div className="absolute left-1/3 top-[5%]">
              <h2 className="text-[15vw] font-bold">
                <span className={index % 2 === 0 ? "text-white" : ""}>
                  {formatYear(yearContent.year1)}
                </span>
                <span className={index % 2 === 0 ? "" : "text-white"}>
                  {formatYear(yearContent.year2)}
                </span>
              </h2>
            </div>
            <div className="flex h-full">
              {" "}
              {/* Added h-full */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 px-0 overflow-hidden">
                    {" "}
                    {/* Added overflow-hidden */}
                    <img
                      ref={(el) => (imageRefs.current[index] = el)}
                      src={yearContent.image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-1/2 flex items-center px-0 mx-0">
                    {" "}
                    {/* Changed to items-center */}
                    <p
                      ref={(el) => (textRefs.current[index] = el)}
                      className="font-bold px-5 text-2xl lg:text-xl mt-[4rem]"
                    >
                      {yearContent.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/2 flex items-center px-0 mx-0">
                    {" "}
                    {/* Changed to items-center */}
                    <p
                      ref={(el) => (textRefs.current[index] = el)}
                      className="font-bold px-5 text-2xl lg:text-xl mt-[4rem]"
                    >
                      {yearContent.description}
                    </p>
                  </div>
                  <div className="w-1/2 px-0 overflow-hidden">
                    {" "}
                    {/* Added overflow-hidden */}
                    <img
                      ref={(el) => (imageRefs.current[index] = el)}
                      src={yearContent.image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
