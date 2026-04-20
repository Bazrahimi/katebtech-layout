import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { cn } from "@katebtech/core";
const Breadcrumbs = ({ breadcrumbs }) => {
    return (_jsx("nav", { "aria-label": "Breadcrumb", className: "mb-2 ml-2 block overflow-x-auto", children: _jsx("ol", { className: "font-app-ui flex flex-wrap items-center gap-x-1.5 text-sm text-gray-500 sm:gap-x-2 sm:text-base md:text-lg", children: breadcrumbs.map((breadcrumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (_jsxs("li", { className: cn("flex items-center", breadcrumb.active && "font-medium text-gray-900"), "aria-current": breadcrumb.active ? "page" : undefined, children: [_jsx(Link, { href: breadcrumb.href, children: breadcrumb.label }), !isLast && (_jsx("span", { className: "mx-1 text-gray-300 select-none", "aria-hidden": "true", children: "/" }))] }, breadcrumb.href));
            }) }) }));
};
export default Breadcrumbs;
