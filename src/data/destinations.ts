import destSantorini from "@/assets/dest-santorini.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import destAmalfi from "@/assets/dest-amalfi.jpg";
import destSwiss from "@/assets/dest-swiss.jpg";
import destKyoto from "@/assets/dest-kyoto.jpg";

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  category: string[];
}

export const destinations: Destination[] = [
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    description: "Sun-kissed white villages perched on dramatic cliffs overlooking the sparkling Aegean Sea.",
    image: destSantorini,
    category: ["beach", "honeymoon", "city"],
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    description: "Lush rice terraces, ancient temples, and pristine beaches in the heart of the tropics.",
    image: destBali,
    category: ["beach", "adventure", "family"],
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    description: "Crystal-clear turquoise waters and overwater bungalows for the ultimate island escape.",
    image: destMaldives,
    category: ["beach", "honeymoon"],
  },
  {
    id: "amalfi",
    name: "Amalfi Coast",
    country: "Italy",
    description: "Colorful cliffside villages, world-class cuisine, and breathtaking Mediterranean views.",
    image: destAmalfi,
    category: ["city", "honeymoon", "group"],
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    description: "Majestic snow-capped peaks, flower-filled meadows, and charming alpine villages.",
    image: destSwiss,
    category: ["adventure", "family"],
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    description: "Ancient temples, serene gardens, and the magical beauty of cherry blossom season.",
    image: destKyoto,
    category: ["city", "adventure", "family"],
  },
];
