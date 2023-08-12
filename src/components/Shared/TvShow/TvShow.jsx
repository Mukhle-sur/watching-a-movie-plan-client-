const TvShow = ({ img, icon, heading, text }) => {
  return (
    <div className="container mx-auto py-7 px-4 md:px-12 bg-[#F7F9FE] md:flex  justify-between  items-center mt-16 md:mt-28 relative gap-x-8">
      <div className="md:-mt-[95px]">
        <img src={img} alt="" />
      </div>
      <div className="mt-10 md:mt-0">
        <img src={icon} alt="" className="w-16 bg-[#ff8057] p-3 rounded-lg mb-7"/>
        <h2 className="text-xl font-bold uppercase mb-2">{heading}</h2>
        <p className="text-base font-medium leading-7 max-w-[2115px]">{text}</p>
      </div>
    </div>
  );
};

export default TvShow;
