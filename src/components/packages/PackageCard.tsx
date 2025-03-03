
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrekkingPackage } from "@/utils/packages";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PackageCardProps {
  pkg: TrekkingPackage;
  featured?: boolean;
}

export const PackageCard = ({ pkg, featured = false }: PackageCardProps) => {
  return (
    <div className={`glass-card overflow-hidden card-hover ${
      featured ? 'border-primary border-2' : ''
    }`}>
      {/* Image */}
      <div className="h-48 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
          style={{ backgroundImage: `url(${pkg.image})` }}
        />
        {/* Badge for package type */}
        <div className="absolute top-3 left-3">
          <Badge className={`
            ${pkg.type === 'Open Trip' ? 'bg-blue-500' : 
              pkg.type === 'Private Trip' ? 'bg-purple-500' : 
              'bg-amber-500'} 
            text-white hover:bg-opacity-80`}
          >
            {pkg.type}
          </Badge>
        </div>
        
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary text-white">
              Rekomendasi
            </Badge>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
        <p className="text-accent font-semibold mb-3">{pkg.price}</p>
        
        <p className="text-gray-700 text-sm mb-4">
          {pkg.description}
        </p>
        
        <div className="space-y-2 mb-5">
          {pkg.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
          {pkg.features.length > 3 && (
            <div className="text-sm text-gray-500">
              +{pkg.features.length - 3} fitur lainnya
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/packages/${pkg.id}`}>
              Detail
            </Link>
          </Button>
          
          <Button size="sm" asChild>
            <Link to={pkg.paymentLink} target="_blank" rel="noopener noreferrer">
              Pesan Sekarang
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
