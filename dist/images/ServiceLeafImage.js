import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@katebtech/core";
import { cldServiceCardImage } from "../cloudinary";
import { IMAGE_DEFAULT_BLUR } from "@katebtech/layout/images";
import Image from "next/image";
export const ServiceLeafImage = ({ image, aspect = "aspect-[2/1]", // default ratio
 }) => {
    const primaryImage = image[0];
    if (!primaryImage)
        return null;
    return (_jsx("div", { className: cn("relative overflow-hidden rounded-2xl", aspect), children: _jsx(Image, { src: cldServiceCardImage(primaryImage.url), alt: primaryImage.alt, fill: true, sizes: "(min-width: 640px) 50vw, 100vw", className: "object-cover", loading: "lazy", placeholder: "blur", blurDataURL: IMAGE_DEFAULT_BLUR }) }));
};
