import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@katebtech/core";
export default function CarouselSkeleton({ className, }) {
    return (_jsx("div", { className: cn("min-h-85 rounded-2xl border border-slate-200 bg-slate-50", className) }));
}
