import { useEffect, useRef } from "react";

import logo from "./assets/Firewatch.webp";
import layer0 from "./assets/layer_0.png";
import layer1 from "./assets/layer_1.png";
import layer2 from "./assets/layer_2.png";
import layer3 from "./assets/layer_3.png";
import layer4 from "./assets/layer_4.png";
import layer5 from "./assets/layer_5.png";
import layer6 from "./assets/layer_6.png";
import preview1 from "./assets/game_preview/firewatch-2.jpg";
import preview2 from "./assets/game_preview/firewatch-e3-2.jpg";
import preview3 from "./assets/game_preview/firewatch-e3-5.jpg";
import preview4 from "./assets/game_preview/firewatch_150305_06.png";

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
      <div className="parallax__layer parallax__layer__neg1">
        <img className="parallax__logo" src={logo} alt="" aria-hidden="true" />
      </div>
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
      {/* Content layer */}
      <div className="parallax__cover bg-[var(--cover-color)]">
        <section
          className="mx-auto mt-14 w-[min(92vw,900px)] text-center font-serif tracking-[0.16em] text-[var(--cover-accent)] max-md:mt-10"
          aria-label="Available platforms"
        >
          <h2 className="m-0 text-[clamp(1.2rem,2vw,1.8rem)] font-medium">
            AVAILABLE NOW FOR $19.99
          </h2>
          <div
            className="mt-[34px] grid grid-cols-2 gap-x-[42px] gap-y-[26px] max-md:grid-cols-1 max-md:gap-[18px]"
            role="list"
          >
            <div className="cover-pill-item" role="listitem">
              <span aria-hidden="true">🖥️</span>
              <span>WINDOWS MAC LINUX</span>
            </div>
            <div className="cover-pill-item" role="listitem">
              <span aria-hidden="true">🎮</span>
              <span>NINTENDO SWITCH</span>
            </div>
            <div className="cover-pill-item" role="listitem">
              <span aria-hidden="true">🎮</span>
              <span>PLAYSTATION 4</span>
            </div>
            <div className="cover-pill-item" role="listitem">
              <span aria-hidden="true">🎮</span>
              <span>XBOX ONE</span>
            </div>
          </div>
          <div className="mt-11">
            <iframe
              className="block aspect-video w-full border-0"
              src="https://www.youtube.com/embed/cXWlgP5hZzc"
              title="Firewatch Trailer"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <section
            className="mt-16 text-left tracking-[0.01em] text-[var(--cover-accent)] max-md:mt-[42px]"
            aria-label="About Firewatch"
          >
            <p className="m-0 text-[clamp(1.3rem,3.2vw,2.7rem)] leading-[1.25] font-bold">
              Firewatch is a mystery set in the Wyoming wilderness, where your
              only emotional lifeline is the person on the other end of a
              handheld radio.
            </p>

            <div className="mt-[34px] grid grid-cols-2 gap-9 text-[clamp(0.9rem,1.45vw,1.55rem)] leading-[1.5] max-md:mt-6 max-md:grid-cols-1 max-md:gap-0 max-md:leading-[1.45]">
              <div>
                <p className="mb-[26px] max-md:mb-[18px]">The year is 1989.</p>
                <p className="mb-[26px] max-md:mb-[18px]">
                  You are a man named Henry who has retreated from your messy
                  life to work as a fire lookout in the Wyoming wilderness.
                  Perched atop a mountain, it&apos;s your job to find smoke and
                  keep the wilderness safe.
                </p>
                <p className="mb-0">
                  An especially hot, dry summer has everyone on edge. Your
                  supervisor, a woman named Delilah, is available to you
                </p>
              </div>
              <div>
                <p className="mb-[26px] max-md:mb-[18px]">
                  at all times over a small, handheld radio—and is your only
                  contact with the world you&apos;ve left behind.
                </p>
                <p className="mb-0">
                  But when something strange draws you out of your lookout tower
                  and into the world below, you&apos;ll explore a wild and
                  unknown environment, facing questions and making interpersonal
                  choices that can build or destroy the only meaningful
                  relationship you have.
                </p>
              </div>
            </div>
          </section>
          <div
            className="mt-[52px] mb-[34px] grid grid-cols-2 gap-12 max-md:mt-[34px] max-md:mb-6 max-md:grid-cols-1 max-md:gap-5"
            role="group"
            aria-label="Additional links"
          >
            <button
              className="cover-ribbon-btn text-[clamp(0.88rem,1.2vw,1.35rem)]"
              type="button"
            >
              SCREENS &amp; TRAILERS
            </button>
            <button
              className="cover-ribbon-btn text-[clamp(0.88rem,1.2vw,1.35rem)]"
              type="button"
            >
              FIREWATCH FAQ
            </button>
          </div>
          <section
            className="mt-[34px] mb-11 grid grid-cols-2 gap-x-12 gap-y-10 max-md:mt-6 max-md:mb-[30px] max-md:grid-cols-1 max-md:gap-[18px]"
            aria-label="Game preview images"
          >
            <img
              className="block aspect-video w-full object-cover"
              src={preview1}
              alt="Firewatch forest scene"
            />
            <img
              className="block aspect-video w-full object-cover"
              src={preview2}
              alt="Firewatch green woodland path"
            />
            <img
              className="block aspect-video w-full object-cover"
              src={preview3}
              alt="Firewatch lookout tower interior"
            />
            <img
              className="block aspect-video w-full object-cover"
              src={preview4}
              alt="Firewatch map and mountain view"
            />
          </section>
          <section
            className="mt-14 text-center text-[var(--cover-accent)] max-md:mt-9"
            aria-label="Additional game information"
          >
            <blockquote className="m-0 text-[clamp(1.25rem,3.1vw,2.9rem)] leading-[1.18] font-medium tracking-[0.06em] max-md:leading-[1.25]">
              “AS VISUALLY STRIKING
              <br />
              AS ITS UNIQUE PREMISE.”
            </blockquote>
            <p className="mt-[26px] mb-0 text-[clamp(0.86rem,1.4vw,1.5rem)] font-semibold tracking-[0.18em] text-[#bb5a18] max-md:mt-4 max-md:tracking-[0.12em]">
              ENTERTAINMENT WEEKLY
            </p>

            <div
              className="mt-[62px] grid grid-cols-[1fr_auto_1fr] items-center gap-[18px] max-md:mt-[30px] max-md:grid-cols-1 max-md:gap-4"
              role="group"
              aria-label="Resources"
            >
              <button
                className="cover-ribbon-btn text-[clamp(0.82rem,1.05vw,1.15rem)]"
                type="button"
              >
                TECH SUPPORT
              </button>
              <span
                className="cover-footer-mark-shape mx-auto grid h-[74px] w-[62px] place-items-center border-[6px] border-[#bb5a18] text-[2rem] leading-none text-[#bb5a18] max-md:my-1"
                aria-hidden="true"
              >
                ▲
              </span>
              <button
                className="cover-ribbon-btn text-[clamp(0.82rem,1.05vw,1.15rem)]"
                type="button"
              >
                STREAMING &amp; LET&apos;S PLAYS
              </button>
            </div>

            <p className="mt-14 mb-0 text-[clamp(1.25rem,2.4vw,2.6rem)] font-bold tracking-[0.04em] max-md:mt-[30px]">
              日本語に関する情報
            </p>

            <p className="mx-auto mt-[52px] mb-0 max-w-[760px] text-[clamp(0.7rem,1vw,1.05rem)] leading-[1.45] tracking-[0.12em] text-[#bb5a18] max-md:mt-7 max-md:tracking-[0.08em]">
              ©2026 CAMPO SANTO, IN COOPERATION WITH PANIC.
              <br />
              FIREWATCH IS A TRADEMARK OF CAMPO SANTO.
              <br />
              NINTENDO SWITCH IS A TRADEMARK OF NINTENDO.
            </p>

            <div
              className="mt-[72px] mb-14 flex justify-center gap-[66px] text-[clamp(1rem,2.1vw,2.2rem)] font-bold tracking-[0.04em] text-[#bb5a18] max-md:mt-[38px] max-md:mb-7 max-md:gap-6"
              aria-hidden="true"
            >
              <span>CAMPO SANTO</span>
              <span>PANIC</span>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
