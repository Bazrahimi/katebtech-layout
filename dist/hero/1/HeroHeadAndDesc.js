import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, P } from "@katebtech/core";
/**
 * Renders the main hero heading block with:
 * - the primary organisation name
 * - an optional Hazaragi/Persian-script name
 * - an optional supporting description
 *
 * The alternate language heading is shown only when the relevant language key
 * is enabled and `orgNameHz` is provided.
 *
 * @param props - Component props.
 * @returns Hero heading and description content.
 */
export const HeroHeadAndDesc = ({ orgName, orgNameHz, otherLangKeys, description, }) => {
    const showFarsiName = otherLangKeys?.includes("HZ") || otherLangKeys?.includes("HZ");
    return (_jsxs(_Fragment, { children: [_jsx(Header, { as: "h1", children: orgName }), showFarsiName && orgNameHz && _jsx(Header, { as: "h1", children: orgNameHz }), description && (_jsx(P, { className: "mt-5 text-gray-50 font-bold", children: description }))] }));
};
