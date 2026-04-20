type Props = {
    /**
     * Optional main page heading.
     *
     * When provided, it is rendered as the page `<h1>`.
     *
     * Example:
     * `"Buying Property Conveyancing"`
     */
    heading?: string;
    /**
     * Optional introductory paragraph content shown below the heading.
     *
     * Each string is rendered as a separate paragraph.
     *
     * Example:
     * `[
     *   "We guide clients through each stage of the property process.",
     *   "Our team focuses on clear communication and practical support."
     * ]`
     */
    subHeading?: readonly string[];
    /**
     * Controls the text direction for the paragraph content.
     *
     * Set to `true` for right-to-left languages such as Persian or Hazaragi.
     *
     * @default false
     */
    isRtl?: boolean;
};
/**
 * Renders a simple page introduction block with an optional heading
 * and one or more supporting paragraphs.
 *
 * This component:
 * - shows a page-level heading when `heading` is provided
 * - renders each `subHeading` item as its own paragraph
 * - supports both LTR and RTL paragraph direction
 *
 * Example:
 * ```tsx
 * <PageIntro
 *   heading="Our Services"
 *   subHeading={[
 *     "We offer practical guidance for buyers and sellers.",
 *     "Our approach is clear, timely, and client-focused.",
 *   ]}
 * />
 * ```
 */
export declare const PageIntro: ({ heading, subHeading, isRtl }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PageIntro.d.ts.map