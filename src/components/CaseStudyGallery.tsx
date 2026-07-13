import Image from "next/image";
import { CaseStudyMotion, CaseStudyMotionItem } from "@/components/CaseStudyMotion";
import { fadeUp, staggerChildren } from "@/lib/motion";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export function CaseStudyGallery({ images }: { images: GalleryImage[] }) {
  return (
    <section className="border-t border-border">
      <div className="container-prism py-16 md:py-20">
        <CaseStudyMotion variants={staggerChildren(0.1)} className="flex flex-col gap-10">
          <CaseStudyMotionItem variants={fadeUp} className="flex max-w-3xl flex-col gap-4">
            <span className="text-eyebrow text-muted">Selected screens</span>
            <h2 className="text-h3 font-semibold tracking-tight text-ink">A look at the work.</h2>
          </CaseStudyMotionItem>
          <CaseStudyMotionItem
            variants={staggerChildren(0.08)}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {images.map((image) => (
              <CaseStudyMotionItem
                key={image.src}
                variants={fadeUp}
                className="flex flex-col gap-3"
              >
                <div className="overflow-hidden rounded-lg border border-border bg-surface">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1600}
                    height={1000}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                {image.caption && (
                  <p className="text-sm text-ink-secondary">{image.caption}</p>
                )}
              </CaseStudyMotionItem>
            ))}
          </CaseStudyMotionItem>
        </CaseStudyMotion>
      </div>
    </section>
  );
}
