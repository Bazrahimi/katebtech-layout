import { Header, P } from "@katebtech/core";
import type { AboutTextSection } from "@katebtech/layout/pages";

type Props = {
  /**
   * Ordered content sections rendered in the about page body.
   *
   * Each section should include:
   * - `id`: unique section identifier used for the React key and `aria-labelledby`
   * - `title`: section heading text
   * - `items`: paragraph content displayed under the heading
   */
  sections: readonly AboutTextSection[];
};

/**
 * Renders a vertical list of about-page text sections.
 *
 * Each section is displayed with:
 * - an accessible heading
 * - one or more paragraph blocks beneath it
 *
 * This is useful for structured about-page content such as
 * company background, values, mission, or service overview text.
 */
export const AboutTextSections = ({ sections }: Props) => {
  return (
    <section className="space-y-5 md:space-y-10">
      {sections.map((s) => (
        <section key={s.id} aria-labelledby={s.id}>
          <Header as="h2" size="sm">
            {s.title}
          </Header>

          {s.items.map((t, i) => (
            <P key={i}>{t}</P>
          ))}
        </section>
      ))}
    </section>
  );
};
