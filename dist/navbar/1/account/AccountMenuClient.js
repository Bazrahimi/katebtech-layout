"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../../button";
import { HiUser } from "react-icons/hi2";
import { DropdownMenu } from "../lib/DropdownMenu";
import { LogoutButton } from "./LogoutButton";
export const AccountMenuClient = ({ navLinkBase, navIcon, onLogout, items, }) => {
    const totalItems = items.length + (onLogout ? 1 : 0);
    return (_jsx(DropdownMenu, { menuLabel: "Account submenu", itemCount: totalItems, align: "right", buttonClassName: `${navLinkBase} inline-flex items-center gap-1`, menuClassName: "z-40 mt-3 w-72 max-w-[calc(100vw-1rem)] overflow-hidden rounded-2xl border border-white/10 bg-app-p-main/95 p-2 text-white shadow-2xl ring-1 ring-black/20 backdrop-blur-xl", buttonContent: _jsx(HiUser, { className: navIcon }), children: ({ setItemRef, closeMenu }) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "px-3 pb-2 pt-1", children: _jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50", children: "Account" }) }), _jsxs("ul", { className: "space-y-1", children: [items.map((item, idx) => (_jsx("li", { children: _jsx(Button, { size: "xs", variant: "secondary", fullWidth: true, className: "justify-start rounded-xl text-left shadow-none hover:scale-100", as: "link", ref: setItemRef(idx), href: item.href, role: "menuitem", onClick: closeMenu, children: _jsx("span", { className: "w-full text-left", children: item.label }) }) }, item.href))), onLogout ? (_jsxs(_Fragment, { children: [_jsx("li", { className: "my-1 border-t border-white/10" }), _jsx("li", { children: _jsx("form", { action: async () => {
                                            closeMenu();
                                            await onLogout?.();
                                        }, children: _jsx(LogoutButton, {}) }) })] })) : null] })] })) }));
};
