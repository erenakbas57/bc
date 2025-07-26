import { Mail, Phone, Linkedin, Globe, Download, User, Sparkles } from 'lucide-react';

function App() {
  const contactInfo = {
    name: "Eren AKBAŞ",
    title: "Yapay Zeka Uzmanı / Kurucu",
    company: "DiogeniusAI",
    email: "erenakbas057@gmail.com",
    phone: "+90 541 384 8957",
    linkedin: "linkedin.com/in/erenakbas",
    website: "diyojenyazilim.com"
  };

  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
TITLE:${contactInfo.title}
ORG:${contactInfo.company}
EMAIL:${contactInfo.email}
TEL:${contactInfo.phone}
URL:${contactInfo.website}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${contactInfo.name.replace(' ', '_')}.vcf`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
    {/* Global CSS Reset */}
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            background-color: #0e0e0e;
          }
          
          #root {
            background-color: #0e0e0e;
            min-height: 100vh;
          }
        `}
      </style>
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center px-12 py-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#d4af37] rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 border border-[#d4af37] rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-24 h-24 border border-[#d4af37] rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/5 right-1/5 w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#b76e79] rounded-full opacity-30 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-[#d4af37] rounded-full opacity-20 animate-pulse delay-300"></div>
      </div>

      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] opacity-80"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl w-full">
        <div className="grid lg:grid-cols-2  items-center">
          
          {/* Right Section - Personal Logo/Icon (Mobile First) */}
          <div className="flex flex-col items-center space-y-6 lg:space-y-8 order-2 lg:order-2 mt-8  lg:mb-0 lg:mt-0">
            <div className="relative">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#b76e79] opacity-30 blur-3xl rounded-full scale-150 animate-pulse"></div>
              
              {/* Main Logo Container */}
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-[#d4af37] to-[#b76e79] rounded-3xl flex items-center justify-center overflow-hidden border border-[#d4af37]/30 shadow-2xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-6 left-6 w-8 h-8 lg:w-10 lg:h-10 border border-white/30 rotate-45"></div>
                  <div className="absolute bottom-6 right-6 w-6 h-6 lg:w-8 lg:h-8 border border-white/30 rounded-full"></div>
                  <div className="absolute top-1/2 right-8 w-4 h-4 lg:w-5 lg:h-5 bg-white/20 rounded-full"></div>
                </div>
                
                {/* Main Icon */}
                <div className="relative z-10 flex items-center justify-center">
                  <User className="w-20 h-20 lg:w-28 lg:h-28 text-white" strokeWidth={1.5} />
                  <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-white absolute -top-3 -right-3 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="text-center space-y-2  hidden lg:block">
              <p className="text-[#c7c7c7] text-base lg:text-lg font-light tracking-wider">
                Hakkımda daha fazla bilgi
              </p>
              <p className="text-[#d4af37] text-sm font-light tracking-wider opacity-80">
                Bağlanalım ve birlikte çalışalım
              </p>
            </div>
          </div>

          {/* Left Section - Personal Information */}
          <div className="space-y-6 lg:space-y-10 flex flex-col items-center order-2 lg:order-1 lg:ml-20 lg:mt-8">
            {/* Name and Title */}
            <div className="space-y-4 lg:space-y-4 mt-4 text-center lg:text-left">
              <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-transparent bg-gradient-to-r from-white via-[#d4af37] to-white bg-clip-text font-light tracking-wide leading-tight">
                {contactInfo.name}
              </h1>
              <div className="space-y-2 lg:space-y-2">
                <p className="text-[#c7c7c7] text-xl md:text-xl lg:text-2xl font-light tracking-wider">
                  {contactInfo.title}
                </p>
                <p className="text-[#d4af37] text-lg lg:text-lg font-light tracking-wider">
                  {contactInfo.company}
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 lg:space-y-6 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center justify-start space-x-4 lg:space-x-5 group cursor-pointer">
                <div className="p-2 rounded-full bg-[#d4af37]/10 group-hover:bg-[#d4af37]/20 transition-all duration-300">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-[#c7c7c7] hover:text-white transition-colors duration-300 font-light text-base lg:text-lg"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="flex items-center justify-start space-x-4 lg:space-x-5 group cursor-pointer">
                <div className="p-2 rounded-full bg-[#d4af37]/10 group-hover:bg-[#d4af37]/20 transition-all duration-300">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-[#c7c7c7] hover:text-white transition-colors duration-300 font-light text-base lg:text-lg"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center justify-start space-x-4 lg:space-x-5 group cursor-pointer">
                <div className="p-2 rounded-full bg-[#d4af37]/10 group-hover:bg-[#d4af37]/20 transition-all duration-300">
                  <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <a 
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c7c7c7] hover:text-white transition-colors duration-300 font-light text-base lg:text-lg"
                >
                  {contactInfo.linkedin}
                </a>
              </div>
              
              <div className="flex items-center justify-start space-x-4 lg:space-x-5 group cursor-pointer">
                <div className="p-2 rounded-full bg-[#d4af37]/10 group-hover:bg-[#d4af37]/20 transition-all duration-300">
                  <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4af37] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <a 
                  href={`https://${contactInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c7c7c7] hover:text-white transition-colors duration-300 font-light text-base lg:text-lg"
                >
                  {contactInfo.website}
                </a>
              </div>
            </div>

            {/* Save Contact Button */}
            <div className="flex justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
              <button
                onClick={handleSaveContact}
                className="flex items-center space-x-3 lg:space-x-4 bg-transparent border-2 border-[#d4af37] text-[#d4af37] px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-[#d4af37] hover:text-black transition-all duration-300 font-light tracking-wide group shadow-lg hover:shadow-[#d4af37]/25"
              >
                <Download className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-base lg:text-lg">Kişi Olarak Kaydet</span>
              </button>
            </div>

            {/* Personal Motto */}
            <div className="pt-6 pb-10 lg:pb-0 lg:pt-8 border-t  border-gray-800 max-w-md mx-auto lg:mx-0 lg:mb-0">
              <p className="text-[#c7c7c7] text-base lg:text-lg font-light italic opacity-80 tracking-wide text-center lg:text-left">
                "Akıllı geleceği inşa edelim."
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 lg:w-32 lg:h-32 border-l-4 border-t-4 border-[#f0c63e] opacity-50 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 lg:w-32 lg:h-32 border-r-4 border-b-4 border-[#f0c63e] opacity-50 rounded-br-3xl"></div>
        
      </div>
    </div>
    </>
  );
}

export default App;