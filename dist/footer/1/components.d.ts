type LinkItem = {
    href: string;
    label: string;
};
type SectionProps = {
    /**
     * Section heading text.
     */
    title: string;
    /**
     * Section body content rendered below the heading.
     */
    children: React.ReactNode;
    /**
     * Optional className for the outer wrapper.
     */
    className?: string;
    /**
     * Optional className passed to `FooterHeader`.
     *
     * Useful for changing heading colour, spacing, or typography.
     */
    headerClassName?: string;
};
/**
 * Reusable footer or content section wrapper.
 *
 * Renders a section heading using `FooterHeader`
 * and any child content below it.
 *
 * Example:
 * `<Section title="Quick Links">...</Section>`
 */
export declare const Section: ({ title, children, className, headerClassName, }: SectionProps) => import("react/jsx-runtime").JSX.Element;
type LinkSectionProps = {
    /**
     * Section heading text.
     */
    title: string;
    /**
     * Link items rendered in the list.
     */
    items: readonly LinkItem[];
    /**
     * ClassName for the `<ul>` element.
     */
    listClassName: string;
    /**
     * ClassName for each `<Link>` element.
     */
    linkClassName: string;
    /**
     * Optional className passed to `FooterHeader`.
     *
     * Useful for changing heading colour, spacing, or typography.
     */
    headerClassName?: string;
};
/**
 * Reusable link-list section for footer or sidebar navigation.
 *
 * Renders:
 * - a section heading
 * - a list of Next.js links
 *
 * Example:
 * `<LinkSection
 *   title="Quick Links"
 *   items={QUICK_LINKS}
 *   listClassName={CN.list}
 *   linkClassName={CN.link}
 * />`
 */
export declare const LinkSection: ({ title, items, listClassName, linkClassName, headerClassName, }: LinkSectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=components.d.ts.map