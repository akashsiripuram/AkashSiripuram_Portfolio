"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FadeIn } from "@/components/ui/fade-in";
import { useState, useEffect, useRef } from "react";
import Experience from "@/components/Experience/Experience";
import { cn } from "@/lib/utils";
import { Projects } from "@/components/Projects/Projects";
import {  SkillsSection } from "@/components/skills/skills";



// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, options]);

  return [ref, isInView];
};

// Scroll-triggered FadeIn component
const ScrollFadeIn = ({ children, delay = 0, duration = 1000, direction = "up", className = "" }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isInView
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${
              direction === 'up' ? 'translate-y-8' :
              direction === 'down' ? '-translate-y-8' :
              direction === 'left' ? 'translate-x-8' :
              direction === 'right' ? '-translate-x-8' : 'translate-y-8'
            }`
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isInView ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
};

export default function Page() {
  const [imageHovered, setImageHovered] = useState(false);
  const words = [
    {
      text: "Akash Siripuram",
      className: "text-blue-500 dark:text-blue-500 sm:font-bold ",
    },
  ];
  return (
    <div className="">
      <BackgroundLines className="flex items-center justify-center w-full flex-col md:flex-row px-4">
        <div className="sm:block md:hidden w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-row my-12 items-center justify-center">
          <FadeIn
            duration={1000}
            direction="up"
            className="flex-1 flex justify-center md:justify-end">
            <div
              className="relative"
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}>
              {/* Gradient border */}
              <div
                className={`absolute inset-0 rounded-full 
                    bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 
                    opacity-70 blur-md transition-all duration-500 ease-in-out
                    ${
                      imageHovered
                        ? "scale-105 opacity-80 blur-lg"
                        : "scale-100"
                    }`}
              />

              {/* Image container */}
              <div
                className="relative p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full overflow-hidden 
                  transition-all duration-300 ease-in-out transform 
                  hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.03]">
                <div className="bg-gray-900 dark:bg-gray-950 p-2 rounded-full">
                  <img
                    src="profile.jpg"
                    alt="Akash Siripuram"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <FadeIn>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Hi , I'm
            </h1>
          </FadeIn>

          <FadeIn delay={300} duration={1000} direction="up">
            <h1 className="text-center">
              <TypewriterEffectSmooth words={words} />
            </h1>
          </FadeIn>
          <FadeIn delay={600} duration={1000} direction="up">
            <p className="mt-4 text-2xl text-gray-700 dark:text-gray-300">
              Web Developer
            </p>
          </FadeIn>
          <FadeIn delay={900} duration={1000} direction="up">
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 text-center leading-relaxed">
              Crafting modern, responsive, and user-focused web applications.
              Passionate about turning ideas into real-world solutions using the
              MERN stack and cutting-edge tools.
            </p>
          </FadeIn>
          <FadeIn delay={1200} duration={1000} direction="up">
            <div className="mt-8 flex gap-4">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-12 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                  Projects
                </span>
              </button>
              <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-1 rounded-full  cursor-pointer font-medium text-sm bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                Contact Me
              </button>
            </div>
          </FadeIn>
        </div>
        <div className="hidden md:block w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-row  items-center justify-center">
          <FadeIn
            delay={600}
            duration={1000}
            direction="left"
            className="flex-1 flex justify-center md:justify-center w-[100%]">
            <div
              className="relative"
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}>
              {/* Gradient border */}
              <div
                className={`absolute inset-0 rounded-full 
                    bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 
                    opacity-70 blur-md transition-all duration-500 ease-in-out
                    ${
                      imageHovered
                        ? "scale-105 opacity-80 blur-lg"
                        : "scale-100"
                    }`}
              />

              {/* Image container */}
              <div
                className="relative  p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full overflow-hidden 
                  transition-all duration-300 ease-in-out transform 
                  hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.03]">
                <div className="bg-gray-900 dark:bg-gray-950 p-2 rounded-full">
                  <img
                    src="profile.jpg"
                    alt="Akash Siripuram"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </BackgroundLines>
      
      {/* Experience Section */}
      <div
        id="experience"
        className="relative flex min-h-screen py-16 w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4">
          <ScrollFadeIn>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Experience
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn delay={300} duration={1000} direction="up">
            <Experience />
          </ScrollFadeIn>
        </div>
      </div>
      
      {/* Projects Section */}
      <div
        id="projects"
        className="relative flex min-h-screen py-16 w-full items-center justify-center bg-white dark:bg-black">
        
        {/* Radial gradient for the container to give a faded look */}
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4">
          <ScrollFadeIn>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Projects
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn delay={300} duration={1000} direction="up">
            <Projects />
          </ScrollFadeIn>
        </div>
      </div>
       <div
        id="skills"
        className="relative flex min-h-screen py-16 w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4">
         
          <ScrollFadeIn>
            <SkillsSection/>
          </ScrollFadeIn>
          
        </div>
      </div>
      <div>
        <h2>Coding Profiles</h2>
       

      </div>
    </div>
  );
}