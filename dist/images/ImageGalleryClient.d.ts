import type { ImageMeta } from "@katebtech/core";
export type ImageGalleryProps = {
    /**
     * Image collection displayed in the gallery.
     */
    images: ImageMeta[];
    /**
     * Whether the first gallery image should be loaded with high priority.
     *
     * Useful when the gallery appears above the fold.
     *
     * @default false
     */
    priorityFirstImage?: boolean;
};
/**
 * Interactive client-side image gallery with:
 * - main Swiper image carousel
 * - thumbnail navigation
 * - keyboard support
 * - fullscreen preview mode
 *
 * The first image can optionally use a blur placeholder and priority loading
 * for improved perceived performance when the gallery is prominent on the page.
 *
 * @param props - Component props.
 * @returns Interactive image gallery with optional fullscreen preview.
 */
export declare const ImageGalleryClient: ({ images, priorityFirstImage, }: ImageGalleryProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ImageGalleryClient.d.ts.map