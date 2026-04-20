import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, cn, ctaCall, ctaCallHz, getCtaCopy, Header, P, } from "@katebtech/core";
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
export const ServiceCTA = ({ CtaPresetsKey, orgProfile, routes, languageLocal = "EN", serviceLabel, serviceLabelFarsi, generalEnquiry, className, headingOverride, }) => {
    const copy = getCtaCopy(CtaPresetsKey, languageLocal);
    const dir = copy.dir;
    const resolvedServiceLabel = languageLocal === "HZ"
        ? (serviceLabelFarsi ?? serviceLabel ?? "")
        : (serviceLabel ?? "");
    const callout = resolvedServiceLabel.trim().length > 0
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
    return (_jsxs("div", { className: cn("relative overflow-hidden rounded-3xl bg-linear-to-br p-5 shadow-xl sm:p-10", generalEnquiry
            ? "from-app-s-dark to-app-p-dark"
            : "from-gray-50 to-gray-200", className), dir: dir, children: [_jsx("div", { className: "absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" }), generalEnquiry && (_jsx(Header, { as: "h2", size: "md", className: "text-white", children: (headingOverride ?? copy.label) +
                    (languageLocal === "HZ" ? " | پرسش عمومی" : " | General enquiry") })), !!callout && (_jsx(P, { className: cn("text-center text-gray-50", !generalEnquiry && "text-sm leading-relaxed text-gray-700"), children: callout })), generalEnquiry && (_jsx(P, { className: "mt-2 text-center text-slate-300", children: languageLocal === "HZ"
                    ? `اگر پرسش عمومی دارید با ${orgProfile.orgName} تماس بگیرید.`
                    : `Contact ${orgProfile.orgName} if you have a general question.` })), _jsxs("div", { className: "mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center", children: [_jsx(Button, { as: "link", href: href, variant: generalEnquiry ? "outline" : "primary", size: "sm", className: "text-center", children: languageLocal === "HZ" ? copy.label : `Get a ${copy.label}` }), generalEnquiry && (_jsx(Button, { as: "link", href: routes.contact(), variant: "outline", size: "sm", children: languageLocal === "HZ" ? "پرسش عمومی" : "General Enquiry" }))] })] }));
};
