import Link from "next/link";

import { HzLanguage as HzLanguageLink } from "./HzLanguages";
import { ServicesMenuClient } from "./ServiceMenu";
// import { NAVBAR_CN as CN } from "./styles";
import type { PrimaryLinksProps } from "./types";

export const PrimaryLinks = ({
  aboutHref,
  contactHref,
  hZLanguageHref,
  hzLanguage,
  services,
  primaryLinkClass
}: PrimaryLinksProps) => {
  const hasHz = hzLanguage.includes("HZ");

  return (
    <div className="flex items-center gap-1">
      <Link href={aboutHref} className={primaryLinkClass}>
        About Us
      </Link>
      <ServicesMenuClient services={services} />

      {hasHz ? (
        <HzLanguageLink
        
          hzLanguage={hzLanguage}
          href={hZLanguageHref}
          className={primaryLinkClass}
        />
      ) : null}

      <Link href={contactHref} className={primaryLinkClass}>
        Contact
      </Link>
    </div>
  );
};
