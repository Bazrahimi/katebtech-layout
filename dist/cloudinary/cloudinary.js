const CLD_BASE = "https://res.cloudinary.com/drvh5xeuw/image/upload";
const cld = (path, transform) => {
    if (!path)
        return "";
    const rel = path.startsWith("/") ? path.slice(1) : path;
    return `${CLD_BASE}/${transform}/${rel}`;
};
/**
 * Builds a Cloudinary URL for a hero background image.
 */
export const cldHeroBackgroundImage = (path) => cld(path, "f_auto,q_auto:good,dpr_auto,c_fill,g_auto,w_1800,h_1100");
/**
 * Builds a Cloudinary URL for a service card image.
 */
export const cldServiceCardImage = (path) => cld(path, "f_auto,q_auto:good,dpr_auto,ar_2:1,c_fill,g_auto,w_800");
/**
 * Builds a Cloudinary URL for a gallery image.
 */
export const cldGalleryImage = (path) => cld(path, "f_auto,q_auto:good,dpr_auto,ar_16:10,c_fill,g_auto,w_1400");
/**
 * Builds a Cloudinary URL for a thumbnail image.
 */
export const cldThumbnailImage = (path) => cld(path, "f_auto,q_auto:good,dpr_auto,ar_4:3,c_fill,g_auto,w_500");
/**
 * Builds a Cloudinary URL for a large preview image.
 */
export const cldLargePreviewImage = (path) => cld(path, "f_auto,q_auto:good,dpr_auto,w_2200,h_1600,c_limit");
