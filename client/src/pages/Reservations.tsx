import { motion } from "framer-motion";
import ReservationForm from "@/components/forms/ReservationForm";

const Reservations = () => {
  return (
    <div className="pt-24 pb-16 bg-charcoal min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif text-gold mb-6"
          >
            Reserve Your Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed"
          >
            Book your table for an unforgettable evening of culinary excellence. 
            We recommend making reservations in advance to ensure availability.
          </motion.p>
        </div>

        {/* Reservation Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ReservationForm />
        </motion.div>

        {/* Additional Information */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-warm-gray rounded-2xl p-8 shadow-luxury">
            <h3 className="text-2xl font-serif text-gold mb-4">Reservation Policy</h3>
            <div className="space-y-3 text-cream/90">
              <p>• Reservations are confirmed upon receipt of confirmation email</p>
              <p>• Please arrive within 15 minutes of your reservation time</p>
              <p>• Cancellations require 24-hour notice</p>
              <p>• Large parties (8+) require special arrangements</p>
              <p>• Smart casual dress code enforced</p>
            </div>
          </div>

          <div className="bg-warm-gray rounded-2xl p-8 shadow-luxury">
            <h3 className="text-2xl font-serif text-gold mb-4">Contact Information</h3>
            <div className="space-y-3 text-cream/90">
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Email:</strong> reservations@elysium.com</p>
              <p><strong>Hours:</strong> Tuesday - Sunday, 6:00 PM - 11:00 PM</p>
              <p><strong>Closed:</strong> Mondays</p>
              <p><strong>Private Events:</strong> Available upon request</p>
            </div>
          </div>
        </motion.div>

        {/* Special Occasions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gold rounded-2xl p-8 text-charcoal">
            <h3 className="text-2xl font-serif mb-4">Celebrating Something Special?</h3>
            <p className="text-lg mb-6">
              Let us make your occasion unforgettable with personalized service, 
              special menu options, and custom arrangements.
            </p>
            <p className="font-semibold">
              Call us at +1 (555) 123-4567 to discuss your special event needs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reservations;
