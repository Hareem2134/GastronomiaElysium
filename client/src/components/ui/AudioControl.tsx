import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const AudioControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    // TODO: Implement actual audio playback functionality
    // This would integrate with a background audio service
  };

  return (
    <Button
      onClick={toggleAudio}
      className="fixed top-6 right-6 z-40 bg-warm-gray/80 backdrop-blur-sm text-gold p-3 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300"
      size="icon"
    >
      {isPlaying ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </Button>
  );
};

export default AudioControl;
