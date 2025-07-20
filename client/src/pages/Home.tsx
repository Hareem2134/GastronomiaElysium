import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import DishCard from "@/components/menu/DishCard";
import FloatingParticles from "@/components/ui/FloatingParticles";
import { menuItems } from "@/lib/menuData";
import { ChevronDown, Star } from "lucide-react";

const Home = () => {
  const featuredDishes = menuItems.filter(dish => dish.featured);

  const scrollToSection = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        >
          <div className="video-overlay absolute inset-0"></div>
          <FloatingParticles />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif text-white mb-6"
          >
            Royal Cuisine Palace
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Where culinary artistry meets unparalleled elegance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/reservations">
              <Button className="bg-white text-royal hover:bg-off-white animated-corners px-8 py-4 rounded-full text-lg font-semibold shadow-royal">
                Experience Excellence
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToSection}
        >
          <div className="text-white/70 text-center">
            <div className="text-sm mb-2">Scroll to explore</div>
            <ChevronDown size={20} />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-off-white text-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-serif text-dark mb-6">Our Philosophy</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Royal Cuisine Palace, we believe that dining is an art form that engages all the senses. 
                Every dish is a carefully orchestrated symphony of flavors, textures, and aromas, designed 
                to transport you to a realm of culinary bliss.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our commitment to excellence extends beyond the plate to every aspect of your experience, 
                from the moment you step through our doors to the lasting memories you take with you.
              </p>
              <Link href="/story">
                <Button className="bg-royal text-white animated-corners px-8 py-3 rounded-full hover:bg-[hsl(var(--royal-blue-dark))] transition-all duration-300">
                  Learn Our Story
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional chef preparing gourmet cuisine"
                className="rounded-2xl shadow-luxury enhanced-card animated-corners w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-24 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-serif text-royal mb-6"
            >
              Signature Creations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-dark/90 max-w-3xl mx-auto"
            >
              Each dish is a masterpiece, crafted with the finest ingredients and presented with artistic precision
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="ripple-effect"
              >
                <DishCard dish={dish} index={index} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/menu">
              <Button className="btn-royal animated-corners px-8 py-3 rounded-full font-semibold">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-24 bg-off-white text-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Executive Chef portrait in professional kitchen"
                className="rounded-2xl shadow-luxury enhanced-card animated-corners w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-serif text-dark mb-6">Master Chef Alexandre Dubois</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over two decades of culinary excellence, Chef Alexandre brings together traditional 
                French techniques with innovative modern interpretations. His passion for perfection has 
                earned him three Michelin stars and recognition as one of the world's finest culinary artists.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed italic">
                "Cooking is not just about nourishing the body, but about creating an emotional connection 
                through flavor, presentation, and the shared experience of exceptional cuisine."
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex text-royal">
                  <Star className="fill-current" size={20} />
                  <Star className="fill-current" size={20} />
                  <Star className="fill-current" size={20} />
                </div>
                <span className="text-gray-600">Michelin Star Chef</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-24 bg-royal relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-serif text-white mb-8"
            >
              Visit Us Today
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 leading-relaxed mb-8"
            >
              Experience an extraordinary culinary journey in the heart of the city. 
              Reserve your table today and discover why Royal Cuisine Palace sets the standard for fine dining excellence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 text-center mb-12"
            >
              <div className="space-y-4 animated-corners">
                <div className="text-4xl font-serif text-white">35+</div>
                <div className="text-white/90">Years of Excellence</div>
              </div>
              <div className="space-y-4 animated-corners">
                <div className="text-4xl font-serif text-white">3</div>
                <div className="text-white/90">Michelin Stars</div>
              </div>
              <div className="space-y-4 animated-corners">
                <div className="text-4xl font-serif text-white">500K+</div>
                <div className="text-white/90">Memorable Experiences</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/reservations">
                <Button className="bg-white text-royal hover:bg-off-white animated-corners px-8 py-4 rounded-full text-lg font-semibold shadow-royal">
                  Reserve Your Table
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
