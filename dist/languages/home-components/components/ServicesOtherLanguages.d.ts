import { type OtherLanguageKey } from "@katebtech/core";
type Props = {
    /**
     * Service title shown in Persian / Hazaragi script.
     *
     * Used as:
     * - the card heading
     * - the `aria-label` for the article
     *
     * Example:
     * `"خدمات انتقال ملک"`
     */
    serviceLabelFarsi: string;
    /**
     * Translated subcategory labels displayed inside the list.
     *
     * Example:
     * `["خرید خانه", "فروش خانه", "انتقال ملک"]`
     */
    subcategoryLabelsFarsi: readonly string[];
    /**
     * Available secondary language keys for linking to translated content.
     *
     * The first item is currently used by the `HzLanguage` link.
     *
     * Example:
     * `["HZ"]`
     */
    otherLangKeys: readonly OtherLanguageKey[];
    /**
     * Image source passed to the `HzLanguage` component.
     */
    src: string;
    /**
     * Destination URL passed to the translated language link.
     *
     * Example:
     * `"/hz/services/buying-property-conveyancing"`
     */
    href: string;
    /**
     * Optional additional wrapper classes.
     */
    className?: string;
};
/**
 * Displays a right-to-left service summary card for translated service content.
 *
 * This component:
 * - shows the translated service heading
 * - provides a language switch / translated content link
 * - renders translated subcategory labels in a two-column grid list
 * - uses RTL layout for Persian / Hazaragi presentation
 *
 * The first item in `otherLangKeys` is used for the `HzLanguage` link component.
 *
 * Example:
 * ```tsx
 * <ServicesOtherLanguages
 *   serviceLabelFarsi="خدمات انتقال ملک"
 *   subcategoryLabelsFarsi={["خرید خانه", "فروش خانه"]}
 *   otherLangKeys={["HZ"]}
 *   src="/images/hz-flag.svg"
 *   href="/hz/services/property-transfer"
 * />
 * ```
 */
export declare const ServicesOtherLanguages: ({ serviceLabelFarsi, subcategoryLabelsFarsi, otherLangKeys, src, href, className, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ServicesOtherLanguages.d.ts.map