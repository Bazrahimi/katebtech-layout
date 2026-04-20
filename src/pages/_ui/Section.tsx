import { cn } from "@katebtech/core";

type Props = {
  /**
   * Section content rendered inside the wrapper.
   */
  children: React.ReactNode;

  /**
   * Optional additional class names merged into the section wrapper.
   */
  className?: string;

  /**
   * Optional DOM id for anchor linking or section targeting.
   *
   * Example:
   * `"services"`
   */
  id?: string;

  /**
   * Optional id of the element that labels this section for accessibility.
   *
   * This is passed to the `aria-labelledby` attribute.
   *
   * Example:
   * `"services-heading"`
   */
  labelledBy?: string;
};

/**
 * Reusable styled section wrapper for page content blocks.
 *
 * This component:
 * - applies consistent padding, border, shadow, and rounded corners
 * - supports in-page anchor linking with `id`
 * - supports accessible labelling with `aria-labelledby`
 * - allows custom styling through `className`
 *
 * Example:
 * ```tsx
 * <Section id="services" labelledBy="services-heading">
 *   <Header as="h2" id="services-heading">Services</Header>
 *   <P>Explore our main service areas.</P>
 * </Section>
 * ```
 */
export const Section = ({ children, className, id, labelledBy }: Props) => {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-24 rounded-b-3xl border border-slate-200 bg-gray-50 p-6 shadow-sm sm:p-8",
        className,
      )}
    >
      {children}
    </section>
  );
};
