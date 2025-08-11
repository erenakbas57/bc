import { Download } from "lucide-react";

interface SaveContactButtonProps {
  onClick: () => void;
}

const SaveContactButton = ({ onClick }: SaveContactButtonProps) => (
  <div className="flex justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
    <button
      onClick={onClick}
      className="flex items-center space-x-3 lg:space-x-4 bg-transparent border-2 border-[#d4af37] text-[#d4af37] px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-[#d4af37] hover:text-black transition-all duration-300 font-light tracking-wide group shadow-lg hover:shadow-[#d4af37]/25"
    >
      <Download className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-base lg:text-lg">Kişi Olarak Kaydet</span>
    </button>
  </div>
);

export default SaveContactButton;
