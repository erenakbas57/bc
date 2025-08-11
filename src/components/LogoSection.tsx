import { User, Sparkles } from "lucide-react";

const LogoSection = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#b76e79] opacity-30 blur-3xl rounded-full scale-150 animate-pulse"></div>
    <div className="relative w-32 h-32 lg:w-56 lg:h-56 bg-gradient-to-br from-[#d4af37] to-[#b76e79] rounded-3xl flex items-center justify-center overflow-hidden border border-[#d4af37]/30 shadow-2xl">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-6 left-6 w-8 h-8 lg:w-10 lg:h-10 border border-white/30 rotate-45"></div>
        <div className="absolute bottom-6 right-6 w-6 h-6 lg:w-8 lg:h-8 border border-white/30 rounded-full"></div>
        <div className="absolute top-1/2 right-8 w-4 h-4 lg:w-5 lg:h-5 bg-white/20 rounded-full"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center">
        <User className="w-20 h-20 lg:w-28 lg:h-28 text-white" strokeWidth={1.5} />
        <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-white absolute -top-3 -right-3 animate-pulse" />
      </div>
    </div>
  </div>
);

export default LogoSection;
