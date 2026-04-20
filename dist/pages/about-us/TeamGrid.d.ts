import type { TeamSection } from "@katebtech/layout/pages";
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
export declare const TeamGrid: ({ team }: TeamGridProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=TeamGrid.d.ts.map