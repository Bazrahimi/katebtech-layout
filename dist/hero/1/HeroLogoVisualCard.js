import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { P } from "@katebtech/core";
import Image from "next/image";
/**
 * Renders a hero logo card with:
 * - a centred organisation logo
 * - an optional slogan beneath the logo
 *
 * Useful in hero sections where the brand mark should be presented
 * as a highlighted visual element beside the main heading content.
 *
 * @param props - Component props.
 * @returns Hero logo visual card.
 */
export const HeroLogoVisualCard = ({ orgName, slogan = "Clear Communication", src, }) => {
    return (_jsx("div", { className: "lg:col-span-5 flex flex-col items-center justify-center", children: _jsxs("div", { className: "rounded-3xl bg-white/40 px-8 py-8 text-center", children: [_jsx("div", { className: "flex justify-center", children: _jsx(Image, { src: src, alt: `${orgName} Logo`, width: 220, height: 220, className: "w-[140px] h-auto object-contain sm:w-[170px] lg:w-[210px]", priority: true }) }), _jsx(P, { className: "mt-6 text-center text-app-s-dark font-extrabold", size: "lg", children: slogan })] }) }));
};
