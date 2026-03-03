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
      <div className="parallax__cover">
        <section className="cover-platforms" aria-label="Available platforms">
          <h2 className="cover-platforms__title">AVAILABLE NOW FOR $19.99</h2>
          <div className="cover-platforms__grid" role="list">
            <div className="cover-platforms__item" role="listitem">
              <span aria-hidden="true">🖥️</span>
              <span>WINDOWS MAC LINUX</span>
            </div>
            <div className="cover-platforms__item" role="listitem">
              <span aria-hidden="true">🎮</span>
              <span>NINTENDO SWITCH</span>
            </div>
            <div className="cover-platforms__item" role="listitem">
              <span aria-hidden="true">🎮</span>
              <span>PLAYSTATION 4</span>
            </div>
            <div className="cover-platforms__item" role="listitem">
              <span aria-hidden="true">🎮</span>
              <span>XBOX ONE</span>
            </div>
          </div>
          <div className="cover-video">
            <iframe
              className="cover-video__frame"
              src="https://www.youtube.com/embed/cXWlgP5hZzc"
              title="Firewatch Trailer"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <section className="cover-story" aria-label="About Firewatch">
            <p className="cover-story__lead">
              Firewatch is a mystery set in the Wyoming wilderness, where your
              only emotional lifeline is the person on the other end of a
              handheld radio.
            </p>

            <div className="cover-story__columns">
              <div>
                <p>The year is 1989.</p>
                <p>
                  You are a man named Henry who has retreated from your messy
                  life to work as a fire lookout in the Wyoming wilderness.
                  Perched atop a mountain, it&apos;s your job to find smoke and
                  keep the wilderness safe.
                </p>
                <p>
                  An especially hot, dry summer has everyone on edge. Your
                  supervisor, a woman named Delilah, is available to you
                </p>
              </div>
              <div>
                <p>
                  at all times over a small, handheld radio—and is your only
                  contact with the world you&apos;ve left behind.
                </p>
                <p>
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
            className="cover-links"
            role="group"
            aria-label="Additional links"
          >
            <button className="cover-links__button" type="button">
              SCREENS &amp; TRAILERS
            </button>
            <button className="cover-links__button" type="button">
              FIREWATCH FAQ
            </button>
          </div>
          <section className="cover-previews" aria-label="Game preview images">
            <img src={preview1} alt="Firewatch forest scene" />
            <img src={preview2} alt="Firewatch green woodland path" />
            <img src={preview3} alt="Firewatch lookout tower interior" />
            <img src={preview4} alt="Firewatch map and mountain view" />
          </section>
          <section
            className="cover-footer"
            aria-label="Additional game information"
          >
            <blockquote className="cover-footer__quote">
              “AS VISUALLY STRIKING
              <br />
              AS ITS UNIQUE PREMISE.”
            </blockquote>
            <p className="cover-footer__source">ENTERTAINMENT WEEKLY</p>

            <div
              className="cover-footer__ribbons"
              role="group"
              aria-label="Resources"
            >
              <button className="cover-footer__ribbon" type="button">
                TECH SUPPORT
              </button>
              <span className="cover-footer__mark" aria-hidden="true">
                ▲
              </span>
              <button className="cover-footer__ribbon" type="button">
                STREAMING &amp; LET&apos;S PLAYS
              </button>
            </div>

            <p className="cover-footer__jp">日本語に関する情報</p>

            <p className="cover-footer__legal">
              ©2026 CAMPO SANTO, IN COOPERATION WITH PANIC.
              <br />
              FIREWATCH IS A TRADEMARK OF CAMPO SANTO.
              <br />
              NINTENDO SWITCH IS A TRADEMARK OF NINTENDO.
            </p>

            <div className="cover-footer__brands" aria-hidden="true">
              <span>CAMPO SANTO</span>
              <span>PANIC</span>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
