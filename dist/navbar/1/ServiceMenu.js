"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@katebtech/core";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DropdownMenu } from "./lib/DropdownMenu";
export const ServicesMenuClient = ({ services }) => {
    const pathname = usePathname();
    const [routeKey, setRouteKey] = useState(pathname);
    useEffect(() => {
        setRouteKey(pathname);
    }, [pathname]);
    return (_jsx(DropdownMenu, { menuLabel: "Services submenu", itemCount: services.length, align: "center", buttonClassName: "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white/90 transition duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30", menuClassName: "z-40 mt-3 w-72 max-w-[calc(100vw-1rem)] overflow-hidden rounded-2xl border border-white/10 bg-app-p-main/95 p-2 text-white shadow-2xl ring-1 ring-black/20 backdrop-blur-xl", buttonContent: _jsx("span", { children: "Services" }), children: ({ setItemRef, closeMenu }) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "px-3 pt-1 pb-2", children: _jsx("p", { className: "text-[11px] font-semibold tracking-[0.18em] text-white/50 uppercase", children: "Explore" }) }), _jsx("ul", { className: "space-y-1", children: services.map((item, idx) => (_jsx("li", { children: _jsx(Button, { size: "xs", variant: "secondary", fullWidth: true, className: "justify-start rounded-xl text-left shadow-none hover:scale-100", as: "link", ref: setItemRef(idx), href: item.href, role: "menuitem", onClick: closeMenu, children: _jsx("span", { className: "w-full text-left", children: item.label }) }) }, item.href))) })] })) }, routeKey));
};
