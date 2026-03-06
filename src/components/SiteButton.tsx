import type { AriaRole, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

type SiteButtonProps = {
  iconSrc?: string;
  label: string;
  buttonColor: string;
  hoverColor?: string;
  triangleColor: string;
  wrapperClassName?: string;
  buttonClassName?: string;
  role?: AriaRole;
  href?: string;
};

export function SiteButton({
  iconSrc,
  label,
  buttonColor,
  hoverColor,
  triangleColor,
  wrapperClassName,
  buttonClassName,
  role,
  href,
}: SiteButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      navigate(href);
    }
  };

  return (
    <div
      className={`w-full bg-[var(--site-triangle-color)] ${wrapperClassName ?? ""}`}
      role={role}
      style={
        {
          "--site-button-color": buttonColor,
          "--site-button-hover-color": hoverColor ?? buttonColor,
          "--site-triangle-color": triangleColor,
        } as CSSProperties
      }
    >
      <button
        className={`text-fw-accent-text flex min-h-[36px] w-full cursor-pointer items-center justify-center gap-3 border-0 bg-[var(--site-button-color)] px-[14px] py-[7px] text-[clamp(0.82rem,1vw,0.96rem)] leading-none font-semibold transition-colors duration-200 [clip-path:polygon(0_0,100%_0,calc(100%-12px)_50%,100%_100%,0_100%,12px_50%)] hover:bg-[var(--site-button-hover-color)] ${buttonClassName ?? ""}`}
        type="button"
        onClick={handleClick}
      >
        {iconSrc ? (
          <img
            className="h-5 w-5 shrink-0 object-contain"
            src={iconSrc}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        ) : null}
        <span>{label}</span>
      </button>
    </div>
  );
}
