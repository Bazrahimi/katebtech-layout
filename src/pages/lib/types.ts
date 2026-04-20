import type { ImageMeta } from "@katebtech/core";

/**
 * Represents a single service leaf item within a service subcategory.
 *
 * Each leaf contains the display labels, descriptive content, image set,
 * and supporting item list shown on the service page.
 */
export type ServiceLeaf = {
  /**
   * Primary English label for the service leaf.
   */
  label: string;

  /**
   * Alternate Farsi label for the service leaf.
   */
  labelFarsi: string;

  /**
   * Descriptive paragraphs for the service leaf.
   */
  description: string[];

  /**
   * Image collection associated with the service leaf.
   */
  image: ImageMeta[];

  /**
   * Supporting feature or detail items for the service leaf.
   */
  items: readonly string[];
};

/**
 * Map of service leaf entries within a subcategory.
 *
 * The numeric key is used to identify each leaf item.
 */
export type ServiceSubCategory = {
  [key: number]: ServiceLeaf;
};

/**
 * Represents a top-level services page configuration.
 *
 * Includes the page labels, slug, description, hero or preview images,
 * and all nested service subcategories.
 */
export type ServicesPage = {
  /**
   * Primary English label for the services page.
   */
  label: string;

  /**
   * Alternate Farsi label for the services page.
   */
  labelFarsi: string;

  /**
   * URL slug for the services page.
   */
  slug: string;

  /**
   * Introductory description content for the page.
   */
  description: readonly string[];

  /**
   * Image collection associated with the services page.
   */
  image: ImageMeta[];

  /**
   * Nested service subcategory entries for the page.
   */
  subcategories: ServiceSubCategory;
};