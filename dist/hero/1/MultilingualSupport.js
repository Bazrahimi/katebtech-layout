import { jsxs as _jsxs } from "react/jsx-runtime";
import { P, OTHER_LANGUAGES as ol, } from "@katebtech/core";
/**
 * Displays a short multilingual support note for the hero section or other
 * public-facing content areas.
 *
 * English is always shown by default. Any additional supported languages are
 * resolved from the shared language label map and appended to the display.
 *
 * Returns `null` when no additional language keys are provided.
 *
 * @param props - Component props.
 * @returns Multilingual support text or `null`.
 */
export const MultilingualSupport = ({ otherLangKeys, }) => {
    if (!otherLangKeys?.length)
        return null;
    /**
     * Display labels for supported additional languages.
     */
    const otherLanguageLabels = {
        HZ: ol.HZ.label.HZ,
    };
    /**
     * Resolves a human-readable label for a language key.
     *
     * Falls back to the raw key if no label mapping is available.
     *
     * @param key - Language key to resolve.
     * @returns Display label for the language.
     */
    const getLanguageLabel = (key) => otherLanguageLabels[key] ?? key;
    const languages = otherLangKeys
        .map(getLanguageLabel)
        .filter(Boolean)
        .join(" • ");
    return (_jsxs(P, { className: "text-sm text-slate-600", children: ["Multilingual support available:", " ", _jsxs("span", { className: "font-semibold text-slate-800", children: ["English", languages ? ` • ${languages}` : ""] })] }));
};
