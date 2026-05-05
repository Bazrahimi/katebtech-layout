import type { ImageMeta } from "./definitions";
export type ImageGalleryProps = {
    /**
     * Gallery image items rendered by the client gallery component.
     *
     * Each image should follow the shared `ImageMeta` shape used across the app.
     *
     * Example:
     * `[heroImage, galleryImage1, galleryImage2]`
     */
    images: ImageMeta[];
    /**
     * Whether the first gallery image should be loaded with priority.
     *
     * Useful when the gallery appears high on the page and the first image
     * is likely to be the largest or most important visual.
     *
     * @default false
     */
    priorityFirstImage?: boolean;
};
/**
 * Server wrapper for the interactive image gallery.
 *
 * This component:
 * - guards against empty image arrays
 * - renders a skeleton fallback while the client gallery loads
 * - forwards image data and priority settings to `ImageGalleryClient`
 *
 * Example:
 * ```tsx
 * <ImageGallery
 *   images={serviceImages}
 *   priorityFirstImage
 * />
 * ```
 */
export declare const ImageGallery: ({ images, priorityFirstImage, }: ImageGalleryProps) => import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=ImageGallery.d.ts.map