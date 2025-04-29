
import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { properties, Property } from '@/utils/propertyData';
import PropertyCard from './PropertyCard';
import PropertyDetails from './PropertyDetails';

const PropertyList = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  
  useEffect(() => {
    let result = [...properties];
    
    // Apply search filter
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(property => 
        property.title.toLowerCase().includes(lowerSearchTerm) ||
        property.address.toLowerCase().includes(lowerSearchTerm) ||
        property.city.toLowerCase().includes(lowerSearchTerm) ||
        property.state.toLowerCase().includes(lowerSearchTerm) ||
        property.id.toLowerCase().includes(lowerSearchTerm)
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(property => property.status === statusFilter);
    }
    
    setFilteredProperties(result);
  }, [searchTerm, statusFilter]);

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
  };
  
  const handleCloseDetails = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-serif font-semibold text-estate-primary mb-2">Featured Properties</h2>
        <p className="text-muted-foreground">Explore our curated selection of premium properties with detailed information</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-grow">
          <Input 
            placeholder="Search by property name, address, city, state, or ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="w-full sm:w-48">
          <Select 
            value={statusFilter}
            onValueChange={setStatusFilter}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Properties</SelectItem>
              <SelectItem value="For Sale">For Sale</SelectItem>
              <SelectItem value="For Rent">For Rent</SelectItem>
              <SelectItem value="Sold">Sold</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {filteredProperties.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-estate-primary">No properties found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              onClick={() => handlePropertyClick(property)}
            />
          ))}
        </div>
      )}
      
      {selectedProperty && (
        <PropertyDetails 
          property={selectedProperty}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default PropertyList;
