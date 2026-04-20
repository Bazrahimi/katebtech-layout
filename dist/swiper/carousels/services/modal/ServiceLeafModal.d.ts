import type { ServiceLeaf } from "@katebtech/layout/pages";
type Props = {
    open: boolean;
    onClose: () => void;
    leaf: ServiceLeaf;
    leafId: string;
};
/**
 * Renders the service leaf details modal with portal-based overlay behavior.
 */
export declare const ServiceLeafModal: ({ open, onClose, leaf, leafId }: Props) => import("react").ReactPortal | null;
export {};
//# sourceMappingURL=ServiceLeafModal.d.ts.map