import type { OtherLanguageKey } from "@katebtech/core";
type Props = {
    /**
     * List of additional supported language keys to display.
     *
     * These are used to:
     * - build the English summary sentence
     * - render one `SecondaryLanguageCard` per language
     *
     * Example:
     * `["HZ", "FA"]`
     */
    otherLangKeys: OtherLanguageKey[];
    /**
     * Organisation name in English.
     *
     * Used in the English heading and summary copy.
     *
     * Example:
     * `"Kateb Offices"`
     */
    orgName: string;
    /**
     * Organisation name in Hazaragi / Persian script.
     *
     * Passed to each `SecondaryLanguageCard` for translated copy.
     *
     * Example:
     * `"کاتب آفیسز"`
     */
    orgNameHz: string;
};
/**
 * Displays the organisation's multilingual communication capacity.
 *
 * This section:
 * - shows an English summary of supported additional languages
 * - renders the primary language statement from `PRIMARY_LANGUAGE.statement`
 * - displays one secondary language card for each language in `otherLangKeys`
 *
 * The supported language names are resolved from `OTHER_LANGUAGES`
 * using each language key's English label.
 *
 * Example:
 * ```tsx
 * <MultiLanguageCapacity
 *   otherLangKeys={["HZ"]}
 *   orgName="Kateb Offices"
 *   orgNameHz="کاتب آفیسز"
 * />
 * ```
 */
export declare const MultiLanguageCapacity: ({ otherLangKeys, orgName, orgNameHz, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MultiLanguageCapacity.d.ts.map