import { useEffect, useRef } from "react";

// GSAP hook for advanced animations
// This provides a foundation for GSAP integration when the library is added
export const useGSAP = (
  animationCallback: (element: HTMLElement | null) => void,
  dependencies: any[] = []
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      animationCallback(elementRef.current);
    }
  }, dependencies);

  return elementRef;
};

// Timeline hook for complex animation sequences
export const useGSAPTimeline = (
  timelineCallback: (element: HTMLElement | null) => void,
  dependencies: any[] = []
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      timelineCallback(elementRef.current);
    }
  }, dependencies);

  return elementRef;
};

// Hook for scroll-triggered animations
export const useGSAPScrollTrigger = (
  animationCallback: (element: HTMLElement | null) => void,
  triggerOptions: any = {},
  dependencies: any[] = []
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      animationCallback(elementRef.current);
    }
  }, dependencies);

  return elementRef;
};

// Hook for morphing animations
export const useGSAPMorph = (
  morphCallback: (element: HTMLElement | null) => void,
  dependencies: any[] = []
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      morphCallback(elementRef.current);
    }
  }, dependencies);

  return elementRef;
};

// Custom cursor animation hook
export const useGSAPCursor = () => {
  useEffect(() => {
    // This would integrate with GSAP for advanced cursor animations
    // Currently using CSS-based cursor from CustomCursor component
    const handleMouseMove = (e: MouseEvent) => {
      // Advanced cursor animations would go here
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
};

// Text animation hook for staggered reveals
export const useGSAPTextAnimation = (
  text: string,
  animationType: "fade" | "slide" | "typewriter" = "fade"
) => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Split text into spans for individual character animation
      const chars = text.split("");
      textRef.current.innerHTML = chars
        .map((char) => `<span style="display: inline-block;">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");
    }
  }, [text]);

  return textRef;
};
