import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, P } from "@katebtech/core";
/**
 * Renders a vertical list of about-page text sections.
 *
 * Each section is displayed with:
 * - an accessible heading
 * - one or more paragraph blocks beneath it
 *
 * This is useful for structured about-page content such as
 * company background, values, mission, or service overview text.
 */
export const AboutTextSections = ({ sections }) => {
    return (_jsx("section", { className: "space-y-5 md:space-y-10", children: sections.map((s) => (_jsxs("section", { "aria-labelledby": s.id, children: [_jsx(Header, { as: "h2", size: "sm", children: s.title }), s.items.map((t, i) => (_jsx(P, { children: t }, i)))] }, s.id))) }));
};
