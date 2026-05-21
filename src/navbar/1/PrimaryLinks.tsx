import Link from "next/link";

import { HzLanguage as HzLanguageLink } from "./HzLanguages";
import { ServicesMenuClient } from "./ServiceMenu";
// import { NAVBAR_CN as CN } from "./styles";
import type { PrimaryLinksProps } from "./types";

export const PrimaryLinks = ({
  aboutHref,
  contactHref,
  blogHref,
  hZLanguageHref,
  hzLanguageSrc,
  hzLanguageText,
  hzLanguage,
  services,
  primaryLinkClass,
}: PrimaryLinksProps) => {
  return (
    <div className="flex items-center gap-1">
      <Link href={aboutHref} className={primaryLinkClass}>
        About
      </Link>
      <ServicesMenuClient services={services} />
      <HzLanguageLink
        src={hzLanguageSrc}
        text={hzLanguageText}
        hzLanguage={hzLanguage}
        href={hZLanguageHref}
        className={primaryLinkClass}
      />
      {contactHref ? (
        <Link href={contactHref} className={primaryLinkClass}>
          Contact
        </Link>
      ) : null}
      {blogHref ? (
        <Link href={blogHref} className={primaryLinkClass}>
          Blog
        </Link>
      ) : null}
    </div>
  );
};
