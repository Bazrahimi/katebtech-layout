import type { OtherLanguageKey } from "@katebtech/core";
type Props = {
    /**
     * Secondary language key used to resolve:
     * - the translated statement copy
     * - the native language label
     * - the card accent styling
     *
     * Example:
     * `"HZ"`
     */
    otherLangKey: OtherLanguageKey;
    /**
     * Organisation name in Hazaragi / Persian script.
     *
     * This is passed into the language statement builder.
     *
     * Example:
     * `"کاتب آفیسز"`
     */
    orgNameHz: string;
};
/**
 * Displays a styled card for one secondary language supported by the organisation.
 *
 * This component:
 * - resolves translated statement paragraphs from `OTHER_LANGUAGES`
 * - shows the language name in its native script
 * - applies a language-specific accent style
 * - renders RTL layout for Hazaragi / Persian-script content
 *
 * Example:
 * ```tsx
 * <SecondaryLanguageCard
 *   otherLangKey="HZ"
 *   orgNameHz="کاتب آفیسز"
 * />
 * ```
 */
export declare const SecondaryLanguageCard: ({ otherLangKey, orgNameHz }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SecondaryLanguageCard.d.ts.map