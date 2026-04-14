import { cn } from "@katebtech/core";
import Image from "next/image";
import Link from "next/link";
import type { HzLanguageProps } from "./types";

export const HzLanguage = ({
  hzLanguage,
  href,
  src,
  text,
  className,
}: HzLanguageProps) => {
  if (hzLanguage !== "HZ") {
    return null;
  }

  const label = text ?? "Hazaragi";

  return (
    <Link
      href={href}
      className={cn("inline-flex items-center", className)}
      aria-label={label}
      title={label}
    >
      {text ? (
        <span className="text-sm font-medium leading-none">{text}</span>
      ) : src ? (
        <Image
          src={src}
          alt={label}
          width={24}
          height={18}
          className="h-4 w-auto"
        />
      ) : null}
    </Link>
  );
};
