import { cn, KATEB_TECH_LOGO } from "@katebtech/core";
import Image from "next/image";

type Props = {
  /**
   * Business or organisation name shown in the copyright text.
   *
   * Example:
   * "Austax Accounting"
   */
  orgName: string;

  /**
   * Optional extra className for the outer wrapper.
   *
   * Useful when adjusting spacing, alignment, or color from the parent.
   */
  className?: string;
};

/**
 * Reusable footer credit block with copyright text and
 * a "Built by Kateb Tech" badge link.
 *
 * It renders:
 * - the current year
 * - the provided organisation name
 * - a small external link to Kateb Tech
 *
 * Usage:
 * `<PoweredByKateb orgName={op.orgName} />`
 */
export const PoweredByKateb = ({ orgName, className }: Props) => {
  const year = new Date().getFullYear();

  return (
    <div
      className={cn(
        "mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-200",
        className,
      )}
    >
      <span>
        © {year} {orgName}. All rights reserved.
      </span>

      <span className="opacity-40">|</span>

      <a
        href="https://www.katebtech.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-teal-950 px-3 py-1 text-white ring-1 ring-teal-900 transition hover:bg-teal-900 focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 focus:outline-none"
      >
        <Image
          src={KATEB_TECH_LOGO}
          alt="Kateb Tech | Kateb Technology"
          width={16}
          height={16}
          unoptimized
        />

        <span className="font-semibold text-gray-500">
          Built by{" "}
          <span style={{ color: "#f59e0b" }} className="font-bold">
            Kateb Tech
          </span>
        </span>
      </a>
    </div>
  );
};
