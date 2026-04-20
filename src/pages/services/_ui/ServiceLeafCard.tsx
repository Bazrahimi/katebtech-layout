import { cn, Header, List, P } from "@katebtech/core";
import { ImageGallery } from "@katebtech/layout/images";

import type { ServiceLeaf } from "@katebtech/layout/pages";

type Props = {
  /**
   * Service leaf content rendered inside the card.
   *
   * Expected fields commonly include:
   * - `label`: service leaf title
   * - `description`: one or more descriptive paragraphs
   * - `items`: optional bullet point list
   * - `image`: image collection shown in the gallery
   */
  leaf: ServiceLeaf;

  /**
   * Zero-based position of the card in the rendered list.
   *
   * Used to alternate the layout order between the text/list section
   * and the image section on larger screens.
   */
  index: number;

  /**
   * Unique DOM id assigned to the article element.
   *
   * Used for anchor linking to a specific service leaf card.
   */
  leafId: string;
};

/**
 * Renders a single service leaf card with:
 * - a heading
 * - descriptive paragraphs
 * - an optional bullet list
 * - an image gallery
 *
 * The layout alternates on larger screens based on the card index so the
 * list and image sections swap sides for visual variety.
 */
export const ServiceLeafCard = ({ leaf, index, leafId }: Props) => {
  const hasItems = leaf.items.length > 0;
  const isEven = index % 2 === 0;
  // const activeCta = CTA_MAP[ORG_PROFILE.cta];

  return (
    <>
      <article
        className="scroll-mt-24 rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm"
        id={leafId}
      >
        <div className="mb-5 grid gap-3 sm:mb-10 sm:grid-cols-12 sm:items-start sm:gap-6">
          {/* Row 1 — Title + Summary (always full width) */}
          <header className="space-y-3 sm:col-span-12">
            <Header as="h2">{leaf.label}</Header>

            {leaf.description &&
              leaf.description.map((t, i) => <P key={i}>{t}</P>)}
          </header>

          {/* Row 2 — Items (8 cols) */}
          {hasItems && (
            <section
              className={cn(
                "sm:col-span-6",
                isEven ? "sm:order-1" : "sm:order-2",
              )}
            >
              {/* Divider */}
              <div className="mb-4 h-px w-full bg-slate-200/70" />
              <List items={leaf.items} />
            </section>
          )}

          {/* Row 2 — Image (4 cols) */}
          <aside
            className={cn(
              hasItems ? "sm:col-span-6" : "sm:col-span-12",
              isEven ? "sm:order-2" : "sm:order-1",
            )}
          >
            <div className="mx-auto w-full max-w-3xl overflow-hidden">
              <ImageGallery images={leaf.image} priorityFirstImage />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
};
