import type { ServiceSubCategory } from "@katebtech/layout/org";
type Props = {
    /**
     * Service subcategory entries rendered as carousel slides.
     */
    subcategories: ServiceSubCategory;
    /**
     * Optional additional class names for the outer section wrapper.
     */
    className?: string;
};
/**
 * Renders a responsive carousel of service leaf cards.
 *
 * Includes:
 * - loading skeleton until the component is mounted
 * - previous and next navigation controls
 * - optional pagination when more than one slide exists
 * - responsive slide counts across screen sizes
 *
 * Returns `null` when no subcategory entries are available.
 *
 * @param props - Component props.
 * @returns Service leaves carousel, loading skeleton, or `null`.
 */
export declare const ServiceLeavesCarousel: ({ subcategories, className, }: Props) => import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=ServiceLeavesCarousel.d.ts.map