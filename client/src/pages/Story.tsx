import { motion } from "framer-motion";
import { Star, Award, Users, Clock } from "lucide-react";

const Story = () => {
  const milestones = [
    {
      year: "1987",
      title: "The Beginning",
      description: "Gastronomia Elysium opens its doors with a vision to redefine fine dining"
    },
    {
      year: "1995",
      title: "First Michelin Star",
      description: "Recognition for exceptional cuisine and service excellence"
    },
    {
      year: "2003",
      title: "Second Star",
      description: "Elevated to two Michelin stars for outstanding culinary artistry"
    },
    {
      year: "2015",
      title: "Third Star",
      description: "Achieved the pinnacle of culinary excellence with three Michelin stars"
    }
  ];

  const values = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence",
      description: "We pursue perfection in every dish, every service, every moment"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly evolving while honoring traditional culinary techniques"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Hospitality",
      description: "Creating memorable experiences through genuine care and attention"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Tradition",
      description: "Respecting culinary heritage while embracing modern gastronomy"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        >
          <div className="video-overlay absolute inset-0"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-serif text-gold mb-6"
            >
              Our Legacy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-cream/90 max-w-3xl mx-auto"
            >
              A story of passion, dedication, and culinary excellence spanning over three decades
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 bg-cream text-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-serif mb-8">The Elysium Story</h2>
              <p className="text-lg leading-relaxed mb-6">
                Founded in 1987, Gastronomia Elysium began as a vision to create more than just a restaurant – 
                a sanctuary where culinary artistry meets sophisticated hospitality. Over three decades, 
                we have cultivated a legacy of excellence, innovation, and unforgettable experiences.
              </p>
              <p className="text-lg leading-relaxed">
                Every detail, from our hand-selected ingredients sourced from the finest purveyors worldwide 
                to our meticulously crafted ambiance, reflects our unwavering commitment to creating moments 
                that transcend ordinary dining.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-1">
                    <div className="text-3xl font-serif text-gold mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-serif mb-3">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                  <div className="w-4 h-4 bg-gold rounded-full"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-warm-gray">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-gold mb-6">Our Values</h2>
            <p className="text-xl text-cream/90 max-w-3xl mx-auto">
              The principles that guide every decision and define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-gold mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif text-gold mb-3">{value.title}</h3>
                <p className="text-cream/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-gold mb-6">Our Leadership</h2>
            <p className="text-xl text-cream/90 max-w-3xl mx-auto">
              The visionaries and culinary artists who bring Gastronomia Elysium to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img 
                src="http://plus.unsplash.com/premium_photo-1676651534759-5556422fa93d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Chef Alexandre Dubois"
                className="w-64 h-64 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-2xl font-serif text-gold mb-2">Alexandre Dubois</h3>
              <p className="text-cream/80 mb-4">Executive Chef & Founder</p>
              <p className="text-cream/70 leading-relaxed">
                A visionary chef with over 25 years of culinary excellence, 
                Alexandre's innovative approach to French cuisine has redefined fine dining.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Sommelier"
                className="w-64 h-64 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-2xl font-serif text-gold mb-2">Marie Beaumont</h3>
              <p className="text-cream/80 mb-4">Master Sommelier</p>
              <p className="text-cream/70 leading-relaxed">
                With an unparalleled knowledge of wine, Marie curates extraordinary 
                pairings that elevate every dining experience to new heights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gold">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-charcoal">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-serif mb-4">35+</div>
              <div className="text-lg font-semibold">Years of Excellence</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-serif mb-4">3</div>
              <div className="text-lg font-semibold">Michelin Stars</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-serif mb-4">500K+</div>
              <div className="text-lg font-semibold">Memorable Experiences</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-serif mb-4">50+</div>
              <div className="text-lg font-semibold">Culinary Awards</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
