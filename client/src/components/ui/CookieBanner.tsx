import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-warm-gray/95 backdrop-blur-sm p-4 border-t border-gold/20 z-50 animate-slide-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-cream/90 mb-4 md:mb-0">
          We use cookies to enhance your dining experience and analyze our traffic. 
          By continuing to use our site, you consent to our use of cookies.
        </div>
        <div className="flex space-x-4">
          <Button
            onClick={acceptCookies}
            className="btn-gold px-6 py-2 rounded-lg font-semibold"
          >
            Accept
          </Button>
          <Button
            onClick={declineCookies}
            variant="ghost"
            className="text-cream/80 hover:text-gold transition-colors"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
