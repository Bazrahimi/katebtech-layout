"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
// import CarouselImage from "./CarouselImage";
import { CarouselSlideContent } from "./CarouselSlideContent";
import { ServiceLeafModal } from "../modal/ServiceLeafModal";
export default function CarouselSlide({ leaf, leafId }) {
    const [open, setOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx("button", { type: "button", onClick: () => setOpen(true), className: "group block h-full w-full cursor-pointer text-left focus:outline-none", children: _jsx("article", { className: "flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg", children: _jsx("div", { className: "flex-1", children: _jsx(CarouselSlideContent, { label: leaf.label, items: leaf.items.slice(0, 4) }) }) }) }), _jsx(ServiceLeafModal, { open: open, onClose: () => setOpen(false), leaf: leaf, leafId: leafId })] }));
}
