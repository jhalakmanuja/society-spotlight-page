
import { useState } from 'react';
import { Instagram, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocietyModal from '@/components/SocietyModal';

interface Society {
  id: number;
  name: string;
  image: string;
  instagram: string;
  description: string;
}

const societies: Society[] = [
  {
    id: 1,
    name: "Tech Innovators Society",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
    instagram: "@tech_innovators_club",
    description: "A dynamic community of technology enthusiasts dedicated to exploring cutting-edge innovations, hosting hackathons, and fostering collaboration among aspiring developers, engineers, and tech entrepreneurs. We organize workshops, coding competitions, and tech talks to bridge the gap between academic learning and industry requirements."
  },
  {
    id: 2,
    name: "Cultural Heritage Society",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
    instagram: "@cultural_heritage_soc",
    description: "Preserving and celebrating diverse cultural traditions through festivals, art exhibitions, and cultural exchange programs. Our society brings together students from various backgrounds to share their heritage, organize traditional events, and promote cross-cultural understanding within our campus community."
  },
  {
    id: 3,
    name: "Environmental Action Group",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=300&fit=crop",
    description: "Committed to environmental sustainability and conservation efforts on campus and beyond. We organize tree plantation drives, clean-up campaigns, awareness workshops on climate change, and promote eco-friendly practices among students to create a greener, more sustainable future."
  },
  {
    id: 4,
    name: "Photography Society",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
    instagram: "@campus_shutterbugs",
    description: "Capturing moments and telling stories through the lens. Our photography society welcomes both amateur and professional photographers to explore various genres, participate in photo walks, exhibitions, and competitions while learning advanced techniques and building a portfolio."
  },
  {
    id: 5,
    name: "Wildlife Conservation Club",
    image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&h=300&fit=crop",
    instagram: "@wildlife_guardians",
    description: "Dedicated to wildlife protection and conservation awareness. We organize educational trips to national parks, conduct research on local fauna, participate in wildlife rescue operations, and create awareness campaigns about endangered species and habitat preservation."
  },
  {
    id: 6,
    name: "Adventure Sports Society",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=300&fit=crop",
    instagram: "@adventure_seekers_club",
    description: "For thrill-seekers and outdoor enthusiasts who love pushing boundaries. We organize trekking expeditions, rock climbing sessions, camping trips, and extreme sports activities while prioritizing safety and building strong bonds among adventure lovers."
  },
  {
    id: 7,
    name: "Desert Exploration Society",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop",
    instagram: "@desert_explorers",
    description: "Exploring the mysteries and beauty of desert landscapes through organized expeditions, research projects, and cultural studies. We study desert ecosystems, organize camel safaris, and promote awareness about desert conservation and the communities that call these regions home."
  },
  {
    id: 8,
    name: "Business & Entrepreneurship Society",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    instagram: "@future_entrepreneurs",
    description: "Nurturing the next generation of business leaders and entrepreneurs through workshops, startup competitions, networking events, and mentorship programs. We connect students with industry professionals and provide resources for launching successful ventures."
  },
  {
    id: 9,
    name: "Architecture & Design Society",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
    instagram: "@design_architects",
    description: "Exploring the intersection of creativity and functionality in architecture and design. We organize design competitions, site visits to architectural marvels, workshops on sustainable building practices, and collaborate on community development projects."
  }
];

const Societies = () => {
  const [selectedSociety, setSelectedSociety] = useState<Society | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            ABOUT OUR SOCIETIES
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Discover our vibrant community of passionate societies, each dedicated to fostering growth, 
            creativity, and meaningful connections among students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {societies.map((society) => (
            <div
              key={society.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2"
              onClick={() => setSelectedSociety(society)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={society.image}
                  alt={society.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Click to learn more</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {society.name}
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <Instagram className="w-4 h-4 mr-2" />
                  <span>{society.instagram || 'Coming Soon'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SocietyModal
        society={selectedSociety}
        isOpen={!!selectedSociety}
        onClose={() => setSelectedSociety(null)}
      />
    </div>
  );
};

export default Societies;
