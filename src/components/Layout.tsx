
import React from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from '@/context/ThemeContext';
import { WishlistProvider } from '@/context/WishlistContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <WishlistProvider>
        <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-card p-6 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Car Finder. All rights reserved.</p>
          </footer>
        </div>
      </WishlistProvider>
    </ThemeProvider>
  );
};

export default Layout;
