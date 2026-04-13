"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@katebtech/core";
import { useFormStatus } from "react-dom";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
export function LogoutButton() {
    const { pending } = useFormStatus();
    return (_jsx(Button, { type: "submit", fullWidth: true, variant: "danger", size: "xs", disabled: pending, children: _jsxs("span", { className: "inline-flex items-center gap-2", children: [_jsx(HiArrowRightOnRectangle, { className: "h-4 w-4" }), pending ? "Logging out..." : "Log out"] }) }));
}
