import { Header, P } from "@katebtech/core";
import type { HeroHeadAndDescProps } from "./types";

/**
 * Renders the main hero heading block with:
 * - the primary organisation name
 * - an optional Hazaragi/Persian-script name
 * - an optional supporting description
 *
 * The alternate language heading is shown only when the relevant language key
 * is enabled and `orgNameHz` is provided.
 *
 * @param props - Component props.
 * @returns Hero heading and description content.
 */
export const HeroHeadAndDesc = ({
  orgName,
  orgNameHz,
  otherLangKeys,
  description,
}: HeroHeadAndDescProps) => {
  const showFarsiName =
    otherLangKeys?.includes("HZ") || otherLangKeys?.includes("HZ");

  return (
    <>
      <Header as="h1">{orgName}</Header>
      {showFarsiName && orgNameHz && <Header as="h1">{orgNameHz}</Header>}
      {description && (
        <P className="mt-5 text-gray-50 font-bold">{description}</P>
      )}
    </>
  );
};
