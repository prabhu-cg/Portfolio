// Projects shown in the landing-page hero reel, in display order.
// `shot` picks which gallery image represents the project (default: first).
export const heroReel: { slug: string; shot?: number; kind: string }[] = [
  { slug: "solvr-ai-product-design", kind: "Application" },
  { slug: "briefwise-brief-refiner", kind: "Tool" },
  { slug: "collaborate-web-app-redesign", shot: 3, kind: "Enterprise" },
  { slug: "curo-bookmark-manager", kind: "Application" },
  { slug: "uxbeacon-ux-audit-tool", kind: "Application" },
];
