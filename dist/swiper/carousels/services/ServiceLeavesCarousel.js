"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CarouselSkeleton from "./CarouselSkeleton";
import CarouselNav from "./components/CarouselNav";
import CarouselSlide from "./components/CarouselSlide";
import { useCarouselNav } from "./hook/useCarouselNav";
import { useMounted } from "./hook/useMounted";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@katebtech/core";
/**
 * Renders a responsive carousel of service leaf cards.
 *
 * Includes:
 * - loading skeleton until the component is mounted
 * - previous and next navigation controls
 * - optional pagination when more than one slide exists
 * - responsive slide counts across screen sizes
 *
 * Returns `null` when no subcategory entries are available.
 *
 * @param props - Component props.
 * @returns Service leaves carousel, loading skeleton, or `null`.
 */
export const ServiceLeavesCarousel = ({ subcategories, className, }) => {
    const mounted = useMounted();
    const { prevClass, nextClass, navigation } = useCarouselNav("service-carousel");
    if (!mounted)
        return _jsx(CarouselSkeleton, {});
    const entries = Object.entries(subcategories);
    if (entries.length === 0)
        return null;
    const shouldPaginate = entries.length > 1;
    return (_jsx("section", { className: cn("rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur p-0", className), children: _jsxs("div", { className: "relative min-h-[360px]", children: [_jsx(Swiper, { modules: [Navigation, Pagination, A11y], loop: entries.length > 3, watchOverflow: true, navigation: navigation, className: "service-carousel pb-14", pagination: shouldPaginate ? { clickable: true } : false, spaceBetween: 12, slidesPerView: 1.1, breakpoints: {
                        640: { slidesPerView: 2.1 },
                        1024: { slidesPerView: 3.1 },
                    }, children: entries.map(([leafId, leaf]) => (_jsx(SwiperSlide, { className: "h-auto", children: _jsx("div", { className: "h-full", children: _jsx(CarouselSlide, { leaf: leaf, leafId: leafId }) }) }, leafId))) }), _jsx(CarouselNav, { prevClass: prevClass, nextClass: nextClass })] }) }));
};
