import { CoverContent } from "./components/CoverContent";
import { ParallaxScene } from "./components/ParallaxScene";
import { useParallaxMouse } from "./hooks/useParallaxMouse";

export default function App() {
  const parallaxRef = useParallaxMouse();

  return (
    <div
      className="absolute inset-0 isolate h-screen overflow-x-hidden overflow-y-auto [--mouse-x:0px] [perspective:100px] [transform-style:preserve-3d]"
      ref={parallaxRef}
    >
      <ParallaxScene />
      <CoverContent />
    </div>
  );
}
