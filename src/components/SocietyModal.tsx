
import { Instagram, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Society {
  id: number;
  name: string;
  image: string;
  instagram: string;
  description: string;
}

interface SocietyModalProps {
  society: Society | null;
  isOpen: boolean;
  onClose: () => void;
}

const SocietyModal = ({ society, isOpen, onClose }: SocietyModalProps) => {
  if (!isOpen || !society) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all animate-scale-in">
        <div className="relative">
          <img
            src={society.image}
            alt={society.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <Button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 h-auto"
            size="sm"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {society.name}
          </h2>
          
          {society.instagram && (
            <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
              <Instagram className="w-6 h-6 text-purple-600 mr-3" />
              <div className="flex-1">
                <p className="text-purple-800 font-semibold">Follow us on Instagram</p>
                <p className="text-purple-600 text-lg">{society.instagram}</p>
              </div>
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                size="sm"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit
              </Button>
            </div>
          )}
          
          <div className="prose prose-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">About Us</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {society.description}
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Button
              onClick={onClose}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg font-medium"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietyModal;
