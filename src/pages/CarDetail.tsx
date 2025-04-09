
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ChevronLeft, Fuel, Users, Gauge, Check, Car as CarIcon } from 'lucide-react';
import { getCarById } from '@/services/carService';
import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useWishlist } from '@/context/WishlistContext';
import { cn } from '@/lib/utils';

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [inWishlist, setInWishlist] = useState(false);
  
  useEffect(() => {
    const fetchCar = () => {
      setIsLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        if (id) {
          const result = getCarById(parseInt(id, 10));
          setCar(result || null);
          if (result) {
            setInWishlist(isInWishlist(result.id));
          }
        }
        setIsLoading(false);
      }, 500);
    };
    
    fetchCar();
  }, [id, isInWishlist]);
  
  const handleWishlist = () => {
    if (!car) return;
    
    if (inWishlist) {
      removeFromWishlist(car.id);
    } else {
      addToWishlist(car);
    }
    
    setInWishlist(!inWishlist);
  };
  
  const defaultImage = "/placeholder.svg";
  
  if (isLoading) {
    return (
      <div className="animate-fade-in">
        <div className="mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 mb-4">
            <ChevronLeft className="h-4 w-4" />
            <span>Back to results</span>
          </Link>
          <Skeleton className="h-10 w-3/4 mb-2" />
          <Skeleton className="h-6 w-1/4" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton className="h-96 w-full rounded-lg mb-4" />
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="aspect-video rounded-md" />
              ))}
            </div>
          </div>
          
          <div>
            <Skeleton className="h-8 w-1/2 mb-4" />
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-full" />
              ))}
            </div>
            <Skeleton className="h-10 w-full mt-6" />
          </div>
        </div>
      </div>
    );
  }
  
  if (!car) {
    return (
      <div className="text-center py-12">
        <CarIcon className="mx-auto h-16 w-16 text-muted-foreground" />
        <h1 className="text-2xl font-bold mt-4">Car Not Found</h1>
        <p className="text-muted-foreground mt-2">The car you're looking for doesn't exist or has been removed.</p>
        <Link to="/">
          <Button className="mt-6">Back to Browse</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <Link to="/" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 mb-4 transition-colors">
          <ChevronLeft className="h-4 w-4" />
          <span>Back to results</span>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-1">{car.brand} {car.model}</h1>
        <p className="text-muted-foreground text-lg">{car.year}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-muted rounded-lg overflow-hidden mb-4 aspect-[16/9]">
            <img 
              src={car.images[activeImageIndex] || defaultImage}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = defaultImage;
              }}
            />
          </div>
          
          {car.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {car.images.map((image, index) => (
                <button 
                  key={index}
                  className={cn(
                    "aspect-video bg-muted rounded-md overflow-hidden transition-all border-2",
                    activeImageIndex === index 
                      ? "border-car-coral scale-105 shadow-md" 
                      : "border-transparent hover:border-muted-foreground"
                  )}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img 
                    src={image || defaultImage}
                    alt={`${car.brand} ${car.model} view ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = defaultImage;
                    }}
                  />
                </button>
              ))}
            </div>
          )}
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">About This Car</h2>
            <p className="text-muted-foreground leading-relaxed">{car.description}</p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                <Fuel className="h-5 w-5 text-car-blue" />
                <div>
                  <p className="font-medium">Fuel Type</p>
                  <p className="text-sm text-muted-foreground">{car.fuelType}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                <Users className="h-5 w-5 text-car-blue" />
                <div>
                  <p className="font-medium">Seating Capacity</p>
                  <p className="text-sm text-muted-foreground">{car.seatingCapacity} Seats</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                <Gauge className="h-5 w-5 text-car-blue" />
                <div>
                  <p className="font-medium">{car.fuelType === "Electric" ? "Range" : "Mileage"}</p>
                  <p className="text-sm text-muted-foreground">
                    {car.fuelType === "Electric" 
                      ? `${car.mileage} miles per charge` 
                      : `${car.mileage} mpg`}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                <div>
                  <p className="font-medium">Transmission</p>
                  <p className="text-sm text-muted-foreground">{car.transmission}</p>
                </div>
              </div>
              
              {car.engineCapacity > 0 && (
                <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                  <div>
                    <p className="font-medium">Engine Capacity</p>
                    <p className="text-sm text-muted-foreground">{car.engineCapacity}L</p>
                  </div>
                </div>
              )}
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-car-coral" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Available Colors</h3>
            <div className="flex flex-wrap gap-2">
              {car.colors.map((color, index) => (
                <div key={index} className="text-sm px-3 py-1 rounded-full bg-muted">
                  {color}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-card rounded-lg p-6 border sticky top-20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">${car.price.toLocaleString()}</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleWishlist}
                className={cn(
                  "rounded-full",
                  inWishlist ? "text-red-500" : "text-muted-foreground"
                )}
              >
                <Heart className={cn("h-5 w-5", inWishlist ? "fill-current" : "")} />
              </Button>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Brand</span>
                <span className="font-medium">{car.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Model</span>
                <span className="font-medium">{car.model}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Year</span>
                <span className="font-medium">{car.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Fuel Type</span>
                <span className="font-medium">{car.fuelType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transmission</span>
                <span className="font-medium">{car.transmission}</span>
              </div>
            </div>
            
            <Button className="w-full mt-6">Contact Dealer</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
