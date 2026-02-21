import { Link, Outlet, useRouterState } from '@tanstack/react-router';
import { Dumbbell, Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import BackgroundMusic from './BackgroundMusic';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-2 rounded-lg group-hover:scale-105 transition-transform">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                <span className="text-accent-brand">Bodyshape Fitness</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`text-base font-semibold transition-colors hover:text-accent-brand ${
                  isActive('/') ? 'text-accent-brand' : 'text-foreground/80'
                }`}
              >
                Home
              </Link>
              <Link
                to="/locations"
                className={`text-base font-semibold transition-colors hover:text-accent-brand ${
                  isActive('/locations') ? 'text-accent-brand' : 'text-foreground/80'
                }`}
              >
                Locations
              </Link>
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent-brand to-accent-secondary hover:opacity-90 font-bold shadow-lg shadow-accent-brand/20"
              >
                Join Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4">
              <Link
                to="/"
                className={`block px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isActive('/')
                    ? 'bg-accent-brand/10 text-accent-brand'
                    : 'text-foreground/80 hover:bg-accent/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/locations"
                className={`block px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isActive('/locations')
                    ? 'bg-accent-brand/10 text-accent-brand'
                    : 'text-foreground/80 hover:bg-accent/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Locations
              </Link>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-accent-brand to-accent-secondary hover:opacity-90 font-bold"
              >
                Join Now
              </Button>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <BackgroundMusic />

      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-accent-brand to-accent-secondary p-2 rounded-lg">
                  <Dumbbell className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-display font-bold">
                  <span className="text-accent-brand">Bodyshape Fitness</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Independence, Kentucky's premier 24/7 fitness facility. Celebrating 20 years of helping our community achieve their fitness goals.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-accent-brand transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/locations" className="text-muted-foreground hover:text-accent-brand transition-colors text-sm">
                    Locations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>6424 Taylor Mill Road</li>
                <li>Independence, Kentucky</li>
                <li>
                  <a href="tel:363-8900" className="hover:text-accent-brand transition-colors">
                    Phone: 363-8900
                  </a>
                </li>
                <li>
                  <a href="mailto:bodyshapefitness@gmail.com" className="hover:text-accent-brand transition-colors">
                    bodyshapefitness@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://bodyshapegym.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-brand transition-colors">
                    bodyshapegym.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Bodyshape Fitness. All rights reserved.
            </p>
            <p className="mt-2">
              Built with <Heart className="inline h-4 w-4 text-accent-brand fill-accent-brand" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'bodyshape-fitness'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-brand hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
