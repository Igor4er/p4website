import React from "react";
import ASCIIText from "../TextAnimations/ASCIIText/ASCIIText";
import { ArrowDown } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <section className="min-h-[1rem] max-h-[1rem] w-screen flex flex-col items-center justify-center relative bg-gray-900">
      {/* ASCII Text at the top */}
      <ASCIIText text="Привіт! 🎉" enableWaves={false} asciiFontSize={7} />

      {/* <div className="relative inset-0 h-[400px] w-full my-auto">
      </div> */}

      {/* Main content area - currently empty but ready for content */}
      <div className="flex-1 flex items-center justify-center">
        {/* Add your main content here */}
      </div>

      {/* Scroll indicator at the bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
        <p className="text-sm mb-2 plexmono">Scroll</p>
        <ArrowDown />
      </div>
    </section>
  );
};

export default Footer;
