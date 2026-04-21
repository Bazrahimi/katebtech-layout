"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// app/_ui/button/actionButton.tsx
import { ImSpinner10 } from "react-icons/im";
import { cn } from "@katebtech/core";
import { Button } from "./Button";
export const ActionButton = ({ isLoading = false, loadingText = "Working…", overlay = false, wrapperClassName, buttonClassName, children, icon, as = "button", ...btnProps }) => {
    const externallyDisabled = btnProps.disabled ?? false;
    const effectiveDisabled = externallyDisabled || isLoading;
    const fullWidth = btnProps.fullWidth;
    const composedButtonClass = cn(fullWidth && "w-full", buttonClassName, overlay && isLoading && "text-transparent");
    return (_jsxs("div", { className: cn("relative", wrapperClassName), children: [overlay && isLoading && (_jsxs("div", { className: "absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-gray-200/60", "aria-hidden": true, children: [_jsx("span", { className: "mr-2 text-app-s-dark", children: loadingText }), _jsx(ImSpinner10, { className: "h-5 w-5 animate-spin text-app-s-dark" })] })), _jsx(Button, { ...btnProps, as: as, disabled: effectiveDisabled, "aria-disabled": effectiveDisabled, "aria-busy": isLoading, className: composedButtonClass, children: isLoading ? (_jsxs("span", { className: "inline-flex items-center", children: [!overlay && (_jsx(ImSpinner10, { className: "mr-2 h-4 w-4 animate-spin text-app-s-dark" })), loadingText] })) : (_jsxs(_Fragment, { children: [icon && _jsx("span", { className: "flex-shrink-0", children: icon }), children] })) })] }));
};
