import PersonalInfo from "./components/PersonalInfo";
import ContactIcons from "./components/ContactIcons";
import SaveContactButton from "./components/SaveContactButton";
import Motto from "./components/Motto";
import CornerDecor from "./components/CornerDecor";
import BackgroundDecor from "./components/BackgroundDecor";
import LogoSection from "./components/LogoSection";
import AppointmentBoxRight from "./components/AppointmentBox_right";
import AppointmentBoxLeft from "./components/AppointmentBox_left";

function App() {
  const contactInfo = {
    name: "Eren AKBAŞ",
    title: "Yapay Zeka Mühendisi / Kurucu",
    company: "DiogeniusAI",
    email: "erenakbas057@gmail.com",
    phone: "+90 541 384 8957",
    linkedin: "erenakbas",
    website: "diyojenyazilim.com",
    portfolio: "erenakbas57.github.io/Portfolio/",
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

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${contactInfo.name.replace(" ", "_")}.vcf`;
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
        <BackgroundDecor />

        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] opacity-80"></div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-6xl w-full">
          <div className="grid lg:grid-cols-2  items-center -mt-4 lg:my-12">
            {/* Right Section - Personal Logo/Icon (Mobile First) */}
            <div className="flex flex-col items-center space-y-6 lg:space-y-8 order-2 lg:order-2 mt-8  lg:mb-0 lg:mt-0">
              <LogoSection />

              <div className="text-center space-y-2  hidden lg:block">
                <p className="text-[#c7c7c7] text-base lg:text-lg font-light tracking-wider">
                  Bağlanalım ve birlikte çalışalım
                </p>
              </div>
              {/* Appointment Section */}
              <AppointmentBoxRight />
            </div>

            {/* Left Section - Personal Information */}
            <div className="space-y-6 lg:space-y-10 flex flex-col items-center order-2 lg:order-1 lg:ml- lg:mt-8">
              {/* Name and Title */}
              <PersonalInfo prop={contactInfo} />

              {/* Contact Information */}
              <ContactIcons prop={contactInfo} />

              {/* Appointment Section */}
              <AppointmentBoxLeft />
              {/* Save Contact Button */}
              <SaveContactButton onClick={handleSaveContact} />

              {/* Personal Motto */}
              <Motto text="Akıllı geleceği inşa edelim." />
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <CornerDecor />
        </div>
      </div>
    </>
  );
}

export default App;
