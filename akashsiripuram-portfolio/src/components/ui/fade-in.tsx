"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // distance in pixels
  threshold?: number; // between 0 and 1, percentage of element visible before triggering
}

export const FadeIn = ({
  children,
  className,
  delay = 0,
  duration = 500,
  direction = "up",
  distance = 20,
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    // No need for IntersectionObserver if we're just doing a delay-based animation
    // For simplicity in this demo, we'll just use a timeout
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasAnimated(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  // Determine transform based on direction
  let transform = "translate3d(0, 0, 0)";
  if (direction === "up") transform = `translate3d(0, ${distance}px, 0)`;
  if (direction === "down") transform = `translate3d(0, -${distance}px, 0)`;
  if (direction === "left") transform = `translate3d(${distance}px, 0, 0)`;
  if (direction === "right") transform = `translate3d(-${distance}px, 0, 0)`;

  return (
    <div
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : transform,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};