import destSantorini from "@/assets/dest-santorini.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import destAmalfi from "@/assets/dest-amalfi.jpg";
import destSwiss from "@/assets/dest-swiss.jpg";
import destKyoto from "@/assets/dest-kyoto.jpg";

export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
  overview: string;
  itinerary: string[];
  inclusions: string[];
  exclusions: string[];
  idealFor: string[];
}

export const packages: TravelPackage[] = [
  {
    id: "santorini-romance",
    title: "Santorini Romance Escape",
    destination: "Santorini, Greece",
    duration: "7 Days / 6 Nights",
    price: 2499,
    image: destSantorini,
    highlights: ["Sunset catamaran cruise", "Wine tasting tour", "Private villa with caldera view", "Couples spa day"],
    overview: "Experience the magic of Santorini with your special someone. From iconic blue-domed churches to spectacular sunsets over the caldera, this romantic getaway is designed to create unforgettable memories.",
    itinerary: ["Day 1: Arrive in Santorini, private transfer to villa", "Day 2: Explore Oia village and iconic blue domes", "Day 3: Catamaran sunset cruise with dinner", "Day 4: Wine tasting and local cuisine tour", "Day 5: Beach day at Red Beach and Perissa", "Day 6: Couples spa and farewell dinner", "Day 7: Departure"],
    inclusions: ["Luxury villa accommodation", "Daily breakfast", "Airport transfers", "Catamaran cruise", "Wine tasting tour", "Spa treatment"],
    exclusions: ["International flights", "Travel insurance", "Personal expenses", "Meals not mentioned"],
    idealFor: ["Couples", "Honeymooners"],
  },
  {
    id: "bali-adventure",
    title: "Bali Cultural Adventure",
    destination: "Bali, Indonesia",
    duration: "10 Days / 9 Nights",
    price: 1899,
    image: destBali,
    highlights: ["Ubud rice terrace trek", "Temple ceremonies", "Snorkeling in Nusa Penida", "Traditional cooking class"],
    overview: "Dive deep into Bali's rich culture and stunning natural landscapes. From misty rice terraces to vibrant coral reefs, this trip blends adventure with cultural immersion.",
    itinerary: ["Day 1: Arrive in Bali, transfer to Ubud", "Day 2: Tegallalang rice terraces and monkey forest", "Day 3: Temple tour and Balinese dance performance", "Day 4: Cooking class and artisan villages", "Day 5: Transfer to Nusa Penida", "Day 6: Snorkeling and beach exploration", "Day 7: Kelingking Beach and island tour", "Day 8: Transfer to Seminyak for relaxation", "Day 9: Beach day and sunset dinner", "Day 10: Departure"],
    inclusions: ["Boutique hotel accommodation", "Daily breakfast", "All transfers", "Guided tours", "Cooking class", "Snorkeling gear"],
    exclusions: ["International flights", "Travel insurance", "Lunch and dinner unless specified"],
    idealFor: ["Adventurers", "Culture lovers", "Solo travelers"],
  },
  {
    id: "maldives-luxury",
    title: "Maldives Island Bliss",
    destination: "Maldives",
    duration: "6 Days / 5 Nights",
    price: 3299,
    image: destMaldives,
    highlights: ["Overwater bungalow stay", "Snorkeling with manta rays", "Private beach dining", "Sunset dolphin cruise"],
    overview: "Indulge in pure tropical paradise with crystal-clear waters, white sand beaches, and world-class luxury. The ultimate island escape for relaxation and romance.",
    itinerary: ["Day 1: Arrive via seaplane, check into overwater bungalow", "Day 2: Snorkeling and reef exploration", "Day 3: Spa day and sunset dolphin cruise", "Day 4: Island hopping and local village visit", "Day 5: Private beach dinner under the stars", "Day 6: Departure"],
    inclusions: ["Overwater bungalow", "All meals", "Seaplane transfers", "Snorkeling excursion", "Dolphin cruise", "Spa treatment"],
    exclusions: ["International flights", "Travel insurance", "Premium beverages"],
    idealFor: ["Couples", "Honeymooners", "Luxury travelers"],
  },
  {
    id: "amalfi-coast-tour",
    title: "Amalfi Coast Discovery",
    destination: "Amalfi Coast, Italy",
    duration: "8 Days / 7 Nights",
    price: 2799,
    image: destAmalfi,
    highlights: ["Positano village walk", "Boat tour to Capri", "Limoncello tasting", "Cooking class with a local chef"],
    overview: "Journey along Italy's most stunning coastline, from the pastel-colored villages of Positano to the glamorous isle of Capri. A feast for the senses at every turn.",
    itinerary: ["Day 1: Arrive in Naples, transfer to Amalfi", "Day 2: Explore Amalfi town and cathedral", "Day 3: Day trip to Positano", "Day 4: Boat tour to Capri", "Day 5: Ravello gardens and villa tours", "Day 6: Cooking class and limoncello tasting", "Day 7: Free day for relaxation", "Day 8: Departure"],
    inclusions: ["Boutique hotel stays", "Daily breakfast", "Boat tour to Capri", "Cooking class", "All transfers"],
    exclusions: ["International flights", "Travel insurance", "Meals not mentioned"],
    idealFor: ["Couples", "Friends", "Food lovers"],
  },
  {
    id: "swiss-alps-escape",
    title: "Swiss Alps Mountain Retreat",
    destination: "Swiss Alps, Switzerland",
    duration: "7 Days / 6 Nights",
    price: 3099,
    image: destSwiss,
    highlights: ["Scenic train rides", "Alpine hiking trails", "Chocolate and cheese tasting", "Mountain village stays"],
    overview: "Breathe in crisp mountain air and take in panoramic views of snow-capped peaks. This retreat combines outdoor adventure with Swiss charm and culinary delights.",
    itinerary: ["Day 1: Arrive in Zurich, transfer to Interlaken", "Day 2: Jungfraujoch scenic train excursion", "Day 3: Hiking in Grindelwald", "Day 4: Lake Thun cruise and Spiez castle", "Day 5: Transfer to Zermatt, Matterhorn views", "Day 6: Chocolate and cheese tasting experience", "Day 7: Departure from Zurich"],
    inclusions: ["Mountain lodge accommodation", "Daily breakfast", "Scenic train passes", "Guided hikes", "Tasting experiences"],
    exclusions: ["International flights", "Travel insurance", "Lunch and dinner"],
    idealFor: ["Families", "Adventurers", "Nature lovers"],
  },
  {
    id: "kyoto-culture",
    title: "Kyoto & Beyond Cultural Journey",
    destination: "Kyoto, Japan",
    duration: "9 Days / 8 Nights",
    price: 2699,
    image: destKyoto,
    highlights: ["Bamboo grove walk", "Tea ceremony experience", "Geisha district tour", "Day trip to Nara"],
    overview: "Step into a world where ancient traditions meet modern elegance. Explore serene temples, stroll through bamboo forests, and experience the art of Japanese hospitality.",
    itinerary: ["Day 1: Arrive in Osaka, transfer to Kyoto", "Day 2: Fushimi Inari and Kiyomizu-dera", "Day 3: Arashiyama bamboo grove and monkey park", "Day 4: Tea ceremony and geisha district", "Day 5: Day trip to Nara and deer park", "Day 6: Cooking class and Nishiki market", "Day 7: Zen garden meditation and calligraphy", "Day 8: Free day for exploration", "Day 9: Departure from Osaka"],
    inclusions: ["Traditional ryokan stays", "Daily breakfast", "Rail passes", "Guided tours", "Tea ceremony", "Cooking class"],
    exclusions: ["International flights", "Travel insurance", "Personal shopping"],
    idealFor: ["Culture enthusiasts", "Solo travelers", "Families"],
  },
];
