import type { CtaPresetsKey, LanguageLocal } from "@katebtech/core";
import {

  cn,
  ctaCall,
  ctaCallHz,
  getCtaCopy,
  Header,
  P,
} from "@katebtech/core";
import { Button } from "../button";

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
export const ServiceCTA = ({
  CtaPresetsKey,
  orgProfile,
  routes,
  languageLocal = "EN",
  serviceLabel,
  serviceLabelFarsi,
  generalEnquiry,
  className,
  headingOverride,
}: Props) => {
  const copy = getCtaCopy(CtaPresetsKey, languageLocal);
  const dir = copy.dir;

  const resolvedServiceLabel =
    languageLocal === "HZ"
      ? (serviceLabelFarsi ?? serviceLabel ?? "")
      : (serviceLabel ?? "");

  const callout =
    resolvedServiceLabel.trim().length > 0
      ? languageLocal === "HZ"
        ? ctaCallHz(orgProfile.orgNameHz, resolvedServiceLabel)
        : ctaCall(orgProfile.orgName, resolvedServiceLabel)
      : "";

  // Build the message passed to your form (include the service label if you want)
  const message = `${copy.message}${resolvedServiceLabel}`;

  const href = {
    pathname: routes.freeConsultation(),
    query: {
      headingLabel: headingOverride ?? copy.label,
      serviceLabel: resolvedServiceLabel,
      message,
      CtaPresetsKey,
      languageLocal,
    },
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-linear-to-br p-5 shadow-xl sm:p-10",
        generalEnquiry
          ? "from-app-s-dark to-app-p-dark"
          : "from-gray-50 to-gray-200",
        className,
      )}
      dir={dir}
    >
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      {generalEnquiry && (
        <Header as="h2" size="md" className="text-white">
          {(headingOverride ?? copy.label) +
            (languageLocal === "HZ" ? " | پرسش عمومی" : " | General enquiry")}
        </Header>
      )}

      {!!callout && (
        <P
          className={cn(
            "text-center text-gray-50",
            !generalEnquiry && "text-sm leading-relaxed text-gray-700",
          )}
        >
          {callout}
        </P>
      )}

      {generalEnquiry && (
        <P className="mt-2 text-center text-slate-300">
          {languageLocal === "HZ"
            ? `اگر پرسش عمومی دارید با ${orgProfile.orgName} تماس بگیرید.`
            : `Contact ${orgProfile.orgName} if you have a general question.`}
        </P>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          as="link"
          href={href}
          variant={generalEnquiry ? "outline" : "primary"}
          size="sm"
          className="text-center"
        >
          {languageLocal === "HZ" ? copy.label : `Get a ${copy.label}`}
        </Button>

        {generalEnquiry && (
          <Button as="link" href={routes.contact()} variant="outline" size="sm">
            {languageLocal === "HZ" ? "پرسش عمومی" : "General Enquiry"}
          </Button>
        )}
      </div>
    </div>
  );
};
