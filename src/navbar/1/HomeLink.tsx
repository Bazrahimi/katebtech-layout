import Image from "next/image";
import Link from "next/link";
import type { HomeLinkProps } from "./types";

export const HomeLink = ({ homeHref, orgName, orgIconSrc }: HomeLinkProps) => {
  return (
    <Link
      // href={publicRoutes.home()}
      href={homeHref}
      className="inline-flex items-center gap-2"
    >
      <Image
        // src={publicAssets.icons.icon}
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
