type Props = {
    /**
     * Organisation or business name inserted into the acknowledgement text.
     *
     * Example:
     * "Austax Accounting"
     */
    orgName: string;
    /**
     * Whether to show the Hazara acknowledgement paragraph.
     *
     * @default true
     */
    showHazara?: boolean;
    /**
     * Optional className for the outer section wrapper.
     */
    className?: string;
    /**
     * Optional className for the heading component.
     *
     * Useful when a website needs different heading colour, spacing, or font.
     */
    headerClassName?: string;
    /**
     * Optional className applied to both acknowledgement paragraphs.
     *
     * Useful when a website needs different text colour, spacing, or typography.
     */
    paragraphClassName?: string;
};
/**
 * Reusable acknowledgement section for website footers or lower-page content.
 *
 * This component renders:
 * - an Acknowledgement of Country
 * - an optional Hazara community acknowledgement
 *
 * Example:
 * `<Acknowledgement orgName={op.orgName} />`
 */
export declare const Acknowledgement: ({ orgName, showHazara, className, headerClassName, paragraphClassName, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Acknowledgement.d.ts.map