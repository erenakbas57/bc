const Motto = ({ text } : { text: string }) => (
  <div className="pt-6 pb-10 lg:pb-0 lg:pt-8 border-t  border-gray-800 max-w-md mx-auto lg:mx-0 lg:mb-0">
    <p className="text-[#c7c7c7] text-base lg:text-lg font-light italic opacity-80 tracking-wide text-center lg:text-left">
      "{text}"
    </p>
  </div>
);

export default Motto;
