import { motion } from "framer-motion";
import LightboxGallery from "@/components/gallery/LightboxGallery";
import { galleryImages, galleryCategories } from "@/lib/galleryData";

const Gallery = () => {
  return (
    <div className="pt-24 pb-16 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif text-charcoal mb-6"
          >
            Visual Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the artistry and elegance that defines every moment at Gastronomia Elysium. 
            From our exquisite dishes to our sophisticated ambiance, every detail tells a story of culinary excellence.
          </motion.p>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <LightboxGallery images={galleryImages} categories={galleryCategories} />
        </motion.div>

        {/* Instagram Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-charcoal rounded-2xl p-8 text-cream">
            <h3 className="text-2xl font-serif text-gold mb-4">Follow Our Journey</h3>
            <p className="text-lg mb-6">
              Stay connected with us on social media for behind-the-scenes moments, 
              seasonal menu updates, and exclusive glimpses into our culinary world.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="#" 
                className="text-gold hover:text-[hsl(var(--gold-light))] transition-colors text-2xl"
                aria-label="Follow us on Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                className="text-gold hover:text-[hsl(var(--gold-light))] transition-colors text-2xl"
                aria-label="Follow us on Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a 
                href="#" 
                className="text-gold hover:text-[hsl(var(--gold-light))] transition-colors text-2xl"
                aria-label="Follow us on Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
