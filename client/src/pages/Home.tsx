import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import DishCard from "@/components/menu/DishCard";
import FloatingParticles from "@/components/ui/FloatingParticles";
import TestimonialCard from "@/components/ui/TestimonialCard"; // NEW
import { menuItems } from "@/lib/menuData";
import { testimonials } from "@/lib/testimonialsData"; // NEW
import { ChevronDown, Star, ChefHat, MapPin, Phone } from "lucide-react";

// Embla Carousel imports
import useEmblaCarousel from 'embla-carousel-react'; // NEW

const Home = () => {
  const featuredDishes = menuItems.filter(dish => dish.featured);

  // Embla Carousel hook for testimonials
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }); // NEW

  const scrollToSection = (id: string) => { // Modified to accept ID
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center parallax"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')"
          }}
        >

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <FloatingParticles />
        </div>
        
        <div className="relative z-10 text-center px-6 py-10 md:py-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-4 sm:mb-6 leading-tight"
          >
            Royal Cuisine Palace
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto"
          >
            Where culinary artistry meets unparalleled elegance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link href="/reservations">
              <Button className="bg-white text-royal hover:bg-off-white animated-corners px-8 py-4 rounded-full text-lg font-semibold shadow-royal transform transition-transform duration-300">
                Experience Excellence
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => scrollToSection('about')}
        >
          <div className="text-white/70 text-center">
            <div className="text-sm mb-2">Scroll to explore</div>
            <ChevronDown size={24} className="mx-auto" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-24 bg-off-white text-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h2 className="text-4xl sm:text-5xl font-serif text-dark mb-4 sm:mb-6">Our Philosophy</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                At Royal Cuisine Palace, we believe that dining is an art form that engages all the senses. 
                Every dish is a carefully orchestrated symphony of flavors, textures, and aromas, designed 
                to transport you to a realm of culinary bliss.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Our commitment to excellence extends beyond the plate to every aspect of your experience, 
                from the moment you step through our doors to the lasting memories you take with you.
              </p>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link href="/story">
                  <Button className="bg-royal text-white animated-corners px-6 py-3 rounded-full hover:bg-[hsl(var(--royal-blue-dark))] transition-all duration-300 text-base sm:text-lg">
                    Learn Our Story
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Professional chef preparing gourmet cuisine"
                className="rounded-2xl shadow-luxury enhanced-card animated-corners w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
                whileHover={{ scale: 1.01 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-20 md:py-24 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl sm:text-5xl font-serif text-royal mb-4 sm:mb-6"
            >
              Signature Creations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg sm:text-xl text-dark/90 max-w-3xl mx-auto"
            >
              Each dish is a masterpiece, crafted with the finest ingredients and presented with artistic precision.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants} // Apply container variants
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                variants={itemVariants} // Apply item variants
                className="ripple-effect"
              >
                <DishCard dish={dish} index={index} />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-10 md:mt-12">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href="/menu">
                <Button className="btn-royal animated-corners px-6 py-3 rounded-full font-semibold text-base sm:text-lg">
                  View Full Menu
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="py-20 md:py-24 bg-off-white text-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl sm:text-5xl font-serif text-royal mb-4 sm:mb-6"
            >
              What Our Guests Say
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg sm:text-xl text-dark/90 max-w-3xl mx-auto"
            >
              Hear from those who have experienced the magic of Royal Cuisine Palace.
            </motion.p>
          </div>

          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="embla__slide">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 md:py-24 bg-light-gray text-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Executive Chef portrait in professional kitchen"
                className="rounded-2xl shadow-luxury enhanced-card animated-corners w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
                whileHover={{ scale: 1.01 }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h2 className="text-4xl sm:text-5xl font-serif text-dark mb-4 sm:mb-6">Master Chef Alexandre Dubois</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                With over two decades of culinary excellence, Chef Alexandre brings together traditional 
                French techniques with innovative modern interpretations. His passion for perfection has 
                earned him three Michelin stars and recognition as one of the world's finest culinary artists.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed italic">
                "Cooking is not just about nourishing the body, but about creating an emotional connection 
                through flavor, presentation, and the shared experience of exceptional cuisine."
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex text-royal">
                  <Star className="fill-current" size={24} /> {/* Increased size */}
                  <Star className="fill-current" size={24} />
                  <Star className="fill-current" size={24} />
                </div>
                <span className="text-gray-600 text-lg">Michelin Star Chef</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 md:py-24 bg-royal relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')"
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl sm:text-5xl font-serif text-black mb-6 sm:mb-8"
            >
              Visit Us Today
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg sm:text-xl text-black leading-relaxed mb-8 sm:mb-10"
            >
              Experience an extraordinary culinary journey in the heart of the city. 
              Reserve your table today and discover why Royal Cuisine Palace sets the standard for fine dining excellence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-3 gap-8 text-center mb-10 sm:mb-12"
            >
              <motion.div className="space-y-3 animated-corners py-4 sm:py-6 bg-white/10 rounded-lg shadow-md transition-all duration-300 hover:bg-white/20">
                <ChefHat size={40} className="text-black mx-auto mb-2" />
                <div className="text-3xl sm:text-4xl font-serif text-black">35+</div>
                <div className="text-black text-sm sm:text-base">Years of Excellence</div>
              </motion.div>
              <motion.div className="space-y-3 animated-corners py-4 sm:py-6 bg-white/10 rounded-lg shadow-md transition-all duration-300 hover:bg-white/20">
                <Star size={40} className="text-black mx-auto mb-2" />
                <div className="text-3xl sm:text-4xl font-serif text-black">3</div>
                <div className="text-black text-sm sm:text-base">Michelin Stars</div>
              </motion.div>
              <motion.div className="space-y-3 animated-corners py-4 sm:py-6 bg-white/10 rounded-lg shadow-md transition-all duration-300 hover:bg-white/20">
                <MapPin size={40} className="text-black mx-auto mb-2" />
                <div className="text-3xl sm:text-4xl font-serif text-black">500K+</div>
                <div className="text-black text-sm sm:text-base">Memorable Experiences</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href="/reservations">
                <Button className="bg-white text-royal hover:bg-off-white animated-corners px-8 py-4 rounded-full text-lg font-semibold shadow-royal transform transition-transform duration-300">
                  Reserve Your Table
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - NEW (Optional) */}
      <section className="py-16 bg-dark text-black text-center">
        <div className="container mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-serif mb-6"
          >
            Ready for an Unforgettable Culinary Journey?
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link href="/reservations">
              <Button className="btn-royal animated-corners px-8 py-4 rounded-full text-lg font-semibold shadow-royal">
                Book Your Table Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;