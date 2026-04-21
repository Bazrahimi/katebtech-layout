import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import type { LinkProps } from "next/link";
/**
 * Supported visual variants for the shared Button component.
 *
 * These variants control the button's semantic styling, such as
 * primary actions, secondary actions, destructive actions, or outline styles.
 */
export type ButtonVariant = "primary" | "secondary" | "danger" | "outline";
/**
 * Supported size presets for the shared Button component.
 *
 * These values are typically mapped to spacing, height, and typography styles.
 */
export type ButtonSize = "xs" | "sm" | "md" | "lg";
/**
 * Common props shared by all Button render modes.
 *
 * These props apply whether the component renders as a native `<button>`
 * element or as a Next.js link.
 */
export type BaseButtonProps = {
    /**
     * Main visible content rendered inside the button.
     */
    children: ReactNode;
    /**
     * Optional icon rendered alongside the main button content.
     */
    icon?: ReactNode;
    /**
     * Visual style variant of the button.
     *
     * @default "primary"
     */
    variant?: ButtonVariant;
    /**
     * Size preset used to control spacing and text size.
     *
     * @default "md"
     */
    size?: ButtonSize;
    /**
     * When true, expands the button to fill the available horizontal space.
     *
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Additional classes applied to the rendered button or link element.
     */
    className?: string;
};
/**
 * Props used when the Button renders as a native `<button>` element.
 *
 * In this mode, the component behaves like a standard HTML button and
 * supports native button attributes such as `type`, `disabled`, and `onClick`.
 */
export type ButtonAsButton = BaseButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    /**
     * Render mode for a native button element.
     *
     * When omitted, the component defaults to `"button"`.
     *
     * @default "button"
     */
    as?: "button";
};
/**
 * Props used when the Button renders as a Next.js `Link`.
 *
 * This mode is useful when the button should navigate between routes
 * while still sharing the same visual button styling.
 */
export type ButtonAsLink = BaseButtonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> & Omit<LinkProps, "href"> & {
    /**
     * Render mode for link-style navigation.
     */
    as: "link";
    /**
     * Destination passed to Next.js `Link`.
     *
     * Supports all href shapes accepted by Next.js, including strings
     * and structured route objects.
     */
    href: LinkProps["href"];
};
/**
 * Complete prop union for the shared Button component.
 *
 * Supports either:
 * - native button rendering
 * - Next.js link rendering
 */
export type ButtonProps = ButtonAsButton | ButtonAsLink;
/**
 * Extracted prop type for button-only usage.
 *
 * Useful for wrappers or helper components that should only support
 * native button behavior and should not allow link rendering.
 */
export type ButtonOnlyProps = Extract<ButtonProps, {
    as?: "button";
}>;
/**
 * Additional props used by the ActionButton wrapper.
 *
 * Extends the base button experience with loading-state behavior,
 * wrapper-level styling hooks, and loading-specific display options.
 */
export type ActionButtonBase = {
    /**
     * When true, shows the loading state and disables interaction.
     */
    isLoading?: boolean;
    /**
     * Optional text shown while the button is in a loading state.
     *
     * Example: `"Sending..."`
     */
    loadingText?: string;
    /**
     * When true, shows a centered loading overlay above the button.
     *
     * Useful when you want to preserve the button layout while visually
     * indicating that an action is in progress.
     */
    overlay?: boolean;
    /**
     * Extra classes applied to the outer wrapper element.
     */
    wrapperClassName?: string;
    /**
     * Extra classes applied directly to the inner Button component.
     */
    buttonClassName?: string;
};
/**
 * Final prop type for the ActionButton component.
 *
 * Combines loading-related enhancements with native button-only props.
 * This ensures the ActionButton behaves like a real button while
 * supporting loading UI patterns.
 */
export type ActionButtonProps = ActionButtonBase & ButtonOnlyProps;
//# sourceMappingURL=types.d.ts.map