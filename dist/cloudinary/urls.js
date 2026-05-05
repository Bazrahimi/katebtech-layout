export const createCloudinaryTransformer = (cloudName) => {
    const cldBase = `https://res.cloudinary.com/${cloudName}/image/upload`;
    const cld = (path, transform) => {
        if (!path)
            return "";
        const rel = path.startsWith("/") ? path.slice(1) : path;
        return `${cldBase}/${transform}/${rel}`;
    };
    return {
        cld,
        cldHeroBackgroundImage: (path) => cld(path, "f_auto,q_auto:good,dpr_auto,c_fill,g_auto,w_1800,h_1100"),
        cldServiceCardImage: (path) => cld(path, "f_auto,q_auto:good,dpr_auto,ar_2:1,c_fill,g_auto,w_800"),
        cldGalleryImage: (path) => cld(path, "f_auto,q_auto:good,dpr_auto,ar_16:10,c_fill,g_auto,w_1400"),
        cldThumbnailImage: (path) => cld(path, "f_auto,q_auto:good,dpr_auto,ar_4:3,c_fill,g_auto,w_500"),
        cldLargePreviewImage: (path) => cld(path, "f_auto,q_auto:good,dpr_auto,w_2200,h_1600,c_limit"),
    };
};
