export interface GalleryItem {
  title: string;
  src: string;
  alt: string;
  wide?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    title: "Master Study: Girl and Boy Riding Horse by Tom Lovell (Dec 2021)",
    src: "/gallery/2021-Dec-master-study-of-girl-and-boy-riding-horse-by-tom-lovell.jpg",
    alt: "Master study of Girl and Boy Riding Horse by Tom Lovell, December 2021",
    wide: true,
  },
  {
    title: "Slam Dunk (Jan 30, 2022)",
    src: "/gallery/2022-01-30-slam-dunk.jpg",
    alt: "Slam Dunk drawing, January 30 2022",
  },
  {
    title: "Slam Dunk (Jan 9, 2022)",
    src: "/gallery/2022-01-09-slam-dunk.jpg",
    alt: "Slam Dunk drawing, January 9 2022",
  },
  {
    title: "Kakegurui (Sep 2021)",
    src: "/gallery/2021-Sep-Kakegurui.png",
    alt: "Kakegurui drawing, September 2021",
  },
  {
    title: "Landscape Study (Sep 2021)",
    src: "/gallery/2021-Sep-Final-Study.png",
    alt: "Landscape study, September 2021",
  },
];
