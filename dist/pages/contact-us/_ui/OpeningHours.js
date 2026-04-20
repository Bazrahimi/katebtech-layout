import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, P } from "@katebtech/core";
const DAY_LABELS = {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
};
export const OpeningHoursComponent = ({ hours, title = "Opening hours", }) => {
    return (_jsxs("div", { className: "rounded-xl border border-gray-200 bg-white p-4", children: [_jsx(Header, { as: "h3", size: "sm", children: title }), _jsx("div", { className: "mt-3 space-y-2", children: Object.keys(DAY_LABELS).map((day) => {
                    const h = hours[day];
                    return (_jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsx(P, { className: "text-gray-700", size: "sm", children: DAY_LABELS[day] }), _jsx(P, { className: "text-gray-700", size: "sm", children: h.closed ? "Closed" : `${h.open} – ${h.close}` })] }, day));
                }) })] }));
};
