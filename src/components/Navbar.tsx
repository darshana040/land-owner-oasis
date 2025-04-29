
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Building, Home, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building className="h-8 w-8 text-estate-primary" />
              <span className="ml-2 text-xl font-serif font-semibold text-estate-primary">LandOasis</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-estate-dark hover:text-estate-secondary flex items-center px-3 py-2 rounded-md text-sm font-medium">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
            <Link to="/properties" className="text-estate-dark hover:text-estate-secondary px-3 py-2 rounded-md text-sm font-medium">Properties</Link>
            <Link to="/resources" className="text-estate-dark hover:text-estate-secondary px-3 py-2 rounded-md text-sm font-medium">Resources</Link>
            <Link to="/about" className="text-estate-dark hover:text-estate-secondary px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/contact" className="text-estate-dark hover:text-estate-secondary px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
          </div>

          <div className="hidden md:flex md:items-center">
            <Button variant="outline" className="mr-2 text-estate-primary border-estate-primary hover:bg-estate-primary hover:text-white">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button className="bg-estate-primary hover:bg-estate-secondary text-white">Register</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-estate-dark hover:text-estate-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-estate-dark hover:bg-estate-light block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/properties" className="text-estate-dark hover:bg-estate-light block px-3 py-2 rounded-md text-base font-medium">Properties</Link>
          <Link to="/resources" className="text-estate-dark hover:bg-estate-light block px-3 py-2 rounded-md text-base font-medium">Resources</Link>
          <Link to="/about" className="text-estate-dark hover:bg-estate-light block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link to="/contact" className="text-estate-dark hover:bg-estate-light block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200 flex flex-col px-4">
          <Button variant="outline" className="mb-2 w-full text-estate-primary border-estate-primary hover:bg-estate-primary hover:text-white">Sign In</Button>
          <Button className="w-full bg-estate-primary hover:bg-estate-secondary text-white">Register</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
