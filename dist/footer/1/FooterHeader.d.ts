type FooterHeaderProps = {
    /**
     * Header content displayed inside the footer section title.
     */
    children: React.ReactNode;
    /**
     * Optional className for custom heading styles.
     *
     * Useful for changing colour, spacing, or typography per website.
     */
    className?: string;
};
/**
 * Reusable footer section heading component.
 *
 * Wraps the shared `Header` component with footer-specific defaults.
 *
 * Default behaviour:
 * - renders as `h4`
 * - uses `sm` header size
 * - aligns text to the left
 *
 * Example:
 * `<FooterHeader>Quick Links</FooterHeader>`
 */
export declare const FooterHeader: ({ children, className, }: FooterHeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FooterHeader.d.ts.map