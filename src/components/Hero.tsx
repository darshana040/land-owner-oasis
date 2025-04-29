
import { Button } from '@/components/ui/button';
import { Building } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[70vh] bg-estate-dark overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 text-white">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Building className="h-10 w-10 mr-2" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
              LandOasis
            </h1>
          </div>
          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-serif">Your Gateway to Premier Properties</p>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90">
            Discover exceptional estates, detailed land information, and connect with property owners across the nation.
          </p>
        </div>

        <div className="mt-10 max-w-xl w-full flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
          <Button className="bg-estate-primary hover:bg-estate-secondary text-white py-6 px-8 rounded-full text-lg flex-1">
            Browse Properties
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/20 py-6 px-8 rounded-full text-lg flex-1">
            List Your Property
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-3xl">
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-lg p-4 animate-fade-in animation-delay-400">
            <span className="font-serif text-2xl font-bold">250+</span>
            <span className="text-sm mt-1">Properties</span>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-lg p-4 animate-fade-in animation-delay-500">
            <span className="font-serif text-2xl font-bold">120+</span>
            <span className="text-sm mt-1">Cities</span>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-lg p-4 animate-fade-in animation-delay-400">
            <span className="font-serif text-2xl font-bold">1M+</span>
            <span className="text-sm mt-1">Land Area</span>
          </div>
          <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-lg p-4 animate-fade-in animation-delay-500">
            <span className="font-serif text-2xl font-bold">500+</span>
            <span className="text-sm mt-1">Clients</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
