import { Header, P } from "@katebtech/core";
import type { TeamMember, TeamSection } from "@katebtech/layout/pages";
import Image from "next/image";

type AvatarProps = {
  /**
   * Team member data used to render the avatar.
   *
   * Expected fields commonly include:
   * - `name`: member display name
   * - `image`: optional image URL or path
   */
  member: TeamMember;
};

/**
 * Renders a circular team member avatar.
 *
 * When an image is available, it displays:
 * - a blurred background version of the image
 * - a sharp foreground profile image on top
 *
 * When no image is provided, it falls back to a local placeholder image.
 */
const Avatar = ({ member }: AvatarProps) => {
  const hasImage = !!member.image;

  return (
    <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-100 ring-2 ring-gray-200 ring-offset-2">
      {hasImage ? (
        <>
          <Image
            src={member.image!}
            alt=""
            fill
            aria-hidden
            className="scale-110 object-cover blur-md"
            sizes="96px"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 z-10">
            <Image
              src={member.image!}
              alt={`${member.name} profile`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src="/images/avatar-placeholder.jpg"
            alt="Profile placeholder"
            width={64}
            height={64}
            className="opacity-60"
          />
        </div>
      )}
    </div>
  );
};

type TeamGridProps = {
  /**
   * Team section content used to render the full team grid.
   *
   * Expected fields include:
   * - `id`: unique identifier for accessibility
   * - `title`: section heading
   * - `intro`: short introductory text
   * - `professionalTitles`: optional list of expertise labels
   * - `members`: team member cards to display
   */
  team: TeamSection;
};

/**
 * Renders a team section with:
 * - a heading
 * - introductory text
 * - optional expertise summary
 * - a responsive grid of team member cards
 *
 * Returns `null` when the team has no members.
 */
export const TeamGrid = ({ team }: TeamGridProps) => {
  if (!team.members.length) return null;

  return (
    <section aria-labelledby={`${team.id}-heading`}>
      <Header as="h2" size="sm" id={`${team.id}-heading`}>
        {team.title}
      </Header>

      <P className="mt-2 max-w-2xl text-sm text-slate-700">
        {team.intro}{" "}
        {team.professionalTitles?.length ? (
          <>
            <span className="font-medium">Expertise: </span>
            {team.professionalTitles.join(", ")}.
          </>
        ) : null}
      </P>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {team.members.map((member) => (
          <article
            key={`${member.name}-${member.role}`}
            className="mx-auto w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm"
          >
            <Avatar member={member} />
            <Header className="text-gray-900" as="h3" size="xs">
              {member.name}
            </Header>
            <P className="mt-1 text-sm text-gray-600">{member.role}</P>

            {member.bio ? (
              <P className="mt-3 text-sm text-gray-700">{member.bio}</P>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};
