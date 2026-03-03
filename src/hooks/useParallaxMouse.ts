import { useEffect, useRef } from "react";

export function useParallaxMouse() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = parallaxRef.current;

    if (!element) {
      return;
    }

    let targetX = 0;
    let currentX = 0;
    let animationFrame = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      element.style.setProperty("--mouse-x", `${currentX.toFixed(3)}px`);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const onMouseMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const normalizedX = (event.clientX - centerX) / centerX;
      targetX = normalizedX * 10;
    };

    const onMouseLeave = () => {
      targetX = 0;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return parallaxRef;
}
