import { jsx as _jsx } from "react/jsx-runtime";
export const ContactMap = ({ address, zoom = 12 }) => {
    if (!address)
        return null;
    const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=${zoom}&output=embed`;
    return (_jsx("div", { className: "mt-4 overflow-hidden rounded-xl border border-gray-200", children: _jsx("iframe", { title: "Location Map", src: mapSrc, width: "100%", height: "420", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: "w-full" }) }));
};
