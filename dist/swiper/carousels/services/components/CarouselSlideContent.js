"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, List } from "@katebtech/core";
export const CarouselSlideContent = ({ label, items, }) => {
    return (_jsxs("div", { className: "px-4 py-4", children: [_jsx(Header, { as: "h3", size: "sm", className: "line-clamp-1", children: label }), _jsx("div", { className: "mt-2 max-h-[180px] text-slate-600", children: _jsx(List, { items: items, className: "px-0 py-0", itemClassName: "!gap-1", iconClassName: "!h-3 !w-3", textClassName: " px-0  !text-sm" }) })] }));
};
