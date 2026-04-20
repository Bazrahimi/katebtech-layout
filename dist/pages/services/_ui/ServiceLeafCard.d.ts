import type { ServiceLeaf } from "@katebtech/layout/pages";
type Props = {
    /**
     * Service leaf content rendered inside the card.
     *
     * Expected fields commonly include:
     * - `label`: service leaf title
     * - `description`: one or more descriptive paragraphs
     * - `items`: optional bullet point list
     * - `image`: image collection shown in the gallery
     */
    leaf: ServiceLeaf;
    /**
     * Zero-based position of the card in the rendered list.
     *
     * Used to alternate the layout order between the text/list section
     * and the image section on larger screens.
     */
    index: number;
    /**
     * Unique DOM id assigned to the article element.
     *
     * Used for anchor linking to a specific service leaf card.
     */
    leafId: string;
};
/**
 * Renders a single service leaf card with:
 * - a heading
 * - descriptive paragraphs
 * - an optional bullet list
 * - an image gallery
 *
 * The layout alternates on larger screens based on the card index so the
 * list and image sections swap sides for visual variety.
 */
export declare const ServiceLeafCard: ({ leaf, index, leafId }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ServiceLeafCard.d.ts.map