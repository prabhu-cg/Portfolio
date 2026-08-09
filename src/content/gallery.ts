export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface GalleryGroup {
  company: string;
  role: string;
  images: GalleryImage[];
}

export const workGallery: GalleryGroup[] = [
  {
    company: "Thomson Reuters HighQ",
    role: "Senior Product Designer",
    images: [
      {
        src: "/gallery/highq/01-2fa-flow.png",
        alt: "Passcode verification flow wireframe, mapping every state from sign-in through account lockout",
        width: 1600,
        height: 1227,
      },
      {
        src: "/gallery/highq/02-mobile-ia-sketch-1.jpg",
        alt: "Paper sketches of a mobile home screen exploring top features and a video carousel",
        width: 1600,
        height: 899,
      },
      {
        src: "/gallery/highq/03-mobile-ia-sketch-2.jpg",
        alt: "Paper sketches of a mobile slide-in menu and navigation structure",
        width: 1600,
        height: 899,
      },
      {
        src: "/gallery/highq/04-mobile-ia-sketch-3.jpg",
        alt: "Paper sketches of mobile explorer and channels navigation drill-down",
        width: 1600,
        height: 899,
      },
      {
        src: "/gallery/highq/05-mobile-ia-sketch-4.jpg",
        alt: "Paper sketches of contacts, cross-border and collaborate modal windows",
        width: 1600,
        height: 899,
      },
      {
        src: "/gallery/highq/06-layout-wireframes.jpg",
        alt: "Responsive grid layout wireframes exploring column and card variations",
        width: 1456,
        height: 2592,
      },
      {
        src: "/gallery/highq/07-whiteboard-dropzone.jpg",
        alt: "Whiteboard sketch of a file manager drop zone with upload and folder tree features",
        width: 1456,
        height: 2592,
      },
      {
        src: "/gallery/highq/08-ia-stickies.jpg",
        alt: "Sticky-note information architecture exercise mapping site modules and content",
        width: 1600,
        height: 899,
      },
    ],
  },
  {
    company: "Sweepr",
    role: "Senior Product Designer",
    images: [
      {
        src: "/gallery/sweepr/01-dashboard.png",
        alt: "Sweepr customer care dashboard showing live home connectivity status and recent issues",
        width: 1600,
        height: 900,
      },
      {
        src: "/gallery/sweepr/02-resolution-builder.png",
        alt: "Sweepr resolution builder canvas for authoring support interaction steps",
        width: 1600,
        height: 900,
      },
      {
        src: "/gallery/sweepr/03-interactions-table.png",
        alt: "Sweepr interactions table listing support workflows by device and status",
        width: 1600,
        height: 900,
      },
      {
        src: "/gallery/sweepr/04-create-interaction-modal.png",
        alt: "Sweepr create-new-interaction modal for defining a support resolution",
        width: 1600,
        height: 900,
      },
    ],
  },
];
