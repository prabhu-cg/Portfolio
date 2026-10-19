import type { Metadata } from "next";
import { Manrope, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Prabhu Raja — Senior Designer",
  description:
    "Prabhu Raja is a Senior UX/Product Designer with 15+ years of experience designing B2B SaaS products across financial services, legal technology, public sector and IoT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white print:hidden"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navigation />
          <main id="main" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
