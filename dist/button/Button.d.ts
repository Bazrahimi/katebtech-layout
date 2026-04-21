import type { ButtonProps } from "./types";
/**
 * Reusable button component that can render as either:
 * - a native HTML `<button>`
 * - a Next.js `Link`
 *
 * The component shares a consistent visual style across both render modes
 * and supports variants, size presets, icons, and optional full-width layout.
 *
 * @param props - Button props for either button or link rendering.
 * @param ref - Forwarded ref to the underlying button or anchor element.
 * @returns A styled button or link element.
 *
 * @example
 * ```tsx
 * <Button onClick={handleSave}>Save</Button>
 * ```
 *
 * @example
 * ```tsx
 * <Button as="link" href="/contact-us">
 *   Contact Us
 * </Button>
 * ```
 */
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map