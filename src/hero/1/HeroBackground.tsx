import { cn, IMAGE_DEFAULT_BLUR } from "@katebtech/core";
import Image from "next/image";
import type { HeroBackgroundProps } from "./types";

export const HeroBackground = ({
  orgName,
  src,
  overlayClassName = "bg-black/20",
}: HeroBackgroundProps) => {
  return (
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={`${orgName} hero background`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL={IMAGE_DEFAULT_BLUR}
      />

      <div
        className={cn("absolute inset-0", overlayClassName)}
        aria-hidden="true"
      />
    </div>
  );
};
