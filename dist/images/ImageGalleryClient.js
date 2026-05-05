"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cldGalleryImage, cldLargePreviewImage, cldThumbnailImage } from "../cloudinary";
import Image from "next/image";
import { useEffect, useState } from "react";
import {} from "swiper";
import { Keyboard, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE_DEFAULT_BLUR } from "./blur";
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
export const ImageGalleryClient = ({ images, priorityFirstImage = false, }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [mainSwiper, setMainSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const hasMultiple = images.length > 1;
    useEffect(() => {
        if (!isFullscreen)
            return;
        /**
         * Handles keyboard navigation while fullscreen mode is open.
         *
         * - Escape closes fullscreen mode
         * - ArrowRight shows the next image
         * - ArrowLeft shows the previous image
         */
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsFullscreen(false);
            }
            if (event.key === "ArrowRight") {
                setActiveIndex((prev) => (prev + 1) % images.length);
            }
            if (event.key === "ArrowLeft") {
                setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
            }
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [images.length, isFullscreen]);
    /**
     * Moves the main gallery to the requested image index.
     *
     * @param index - Target image index.
     */
    const goToImage = (index) => {
        setActiveIndex(index);
        mainSwiper?.slideTo(index);
    };
    /**
     * Advances to the next image, wrapping to the beginning when needed.
     */
    const goNext = () => {
        const next = (activeIndex + 1) % images.length;
        goToImage(next);
    };
    /**
     * Moves to the previous image, wrapping to the end when needed.
     */
    const goPrev = () => {
        const prev = (activeIndex - 1 + images.length) % images.length;
        goToImage(prev);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "min-w-0 space-y-3", children: [_jsx("div", { className: "overflow-hidden rounded-2xl", children: _jsx(Swiper, { onSwiper: setMainSwiper, onSlideChange: (swiper) => setActiveIndex(swiper.activeIndex), modules: [Navigation, Keyboard, Thumbs], navigation: hasMultiple, keyboard: true, spaceBetween: 12, thumbs: {
                                swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                            }, className: "rounded-2xl", children: images.map((img, index) => {
                                const src = cldGalleryImage(img.url);
                                return (_jsx(SwiperSlide, { children: _jsx("button", { type: "button", onClick: () => {
                                            setActiveIndex(index);
                                            setIsFullscreen(true);
                                        }, className: "block w-full text-left", "aria-label": `Open ${img.alt} in fullscreen`, children: _jsx("div", { className: "relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50", children: _jsx(Image, { src: src, alt: img.alt, fill: true, className: "object-cover object-center", priority: priorityFirstImage && index === 0, sizes: "(min-width: 1024px) 66vw, 100vw", placeholder: index === 0 ? "blur" : "empty", blurDataURL: index === 0 ? IMAGE_DEFAULT_BLUR : undefined }) }) }) }, `${img.url}-${index}`));
                            }) }) }), hasMultiple ? (_jsx(Swiper, { onSwiper: setThumbsSwiper, modules: [Thumbs], watchSlidesProgress: true, spaceBetween: 12, slidesPerView: Math.min(images.length, 3), breakpoints: {
                            640: { slidesPerView: Math.min(images.length, 4) },
                            1024: { slidesPerView: Math.min(images.length, 5) },
                        }, className: "rounded-2xl", children: images.map((img, index) => {
                            const src = cldThumbnailImage(img.url);
                            const isActive = activeIndex === index;
                            return (_jsx(SwiperSlide, { children: _jsx("button", { type: "button", onClick: () => goToImage(index), "aria-label": `Show image ${index + 1}`, className: `block w-full overflow-hidden rounded-xl transition ${isActive
                                        ? "ring-app-p-main ring-2"
                                        : "ring-1 ring-slate-200"}`, children: _jsx("div", { className: "relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50", children: _jsx(Image, { src: src, alt: `${img.alt} thumbnail`, fill: true, className: "object-cover object-center", sizes: "(min-width: 1024px) 20vw, 30vw" }) }) }) }, `${img.url}-thumb-${index}`));
                        }) })) : null] }), isFullscreen ? (_jsxs("div", { className: "fixed inset-0 z-[100] bg-black/90", children: [_jsx("button", { type: "button", onClick: () => setIsFullscreen(false), className: "absolute top-4 right-4 z-[110] rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur", "aria-label": "Close fullscreen gallery", children: "Close" }), hasMultiple ? (_jsxs(_Fragment, { children: [_jsx("button", { type: "button", onClick: goPrev, className: "absolute top-1/2 left-4 z-[110] -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white backdrop-blur", "aria-label": "Previous image", children: "\u2190" }), _jsx("button", { type: "button", onClick: goNext, className: "absolute top-1/2 right-4 z-[110] -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white backdrop-blur", "aria-label": "Next image", children: "\u2192" })] })) : null, _jsx("div", { className: "flex h-full w-full items-center justify-center p-4 sm:p-8", children: _jsx("div", { className: "relative h-full w-full max-w-7xl", children: _jsx(Image, { src: cldLargePreviewImage(images[activeIndex].url), alt: images[activeIndex].alt, fill: true, className: "object-contain", sizes: "100vw", priority: true }) }) })] })) : null] }));
};
