
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyList from '@/components/PropertyList';
import RegisterForm from '@/components/RegisterForm';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <PropertyList />
        
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-estate-light/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold text-estate-primary mb-4">
              Join Our Community
            </h2>
            <p className="text-muted-foreground mb-8">
              Register today to get full access to property details, save your favorite listings, 
              and connect directly with property owners.
            </p>
            <RegisterForm />
          </div>
        </section>
        
        <ResourcesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
