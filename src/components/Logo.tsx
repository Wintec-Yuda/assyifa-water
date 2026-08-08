type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  mark?: "teal" | "white";
};

/**
 * Logo mark: bentuk tetesan air dengan aksen cincin kuning yang merepresentasikan
 * "segel" tutup galon — menautkan bentuk air dengan pesan "asli & bersegel".
 */
export default function Logo({ className = "", showWordmark = true, mark = "teal" }: LogoProps) {
  const dropFill = mark === "white" ? "#FFFFFF" : "var(--color-brand)";
  const dropFillDark = mark === "white" ? "#EAF6F7" : "var(--color-brand-dark)";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M24 4C24 4 10 21.5 10 30.5C10 38.5 16.5 44 24 44C31.5 44 38 38.5 38 30.5C38 21.5 24 4 24 4Z"
          fill={dropFill}
        />
        <path
          d="M24 4C24 4 10 21.5 10 30.5C10 38.5 16.5 44 24 44V4Z"
          fill={dropFillDark}
          opacity="0.55"
        />
        <circle
          cx="24"
          cy="30"
          r="7"
          fill="none"
          stroke="var(--color-badge)"
          strokeWidth="2.5"
        />
        <path
          d="M16 19C17.5 15.5 20 12.5 22 10.5"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display font-bold text-lg tracking-tight ${
              mark === "white" ? "text-white" : "text-ink"
            }`}
          >
            Assyifa
          </span>
          <span
            className={`font-display font-medium text-xs tracking-[0.2em] uppercase ${
              mark === "white" ? "text-white/80" : "text-brand"
            }`}
          >
            Water
          </span>
        </span>
      )}
    </div>
  );
}
