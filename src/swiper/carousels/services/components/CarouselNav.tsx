"use client";
import { Button, cn } from "@katebtech/core";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import type { ReactNode } from "react";

type Props = {
  prevClass: string;
  nextClass: string;
  className?: string;
};

export default function CarouselNav({
  prevClass,
  nextClass,
  className,
}: Props) {
  return (
    <div
      className={
        className ??
        "pointer-events-none absolute inset-y-0 right-0 left-0 z-10 flex items-center justify-between px-2 sm:px-3"
      }
    >
      <CarouselNavButton ariaLabel="Previous slide" className={prevClass}>
        <FiChevronLeft aria-hidden className="h-4 w-4" />
      </CarouselNavButton>

      <CarouselNavButton ariaLabel="Next slide" className={nextClass}>
        <FiChevronRight aria-hidden className="h-4 w-4" />
      </CarouselNavButton>
    </div>
  );
}

type ButtonProps = {
  ariaLabel: string;
  className: string;
  children: ReactNode;
};

const CarouselNavButton = ({ ariaLabel, className, children }: ButtonProps) => {
  return (
    <Button
      aria-label={ariaLabel}
      className={cn(className, "pointer-events-auto")}
    >
      {children}
    </Button>
  );
};
