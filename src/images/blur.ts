/**
 * Creates an animated SVG shimmer placeholder as a string.
 *
 * Used to generate lightweight blur placeholders for images.
 *
 * @param w - Placeholder width in pixels.
 * @param h - Placeholder height in pixels.
 * @returns SVG markup string.
 */
const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#f4f6fb" offset="20%" />
        <stop stop-color="#e9edf7" offset="50%" />
        <stop stop-color="#f4f6fb" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#f4f6fb" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>`;

/**
 * Encodes an SVG string for use inside a data URL.
 *
 * This avoids relying on Node's `Buffer`, which keeps the helper portable
 * across browser and server environments.
 *
 * @param value - Raw SVG markup string.
 * @returns URL-encoded SVG string.
 */
const toDataUrl = (value: string): string =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(value)}`;

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
export const getBlurDataURL = (width = 160, height = 160): string =>
  toDataUrl(shimmer(width, height));

/**
 * Default blur placeholder data URL using a 160 × 160 shimmer SVG.
 *
 * Useful as a shared fallback for image components.
 */
export const IMAGE_DEFAULT_BLUR = getBlurDataURL();