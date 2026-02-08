import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import enpure_wp_2plus3 from '../assets/enpure_wp_2Plus3.png';
import kraft_wp_2plus3 from '../assets/kraft_wp_2Plus3.png';

type StartupPopupProps = {
  onClose: () => void;
};

const popupImages: string[] = [
  enpure_wp_2plus3,
  kraft_wp_2plus3
];

const DISPLAY_TIME = 3000; // 3 seconds per image

const StartupPopup = ({ onClose }: StartupPopupProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (popupImages.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        // If last image → close popup
        if (prev === popupImages.length - 1) {
          clearInterval(timer);
          onClose();
          return prev;
        }
        return prev + 1;
      });
    }, DISPLAY_TIME);

    return () => clearInterval(timer);
  }, [onClose]);

  return (
    //<div className="fixed inset-0 z-50 flex items-center justify-start bg-black/50 pl-4 sm:pl-6">
    <div className="fixed inset-0 z-50 flex items-center justify-center sm:justify-start bg-black/50 pl-0 sm:pl-4">
      <div className="relative rounded-2xl popup-responsive popup-offset w-full mx-4 overflow-hidden animate-fadeIn pt-[5px]">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center"
        >
          ✕
        </button>

         {/* Carousel Image */}
        <div>
        <img
          src={popupImages[currentIndex]}
          alt={`Popup ${currentIndex + 1}`}
          className="w-full object-cover transition-opacity duration-500 rounded-xl"
        />
        </div>

        {/* Indicator dots (optional) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {popupImages.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-4"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default StartupPopup;
