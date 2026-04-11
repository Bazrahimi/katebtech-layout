
import { cn } from "@katebtech/core";
import Image from "next/image";
import Link from "next/link";
import type { OtherLanguageKey } from "@katebtech/core";

type HzLanguageProps = {
  otherLanguage: OtherLanguageKey[];
  href: string;
  className?: string;
};

export const HzLanguage = ({
  otherLanguage,
  href,
  className,
}: HzLanguageProps) => {
  const hasHz = otherLanguage.includes("HZ");

  if (!hasHz) return null;

  return (
    <Link
      href={href}
      className={cn("inline-flex items-center", className)}
      aria-label="Hazaragi"
      title="Hazaragi"
    >
      <Image
        src="src/assets/hazaristan-flag-icon.svg"
        alt="Hazaragi"
        width={24}
        height={18}
        className="h-4 w-auto"
      />
    </Link>
  );
};
