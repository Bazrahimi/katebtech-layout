import type { ImageMeta } from "@katebtech/core";


export type ServicesPage = {
  label: string;

  labelFarsi: string;

  slug: string;

  description: readonly string[];

  image: ImageMeta[];

  subcategories: ServiceSubCategory;
};

export type ServiceLeaf = {
  label: string;

  labelFarsi: string;

  description: string[];

  image: ImageMeta[];

  items: readonly string[];
};

export type ServiceSubCategory = {
  [key: number]: ServiceLeaf;
};



export type TeamMember = {
  name: string;
  role: string;
  image?: string; // "/images/team/....png"
  bio?: string;
};

export type TeamSection = {
  id: string;
  title: string;
  intro: string; // paragraph under the heading
  professionalTitles?: readonly string[];
  members: readonly TeamMember[];
};
export type AboutTextSection = {
  id: string;
  title: string;
  items: readonly string[];
};

export type AboutValuesSection = {
  id: string;
  title: string;
  items: readonly string[];
  icon?: "check";
};

export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type DayHours =
  | { closed: true }
  | { closed: false; open: string; close: string }; // "09:00", "17:30"

export type OpeningHours = Record<DayKey, DayHours>;

export type FAQItem = {
  q: string;
  a: string;
};
