
import { Owner } from '@/utils/propertyData';
import { formatDate } from '@/utils/formatters';
import { Card, CardContent } from '@/components/ui/card';
import { User, Phone, Mail, Building, Calendar } from 'lucide-react';

interface OwnerDetailsProps {
  owner: Owner;
}

const OwnerDetails = ({ owner }: OwnerDetailsProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="bg-estate-primary text-white rounded-full w-16 h-16 flex items-center justify-center">
            <User className="h-8 w-8" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Owner Information</h3>
            <p className="text-sm text-muted-foreground">ID: {owner.id}</p>
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="flex items-start">
            <User className="h-5 w-5 text-estate-primary mt-1 mr-3" />
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="font-medium">{owner.name}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-estate-primary mt-1 mr-3" />
            <div>
              <p className="text-sm text-muted-foreground">Contact Number</p>
              <p className="font-medium">{owner.phone}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-estate-primary mt-1 mr-3" />
            <div>
              <p className="text-sm text-muted-foreground">Email Address</p>
              <p className="font-medium">{owner.email}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Building className="h-5 w-5 text-estate-primary mt-1 mr-3" />
            <div>
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="font-medium">{owner.address}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-estate-primary mt-1 mr-3" />
            <div>
              <p className="text-sm text-muted-foreground">Owner Since</p>
              <p className="font-medium">{formatDate(owner.since)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OwnerDetails;
