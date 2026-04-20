import { Header, List } from "@katebtech/core";
import type { AboutValuesSection } from "@katebtech/layout/pages";

type Props = {
  /**
   * Values section content for the about page.
   *
   * Expected shape:
   * - `id`: unique section identifier used for accessibility
   * - `title`: heading displayed above the list
   * - `items`: list entries rendered as value points
   */
  section: AboutValuesSection;
};

/**
 * Renders an about-page values section as a heading with a list of items.
 *
 * Returns `null` when the section has no items, so empty values blocks
 * are not rendered in the page.
 */
export const AboutValues = ({ section }: Props) => {
  if (!section.items.length) return null;

  return (
    <section aria-labelledby={section.id}>
      <Header as="h2" size="sm" className="mt-5">
        {section.title}
      </Header>

      <List items={section.items} className="mt-2 ml-5" />
    </section>
  );
};
