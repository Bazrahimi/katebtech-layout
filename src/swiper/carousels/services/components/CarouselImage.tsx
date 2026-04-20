"use client";
import {ServiceLeafImage} from "@katebtech/layout/images";
import type { ServiceLeaf } from "@katebtech/layout/org";
type CarouselImageProps = {
  image: ServiceLeaf["image"];
};

const CarouselImage = ({ image }: CarouselImageProps) => {
  return <ServiceLeafImage image={image} aspect="aspect-[4/3]" />;
};

export default CarouselImage;
