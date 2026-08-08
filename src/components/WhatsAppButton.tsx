import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

type WhatsAppButtonProps = {
  message: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function WhatsAppButton({
  message,
  children,
  variant = "solid",
  className = "",
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
  const solid = "bg-wa text-white hover:bg-wa-dark";
  const outline = "border-2 border-ink/15 text-ink hover:border-brand hover:text-brand";

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
    >
      <WhatsAppIcon className="w-4.5 h-4.5" />
      {children}
    </a>
  );
}
