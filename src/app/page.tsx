"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import Link from "next/link";
import TypingAnimation from "@/components/typing-animation";
import { ArrowDown } from "lucide-react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger)
    // const lines = gsap.utils.toArray<HTMLElement>(".about-line");
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: aboutRef.current,
    //     start: "top top",
    //     end: `+=${lines.length * 200}`, // adjust scroll distance
    //     scrub: true,
    //     pin: true,
    //     markers: true, // remove in prod
    //   },
    // });

    // lines.forEach((line, i) => {
    //   tl.to(line, { opacity: 1, y: 0, duration: 0.5 }, i * 0.5); // staggered
    // });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-gradient-to-b from-[#fffdf0]/80 to-transparent backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="font-light text-[#a97746] text-xl">eg</div>
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="font-light text-[#a97746] hover:text-[#d4a373] transition-colors"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="font-light text-[#a97746] hover:text-[#d4a373] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(connectRef)}
              className="font-light text-[#a97746] hover:text-[#d4a373] transition-colors"
            >
              Connect
            </button>
          </div>
        </div>
      </nav>

      <section className="h-screen snap-start flex items-center justify-center bg-gradient-to-b from-[#fefae0] to-[#f0d7aa]">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row gap-24 items-center justify-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-extralight mb-4 text-[#a97746]">
                Hi, I'm Erika 👋
              </h1>
              <div className="mb-6 text-xl text-[#a97746]">
                <TypingAnimation
                  phrases={[
                    "a developer",
                    "an aspiring software engineer",
                    "an undergrad student",
                    "a UI/UX designer",
                    "a nature lover",
                    "a dancer",
                  ]}
                  delayBetweenPhrases={4000}
                />
              </div>
              <p className="text-sm font-light text-[#a97746]/80 max-w-sm">
                Computer science student at the University of California, Davis
                with a passion for coding and learning.
              </p>
              <div className="mt-8 animate-bounce">
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="text-[#a97746] hover:text-[#d4a373] transition-colors"
                >
                  <ArrowDown size={24} />
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="./home-image.jpg"
                className="max-w-116 h-auto object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={aboutRef}
        className="h-screen snap-start flex items-center bg-gradient-to-b from-[#f0d7aa] to-[#ccd5ae]"
      >
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="flex mb-8">
            <h2 className="text-3xl font-extralight text-[#a97746]">
              About Me
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-16">
            <div className="max-w-md animate-on-scroll opacity-0 transition-opacity duration-1000">
              <p className="mb-4 font-light text-[#a97746]">
                I am a...{" "}
                <span className="text-[#d4a373]">
                  second year University of California, Davis student, B.S.
                  Computer Science.
                </span>
              </p>
              <p className="mb-4 font-light text-[#a97746]">
                I'm from...{" "}
                <span className="text-[#d4a373]">
                  Fremont, California (I &lt;3 the bay)
                </span>
              </p>
              <p className="mb-4 font-light text-[#a97746]">
                I look for...{" "}
                <span className="text-[#d4a373]">
                  most opportunities and challenges, since I have dedicated
                  myself to the versatility of computer science and learning as
                  much as I can.
                </span>
              </p>
              <p className="mb-4 font-light text-[#a97746]">
                My hobbies are...{" "}
                <span className="text-[#d4a373]">
                  hiphop dance and baking.
                </span>
              </p>
              <p className="mb-4 font-light text-[#a97746]">
                In my free time...{" "}
                <span className="text-[#d4a373]">
                  I like to play The Legend of Zelda, BOTW/TOTK.
                </span>
              </p>
            </div>
            <div className="flex-1 flex gap-4 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-300">
              <img
                src="./about-me-image.jpg"
                className="max-w-80 h-auto object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={projectsRef}
        className="h-screen snap-start flex items-center bg-gradient-to-b from-[#ccd5ae] to-[#a5b27c]"
      >
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="flex mb-12">
            <h2 className="text-3xl font-extralight text-[#a97746]">
              Some things I've worked on
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 mb-12 justify-center">
            <div className="bg-[#fefae0] p-6 w-72 rounded-md shadow-sm animate-on-scroll opacity-0 transition-opacity duration-1000">
              <h3 className="font-light mb-3 text-[#a97746] text-xl">
                Drink Dispenser
              </h3>
              <p className="text-sm font-light text-[#a97746]/80 leading-relaxed">
                Worked with a team to build an automated drink dispenser.
                Developed a responsive React.js and Tailwind CSS website for
                user control.
              </p>
            </div>
            <div className="bg-[#fefae0] p-6 w-72 rounded-md shadow-sm animate-on-scroll opacity-0 transition-opacity duration-1000 delay-300">
              <h3 className="font-light mb-3 text-[#a97746] text-xl">
                #include Client Project
              </h3>
              <p className="text-sm font-light text-[#a97746]/80 leading-relaxed">
                Developed a React.js and Sass.scss client website for UC Davis
                Best Buddies Club, implementing interactive features and
                responsive mobile components that match the design team's Figma
                prototypes.
              </p>
            </div>
          </div>

          <div className="flex justify-center animate-on-scroll opacity-0 transition-opacity duration-1000 delay-700">
            <Link
              href="https://pxl.to/6uw71wid"
              target="_blank"
              className="text-sm font-light px-6 py-2 border border-[#a97746] text-[#a97746] rounded-full hover:bg-[#a97746] hover:text-white transition-all"
            >
              View full resume
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={connectRef}
        className="h-screen snap-start flex items-center bg-gradient-to-b from-[#a5b27c] to-[#fefae0]"
      >
        <div className="max-w-5xl mx-auto px-6 w-full">
          <h2 className="text-3xl font-extralight mb-16 text-center text-[#a97746]">
            Connect with me!
          </h2>

          <div className="flex flex-wrap justify-center gap-8 animate-on-scroll opacity-0 transition-opacity duration-1000">
            <a
              href="https://www.linkedin.com/in/erika-gosti/"
              target="_blank"
              className="font-light text-[#a97746] hover:text-[#d4a373] transition-colors px-4 py-2 border-b border-transparent hover:border-[#d4a373]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/erikagosti"
              target="_blank"
              className="font-light text-[#a97746] hover:text-[#d4a373] transition-colors px-4 py-2 border-b border-transparent hover:border-[#d4a373]"
            >
              GitHub
            </a>
            <a
              href="https://ucdavis.joinhandshake.com/profiles/urm4bp"
              target="_blank"
              className="font-light text-[#a97746] hover:text-[#d4a373] transition-colors px-4 py-2 border-b border-transparent hover:border-[#d4a373]"
            >
              Handshake
            </a>
            <a
              href="erika.gosti@gmail.com"
              target="_blank"
              className="font-light text-[#a97746] hover:text-[#d4a373] transition-colors px-4 py-2 border-b border-transparent hover:border-[#d4a373]"
            >
              Email
            </a>
            <a
              href="5107389827"
              target="_blank"
              className="font-light text-[#a97746] hover:text-[#d4a373] transition-colors px-4 py-2 border-b border-transparent hover:border-[#d4a373]"
            >
              Phone Number
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
