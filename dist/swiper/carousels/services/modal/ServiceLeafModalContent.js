import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, List, P } from "@katebtech/core";
import { ServiceLeafImage } from "@katebtech/layout/images";
export const ServiceLeafModalContent = ({ leaf, leafId }) => {
    const hasItems = leaf.items.length > 0;
    return (_jsx("article", { id: leafId, className: "scroll-mt-24", children: _jsxs("div", { className: "grid gap-5 sm:grid-cols-12 sm:items-start", children: [_jsxs("header", { className: "space-y-3 sm:col-span-12", children: [_jsx(Header, { as: "h2", children: leaf.label }), leaf.description?.map((text, i) => (_jsx(P, { children: text }, i)))] }), hasItems && (_jsxs("section", { className: "sm:col-span-6", children: [_jsx("div", { className: "mb-4 h-px w-full bg-slate-200/70" }), _jsx(List, { items: leaf.items })] })), _jsx("aside", { className: hasItems ? "sm:col-span-6" : "sm:col-span-12", children: _jsx(ServiceLeafImage, { image: leaf.image }) })] }) }));
};
