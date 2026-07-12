import type { Metadata } from "next";
import { Mail, FileDown, Clock } from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/Card";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const metadata: Metadata = {
  title: "Contact — PRISM",
  description: "Get in touch with Prabhu Raja about design leadership, design systems and product design work.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "prabhu_cg@proton.me",
    href: "mailto:prabhu_cg@proton.me",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/cgprabhu",
    href: "https://www.linkedin.com/in/cgprabhu/",
  },
  {
    icon: FileDown,
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's talk about your next challenge."
        description="Whether it's a design system, a complex enterprise workflow, or a leadership role — I'd like to hear about it."
      />

      <section className="container-prism pb-20 md:pb-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.label} hover>
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-ink-secondary">
                      <Icon className="size-5" />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-sm text-muted">{method.label}</span>
                      <span className="text-base font-medium text-ink">{method.value}</span>
                    </span>
                  </a>
                </Card>
              );
            })}

            <div className="flex items-start gap-3 rounded-lg border border-border bg-surface p-5">
              <Clock className="size-4 shrink-0 text-muted" />
              <p className="text-sm text-ink-secondary">
                I typically respond within 1–2 business days.
              </p>
            </div>
          </div>

          <Card padding="lg">
            <ContactForm />
          </Card>
        </div>
      </section>
    </>
  );
}
