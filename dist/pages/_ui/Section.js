import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@katebtech/core";
/**
 * Reusable styled section wrapper for page content blocks.
 *
 * This component:
 * - applies consistent padding, border, shadow, and rounded corners
 * - supports in-page anchor linking with `id`
 * - supports accessible labelling with `aria-labelledby`
 * - allows custom styling through `className`
 *
 * Example:
 * ```tsx
 * <Section id="services" labelledBy="services-heading">
 *   <Header as="h2" id="services-heading">Services</Header>
 *   <P>Explore our main service areas.</P>
 * </Section>
 * ```
 */
export const Section = ({ children, className, id, labelledBy }) => {
    return (_jsx("section", { id: id, "aria-labelledby": labelledBy, className: cn("scroll-mt-24 rounded-b-3xl border border-slate-200 bg-gray-50 p-6 shadow-sm sm:p-8", className), children: children }));
};
