import type { CSSProperties } from "react";

type SiteButtonProps = {
  iconSrc: string;
  label: string;
  buttonColor: string;
  triangleColor: string;
};

export function SiteButton({
  iconSrc,
  label,
  buttonColor,
  triangleColor,
}: SiteButtonProps) {
  return (
    <div
      className="w-full bg-[var(--site-triangle-color)]"
      role="listitem"
      style={
        {
          "--site-button-color": buttonColor,
          "--site-triangle-color": triangleColor,
        } as CSSProperties
      }
    >
      <button
        className="text-fw-accent-text flex min-h-[42px] w-full items-center justify-center gap-3 border-0 bg-[var(--site-button-color)] px-[14px] py-[10px] text-[clamp(0.9rem,1.1vw,1.05rem)] leading-none font-semibold [clip-path:polygon(0_0,100%_0,calc(100%-12px)_50%,100%_100%,0_100%,12px_50%)]"
        type="button"
      >
        <img
          className="h-5 w-5 shrink-0 object-contain"
          src={iconSrc}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <span>{label}</span>
      </button>
    </div>
  );
}
