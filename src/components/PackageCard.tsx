import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import type { TravelPackage } from "@/data/packages";

interface Props {
  pkg: TravelPackage;
}

const PackageCard = ({ pkg }: Props) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-background shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
          <span className="flex items-center gap-1"><MapPin size={12} /> {pkg.destination}</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {pkg.duration}</span>
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">{pkg.title}</h3>
        <ul className="flex flex-wrap gap-1.5 mb-4">
          {pkg.highlights.slice(0, 3).map((h) => (
            <li key={h} className="text-xs bg-teal px-2.5 py-1 rounded-full text-foreground">{h}</li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">From</span>
            <p className="text-xl font-bold text-primary">${pkg.price.toLocaleString()}</p>
          </div>
          <Button variant="coral" size="sm" asChild>
            <Link to={`/packages/${pkg.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
