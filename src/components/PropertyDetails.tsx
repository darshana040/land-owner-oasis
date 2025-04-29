
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Property, Owner, getOwnerById } from '@/utils/propertyData';
import { formatCurrency, formatDate } from '@/utils/formatters';
import OwnerDetails from './OwnerDetails';

interface PropertyDetailsProps {
  property: Property;
  onClose: () => void;
}

const PropertyDetails = ({ property, onClose }: PropertyDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const owner = getOwnerById(property.ownerId);
  
  if (!property) return null;
  
  return (
    <Dialog open={!!property} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="w-full max-w-4xl h-[80vh] overflow-y-auto p-0">
        <div className="relative h-80">
          <img 
            src={property.images[currentImageIndex]} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
          
          {property.images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          )}
          
          <Badge className="absolute top-4 right-4 text-sm px-3 py-1">
            {property.status}
          </Badge>
          
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="absolute top-4 left-4 rounded-full w-8 h-8 p-0 bg-black/30 text-white hover:bg-black/50"
          >
            ✕
          </Button>
        </div>
        
        <div className="p-6">
          <DialogHeader>
            <div className="flex flex-wrap justify-between items-start gap-2">
              <div>
                <Badge variant="outline" className="mb-2">ID: {property.id}</Badge>
                <DialogTitle className="text-2xl font-serif">{property.title}</DialogTitle>
                <DialogDescription className="text-base mt-1">
                  {property.address}, {property.city}, {property.state} {property.zipCode}
                </DialogDescription>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold text-estate-secondary">
                  {property.status === 'For Rent' 
                    ? `${formatCurrency(property.price)}/month` 
                    : formatCurrency(property.price)}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Listed on {formatDate(property.listedDate)}
                </div>
              </div>
            </div>
          </DialogHeader>
          
          <div className="mt-6">
            <Tabs defaultValue="details">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="details">Property Details</TabsTrigger>
                <TabsTrigger value="land">Land Information</TabsTrigger>
                <TabsTrigger value="owner">Owner Details</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-muted p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Bedrooms</div>
                      <div className="font-semibold text-lg">{property.bedrooms}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Bathrooms</div>
                      <div className="font-semibold text-lg">{property.bathrooms}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Area</div>
                      <div className="font-semibold text-lg">{property.area} sq ft</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Year Built</div>
                      <div className="font-semibold text-lg">{property.yearBuilt}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{property.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, index) => (
                        <Badge key={index} variant="secondary">{feature}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Property Type</h3>
                    <p>{property.propertyType}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="land">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Land Information</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Survey Number:</span>
                          <span className="font-medium">{property.landDetails.surveyNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Plot Number:</span>
                          <span className="font-medium">{property.landDetails.plotNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Zoning:</span>
                          <span className="font-medium">{property.landDetails.zoning}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Dimensions:</span>
                          <span className="font-medium">{property.landDetails.dimensions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Annual Property Taxes:</span>
                          <span className="font-medium">{formatCurrency(property.landDetails.taxes)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Property Size</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Building Size:</span>
                          <span className="font-medium">{property.area} sq ft</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Lot Size:</span>
                          <span className="font-medium">{property.lotSize} acres</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="owner">
                {owner ? (
                  <OwnerDetails owner={owner} />
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Owner information not available</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="mt-8 flex justify-end gap-4">
            <Button variant="outline" onClick={onClose}>Close</Button>
            <Button className="bg-estate-primary hover:bg-estate-secondary">Contact Agent</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetails;
