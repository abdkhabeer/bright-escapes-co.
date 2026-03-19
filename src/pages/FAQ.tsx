import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How does the booking process work?", a: "Simply browse our destinations and packages, find a trip you love, and submit an inquiry. Our travel experts will reach out within 24 hours to discuss details, customize your itinerary, and finalize your booking." },
  { q: "What is included in the travel packages?", a: "Each package includes accommodation, selected activities and excursions, airport transfers, and daily breakfast. Specific inclusions vary by package and are listed on each package page." },
  { q: "What is not included?", a: "International flights, travel insurance, personal expenses, and meals not mentioned in the itinerary are typically not included. We can help arrange flights and insurance upon request." },
  { q: "What is the payment process?", a: "Once your itinerary is confirmed, we require a 30% deposit to secure your booking. The remaining balance is due 30 days before departure. We accept bank transfers, credit cards, and PayPal." },
  { q: "What is your cancellation policy?", a: "Cancellations made 60+ days before departure receive a full refund minus a small processing fee. Cancellations within 30–60 days receive a 50% refund. Within 30 days, the booking is non-refundable. We strongly recommend travel insurance." },
  { q: "When should I book my trip?", a: "We recommend booking at least 2–3 months in advance, especially for peak season travel. Last-minute bookings are possible based on availability." },
  { q: "Can you customize a package for me?", a: "Absolutely! We love creating bespoke itineraries. Contact us with your preferences, budget, and travel dates, and we'll design a trip just for you." },
  { q: "What travel documents do I need?", a: "Requirements vary by destination. We'll provide a detailed checklist including visa requirements, vaccinations, and other preparations after booking." },
  { q: "Is travel insurance required?", a: "While not mandatory, we strongly recommend comprehensive travel insurance for all trips. We can suggest trusted providers upon request." },
  { q: "Can I travel as a solo traveler?", a: "Of course! Many of our packages are perfect for solo travelers. We can also arrange small group departures if you'd prefer company." },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know before booking your next adventure."
          />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-secondary">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
