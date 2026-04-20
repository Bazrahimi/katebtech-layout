import { Header, P } from "@katebtech/core";

import type { OtherLanguageKey } from "@katebtech/core";
import { OTHER_LANGUAGES, PRIMARY_LANGUAGE } from "@katebtech/core";
import {SecondaryLanguageCard} from "./components/SecondaryLanguageCard";

type Props = {
  /**
   * List of additional supported language keys to display.
   *
   * These are used to:
   * - build the English summary sentence
   * - render one `SecondaryLanguageCard` per language
   *
   * Example:
   * `["HZ", "FA"]`
   */
  otherLangKeys: OtherLanguageKey[];

  /**
   * Organisation name in English.
   *
   * Used in the English heading and summary copy.
   *
   * Example:
   * `"Kateb Offices"`
   */
  orgName: string;

  /**
   * Organisation name in Hazaragi / Persian script.
   *
   * Passed to each `SecondaryLanguageCard` for translated copy.
   *
   * Example:
   * `"کاتب آفیسز"`
   */
  orgNameHz: string;
};

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
export const MultiLanguageCapacity = ({
  otherLangKeys,
  orgName,
  orgNameHz,
}: Props) => {
  const labels = otherLangKeys.map((l) => OTHER_LANGUAGES[l].label.EN);

  const languageList =
    labels.length > 1
      ? `${labels.slice(0, -1).join(", ")} and ${labels.slice(-1)}`
      : labels[0] || "";

  const englishStatement = PRIMARY_LANGUAGE.statement(orgName);

  return (
    <section
      className="mt-10 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8"
      aria-labelledby="multi-language-capacity"
    >
      <div className="space-y-3">
        <Header as="h3" size="sm" id="multi-language-capacity">
          Multi-language capacity
        </Header>

        <P className="text-center text-sm text-slate-600">
          <span className="font-medium text-slate-800">{orgName}</span> can also
          interact with clients in{" "}
          <span className="font-medium text-slate-800">{languageList}</span>.
        </P>

        {englishStatement.map((t, i) => (
          <P key={i} className="text-gray-700">
            {t}
          </P>
        ))}
      </div>

      <div className="mt-6 grid gap-4">
        {otherLangKeys.map((otherLangKey) => (
          <SecondaryLanguageCard
            key={otherLangKey}
            otherLangKey={otherLangKey}
            orgNameHz={orgNameHz}
          />
        ))}
      </div>

      <div></div>
    </section>
  );
};
