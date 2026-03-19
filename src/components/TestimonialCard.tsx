import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface Props {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="bg-background rounded-2xl p-6 shadow-sm border border-border">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-coral text-coral" />
        ))}
      </div>
      <p className="text-sm text-foreground leading-relaxed mb-4 italic">
        "{testimonial.text}"
      </p>
      <div>
        <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.destination}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
