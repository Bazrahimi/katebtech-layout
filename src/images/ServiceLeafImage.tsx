import type { ImageMeta } from "@katebtech/layout/images";
import {  cn  } from "@katebtech/core";
import { cldServiceCardImage } from "../cloudinary";
import {IMAGE_DEFAULT_BLUR} from "@katebtech/layout/images"

import Image from "next/image";

export const ServiceLeafImage = ({
  image,
  aspect = "aspect-[2/1]", // default ratio
}: {
  image: ImageMeta[];
  aspect?: string;
}) => {
  const primaryImage = image[0];
  if (!primaryImage) return null;

  return (
    <div className={cn("relative overflow-hidden rounded-2xl", aspect)}>
      <Image
        src={cldServiceCardImage(primaryImage.url)}
        alt={primaryImage.alt}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover"
        loading="lazy"
        placeholder="blur"
        blurDataURL={IMAGE_DEFAULT_BLUR}
      />
    </div>
  );
}
