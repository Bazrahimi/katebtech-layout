import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { ImageGalleryClient } from "./ImageGalleryClient";
/**
 * Lightweight loading skeleton shown while the client gallery is resolving.
 *
 * This mirrors:
 * - one large featured image area
 * - three thumbnail placeholders underneath
 */
const GalleryFallback = () => (_jsxs("div", { className: "space-y-3 animate-pulse", children: [_jsx("div", { className: "aspect-[16/10] w-full rounded-2xl bg-slate-200" }), _jsxs("div", { className: "grid grid-cols-3 gap-3", children: [_jsx("div", { className: "aspect-[4/3] rounded-xl bg-slate-200" }), _jsx("div", { className: "aspect-[4/3] rounded-xl bg-slate-200" }), _jsx("div", { className: "aspect-[4/3] rounded-xl bg-slate-200" })] })] }));
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
export const ImageGallery = ({ images, priorityFirstImage }) => {
    if (!images?.length)
        return null;
    return (_jsx(Suspense, { fallback: _jsx(GalleryFallback, {}), children: _jsx(ImageGalleryClient, { images: images, priorityFirstImage: priorityFirstImage }) }));
};
