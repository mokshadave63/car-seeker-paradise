
export type Car = {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  fuelType: string;
  transmission: string;
  seatingCapacity: number;
  mileage: number;
  engineCapacity: number;
  features: string[];
  colors: string[];
  images: string[];
  description: string;
};

export type CarFilters = {
  brand?: string;
  fuelType?: string;
  priceMin?: number;
  priceMax?: number;
  seatingCapacity?: number;
  sortBy?: 'price-asc' | 'price-desc';
  page: number;
  limit: number;
};
