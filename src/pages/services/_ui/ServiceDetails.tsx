import type { ServiceSubCategory } from "@katebtech/layout/pages";
import { Suspense } from "react";
import { ServiceLeafCard } from "./ServiceLeafCard";
import { ServiceLeafCardSkeleton } from "./ServiceLeafCardSkeleton";

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
export const ServiceDetails = ({ subcategories }: Props) => {
  return (
    <div className="space-y-4">
      {Object.entries(subcategories).map(([key, leaf], index) => (
        <Suspense key={key} fallback={<ServiceLeafCardSkeleton />}>
          <ServiceLeafCard leaf={leaf} index={index} leafId={key} />
        </Suspense>
      ))}
    </div>
  );
};
