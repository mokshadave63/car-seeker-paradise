
import { Car, CarFilters } from '../types/car';
import { carsData } from '../data/carsData';

export const getCars = (filters: CarFilters): {
  cars: Car[];
  totalCount: number;
  totalPages: number;
} => {
  let filteredCars = [...carsData];
  
  // Apply filters
  if (filters.brand && filters.brand !== 'All') {
    filteredCars = filteredCars.filter(car => car.brand === filters.brand);
  }
  
  if (filters.fuelType && filters.fuelType !== 'All') {
    filteredCars = filteredCars.filter(car => car.fuelType === filters.fuelType);
  }
  
  if (filters.seatingCapacity && filters.seatingCapacity > 0) {
    filteredCars = filteredCars.filter(car => car.seatingCapacity >= filters.seatingCapacity);
  }
  
  if (filters.priceMin !== undefined) {
    filteredCars = filteredCars.filter(car => car.price >= filters.priceMin!);
  }
  
  if (filters.priceMax !== undefined) {
    filteredCars = filteredCars.filter(car => car.price <= filters.priceMax!);
  }
  
  // Sort cars
  if (filters.sortBy) {
    filteredCars.sort((a, b) => {
      if (filters.sortBy === 'price-asc') {
        return a.price - b.price;
      } else if (filters.sortBy === 'price-desc') {
        return b.price - a.price;
      }
      return 0;
    });
  }
  
  const totalCount = filteredCars.length;
  const totalPages = Math.ceil(totalCount / filters.limit);
  
  // Paginate results
  const startIndex = (filters.page - 1) * filters.limit;
  const endIndex = startIndex + filters.limit;
  const paginatedCars = filteredCars.slice(startIndex, endIndex);
  
  return {
    cars: paginatedCars,
    totalCount,
    totalPages
  };
};

export const getCarById = (id: number): Car | undefined => {
  return carsData.find(car => car.id === id);
};
