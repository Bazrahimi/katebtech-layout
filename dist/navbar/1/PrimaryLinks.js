import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { HzLanguage as HzLanguageLink } from "./HzLanguages";
import { ServicesMenuClient } from "./ServiceMenu";
export const PrimaryLinks = ({ aboutHref, contactHref, hZLanguageHref, hzLanguageSrc, hzLanguageText, hzLanguage, services, primaryLinkClass, }) => {
    return (_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Link, { href: aboutHref, className: primaryLinkClass, children: "About Us" }), _jsx(ServicesMenuClient, { services: services }), _jsx(HzLanguageLink, { src: hzLanguageSrc, text: hzLanguageText, hzLanguage: hzLanguage, href: hZLanguageHref, className: primaryLinkClass }), contactHref ? (_jsx(Link, { href: contactHref, className: primaryLinkClass, children: "Contact" })) : null] }));
};
