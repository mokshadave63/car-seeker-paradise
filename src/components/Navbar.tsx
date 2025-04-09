
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Heart, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { useWishlist } from '@/context/WishlistContext';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { wishlist } = useWishlist();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Car className="h-6 w-6 text-car-coral" />
          <span className="font-bold text-lg sm:text-xl">Car Finder</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Link 
            to="/" 
            className={`transition-colors hover:text-primary ${
              location.pathname === '/' 
                ? 'font-medium text-car-coral' 
                : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/wishlist" 
            className={`transition-colors hover:text-primary ${
              location.pathname === '/wishlist' 
                ? 'font-medium text-car-coral' 
                : 'text-muted-foreground'
            }`}
          >
            Wishlist
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/wishlist" className="relative hover:text-primary transition-colors">
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-car-coral text-xs text-white">
                {wishlist.length}
              </span>
            )}
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full transition-transform hover:scale-110 active:scale-90"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
