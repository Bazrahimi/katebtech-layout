import { MdPhone } from "react-icons/md";

import { Button, P } from "@katebtech/core";
import type { HeroCtaProps } from "./types";

/**
 * Hero call-to-action row with:
 * - a primary CTA button
 * - an optional clickable phone number
 * - a secondary contact button
 *
 * Designed for hero sections where users should be able to quickly
 * request a quote, call directly, or navigate to the contact page.
 *
 * @param props - Component props.
 * @returns Hero CTA action group.
 */
export const HeroCta = ({
  quoteHref,
  contactHref,
  label,
  phone,
  contactLabel = "Contact Us",
}: HeroCtaProps) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-between p-5">
      <Button as="link" href={quoteHref} size="md">
        {label}
      </Button>

      {phone !== "" && (
        <P className="rounded-md bg-gray-50 px-3 py-2 text-center">
          <a href={`tel:${phone}`} className="inline-flex items-center gap-2">
            <MdPhone className="text-lg" />
            {phone}
          </a>
        </P>
      )}

      <Button as="link" href={contactHref} variant="outline" size="md">
        {contactLabel}
      </Button>
    </div>
  );
};
