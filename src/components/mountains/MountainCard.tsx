
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mountain } from "@/utils/mountains";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MountainCardProps {
  mountain: Mountain;
  featured?: boolean;
}

const MountainCard = ({ mountain, featured = false }: MountainCardProps) => {
  return (
    <div className={`glass-card overflow-hidden card-hover ${
      featured ? 'lg:flex lg:items-stretch' : ''
    }`}>
      {/* Image */}
      <div className={`${
        featured 
          ? 'lg:w-2/5 h-60 lg:h-auto' 
          : 'h-48'
      } relative overflow-hidden`}>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${mountain.image})` }}
        />
        <div className="absolute top-3 right-3">
          <Badge className={`
            ${mountain.difficulty === 'Pemula' ? 'bg-green-500' : 
              mountain.difficulty === 'Menengah' ? 'bg-blue-500' : 
              'bg-red-500'} 
            text-white hover:bg-opacity-80`}
          >
            {mountain.difficulty}
          </Badge>
        </div>
      </div>
      
      {/* Content */}
      <div className={`p-5 ${featured ? 'lg:w-3/5 lg:flex lg:flex-col' : ''}`}>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{mountain.name}</h3>
            <p className="text-sm text-gray-600">{mountain.location}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-800">{mountain.height}</div>
            <p className="text-xs text-gray-500">{mountain.duration}</p>
          </div>
        </div>
        
        <p className={`text-gray-700 text-sm ${featured ? 'mb-4' : 'line-clamp-2 mb-4'}`}>
          {mountain.description}
        </p>
        
        {featured && (
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {mountain.features.map((feature, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-auto">
          <Button 
            variant="link" 
            className="p-0 h-auto text-primary flex items-center gap-1 hover:gap-2 transition-all" 
            asChild
          >
            <Link to={`/mountains/${mountain.id}`}>
              Detail <ArrowRight size={14} />
            </Link>
          </Button>
          
          <Button size="sm" variant="secondary" asChild>
            <Link to={`/book/${mountain.id}`}>
              Pesan
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MountainCard;
