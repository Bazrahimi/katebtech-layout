import { jsx as _jsx } from "react/jsx-runtime";
import { cn, Header } from "@katebtech/core";
/**
 * Reusable footer section heading component.
 *
 * Wraps the shared `Header` component with footer-specific defaults.
 *
 * Default behaviour:
 * - renders as `h4`
 * - uses `sm` header size
 * - aligns text to the left
 *
 * Example:
 * `<FooterHeader>Quick Links</FooterHeader>`
 */
export const FooterHeader = ({ children, className, }) => {
    return (_jsx(Header, { as: "h4", size: "sm", align: "left", className: cn("text-gray-950", className), children: children }));
};
