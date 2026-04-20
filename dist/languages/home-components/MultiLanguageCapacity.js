import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, P } from "@katebtech/core";
import { OTHER_LANGUAGES, PRIMARY_LANGUAGE } from "@katebtech/core";
import { SecondaryLanguageCard } from "./components/SecondaryLanguageCard";
/**
 * Displays the organisation's multilingual communication capacity.
 *
 * This section:
 * - shows an English summary of supported additional languages
 * - renders the primary language statement from `PRIMARY_LANGUAGE.statement`
 * - displays one secondary language card for each language in `otherLangKeys`
 *
 * The supported language names are resolved from `OTHER_LANGUAGES`
 * using each language key's English label.
 *
 * Example:
 * ```tsx
 * <MultiLanguageCapacity
 *   otherLangKeys={["HZ"]}
 *   orgName="Kateb Offices"
 *   orgNameHz="کاتب آفیسز"
 * />
 * ```
 */
export const MultiLanguageCapacity = ({ otherLangKeys, orgName, orgNameHz, }) => {
    const labels = otherLangKeys.map((l) => OTHER_LANGUAGES[l].label.EN);
    const languageList = labels.length > 1
        ? `${labels.slice(0, -1).join(", ")} and ${labels.slice(-1)}`
        : labels[0] || "";
    const englishStatement = PRIMARY_LANGUAGE.statement(orgName);
    return (_jsxs("section", { className: "mt-10 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8", "aria-labelledby": "multi-language-capacity", children: [_jsxs("div", { className: "space-y-3", children: [_jsx(Header, { as: "h3", size: "sm", id: "multi-language-capacity", children: "Multi-language capacity" }), _jsxs(P, { className: "text-center text-sm text-slate-600", children: [_jsx("span", { className: "font-medium text-slate-800", children: orgName }), " can also interact with clients in", " ", _jsx("span", { className: "font-medium text-slate-800", children: languageList }), "."] }), englishStatement.map((t, i) => (_jsx(P, { className: "text-gray-700", children: t }, i)))] }), _jsx("div", { className: "mt-6 grid gap-4", children: otherLangKeys.map((otherLangKey) => (_jsx(SecondaryLanguageCard, { otherLangKey: otherLangKey, orgNameHz: orgNameHz }, otherLangKey))) }), _jsx("div", {})] }));
};
