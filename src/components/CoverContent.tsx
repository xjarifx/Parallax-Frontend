import preview1 from "../assets/game_preview/firewatch-2.jpg";
import preview2 from "../assets/game_preview/firewatch-e3-2.jpg";
import preview3 from "../assets/game_preview/firewatch-e3-5.jpg";
import preview4 from "../assets/game_preview/firewatch_150305_06.png";
import imacIcon from "../assets/platform_icons/imac.png";
import nintendoSwitchIcon from "../assets/platform_icons/nintendo-switch.png";
import playstationIcon from "../assets/platform_icons/playstation-logotype.png";
import xboxIcon from "../assets/platform_icons/xbox-logo.png";
import { SiteButton } from "./SiteButton";

const platforms = [
  { iconSrc: imacIcon, label: "WINDOWS MAC LINUX" },
  { iconSrc: nintendoSwitchIcon, label: "NINTENDO SWITCH" },
  { iconSrc: playstationIcon, label: "PLAYSTATION 4" },
  { iconSrc: xboxIcon, label: "XBOX ONE" },
] as const;

const previews = [
  { src: preview1, alt: "Firewatch forest scene" },
  { src: preview2, alt: "Firewatch green woodland path" },
  { src: preview3, alt: "Firewatch lookout tower interior" },
  { src: preview4, alt: "Firewatch map and mountain view" },
] as const;

