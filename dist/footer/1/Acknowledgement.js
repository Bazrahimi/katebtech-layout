import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn, P } from "@katebtech/core";
import { FooterHeader } from "./FooterHeader";
/**
 * Reusable acknowledgement section for website footers or lower-page content.
 *
 * This component renders:
 * - an Acknowledgement of Country
 * - an optional Hazara community acknowledgement
 *
 * Example:
 * `<Acknowledgement orgName={op.orgName} />`
 */
export const Acknowledgement = ({ orgName, showHazara = true, className, headerClassName, paragraphClassName, }) => {
    return (_jsx("section", { "aria-labelledby": "ack-heading", className: cn("mx-auto mt-10 max-w-7xl px-6", className), role: "region", children: _jsxs("div", { className: cn("bg-app-s-dark relative overflow-hidden rounded-lg border border-black/10 p-4 sm:p-5"), children: [_jsx("span", { "aria-hidden": "true", className: "absolute top-0 left-0 h-full w-1.5 bg-[linear-gradient(to_bottom,#000000,#CC0000,#FFFF00)]" }), _jsx(FooterHeader, { className: headerClassName, children: "Acknowledgements" }), _jsxs(P, { className: cn("text-gray-100", paragraphClassName), size: "sm", children: [orgName, " acknowledges the Bunurong people of the Kulin Nation as the Traditional Custodians of the lands and waters in and around Greater Dandenong. We pay our respects to Elders past and present and extend that respect to all Aboriginal and Torres Strait Islander peoples. We honour their enduring connection to Country, culture, and community."] }), showHazara ? (_jsx(P, { className: cn("mt-3 text-gray-100", paragraphClassName), size: "sm", children: "We also acknowledge Australian Hazara communities and their valued contributions to a more connected, compassionate, and inclusive Australia. We recognise the historical genocide and enduring persecution of Hazara people. As with First Nations stories, we honour the strength of those who carry this history while protecting culture, sustaining community, and building belonging across generations." })) : null] }) }));
};
