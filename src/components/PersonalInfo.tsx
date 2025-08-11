

const PersonalInfo = ({ prop }: any) => (
  <div className="space-y-4 lg:space-y-4 mt-4 text-center lg:text-left">
<h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-transparent bg-gradient-to-r from-white via-[#d4af37] to-white bg-clip-text font-light tracking-wide leading-tight text-center">
      {prop.name}
    </h1>
    <div className="space-y-2 lg:space-y-2">
      <p className="text-[#c7c7c7] text-xl md:text-xl lg:text-2xl font-light tracking-wider text-center">
        {prop.title}
      </p>
      <p className="text-[#d4af37] text-xl  font-light tracking-wider text-center">
        {prop.company}
      </p>
    </div>
  </div>
);

export default PersonalInfo;
