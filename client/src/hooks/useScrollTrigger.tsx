import { useEffect, useRef, useCallback } from "react";

interface ScrollTriggerOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  reverse?: boolean;
}

// Hook for scroll-triggered animations using Intersection Observer
export const useScrollTrigger = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: ScrollTriggerOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggered = useRef(false);

  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
    reverse = false
  } = options;

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!hasTriggered.current || !triggerOnce) {
            callback(entry);
            if (triggerOnce) {
              hasTriggered.current = true;
            }
          }
        } else if (reverse && hasTriggered.current) {
          callback(entry);
        }
      });
    },
    [callback, triggerOnce, reverse]
  );

  useEffect(() => {
    if (elementRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold,
        rootMargin
      });

      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection, threshold, rootMargin]);

  return elementRef;
};

// Hook for parallax scrolling effects
export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        elementRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return elementRef;
};

// Hook for scroll-based animations with progress
export const useScrollProgress = (
  callback: (progress: number) => void,
  options: { start?: number; end?: number } = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const { start = 0, end = 1 } = options;

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate progress based on element position
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        let progress = 0;
        
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const visibleHeight = Math.min(windowHeight - elementTop, elementHeight);
          progress = visibleHeight / elementHeight;
        }
        
        // Apply start and end bounds
        progress = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        
        callback(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, start, end]);

  return elementRef;
};

// Hook for staggered scroll animations
export const useStaggeredScrollTrigger = (
  items: number,
  callback: (index: number, entry: IntersectionObserverEntry) => void,
  delay: number = 0.1
) => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    elementsRef.current.forEach((element, index) => {
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  callback(index, entry);
                }, delay * index * 1000);
                observer.unobserve(element);
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
          }
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [items, callback, delay]);

  const setRef = useCallback((index: number) => (el: HTMLElement | null) => {
    elementsRef.current[index] = el;
  }, []);

  return setRef;
};

// Hook for scroll-triggered text reveals
export const useScrollTextReveal = (
  animationType: "fade" | "slide" | "split" = "fade"
) => {
  const textRef = useRef<HTMLElement>(null);

  const elementRef = useScrollTrigger((entry) => {
    if (textRef.current && entry.isIntersecting) {
      switch (animationType) {
        case "fade":
          textRef.current.style.opacity = "1";
          textRef.current.style.transform = "translateY(0)";
          break;
        case "slide":
          textRef.current.style.transform = "translateX(0)";
          textRef.current.style.opacity = "1";
          break;
        case "split":
          // Split text animation would go here
          textRef.current.style.opacity = "1";
          break;
      }
    }
  });

  useEffect(() => {
    if (textRef.current) {
      // Set initial states
      switch (animationType) {
        case "fade":
          textRef.current.style.opacity = "0";
          textRef.current.style.transform = "translateY(30px)";
          textRef.current.style.transition = "all 0.6s ease-out";
          break;
        case "slide":
          textRef.current.style.transform = "translateX(-50px)";
          textRef.current.style.opacity = "0";
          textRef.current.style.transition = "all 0.7s ease-out";
          break;
        case "split":
          textRef.current.style.opacity = "0";
          textRef.current.style.transition = "opacity 0.6s ease-out";
          break;
      }
    }
  }, [animationType]);

  // Merge refs
  const mergedRef = useCallback((node: HTMLElement | null) => {
    textRef.current = node;
    if (typeof elementRef === 'function') {
      elementRef(node);
    } else if (elementRef && 'current' in elementRef) {
      (elementRef as any).current = node;
    }
  }, [elementRef]);

  return mergedRef;
};
