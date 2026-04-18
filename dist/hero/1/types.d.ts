import type { ImageProps } from "next/image";
import type { LinkProps } from "next/link";
import type { OtherLanguageKey } from "@katebtech/core";
export type HomeHeroProps = {
    className?: string;
};
export type HeroHeadAndDescProps = {
    /**
     * Main organisation or business name shown as the primary hero heading.
     */
    orgName: string;
    /**
     * Optional Hazaragi/Persian-script organisation name shown as a secondary heading.
     */
    orgNameHz?: string;
    /**
     * Enabled additional language keys for the current organisation or page.
     *
     * Used to determine whether the alternate language heading should be shown.
     */
    otherLangKeys?: string[];
    /**
     * Optional supporting hero description shown below the heading.
     */
    description?: string;
};
export type HeroLogoVisualCardProps = {
    /**
     * Organisation or business name used for the logo image alt text.
     */
    orgName: string;
    /**
     * Optional short slogan or supporting line shown below the logo.
     *
     * @default "Clear Communication"
     */
    slogan?: string;
    /**
     * Logo image source passed to Next.js `Image`.
     */
    src: ImageProps["src"];
};
export type HeroCtaProps = {
    /**
     * Link destination for the primary quote or enquiry action.
     */
    quoteHref: LinkProps["href"];
    /**
     * Link destination for the contact page or contact action.
     */
    contactHref: LinkProps["href"];
    /**
     * Label shown on the primary CTA button.
     *
     * Example:
     * "Get a Free Quote"
     */
    label: string;
    /**
     * Phone number displayed as a clickable `tel:` link.
     *
     * Pass an empty string to hide the phone block.
     */
    phone: string;
    /**
     * Label shown on the secondary contact button.
     *
     * @default "Contact Us"
     */
    contactLabel?: string;
};
export type MultilingualSupportProps = {
    /**
     * Additional supported language keys to display beside English.
     *
     * Example:
     * `["HZ"]`
     */
    otherLangKeys?: OtherLanguageKey[];
};
export type HeroBackgroundProps = {
    orgName: string;
    /**
     * Background image source passed to Next.js `Image`.
     */
    src: ImageProps["src"];
    /**
     * Tailwind overlay opacity/background class.
     *
     * Example:
     * "bg-black/55"
     * "bg-black/40"
     * "bg-black/70"
     *
     * @default "bg-black/55"
     */
    overlayClassName?: string;
};
//# sourceMappingURL=types.d.ts.map