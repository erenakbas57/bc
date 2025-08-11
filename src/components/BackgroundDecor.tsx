const BackgroundDecor = () => (
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#d4af37] rotate-45 animate-pulse"></div>
    <div className="absolute bottom-1/3 right-1/3 w-32 h-32 border border-[#d4af37] rotate-12 animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/6 w-24 h-24 border border-[#d4af37] rounded-full animate-pulse delay-500"></div>
    <div className="absolute top-1/5 right-1/5 w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#b76e79] rounded-full opacity-30 animate-pulse delay-700"></div>
    <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-[#d4af37] rounded-full opacity-20 animate-pulse delay-300"></div>
  </div>
);

export default BackgroundDecor;
