import { useEffect, useRef } from "react";

import layer0 from "./assets/layer_0.png";
import layer1 from "./assets/layer_1.png";
import layer2 from "./assets/layer_2.png";
import layer3 from "./assets/layer_3.png";
import layer4 from "./assets/layer_4.png";
import layer5 from "./assets/layer_5.png";
import layer6 from "./assets/layer_6.png";

export default function App() {
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

  return (
    <div className="parallax" ref={parallaxRef}>
      <div className="parallax__layer parallax__layer__0">
        <img src={layer0} alt="" aria-hidden="true" />
      </div>
      <div className="parallax__layer parallax__layer__1">
        <img src={layer1} alt="" aria-hidden="true" />
      </div>
      <div className="parallax__layer parallax__layer__2">
        <img src={layer2} alt="" aria-hidden="true" />
      </div>
      <div className="parallax__layer parallax__layer__3">
        <img src={layer3} alt="" aria-hidden="true" />
      </div>
      <div className="parallax__layer parallax__layer__4">
        <img src={layer4} alt="" aria-hidden="true" />
      </div>
      <div className="parallax__layer parallax__layer__5">
        <img src={layer5} alt="" aria-hidden="true" />
      </div>
      <div className="parallax__layer parallax__layer__6">
        <img src={layer6} alt="" aria-hidden="true" />
      </div>
      <div className="parallax__cover" />
    </div>
  );
}
