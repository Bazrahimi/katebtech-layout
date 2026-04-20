import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, P } from "@katebtech/core";
/**
 * Renders a simple page introduction block with an optional heading
 * and one or more supporting paragraphs.
 *
 * This component:
 * - shows a page-level heading when `heading` is provided
 * - renders each `subHeading` item as its own paragraph
 * - supports both LTR and RTL paragraph direction
 *
 * Example:
 * ```tsx
 * <PageIntro
 *   heading="Our Services"
 *   subHeading={[
 *     "We offer practical guidance for buyers and sellers.",
 *     "Our approach is clear, timely, and client-focused.",
 *   ]}
 * />
 * ```
 */
export const PageIntro = ({ heading, subHeading, isRtl = false }) => {
    return (_jsxs(_Fragment, { children: [heading && (_jsx(Header, { as: "h1", className: "my-5 md:mb-10", children: heading })), subHeading?.map((t, i) => (_jsx(P, { dir: isRtl ? "rtl" : "ltr", children: t }, i)))] }));
};
