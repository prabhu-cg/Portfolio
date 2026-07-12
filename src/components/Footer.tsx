import Link from "next/link";
import { Mail, FileDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

const footerLinks = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cgprabhu/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:prabhu_cg@proton.me",
  },
  {
    icon: FileDown,
    label: "Resume",
    href: "/resume.pdf",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-prism flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-sm text-muted">Senior Designer</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
          {footerLinks.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-secondary transition-colors hover:text-accent-strong"
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border py-6">
        <p className="container-prism text-xs text-muted">
          © {new Date().getFullYear()} Prabhu Raja. Designed and built with intention.
        </p>
      </div>
    </footer>
  );
}
