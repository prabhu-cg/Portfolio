import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "@/content/projects";
import { heroReel } from "@/content/featured";
import { Marquee } from "@/components/ui/Marquee";

const cards = heroReel.flatMap((entry) => {
  const project = getProjectBySlug(entry.slug);
  const image = project?.gallery?.[entry.shot ?? 0];
  return project && image
    ? [{ project, image, kind: project.subcategory?.replace(/s$/, "") ?? "" }]
    : [];
});

// Vertical rhythm of the strip. Repeats every four cards, so keep the card
// count a multiple of four and the loop seam stays on the beat.
const OFFSETS = ["0rem", "1.75rem", "0.5rem", "2.5rem"];

export function ProductFilmstrip() {
  return (
    <Marquee duration={70} gap="1.5rem" className="pt-2 pb-6">
      {cards.map(({ project, image, kind }, index) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          draggable={false}
          aria-label={`${project.title.split(" — ")[0]}: view case study`}
          style={{ marginTop: OFFSETS[index % OFFSETS.length] }}
          className="group flex w-[17rem] shrink-0 flex-col gap-3 sm:w-[21rem]"
        >
          <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-border bg-surface shadow-[0_20px_40px_-24px_rgb(0_0_0/0.45)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:shadow-[0_28px_48px_-24px_rgb(0_0_0/0.5)]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              draggable={false}
              priority={index < 3}
              sizes="(min-width: 640px) 336px, 272px"
              className="object-cover object-[50%_top]"
            />
          </div>
          <div className="flex items-baseline justify-between gap-3 px-1">
            <span className="truncate text-sm font-semibold tracking-tight text-ink">
              {project.title.split(" — ")[0]}
            </span>
            <span className="shrink-0 text-xs text-muted">{kind}</span>
          </div>
        </Link>
      ))}
    </Marquee>
  );
}
