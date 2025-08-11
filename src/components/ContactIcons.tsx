import { Mail, Phone, Linkedin, Globe, Building } from "lucide-react";

const ContactIcons = ({ prop }: any) => (
  <div className="max-w-md mx-auto lg:mx-0 py-2">
    <div className="hidden min-[451px]:flex items-center justify-center gap-6 lg:gap-8">
      <a
        href={`mailto:${prop.email}`}
        className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all duration-300"
        title="E-posta Gönder"
      >
        <Mail className="w-6 h-6 text-[#d4af37] hover:scale-110 transition-transform duration-300" />
      </a>
      <a
        href={`tel:${prop.phone}`}
        className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all duration-300"
        title="Telefon Ara"
      >
        <Phone className="w-6 h-6 text-[#d4af37] hover:scale-110 transition-transform duration-300" />
      </a>
      <a
        href={`https://${prop.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all duration-300"
        title="LinkedIn Profili"
      >
        <Linkedin className="w-6 h-6 text-[#d4af37] hover:scale-110 transition-transform duration-300" />
      </a>
      <a
        href={`https://${prop.website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all duration-300"
        title="Web Sitesi"
      >
        <Building className="w-6 h-6 text-[#d4af37] hover:scale-110 transition-transform duration-300" />
      </a>
      <a
        href={`https://${prop.portfolio}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all duration-300"
        title="Portföy"
      >
        <Globe className="w-6 h-6 text-[#d4af37] hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
    <div className="min-[451px]:hidden flex flex-col gap-2 items-center w-full">
      <div className="flex justify-center gap-4 w-full">
        <a
          href={`mailto:${prop.email}`}
          className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all duration-300"
          title="E-posta Gönder"
        >
          <Mail className="w-6 h-6 text-[#d4af37] hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href={`tel:${prop.phone}`}
          className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all duration-300"
          title="Telefon Ara"
        >
          <Phone className="w-6 h-6 text-[#d4af37] hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href={`https://${prop.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all duration-300"
          title="LinkedIn Profili"
        >
          <Linkedin className="w-6 h-6 text-[#d4af37] hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
      <div className="flex justify-center gap-4 w-full">
        <a
          href={`https://${prop.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all duration-300"
          title="Web Sitesi"
        >
          <Building className="w-6 h-6 text-[#d4af37] hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href={`https://${prop.portfolio}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all duration-300"
          title="Portföy"
        >
          <Globe className="w-6 h-6 text-[#d4af37] hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </div>
  </div>
);

export default ContactIcons;
