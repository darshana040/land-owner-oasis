
import { Property } from '@/utils/propertyData';
import { formatCurrency } from '@/utils/formatters';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
  const { id, title, price, address, city, state, zipCode, images, bedrooms, bathrooms, area, status } = property;
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'For Sale': return 'bg-estate-primary text-white';
      case 'For Rent': return 'bg-estate-secondary text-white';
      case 'Sold': return 'bg-estate-accent text-estate-dark';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <Card 
      className="property-card cursor-pointer group h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={images[0]} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="image-overlay"/>
        <Badge className={`absolute top-3 right-3 ${getStatusColor(status)}`}>
          {status}
        </Badge>
        <div className="absolute bottom-3 left-3">
          <Badge className="bg-white/90 text-estate-primary border-none">ID: {id}</Badge>
        </div>
      </div>
      
      <CardContent className="py-4 flex-grow flex flex-col">
        <h3 className="font-serif text-xl font-medium text-estate-primary mb-2 line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-1 line-clamp-1">
          {address}, {city}, {state} {zipCode}
        </p>
        
        <p className="text-xl font-semibold text-estate-secondary mt-auto">
          {status === 'For Rent' ? `${formatCurrency(price)}/month` : formatCurrency(price)}
        </p>
        
        <div className="flex mt-3 text-sm text-muted-foreground space-x-4 border-t pt-3">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-estate-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>{bedrooms} bd</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-estate-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.5 5a3 3 0 116 0 3 3 0 01-6 0zm-1.5 0a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm10.993 9.507a1 1 0 01-1.006 1.006H5.018a1 1 0 01-1.006-1.006 3.5 3.5 0 01.85-1.935 2.5 2.5 0 011.65-.908 2 2 0 012.815 1.175A9.5 9.5 0 0113.5 9.123a1 1 0 11.993 1.767 7.5 7.5 0 00-3.127 2.74 1 1 0 01-.875.877z" clipRule="evenodd" />
            </svg>
            <span>{bathrooms} ba</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-estate-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 11-6 0 3 3 0 016 0zm-1.146 7.146a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708-.708l3-3z" clipRule="evenodd" />
            </svg>
            <span>{area} sq ft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
