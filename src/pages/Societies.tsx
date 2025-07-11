
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
    name: "IEEE ADGIPS",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
    instagram: "@ieeeadgips",
    description: "IEEE ADGIPS is the premier technical society at our institution, dedicated to advancing technology for humanity. We organize workshops, seminars, and technical competitions to foster innovation among students. Our society provides a platform for students to explore cutting-edge technologies, participate in research projects, and connect with industry professionals."
  },
  {
    id: 2,
    name: "AWAAZ ADGIPS",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
    instagram: "@awaaz.adgips",
    description: "AWAAZ ADGIPS is the voice of our campus, dedicated to promoting awareness and advocacy through various media platforms. We organize debates, public speaking events, and awareness campaigns to amplify student voices and address important social issues."
  },
  {
    id: 3,
    name: "E-CELL ADGIPS",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=300&fit=crop",
    instagram: "@ecelladgips",
    description: "E-CELL ADGIPS nurtures the entrepreneurial spirit among students by organizing startup competitions, business plan workshops, and mentorship programs. We connect aspiring entrepreneurs with industry professionals and provide resources for launching successful ventures."
  },
  {
    id: 4,
    name: "QAAFILA ADGIPS",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
    instagram: "@qaafila_adgips",
    description: "QAAFILA ADGIPS is a cultural society that celebrates diversity and promotes cultural exchange through festivals, art exhibitions, and traditional events. We bring together students from various backgrounds to share their heritage and create a vibrant campus community."
  },
  {
    id: 5,
    name: "GEEKS FOR GEEKS ADGIPS",
    image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&h=300&fit=crop",
    instagram: "@geeksforgeeks_adgips",
    description: "GEEKS FOR GEEKS ADGIPS is a technical community focused on competitive programming, coding challenges, and software development. We organize coding competitions, tech workshops, and study groups to enhance programming skills and problem-solving abilities."
  },
  {
    id: 6,
    name: "THE INVINCIBLES",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=300&fit=crop",
    instagram: "@invincibles_adgips",
    description: "THE INVINCIBLES is a sports and fitness society that promotes physical wellness and team spirit. We organize various sports tournaments, fitness challenges, and outdoor activities to encourage an active lifestyle among students."
  },
  {
    id: 7,
    name: "NSS ADGIPS",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop",
    instagram: "@nss_adgips_ggsipu",
    description: "NSS ADGIPS is dedicated to community service and social welfare. We organize volunteer programs, social awareness campaigns, and community development projects to create positive impact in society and develop social responsibility among students."
  },
  {
    id: 8,
    name: "THE CAMPUS CHRONICS",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    instagram: "thecampuschronics.adgips",
    description: "THE CAMPUS CHRONICS is our student journalism and media society. We document campus life, report on student activities, and create engaging content through newsletters, blogs, and social media to keep the campus community informed and connected."
  },
  {
    id: 9,
    name: "CONFLUENZ ADGIPS",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
    instagram: "@confluenz",
    description: "CONFLUENZ ADGIPS is a literary and cultural society that organizes poetry sessions, creative writing workshops, and cultural events. We provide a platform for students to express their creativity and showcase their artistic talents."
  },
  {
    id: 10,
    name: "FREAK STREETS",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    instagram: "freak_streets",
    description: "FREAK STREETS is a dynamic society focused on street culture, urban arts, and contemporary expressions. We organize street art exhibitions, hip-hop events, and urban culture festivals to celebrate modern artistic movements."
  },
  {
    id: 11,
    name: "YAKSHAGNA",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    instagram: "@yakshagna",
    description: "YAKSHAGNA is a traditional performing arts society that preserves and promotes classical Indian cultural forms. We organize classical dance performances, music concerts, and cultural workshops to maintain our rich cultural heritage."
  },
  {
    id: 12,
    name: "SWARANJALI ADGIPS",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    instagram: "@swaranjaliadgips",
    description: "SWARANJALI ADGIPS is a music society dedicated to promoting various forms of musical expression. We organize concerts, music competitions, and workshops covering classical, contemporary, and fusion music genres."
  },
  {
    id: 13,
    name: "ALFAAZ",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
    instagram: "@alfaaz.adgips",
    description: "ALFAAZ is a literary society that celebrates the power of words through poetry, storytelling, and creative writing. We organize open mic sessions, literary competitions, and writing workshops to nurture creative expression."
  },
  {
    id: 14,
    name: "NRITYAKUMBH",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    instagram: "@nrityakumbh_adgips",
    description: "NRITYAKUMBH is a dance society that promotes various dance forms from classical to contemporary. We organize dance competitions, workshops, and cultural performances to showcase the beauty and diversity of dance."
  },
  {
    id: 15,
    name: "ROBOGYAN",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    instagram: "@robogyan_official",
    description: "ROBOGYAN is a robotics and automation society that explores the fascinating world of robotics and artificial intelligence. We organize robotics competitions, workshops on emerging technologies, and hands-on projects in automation."
  },
  {
    id: 16,
    name: "VIRSA BHANGRA SOCIETY",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    instagram: "@virsabhangraregiment",
    description: "VIRSA BHANGRA SOCIETY celebrates Punjabi culture through energetic Bhangra performances. We organize cultural events, dance competitions, and festivals to promote the vibrant traditions of Punjab and spread joy through dance."
  },
  {
    id: 17,
    name: "AVANT GRADE",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    instagram: "@avantgarde.adgips",
    description: "AVANT GRADE is an innovative society that promotes cutting-edge ideas and experimental approaches in various fields. We organize design thinking workshops, innovation challenges, and creative problem-solving sessions."
  },
  {
    id: 18,
    name: "WORD WIZARD ADGIPS",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
    instagram: "@word.wizard.adgips",
    description: "WORD WIZARD ADGIPS is a society dedicated to enhancing communication skills and linguistic abilities. We organize debate competitions, public speaking workshops, and language learning sessions to improve verbal and written communication."
  }
];

const Societies = () => {
  const [selectedSociety, setSelectedSociety] = useState<Society | null>(null);

  const getInstagramUrl = (handle: string) => {
    const cleanHandle = handle.replace('@', '');
    return `https://www.instagram.com/${cleanHandle}`;
  };

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
                  <a
                    href={getInstagramUrl(society.instagram)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {society.instagram || 'Coming Soon'}
                  </a>
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
