import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/83dfd0ff-3065-4fdc-b97a-e09be7a4e6e0.png",
      alt: "Séance Reformer - Étirement latéral",
      category: "Reformer"
    },
    {
      src: "/lovable-uploads/f18486a3-e470-4da4-8c60-624a4d0d0398.png",
      alt: "Cours de Pilates en groupe",
      category: "Cours en groupe"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      alt: "Pratique de Pilates au sol",
      category: "Mat Pilates"
    },
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      alt: "Intérieur moderne du studio",
      category: "Studio"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Découvrez notre <span className="text-primary">Studio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plongez dans notre univers de mouvement, d'équilibre et de bien-être. Explorez nos installations modernes et notre communauté dynamique.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg animate-fade-in">
          <div className="relative w-full h-96">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <div className="text-white">
                <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {images[currentIndex].category}
                </span>
                <p className="text-lg">{images[currentIndex].alt}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
