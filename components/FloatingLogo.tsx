"use client";

import { Logo } from "./Logo";

export const FloatingLogo = () => {
  return (
    <div className="hidden min-[1430px]:block fixed bottom-20 right-4 sm:bottom-24 sm:right-6 md:bottom-16 lg:bottom-14 md:right-9 z-50 animate-float">
      <div className="group cursor-pointer transition-transform hover:scale-110">
        <Logo 
          className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[115px] lg:h-[115px] xl:w-[105px] xl:h-[105px] drop-shadow-[0_20px_50px_rgba(255,140,41,0.3)] hover:drop-shadow-[0_25px_60px_rgba(255,140,41,0.5)] transition-all duration-300" 
          showText={false}
        />
      </div>
    </div>
  );
};
