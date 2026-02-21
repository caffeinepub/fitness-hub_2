import { MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

export default function LocationCard({ name, address, phone, hours }: LocationCardProps) {
  return (
    <Card className="border-2 border-border hover:border-accent-brand/50 transition-all hover:shadow-xl hover:shadow-accent-brand/10">
      <CardContent className="p-6">
        <h3 className="text-2xl font-display font-bold mb-6 text-accent-brand">{name}</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-accent-brand/10 p-2 rounded-lg flex-shrink-0">
              <MapPin className="h-5 w-5 text-accent-brand" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Address</p>
              <p className="text-sm text-muted-foreground">{address}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-accent-brand/10 p-2 rounded-lg flex-shrink-0">
              <Phone className="h-5 w-5 text-accent-brand" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Phone</p>
              <p className="text-sm text-muted-foreground">{phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-accent-brand/10 p-2 rounded-lg flex-shrink-0">
              <Clock className="h-5 w-5 text-accent-brand" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Hours</p>
              <p className="text-sm text-muted-foreground whitespace-pre-line">{hours}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
