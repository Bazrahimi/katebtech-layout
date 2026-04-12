import Image from "next/image";
import Link from "next/link";
import type { HomeLinkProps } from "./types";

/**
 * Brand home link shown on the left side of the navbar.
 *
 * Renders the organisation icon and name, and links both back to the
 * website home page.
 *
 * @param props - Home link display and navigation props.
 * @param props.homeHref - URL path for the home page link.
 * @param props.orgName - Organisation or business name shown beside the logo.
 * @param props.orgIconSrc - Image source for the organisation icon or logo.
 */
export const HomeLink = ({ homeHref, orgName, orgIconSrc }: HomeLinkProps) => {
  return (
    <Link href={homeHref} className="inline-flex items-center gap-2">
      <Image
        src={orgIconSrc}
        alt={`${orgName} Logo`}
        width={28}
        height={28}
        className="rounded-full bg-white p-1 transition duration-200 hover:opacity-80"
        priority
      />
      <span className="hidden text-sm font-semibold sm:inline">{orgName}</span>
    </Link>
  );
};