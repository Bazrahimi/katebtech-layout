import type { ServiceSubCategory } from "@katebtech/layout/pages";
type Props = {
    /**
     * Collection of service leaf entries rendered within the service details section.
     *
     * Each entry represents a subcategory item keyed by its identifier and passed
     * to an individual `ServiceLeafCard`.
     */
    subcategories: ServiceSubCategory;
};
/**
 * Renders the list of service detail cards for a service page.
 *
 * Each subcategory entry is wrapped in `Suspense` so a lightweight skeleton can
 * be shown while the corresponding `ServiceLeafCard` is loading.
 */
export declare const ServiceDetails: ({ subcategories }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ServiceDetails.d.ts.map