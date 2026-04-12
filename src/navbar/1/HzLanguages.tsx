import { cn } from "@katebtech/core";
import Image from "next/image";
import Link from "next/link";
import type { HzLanguageProps } from "./types";

export const HzLanguage = ({
  hzLanguage,
  href,
  src,
  className,
}: HzLanguageProps) => {
  if (hzLanguage !== "HZ") {
    return null;
  }

  return (
    <Link
      href={href}
      className={cn("inline-flex items-center", className)}
      aria-label="Hazaragi"
      title="Hazaragi"
    >
      <Image
        src={src}
        alt="Hazaragi"
        width={24}
        height={18}
        className="h-4 w-auto"
      />
    </Link>
  );
};
