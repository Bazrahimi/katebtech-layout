import {
  P,
  OTHER_LANGUAGES as ol,
  type OtherLanguageKey,
} from "@katebtech/core";
import type { MultilingualSupportProps } from "./types";

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
export const MultilingualSupport = ({
  otherLangKeys,
}: MultilingualSupportProps) => {
  if (!otherLangKeys?.length) return null;

  /**
   * Display labels for supported additional languages.
   */
  const otherLanguageLabels = {
    HZ: ol.HZ.label.HZ,
  } satisfies Partial<Record<OtherLanguageKey, string>>;

  /**
   * Resolves a human-readable label for a language key.
   *
   * Falls back to the raw key if no label mapping is available.
   *
   * @param key - Language key to resolve.
   * @returns Display label for the language.
   */
  const getLanguageLabel = (key: OtherLanguageKey) =>
    otherLanguageLabels[key] ?? key;

  const languages = otherLangKeys
    .map(getLanguageLabel)
    .filter(Boolean)
    .join(" • ");

  return (
    <P className="text-sm text-slate-600">
      Multilingual support available:{" "}
      <span className="font-semibold text-slate-800">
        {"English"}
        {languages ? ` • ${languages}` : ""}
      </span>
    </P>
  );
};
