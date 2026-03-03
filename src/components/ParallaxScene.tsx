import type { CSSProperties } from "react";

import logo from "../assets/brand_logo/Firewatch.webp";
import layer0 from "../assets/layers/layer_0.png";
import layer1 from "../assets/layers/layer_1.png";
import layer2 from "../assets/layers/layer_2.png";
import layer3 from "../assets/layers/layer_3.png";
import layer4 from "../assets/layers/layer_4.png";
import layer5 from "../assets/layers/layer_5.png";
import layer6 from "../assets/layers/layer_6.png";
import { layerImageBaseClass } from "./styles";

const layerConfigs = [
  {
    depthClass: "[transform:translateZ(-300px)_scale(4)]",
    src: layer0,
    xFactor: 0.25,
    delay: 480,
  },
  {
    depthClass: "[transform:translateZ(-250px)_scale(3.5)]",
    src: layer1,
    xFactor: 0.35,
    delay: 400,
  },
  {
    depthClass: "[transform:translateZ(-200px)_scale(3)]",
    src: layer2,
    xFactor: 0.45,
    delay: 320,
  },
  {
    depthClass: "[transform:translateZ(-150px)_scale(2.5)]",
    src: layer3,
    xFactor: 0.6,
    delay: 240,
  },
  {
    depthClass: "[transform:translateZ(-100px)_scale(2)]",
    src: layer4,
    xFactor: 0.72,
    delay: 160,
  },
  {
    depthClass: "[transform:translateZ(-50px)_scale(1.5)]",
    src: layer5,
    xFactor: 0.85,
    delay: 80,
  },
  {
    depthClass: "[transform:translateZ(0px)_scale(1)]",
    src: layer6,
    xFactor: 1,
    delay: 0,
  },
] as const;

export function ParallaxScene() {
  return (
    <>
      <div className="absolute inset-0 [transform:translateZ(-350px)_scale(4.5)]">
        <img
          className="absolute top-[30%] right-auto bottom-auto left-[50%] block w-[30%] max-w-none [transform:translateX(calc(-50%+(var(--mouse-x)*var(--logo-x-factor))))_translateY(calc(-50%+110vh))] animate-[logo-enter_900ms_cubic-bezier(0.22,1,0.36,1)_forwards] [--logo-x-factor:0.28] [animation-delay:620ms] motion-reduce:[transform:translateX(calc(-50%+(var(--mouse-x)*var(--logo-x-factor))))_translateY(-50%)] motion-reduce:animate-none"
          src={logo}
          alt=""
          aria-hidden="true"
        />
      </div>

      {layerConfigs.map((layer) => (
        <div className={`absolute inset-0 ${layer.depthClass}`} key={layer.src}>
          <img
            className={`${layerImageBaseClass} animate-[layer-enter_900ms_cubic-bezier(0.22,1,0.36,1)_forwards]`}
            style={
              {
                "--x-factor": layer.xFactor,
                animationDelay: `${layer.delay}ms`,
              } as CSSProperties
            }
            src={layer.src}
            alt=""
            aria-hidden="true"
          />
        </div>
      ))}
    </>
  );
}
