"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FadeIn } from "@/components/ui/fade-in";
import { useState, useEffect, useRef } from "react";
import Experience from "@/components/Experience/Experience";
import { cn } from "@/lib/utils";
import { Projects } from "@/components/Projects/Projects";
import { SkillsSection } from "@/components/skills/skills";
import CodingStats from "@/components/CodingProfiles/leetcode";
import Achievements from "@/components/Achievements/Achievements";
import Footer from "@/components/contact/contact";

// Enhanced hook for intersection observer with multiple thresholds
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersectionRatio(entry.intersectionRatio);
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '-20px 0px',
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

  return [ref, isInView, intersectionRatio];
};

// Enhanced Scroll-triggered component with smooth reveal
const SmoothScrollReveal = ({ 
  children, 
  delay = 0, 
  duration = 800, 
  direction = "up", 
  className = "",
  distance = 50,
  easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
}) => {
  const [ref, isInView, ratio] = useInView();
  
  // Calculate transform based on intersection ratio for smoother effect
  const getTransform = () => {
    if (isInView) return 'translate3d(0, 0, 0)';
    
    const progress = Math.max(0, ratio);
    const moveDistance = distance * (1 - progress);
    
    switch (direction) {
      case 'up': return `translate3d(0, ${moveDistance}px, 0)`;
      case 'down': return `translate3d(0, -${moveDistance}px, 0)`;
      case 'left': return `translate3d(${moveDistance}px, 0, 0)`;
      case 'right': return `translate3d(-${moveDistance}px, 0, 0)`;
      default: return `translate3d(0, ${moveDistance}px, 0)`;
    }
  };

  const getOpacity = () => {
    if (isInView) return 1;
    return Math.max(0, ratio * 2); // Fade in more gradually
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        transition: isInView ? `all ${duration}ms ${easing} ${delay}ms` : 'none',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};

// Staggered animation container for multiple children
const StaggerContainer = ({ children, staggerDelay = 100, className = "" }) => {
  return (
    <div className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <SmoothScrollReveal 
              key={index} 
              delay={index * staggerDelay}
              duration={600}
              direction="up"
            >
              {child}
            </SmoothScrollReveal>
          ))
        : children
      }
    </div>
  );
};

// Parallax scroll effect hook
const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

// Smooth scroll to section function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

export default function Page() {
  const [imageHovered, setImageHovered] = useState(false);
  const parallaxOffset = useParallax(0.3);
  
  // Add smooth scrolling to the entire document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

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
              <button 
                onClick={() => scrollToSection('projects')}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-12 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                  Projects
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-1 rounded-full cursor-pointer font-medium text-sm bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                Contact Me
              </button>
            </div>
          </FadeIn>
        </div>
        
        <div className="hidden md:block w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-row items-center justify-center">
          <FadeIn
            delay={600}
            duration={1000}
            direction="left"
            className="flex-1 flex justify-center md:justify-center w-[100%]">
            <div
              className="relative"
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
              style={{ transform: `translateY(${parallaxOffset}px)` }}>
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
      </BackgroundLines>
      
      {/* Experience Section */}
      <div
        id="experience"
        className="relative flex min-h-screen py-16 w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
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
          <SmoothScrollReveal duration={800} direction="up">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Experience
            </h1>
          </SmoothScrollReveal>
          <SmoothScrollReveal delay={200} duration={1000} direction="up" distance={60}>
            <Experience />
          </SmoothScrollReveal>
        </div>
      </div>
      
      {/* Projects Section */}
      <div
        id="projects"
        className="relative flex min-h-screen py-16 w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4">
          <SmoothScrollReveal duration={800} direction="down">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Projects
            </h1>
          </SmoothScrollReveal>
          <SmoothScrollReveal delay={200} duration={1000} direction="up" distance={80}>
            <Projects />
          </SmoothScrollReveal>
        </div>
      </div>
      
      {/* Skills Section */}
      <div
        id="skills"
        className="relative flex min-h-screen py-16 w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
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
        
        <div className="relative z-10 flex flex-col items-center  justify-center w-full max-w-7xl px-4 ">
          <SmoothScrollReveal duration={800} direction="left" distance={100}>
            <SkillsSection/>
          </SmoothScrollReveal>
        </div>
      </div>
      
      {/* Coding Stats Section */}
      <div className="text-center py-16 bg-white dark:bg-black overflow-hidden flex flex-col items-center justify-center w-full">
        <SmoothScrollReveal duration={1000} direction="up" distance={60}>
          <CodingStats />
        </SmoothScrollReveal>
      </div>
      
      {/* Achievements */}
      <div className="overflow-hidden">
        <SmoothScrollReveal duration={800} direction="right" distance={80}>
          <Achievements/>
        </SmoothScrollReveal>
      </div>
      
      {/* Footer */}
      <div id="contact" className="overflow-hidden">
        <SmoothScrollReveal duration={800} direction="up" distance={40}>
          <Footer/>
        </SmoothScrollReveal>
      </div>
    </div>
  );
}