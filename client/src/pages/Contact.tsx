import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["123 Culinary Boulevard", "Metropolitan District, NY 10001"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Tuesday - Sunday: 6:00 PM - 11:00 PM", "Closed Mondays"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Reservations & Inquiries"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["reservations@elysium.com", "Email Reservations"]
    }
  ];

  const socialLinks = [
    { icon: <Instagram size={24} />, href: "#", label: "Instagram" },
    { icon: <Facebook size={24} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={24} />, href: "#", label: "Twitter" }
  ];

  return (
    <div className="pt-24 pb-16 bg-warm-gray min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif text-gold mb-6"
          >
            Visit Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed"
          >
            We look forward to welcoming you to an extraordinary culinary experience. 
            Contact us for reservations, inquiries, or to plan your special event.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-serif text-gold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-gold mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-cream font-semibold mb-1">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-cream/80 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Interactive Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-charcoal rounded-2xl overflow-hidden shadow-luxury"
            >
              <div className="relative h-64 bg-gradient-to-br from-gold/20 to-charcoal">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-cream/80">
                    <MapPin size={48} className="mx-auto mb-4 text-gold" />
                    <h3 className="text-lg font-serif text-gold mb-2">Our Location</h3>
                    <p className="text-sm">123 Culinary Boulevard</p>
                    <p className="text-sm">Metropolitan District, NY 10001</p>
                    <button className="mt-4 bg-gold text-charcoal px-6 py-2 rounded-full text-sm font-semibold hover:bg-[hsl(var(--gold-light))] transition-colors">
                      View on Map
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-serif text-gold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-gold text-charcoal rounded-full flex items-center justify-center hover:bg-[hsl(var(--gold-light))] transition-colors cursor-pointer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-charcoal rounded-2xl p-8 shadow-luxury">
            <h3 className="text-2xl font-serif text-gold mb-4">Parking & Transportation</h3>
            <div className="space-y-3 text-cream/90">
              <p>• Complimentary valet parking available</p>
              <p>• Accessible via subway: Lines 4, 5, 6 to Union Square</p>
              <p>• Taxi and rideshare drop-off at main entrance</p>
              <p>• Bicycle parking available</p>
              <p>• Wheelchair accessible entrance and facilities</p>
            </div>
          </div>

          <div className="bg-charcoal rounded-2xl p-8 shadow-luxury">
            <h3 className="text-2xl font-serif text-gold mb-4">Special Events</h3>
            <div className="space-y-3 text-cream/90">
              <p>• Private dining rooms for 8-50 guests</p>
              <p>• Corporate events and celebrations</p>
              <p>• Customized menus and wine pairings</p>
              <p>• Professional event planning services</p>
              <p>• Audio/visual equipment available</p>
            </div>
          </div>
        </motion.div>

        {/* Emergency Information */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gold rounded-2xl p-8 text-charcoal">
            <h3 className="text-2xl font-serif mb-4">Need Immediate Assistance?</h3>
            <p className="text-lg mb-6">
              For urgent matters, same-day reservations, or immediate assistance, 
              please call us directly. Our team is here to help.
            </p>
            <p className="font-semibold text-xl">
              📞 +1 (555) 123-4567
            </p>
            <p className="text-sm mt-2 opacity-80">
              Available during business hours: Tuesday - Sunday, 4:00 PM - 12:00 AM
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
