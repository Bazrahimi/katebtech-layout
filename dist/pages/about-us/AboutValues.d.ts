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
export declare const AboutValues: ({ section }: Props) => import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=AboutValues.d.ts.map