import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@katebtech/core";
import { IMAGE_DEFAULT_BLUR } from "../../images";
import Image from "next/image";
export const HeroBackground = ({ orgName, src, overlayClassName = "bg-black/20", }) => {
    return (_jsxs("div", { className: "absolute inset-0", children: [_jsx(Image, { src: src, alt: `${orgName} hero background`, fill: true, priority: true, sizes: "100vw", className: "object-cover object-center", placeholder: "blur", blurDataURL: IMAGE_DEFAULT_BLUR }), _jsx("div", { className: cn("absolute inset-0", overlayClassName), "aria-hidden": "true" })] }));
};
