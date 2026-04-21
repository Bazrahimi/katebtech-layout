/**
 * Builds an SVG shimmer placeholder data URL.
 *
 * Useful for `blurDataURL` in Next.js `Image`.
 *
 * @param width - Placeholder width in pixels.
 * @param height - Placeholder height in pixels.
 * @returns Encoded SVG data URL.
 *
 * @example
 * const blur = getBlurDataURL(160, 160);
 */
export declare const getBlurDataURL: (width?: number, height?: number) => string;
/**
 * Default blur placeholder data URL using a 160 × 160 shimmer SVG.
 *
 * Useful as a shared fallback for image components.
 */
export declare const IMAGE_DEFAULT_BLUR: string;
//# sourceMappingURL=blur.d.ts.map