import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Destination } from "@/data/destinations";

interface Props {
  destination: Destination;
}

const DestinationCard = ({ destination }: Props) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-background shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 flex gap-1.5">
          {destination.category.slice(0, 2).map((cat) => (
            <span key={cat} className="bg-background/80 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full capitalize text-foreground">
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground">{destination.name}</h3>
        <p className="text-sm text-muted-foreground mt-0.5 mb-3">{destination.country}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{destination.description}</p>
        <Button variant="outline" size="sm" asChild>
          <Link to={`/packages?destination=${destination.id}`}>View Packages</Link>
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;
