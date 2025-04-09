
import React from 'react';
import { Link } from 'react-router-dom';
import { Fuel, Heart, Users, Gauge } from 'lucide-react';
import { Car } from '@/types/car';
import { useWishlist } from '@/context/WishlistContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { getRealisticCarImage } from '@/utils/imageUtils';

interface CarCardProps {
  car: Car;
  isGrid?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ car, isGrid = true }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(car.id);
  const [imageError, setImageError] = React.useState(false);
  
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(car.id);
    } else {
      addToWishlist(car);
    }
  };
  
  const carImageUrl = getRealisticCarImage(car.brand, car.model);
  
  return (
    <Link 
      to={`/car/${car.id}`} 
      className={cn(
        "group overflow-hidden rounded-lg bg-card border transition-all hover:shadow-lg animate-fade-in", 
        isGrid ? "flex flex-col" : "flex flex-col md:flex-row"
      )}
    >
      <div className={cn(
        "relative overflow-hidden bg-muted", 
        isGrid ? "h-48" : "h-48 md:w-64 md:h-auto"
      )}>
        {imageError ? (
          <div className="flex items-center justify-center h-full bg-muted">
            <div className="text-center p-4">
              <span className="block text-4xl mb-2">🚗</span>
              <p className="text-sm text-muted-foreground">{car.brand} {car.model}</p>
            </div>
          </div>
        ) : (
          <img 
            src={carImageUrl}
            alt={`${car.brand} ${car.model}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => {
              console.log(`Image error for ${car.brand} ${car.model}: ${carImageUrl}`);
              setImageError(true);
            }}
          />
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            "absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white dark:bg-black/50 dark:hover:bg-black/80",
            inWishlist ? "text-red-500" : "text-muted-foreground"
          )}
          onClick={handleWishlist}
        >
          <Heart className={cn("h-5 w-5", inWishlist ? "fill-current" : "")} />
        </Button>
      </div>
      
      <div className={cn(
        "flex flex-col flex-grow p-4",
        !isGrid && "md:p-6"
      )}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{car.brand} {car.model}</h3>
            <p className="text-muted-foreground text-sm">Year {car.year}</p>
          </div>
          <p className="font-bold text-car-coral">${car.price.toLocaleString()}</p>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Fuel className="h-4 w-4" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{car.seatingCapacity} Seats</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Gauge className="h-4 w-4" />
            <span>
              {car.fuelType === "Electric" 
                ? `${car.mileage} mi range` 
                : `${car.mileage} mpg`}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">{car.transmission}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
