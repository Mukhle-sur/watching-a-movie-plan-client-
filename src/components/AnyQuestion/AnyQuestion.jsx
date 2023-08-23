import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import cardBg from "../../assets/Molti-background.jpg";

let bannerBackground = {
    backgroundImage: `url(${cardBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

const AnyQuestion = () => {
  return (
    <div style={bannerBackground} className="effect absolute w-full">
      <div className="flex items-center justify-between py-16 px-10 text-white">
        <div>
          <h3 className="text-lg font-bold">Have any Specific Question?</h3>
          <h2 className="text-3xl font-bold">
            Click that Button and Send us a Message.
          </h2>
        </div>
        <Link
          to={"/signIn"}
          className="inline-flex items-center gap-1 text-[#ff8057] text-sm font-semibold md:font-bold bg-white rounded-md py-2 md:py-3 px-4 md:px-6 hover-btn mt-3 shadow-[0px 15px 30px -9px rgba(0,0,0,0.3)]"
        >
          Get Started <BsArrowRight size={16}></BsArrowRight>
        </Link>
      </div>
    </div>
  );
};

export default AnyQuestion;
