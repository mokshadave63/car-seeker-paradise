
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronLeft, Trash2 } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import ViewToggle from '@/components/ViewToggle';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Wishlist: React.FC = () => {
  const { wishlist } = useWishlist();
  const [view, setView] = useState<'grid' | 'list'>('grid');
  
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <Link to="/" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 mb-4">
          <ChevronLeft className="h-4 w-4" />
          <span>Back to browse</span>
        </Link>
        
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-1 flex items-center gap-2">
              <Heart className="h-6 w-6 text-car-coral" />
              <span>Your Wishlist</span>
            </h1>
            <p className="text-muted-foreground">
              {wishlist.length} {wishlist.length === 1 ? 'car' : 'cars'} saved
            </p>
          </div>
          
          {wishlist.length > 0 && (
            <ClearWishlistButton />
          )}
        </div>
      </div>
      
      {wishlist.length === 0 ? (
        <div className="text-center py-12 space-y-4">
          <Heart className="mx-auto h-16 w-16 text-muted-foreground stroke-[1.5]" />
          <h2 className="text-2xl font-medium">Your wishlist is empty</h2>
          <p className="text-muted-foreground">Start exploring and add cars you like to your wishlist.</p>
          <Link to="/">
            <Button className="mt-4">Browse Cars</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-6 flex justify-end">
            <ViewToggle view={view} onViewChange={setView} />
          </div>
          
          <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {wishlist.map((car) => (
              <CarCard key={car.id} car={car} isGrid={view === 'grid'} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ClearWishlistButton: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  
  const handleClearAll = () => {
    wishlist.forEach(car => {
      removeFromWishlist(car.id);
    });
  };
  
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Trash2 className="h-4 w-4" />
          <span>Clear All</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Clear wishlist?</AlertDialogTitle>
          <AlertDialogDescription>
            This will remove all cars from your wishlist. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClearAll}>Clear All</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Wishlist;
