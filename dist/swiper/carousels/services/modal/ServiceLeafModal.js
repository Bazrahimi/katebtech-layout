"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@katebtech/core";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ServiceLeafModalContent } from "./ServiceLeafModalContent";
/**
 * Renders the service leaf details modal with portal-based overlay behavior.
 */
export const ServiceLeafModal = ({ open, onClose, leaf, leafId }) => {
    const canRenderInPortal = typeof document !== "undefined";
    useEffect(() => {
        if (!open)
            return;
        const handleKeyDown = (event) => {
            if (event.key === "Escape")
                onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);
    if (!canRenderInPortal || !open)
        return null;
    return createPortal(_jsx("div", { className: "fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 p-4", children: _jsxs("div", { className: "flex min-h-full items-start justify-center py-6 sm:items-center", children: [_jsx("div", { className: "absolute inset-0", onClick: onClose, "aria-hidden": "true" }), _jsxs("div", { className: "relative z-10 w-full max-w-4xl rounded-2xl bg-white shadow-xl", children: [_jsx(Button, { onClick: onClose, "aria-label": "Close modal", variant: "danger", size: "sm", fullWidth: true, children: "Close" }), _jsx("div", { className: "p-4 sm:p-6", children: _jsx(ServiceLeafModalContent, { leaf: leaf, leafId: leafId }) })] })] }) }), document.body);
};
