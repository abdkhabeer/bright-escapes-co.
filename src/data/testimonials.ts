export interface Testimonial {
  id: string;
  name: string;
  destination: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & James",
    destination: "Santorini, Greece",
    text: "Wanderlux made our honeymoon absolutely magical. Every detail was taken care of, from the stunning villa to the sunset cruise. We couldn't have asked for a better experience.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael T.",
    destination: "Bali, Indonesia",
    text: "The cultural adventure in Bali exceeded all my expectations. The guides were knowledgeable, the accommodations were perfect, and the itinerary balanced adventure with relaxation beautifully.",
    rating: 5,
  },
  {
    id: "3",
    name: "The Rodriguez Family",
    destination: "Swiss Alps",
    text: "Traveling with three kids can be stressful, but Wanderlux made it effortless. The Swiss Alps trip was perfectly paced for our family, and the kids still talk about the chocolate tasting!",
    rating: 5,
  },
  {
    id: "4",
    name: "Emma L.",
    destination: "Kyoto, Japan",
    text: "As a solo traveler, I felt completely looked after. The tea ceremony and bamboo grove walk were life-changing experiences. I've already booked my next trip with Wanderlux.",
    rating: 5,
  },
  {
    id: "5",
    name: "David & Priya",
    destination: "Maldives",
    text: "The overwater bungalow was a dream come true. Waking up to that turquoise water every morning was surreal. Wanderlux delivered a once-in-a-lifetime experience.",
    rating: 5,
  },
  {
    id: "6",
    name: "The Chen Family",
    destination: "Amalfi Coast, Italy",
    text: "From the cooking class to the boat ride to Capri, every moment was curated with care. The Amalfi Coast is now our favorite place on earth. Thank you, Wanderlux!",
    rating: 5,
  },
];
