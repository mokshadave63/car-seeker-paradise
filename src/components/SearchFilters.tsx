import React, { useState } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Slider
} from '@/components/ui/slider';
import { CarFilters } from '@/types/car';
import { getAllBrands, getAllFuelTypes, getSeatingCapacities, getMinMaxPrice } from '@/data/carsData';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface SearchFiltersProps {
  filters: CarFilters;
  onFilterChange: (filters: Partial<CarFilters>) => void;
  onReset: () => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, onFilterChange, onReset }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const brands = ['All', ...getAllBrands()];
  const fuelTypes = ['All', ...getAllFuelTypes()];
  const seatingCapacities = [0, ...getSeatingCapacities()];
  const { min: minPrice, max: maxPrice } = getMinMaxPrice();
  
  const [priceRange, setPriceRange] = useState<[number, number]>([
    filters.priceMin || minPrice,
    filters.priceMax || maxPrice
  ]);
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
    onFilterChange({
      priceMin: value[0],
      priceMax: value[1]
    });
  };
  
  const handleSortChange = (value: string) => {
    if (value === 'default') {
      const { sortBy, ...restFilters } = filters;
      onFilterChange(restFilters);
    } else {
      onFilterChange({ sortBy: value as 'price-asc' | 'price-desc' });
    }
  };
  
  const getCurrentSortValue = () => {
    return filters.sortBy || 'default';
  };
  
  return (
    <div className="bg-card rounded-lg border p-4 mb-6 transition-all duration-300 animate-fade-in">
      <div className="md:hidden mb-4">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full"
        >
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full flex justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 space-y-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium leading-none mb-2 block">Brand</label>
                <Select 
                  value={filters.brand || 'All'} 
                  onValueChange={(value) => onFilterChange({ brand: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium leading-none mb-2 block">Fuel Type</label>
                <Select 
                  value={filters.fuelType || 'All'} 
                  onValueChange={(value) => onFilterChange({ fuelType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Fuel Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {fuelTypes.map((fuelType) => (
                      <SelectItem key={fuelType} value={fuelType}>{fuelType}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium leading-none mb-2 block">Seating Capacity</label>
                <Select 
                  value={(filters.seatingCapacity || 0).toString()} 
                  onValueChange={(value) => onFilterChange({ seatingCapacity: parseInt(value, 10) })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Seating Capacity" />
                  </SelectTrigger>
                  <SelectContent>
                    {seatingCapacities.map((capacity) => (
                      <SelectItem key={capacity} value={capacity.toString()}>
                        {capacity === 0 ? 'Any' : `${capacity}+ seats`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium leading-none">Price Range</label>
                  <span className="text-sm text-muted-foreground">
                    ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                  </span>
                </div>
                <Slider 
                  min={minPrice} 
                  max={maxPrice} 
                  step={1000} 
                  value={priceRange}
                  onValueChange={handlePriceChange}
                  className="py-4"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium leading-none mb-2 block">Sort By</label>
                <Select 
                  value={getCurrentSortValue()} 
                  onValueChange={handleSortChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                variant="outline" 
                onClick={onReset}
                className="w-full flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                <span>Reset Filters</span>
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      
      <div className="hidden md:block">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium text-lg flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </h2>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onReset}
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <X className="h-4 w-4" />
            <span>Reset</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div>
            <label className="text-sm font-medium leading-none mb-2 block">Brand</label>
            <Select 
              value={filters.brand || 'All'} 
              onValueChange={(value) => onFilterChange({ brand: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium leading-none mb-2 block">Fuel Type</label>
            <Select 
              value={filters.fuelType || 'All'} 
              onValueChange={(value) => onFilterChange({ fuelType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Fuel Type" />
              </SelectTrigger>
              <SelectContent>
                {fuelTypes.map((fuelType) => (
                  <SelectItem key={fuelType} value={fuelType}>{fuelType}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium leading-none mb-2 block">Seating Capacity</label>
            <Select 
              value={(filters.seatingCapacity || 0).toString()} 
              onValueChange={(value) => onFilterChange({ seatingCapacity: parseInt(value, 10) })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Seating Capacity" />
              </SelectTrigger>
              <SelectContent>
                {seatingCapacities.map((capacity) => (
                  <SelectItem key={capacity} value={capacity.toString()}>
                    {capacity === 0 ? 'Any' : `${capacity}+ seats`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="lg:col-span-2">
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium leading-none">Price Range</label>
              <span className="text-sm text-muted-foreground">
                ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </span>
            </div>
            <Slider 
              min={minPrice} 
              max={maxPrice} 
              step={1000} 
              value={priceRange}
              onValueChange={handlePriceChange}
              className="py-4"
            />
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Select 
            value={getCurrentSortValue()} 
            onValueChange={handleSortChange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
