
import React from 'react';
import { Car } from 'lucide-react';

interface PlaceholderImageProps {
  brand: string;
  model: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ brand, model, className }) => {
  return (
    <div className={`flex items-center justify-center bg-muted ${className}`}>
      <div className="text-center">
        <Car className="mx-auto h-16 w-16 text-muted-foreground opacity-50" />
        <p className="mt-2 text-sm text-muted-foreground">{brand} {model}</p>
      </div>
    </div>
  );
};

export default PlaceholderImage;
