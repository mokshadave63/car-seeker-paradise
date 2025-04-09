
import React, { useEffect, useState } from 'react';
import { Car as CarType, CarFilters } from '@/types/car';
import { getCars } from '@/services/carService';
import SearchFilters from '@/components/SearchFilters';
import CarCard from '@/components/CarCard';
import Pagination from '@/components/Pagination';
import ViewToggle from '@/components/ViewToggle';
import { Skeleton } from '@/components/ui/skeleton';

const initialFilters: CarFilters = {
  page: 1,
  limit: 10,
};

const Home: React.FC = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [filters, setFilters] = useState<CarFilters>(initialFilters);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  
  useEffect(() => {
    const fetchCars = () => {
      setIsLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        const result = getCars(filters);
        setCars(result.cars);
        setTotalPages(result.totalPages);
        setIsLoading(false);
      }, 500);
    };
    
    fetchCars();
  }, [filters]);
  
  const handleFilterChange = (newFilters: Partial<CarFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters, page: 1 }));
  };
  
  const handlePageChange = (page: number) => {
    setFilters(prev => ({ ...prev, page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleResetFilters = () => {
    setFilters(initialFilters);
  };
  
  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Your Perfect Car</h1>
        <p className="text-muted-foreground">Browse our selection of top-rated vehicles</p>
      </div>
      
      <SearchFilters 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        onReset={handleResetFilters} 
      />
      
      <div className="mb-6 flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          {isLoading ? (
            <Skeleton className="h-4 w-24" />
          ) : (
            <>Showing <span className="font-medium">{cars.length}</span> results</>
          )}
        </p>
        <ViewToggle view={view} onViewChange={setView} />
      </div>
      
      {isLoading ? (
        <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {Array(filters.limit).fill(0).map((_, index) => (
            <div key={index} className="rounded-lg overflow-hidden border">
              <Skeleton className="h-48 w-full" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <div className="grid grid-cols-2 gap-3">
                  {Array(4).fill(0).map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : cars.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl font-medium mb-2">No cars found</p>
          <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
        </div>
      ) : (
        <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} isGrid={view === 'grid'} />
          ))}
        </div>
      )}
      
      {!isLoading && (
        <Pagination 
          currentPage={filters.page} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      )}
    </div>
  );
};

export default Home;
