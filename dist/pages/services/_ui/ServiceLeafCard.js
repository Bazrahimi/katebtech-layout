import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cn, Header, List, P } from "@katebtech/core";
import { ImageGallery } from "@katebtech/layout/images";
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
export const ServiceLeafCard = ({ leaf, index, leafId }) => {
    const hasItems = leaf.items.length > 0;
    const isEven = index % 2 === 0;
    // const activeCta = CTA_MAP[ORG_PROFILE.cta];
    return (_jsx(_Fragment, { children: _jsx("article", { className: "scroll-mt-24 rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm", id: leafId, children: _jsxs("div", { className: "mb-5 grid gap-3 sm:mb-10 sm:grid-cols-12 sm:items-start sm:gap-6", children: [_jsxs("header", { className: "space-y-3 sm:col-span-12", children: [_jsx(Header, { as: "h2", children: leaf.label }), leaf.description &&
                                leaf.description.map((t, i) => _jsx(P, { children: t }, i))] }), hasItems && (_jsxs("section", { className: cn("sm:col-span-6", isEven ? "sm:order-1" : "sm:order-2"), children: [_jsx("div", { className: "mb-4 h-px w-full bg-slate-200/70" }), _jsx(List, { items: leaf.items })] })), _jsx("aside", { className: cn(hasItems ? "sm:col-span-6" : "sm:col-span-12", isEven ? "sm:order-2" : "sm:order-1"), children: _jsx("div", { className: "mx-auto w-full max-w-3xl overflow-hidden", children: _jsx(ImageGallery, { images: leaf.image, priorityFirstImage: true }) }) })] }) }) }));
};
