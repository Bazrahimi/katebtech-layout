type Props = {
    /**
     * Business or organisation name shown in the copyright text.
     *
     * Example:
     * "Austax Accounting"
     */
    orgName: string;
    /**
     * Optional extra className for the outer wrapper.
     *
     * Useful when adjusting spacing, alignment, or color from the parent.
     */
    className?: string;
};
/**
 * Reusable footer credit block with copyright text and
 * a "Built by Kateb Tech" badge link.
 *
 * It renders:
 * - the current year
 * - the provided organisation name
 * - a small external link to Kateb Tech
 *
 * Usage:
 * `<PoweredByKateb orgName={op.orgName} />`
 */
export declare const PoweredByKateb: ({ orgName, className }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PoweredByKateb.d.ts.map