import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
/**
 * Floating WhatsApp action button fixed to the bottom-right corner.
 *
 * Opens a new WhatsApp chat in a new tab with a prefilled message.
 *
 * Usage:
 * `<WhatsAppFloat textHeading="Hi, I need help" whatsAppNumber="61412345678" />`
 */
export const WhatsAppFloat = ({ textHeading, whatsAppNumber }) => {
    return (_jsx("div", { className: "fixed right-5 bottom-5 z-50", children: _jsxs(Link, { href: `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(textHeading)}`, target: "_blank", rel: "noopener noreferrer", "aria-label": "Chat with us on WhatsApp", className: "flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:outline-none", children: [_jsx("span", { className: "sr-only", children: "Open WhatsApp chat" }), _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", fill: "currentColor", className: "h-7 w-7", "aria-hidden": "true", children: [_jsx("path", { d: "M19.11 17.24c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.79-.71-1.32-1.59-1.47-1.86-.16-.27-.02-.41.12-.54.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.9 2.9 4.6 4.06.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.82-1.29.23-.63.23-1.18.16-1.29-.06-.11-.25-.18-.52-.32Z" }), _jsx("path", { d: "M16.03 3.2c-7.03 0-12.74 5.71-12.74 12.73 0 2.24.59 4.42 1.7 6.34L3.2 28.8l6.7-1.75a12.7 12.7 0 0 0 6.13 1.57h.01c7.02 0 12.73-5.71 12.73-12.74 0-3.41-1.33-6.61-3.74-9.01A12.63 12.63 0 0 0 16.03 3.2Zm0 23.27h-.01a10.5 10.5 0 0 1-5.36-1.47l-.38-.23-3.98 1.04 1.06-3.88-.25-.4a10.48 10.48 0 1 1 8.92 4.94Z" })] })] }) }));
};
