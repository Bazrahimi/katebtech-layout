"use client";

import { cn, P } from "@katebtech/core";
import { FooterHeader } from "./FooterHeader";

type Props = {
  /**
   * Organisation or business name inserted into the acknowledgement text.
   *
   * Example:
   * "Austax Accounting"
   */
  orgName: string;

  /**
   * Whether to show the Hazara acknowledgement paragraph.
   *
   * @default true
   */
  showHazara?: boolean;

  /**
   * Optional className for the outer section wrapper.
   */
  className?: string;

  /**
   * Optional className for the heading component.
   *
   * Useful when a website needs different heading colour, spacing, or font.
   */
  headerClassName?: string;

  /**
   * Optional className applied to both acknowledgement paragraphs.
   *
   * Useful when a website needs different text colour, spacing, or typography.
   */
  paragraphClassName?: string;
};

/**
 * Reusable acknowledgement section for website footers or lower-page content.
 *
 * This component renders:
 * - an Acknowledgement of Country
 * - an optional Hazara community acknowledgement
 *
 * Example:
 * `<Acknowledgement orgName={op.orgName} />`
 */
export const Acknowledgement = ({
  orgName,
  showHazara = true,
  className,
  headerClassName,
  paragraphClassName,
}: Props) => {
  return (
    <section
      aria-labelledby="ack-heading"
      className={cn("mx-auto mt-10 max-w-7xl px-6", className)}
      role="region"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border border-black/10 bg-app-s-dark p-4 sm:p-5",
        )}
      >
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-1.5 bg-[linear-gradient(to_bottom,#000000,#CC0000,#FFFF00)]"
        />

        <FooterHeader className={headerClassName}>
          Acknowledgements
        </FooterHeader>

        <P className={cn("text-gray-100", paragraphClassName)} size="sm">
          {orgName} acknowledges the Bunurong people of the Kulin Nation as the
          Traditional Custodians of the lands and waters in and around Greater
          Dandenong. We pay our respects to Elders past and present and extend
          that respect to all Aboriginal and Torres Strait Islander peoples. We
          honour their enduring connection to Country, culture, and community.
        </P>

        {showHazara ? (
          <P className={cn("mt-3 text-gray-100", paragraphClassName)} size="sm">
            We also acknowledge Australian Hazara communities and their valued
            contributions to a more connected, compassionate, and inclusive
            Australia. We recognise the historical genocide and enduring
            persecution of Hazara people. As with First Nations stories, we
            honour the strength of those who carry this history while protecting
            culture, sustaining community, and building belonging across
            generations.
          </P>
        ) : null}
      </div>
    </section>
  );
};
