import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, OTHER_LANGUAGES, P, cn } from "@katebtech/core";
/**
 * Returns the accent border and background classes for each secondary language card.
 *
 * This is used to visually differentiate language cards by theme.
 *
 * Example:
 * `accentStyle("HZ")`
 */
const accentStyle = (lang) => {
    switch (lang) {
        case "HZ":
            return "border-bg-app-p-main/50 bg-gradient-to-br from-app-p-dark to-app-s-dark";
        case "HZ":
            return "border-bg-app-s-main/50 bg-gradient-to-br from-app-s-dark to-app-p-dark";
    }
};
/**
 * Displays a styled card for one secondary language supported by the organisation.
 *
 * This component:
 * - resolves translated statement paragraphs from `OTHER_LANGUAGES`
 * - shows the language name in its native script
 * - applies a language-specific accent style
 * - renders RTL layout for Hazaragi / Persian-script content
 *
 * Example:
 * ```tsx
 * <SecondaryLanguageCard
 *   otherLangKey="HZ"
 *   orgNameHz="کاتب آفیسز"
 * />
 * ```
 */
export default function SecondaryLanguageCard({ otherLangKey, orgNameHz, }) {
    const statement = OTHER_LANGUAGES[otherLangKey].statement(orgNameHz);
    const nativeLabelByLang = {
        HZ: OTHER_LANGUAGES.HZ.label.HZ,
    };
    const nativeLabel = nativeLabelByLang[otherLangKey];
    return (_jsxs("div", { dir: "rtl", className: cn("rounded-2xl border p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6", accentStyle(otherLangKey)), children: [_jsx("div", { className: "mb-3 flex items-center gap-2", children: _jsx(Header, { as: "h4", align: "right", className: "text-white", children: nativeLabel }) }), statement.map((t, i) => (_jsx(P, { className: "pr-4 text-gray-50", children: t }, i)))] }));
}
