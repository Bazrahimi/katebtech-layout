import { Suspense } from "react";
import { ImageGalleryClient } from "./ImageGalleryClient";

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
 * Lightweight loading skeleton shown while the client gallery is resolving.
 *
 * This mirrors:
 * - one large featured image area
 * - three thumbnail placeholders underneath
 */
const GalleryFallback = () => (
  <div className="animate-pulse space-y-3">
    <div className="aspect-[16/10] w-full rounded-2xl bg-slate-200" />
    <div className="grid grid-cols-3 gap-3">
      <div className="aspect-[4/3] rounded-xl bg-slate-200" />
      <div className="aspect-[4/3] rounded-xl bg-slate-200" />
      <div className="aspect-[4/3] rounded-xl bg-slate-200" />
    </div>
  </div>
);

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
export const ImageGallery = ({
  images,
  priorityFirstImage,
}: ImageGalleryProps) => {
  if (!images?.length) return null;

  return (
    <Suspense fallback={<GalleryFallback />}>
      <ImageGalleryClient
        images={images}
        priorityFirstImage={priorityFirstImage}
      />
    </Suspense>
  );
};
