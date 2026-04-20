import type { CtaPresetsKey, LanguageLocal } from "@katebtech/core";
type Props = {
    /**
     * CTA preset key used to resolve the heading, button label, and default message copy.
     *
     * Example:
     * `"freeConsultation"`
     */
    CtaPresetsKey: CtaPresetsKey;
    /**
     * Basic organisation profile data used inside CTA copy.
     *
     * - `orgName` is used for English copy
     * - `orgNameHz` is used for Hazaragi / RTL copy
     */
    orgProfile: {
        /**
         * Organisation name in English.
         *
         * Example:
         * `"Kateb Tech"`
         */
        orgName: string;
        /**
         * Organisation name in Hazaragi / Persian script.
         *
         * Example:
         * `"کاتب تک"`
         */
        orgNameHz: string;
    };
    /**
     * Route builders used for CTA links.
     */
    routes: {
        /**
         * Returns the contact page path.
         *
         * Example:
         * `() => "/contact-us"`
         */
        contact: () => string;
        /**
         * Returns the free consultation / enquiry form page path.
         *
         * Example:
         * `() => "/free-consultation"`
         */
        freeConsultation: () => string;
    };
    /**
     * Active language for the CTA copy and direction.
     *
     * @default "EN"
     */
    languageLocal?: LanguageLocal;
    /**
     * Optional service label shown in English mode and passed into the CTA query.
     *
     * Example:
     * `"Buying Property Conveyancing"`
     */
    serviceLabel?: string;
    /**
     * Optional translated service label used in Hazaragi / RTL mode.
     *
     * Falls back to `serviceLabel` if not provided.
     *
     * Example:
     * `"خدمات انتقال ملک"`
     */
    serviceLabelFarsi?: string;
    /**
     * Enables the general enquiry version of the card.
     *
     * When enabled:
     * - the card uses a darker gradient theme
     * - a general enquiry heading is shown
     * - a secondary contact button is rendered
     */
    generalEnquiry?: boolean;
    /**
     * Optional additional wrapper classes.
     */
    className?: string;
    /**
     * Optional heading override for special pages.
     *
     * When provided, this replaces the default CTA heading label in the query
     * string and rendered heading.
     */
    headingOverride?: string;
};
/**
 * Reusable service CTA card for service pages and general enquiry sections.
 *
 * This component:
 * - resolves CTA copy from a preset key
 * - supports English and Hazaragi / RTL display
 * - optionally injects a service label into the CTA message
 * - builds a prefilled link to the consultation form
 * - can also render a general enquiry variation with a second contact button
 *
 * Query params passed to the consultation page include:
 * - `headingLabel`
 * - `serviceLabel`
 * - `message`
 * - `CtaPresetsKey`
 * - `languageLocal`
 *
 * Example:
 * ```tsx
 * <ServiceCTA
 *   CtaPresetsKey="freeConsultation"
 *   orgProfile={{ orgName: "Settle & Secure", orgNameHz: "ستل اند سکیور" }}
 *   routes={{
 *     contact: () => "/contact-us",
 *     freeConsultation: () => "/free-consultation",
 *   }}
 *   languageLocal="EN"
 *   serviceLabel="Buying Property Conveyancing"
 * />
 * ```
 */
export default function ServiceCTA({ CtaPresetsKey, orgProfile, routes, languageLocal, serviceLabel, serviceLabelFarsi, generalEnquiry, className, headingOverride, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ServiceCTA.d.ts.map