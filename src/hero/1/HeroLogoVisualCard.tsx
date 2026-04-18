import { P } from "@katebtech/core";
import Image from "next/image";
import type { HeroLogoVisualCardProps } from "./types";

/**
 * Renders a hero logo card with:
 * - a centred organisation logo
 * - an optional slogan beneath the logo
 *
 * Useful in hero sections where the brand mark should be presented
 * as a highlighted visual element beside the main heading content.
 *
 * @param props - Component props.
 * @returns Hero logo visual card.
 */
export const HeroLogoVisualCard = ({
  orgName,
  slogan = "Clear Communication",
  src,
}: HeroLogoVisualCardProps) =>{
  return (
    <div className="lg:col-span-5 flex flex-col items-center justify-center">
      <div className="rounded-3xl bg-white/40 px-8 py-8 text-center">
        <div className="flex justify-center">
          <Image
            src={src}
            alt={`${orgName} Logo`}
            width={220}
            height={220}
            className="w-[140px] h-auto object-contain sm:w-[170px] lg:w-[210px]"
            priority
          />
        </div>

        <P className="mt-6 text-center text-app-s-dark font-extrabold" size="lg">
          {slogan}
        </P>
      </div>
    </div>
  );
};
