import { cn, Header } from "@katebtech/core";

type FooterHeaderProps = {
  /**
   * Header content displayed inside the footer section title.
   */
  children: React.ReactNode;

  /**
   * Optional className for custom heading styles.
   *
   * Useful for changing colour, spacing, or typography per website.
   */
  className?: string;
};

/**
 * Reusable footer section heading component.
 *
 * Wraps the shared `Header` component with footer-specific defaults.
 *
 * Default behaviour:
 * - renders as `h4`
 * - uses `sm` header size
 * - aligns text to the left
 *
 * Example:
 * `<FooterHeader>Quick Links</FooterHeader>`
 */
export const FooterHeader = ({
  children,
  className,
}: FooterHeaderProps) => {
  return (
    <Header
      as="h4"
      size="sm"
      align="left"
      className={cn("text-gray-950", className)}
    >
      {children}
    </Header>
  );
};