export function CoverContent() {
  return (
    <div className="bg-fw-cover absolute top-[calc(100%-105px)] right-0 left-0 z-[99] block min-h-screen [transform:translate3d(0,110vh,1px)] animate-[cover-enter_900ms_cubic-bezier(0.22,1,0.36,1)_forwards] pb-14 motion-reduce:[transform:translate3d(0,0,1px)] motion-reduce:animate-none">
      <div className="mt-72"></div>
      <section
        className="text-fw-accent mx-auto mt-14 w-[min(92vw,900px)] text-center font-serif tracking-[0.16em] max-md:mt-10"
        aria-label="Available platforms"
      >
        <h2 className="m-0 text-[clamp(1.2rem,2vw,1.8rem)] font-medium">
          AVAILABLE NOW FOR $19.99
        </h2>
        <div
          className="mt-[34px] grid grid-cols-2 gap-x-[42px] gap-y-[26px] max-md:grid-cols-1 max-md:gap-[18px]"
          role="list"
        >
          {platforms.map((platform) => (
            <SiteButton
              key={platform.label}
              iconSrc={platform.iconSrc}
              label={platform.label}
              buttonColor="var(--color-fw-accent)"
              hoverColor="#ffffff"
              triangleColor="var(--color-fw-cover)"
              role="listitem"
              href="/coming-soon"
            />
          ))}
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
          className="text-fw-accent mt-16 text-left tracking-[0.01em] max-md:mt-[42px]"
          aria-label="About Firewatch"
        >
          <p className="m-0 text-[clamp(1.3rem,3.2vw,2.7rem)] leading-[1.25] font-bold">
            Firewatch is a mystery set in the Wyoming wilderness, where your
            only emotional lifeline is the person on the other end of a handheld
            radio.
          </p>

          <div className="mt-[34px] grid grid-cols-2 gap-9 text-[clamp(0.9rem,1.45vw,1.55rem)] leading-[1.5] max-md:mt-6 max-md:grid-cols-1 max-md:gap-0 max-md:leading-[1.45]">
            <div>
              <p className="mb-[26px] max-md:mb-[18px]">The year is 1989.</p>
              <p className="mb-[26px] max-md:mb-[18px]">
                You are a man named Henry who has retreated from your messy life
                to work as a fire lookout in the Wyoming wilderness. Perched
                atop a mountain, it&apos;s your job to find smoke and keep the
                wilderness safe.
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
                and into the world below, you&apos;ll explore a wild and unknown
                environment, facing questions and making interpersonal choices
                that can build or destroy the only meaningful relationship you
                have.
              </p>
            </div>
          </div>
        </section>
        <div
          className="mt-[52px] mb-[34px] grid grid-cols-2 gap-12 max-md:mt-[34px] max-md:mb-6 max-md:grid-cols-1 max-md:gap-5"
          role="group"
          aria-label="Additional links"
        >
          <SiteButton
            label="SCREENS & TRAILERS"
            buttonColor="var(--color-fw-ribbon)"
            hoverColor="var(--color-fw-accent)"
            triangleColor="var(--color-fw-cover)"
            buttonClassName="font-serif font-bold tracking-[0.16em]"
            href="/coming-soon"
          />
          <SiteButton
            label="FIREWATCH FAQ"
            buttonColor="var(--color-fw-ribbon)"
            hoverColor="var(--color-fw-accent)"
            triangleColor="var(--color-fw-cover)"
            buttonClassName="font-serif font-bold tracking-[0.16em]"
            href="/coming-soon"
          />
        </div>
        <section
          className="mt-[34px] mb-11 grid grid-cols-2 gap-x-12 gap-y-10 max-md:mt-6 max-md:mb-[30px] max-md:grid-cols-1 max-md:gap-[18px]"
          aria-label="Game preview images"
        >
          {previews.map((preview) => (
            <img
              className="block aspect-video w-full object-cover"
              src={preview.src}
              alt={preview.alt}
              key={preview.alt}
            />
          ))}
        </section>
        <section
          className="text-fw-accent mt-14 text-center max-md:mt-9"
          aria-label="Additional game information"
        >
          <blockquote className="m-0 text-[clamp(1.25rem,3.1vw,2.9rem)] leading-[1.18] font-medium tracking-[0.06em] max-md:leading-[1.25]">
            “AS VISUALLY STRIKING
            <br />
            AS ITS UNIQUE PREMISE.”
          </blockquote>
          <p className="text-fw-ribbon mt-[26px] mb-0 text-[clamp(0.86rem,1.4vw,1.5rem)] font-semibold tracking-[0.18em] max-md:mt-4 max-md:tracking-[0.12em]">
            ENTERTAINMENT WEEKLY
          </p>

          <div
            className="mt-[62px] mb-0 flex justify-center gap-12 max-md:mt-[34px] max-md:gap-5"
            role="group"
            aria-label="Resources"
          >
            <SiteButton
              label="TECH SUPPORT"
              buttonColor="var(--color-fw-ribbon)"
              hoverColor="var(--color-fw-accent)"
              triangleColor="var(--color-fw-cover)"
              buttonClassName="font-serif font-bold tracking-[0.16em]"
              href="/coming-soon"
            />
            <SiteButton
              label="STREAMING & LET'S PLAYS"
              buttonColor="var(--color-fw-ribbon)"
              hoverColor="var(--color-fw-accent)"
              triangleColor="var(--color-fw-cover)"
              buttonClassName="font-serif font-bold tracking-[0.16em]"
              href="/coming-soon"
            />
          </div>

          <p className="mt-14 mb-0 text-[clamp(1.25rem,2.4vw,2.6rem)] font-bold tracking-[0.04em] max-md:mt-[30px]">
            日本語に関する情報
          </p>

          <p className="text-fw-ribbon mx-auto mt-[52px] mb-0 max-w-[760px] text-[clamp(0.7rem,1vw,1.05rem)] leading-[1.45] tracking-[0.12em] max-md:mt-7 max-md:tracking-[0.08em]">
            ©2026 CAMPO SANTO, IN COOPERATION WITH PANIC.
            <br />
            FIREWATCH IS A TRADEMARK OF CAMPO SANTO.
            <br />
            NINTENDO SWITCH IS A TRADEMARK OF NINTENDO.
          </p>

          <div
            className="text-fw-ribbon mt-[72px] mb-14 flex justify-center gap-[66px] text-[clamp(1rem,2.1vw,2.2rem)] font-bold tracking-[0.04em] max-md:mt-[38px] max-md:mb-7 max-md:gap-6"
            aria-hidden="true"
          >
            <span>CAMPO SANTO</span>
            <span>PANIC</span>
          </div>
        </section>
      </section>
    </div>
  );
}
