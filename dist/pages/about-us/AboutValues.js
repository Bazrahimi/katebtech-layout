import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, List } from "@katebtech/core";
/**
 * Renders an about-page values section as a heading with a list of items.
 *
 * Returns `null` when the section has no items, so empty values blocks
 * are not rendered in the page.
 */
export const AboutValues = ({ section }) => {
    if (!section.items.length)
        return null;
    return (_jsxs("section", { "aria-labelledby": section.id, children: [_jsx(Header, { as: "h2", size: "sm", className: "mt-5", children: section.title }), _jsx(List, { items: section.items, className: "mt-2 ml-5" })] }));
};
