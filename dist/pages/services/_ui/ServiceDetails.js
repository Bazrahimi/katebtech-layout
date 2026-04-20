import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from "react";
import { ServiceLeafCard } from "./ServiceLeafCard";
import { ServiceLeafCardSkeleton } from "./ServiceLeafCardSkeleton";
/**
 * Renders the list of service detail cards for a service page.
 *
 * Each subcategory entry is wrapped in `Suspense` so a lightweight skeleton can
 * be shown while the corresponding `ServiceLeafCard` is loading.
 */
export const ServiceDetails = ({ subcategories }) => {
    return (_jsx("div", { className: "space-y-4", children: Object.entries(subcategories).map(([key, leaf], index) => (_jsx(Suspense, { fallback: _jsx(ServiceLeafCardSkeleton, {}), children: _jsx(ServiceLeafCard, { leaf: leaf, index: index, leafId: key }) }, key))) }));
};
