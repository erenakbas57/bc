import { Calendar, Clock } from "lucide-react";

const AppointmentBoxRight = () => (
  <div className="mt-6 items-center max-w-md mx-auto lg:mx-0 hidden lg:flex-col lg:flex">
    <div className=" rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center w-full">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="text-[#d4af37]" />
        <span className="text-[#d4af37] text-base font-medium tracking-wide">Randevu Al</span>
      </div>
      <a
        href="https://www.cal.com/erenakbas" target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b76e79] text-white font-medium shadow-md transition-all duration-300 tracking-wide text-base mt-0.5 hover:brightness-110 hover:shadow-lg hover:scale-[1.04]"
      >
        <Clock className="text-white" />
        Saat Seç
      </a>
    </div>
  </div>
);

export default AppointmentBoxRight;
