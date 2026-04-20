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
export default function AboutTextSections({ sections }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AboutTextSections.d.ts.map