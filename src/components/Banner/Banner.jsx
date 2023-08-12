import banner from "../../assets/home/banner.png";
import backgroundImg from "../../assets/home/Background.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

let bannerBackground = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <section style={bannerBackground} className="py-12 md:py-20 px-4">
      <div className="container mx-auto md:flex justify-between items-center gap-x-16">
        <div>
          <h6 className="text-sm font-bold uppercase text-[#2558AB] mb-2">
            WATCH LIVE TV
          </h6>
          <h1 className="text-4xl font-bold tracking-wide max-w-md leading-snug mb-2">
            Unlimited <span className="text-[#ff6600]"> movies,</span> TV shows,
            and more
          </h1>
          <p className="text-base font-medium leading-7 max-w-3xl">
            Stream live TV, access a vast collection of movies and TV shows, and
            enjoy boundless entertainment on our platform. With unlimited access
            and a user-friendly interface, experience the ultimate entertainment
            experience wherever you are. Join us now for an unparalleled
            streaming experience.
          </p>
          <div className="mt-10">
            <button>
              <Link
                to={"/about"}
                className="flex items-center gap-1 text-white text-sm font-semibold md:font-bold bg-gradient-to-r from-[#FF8057] to-[#ff5c26] rounded-md py-2 md:py-3 px-4 md:px-6 uppercase"
              >
                About Us <BsArrowRight size={16}></BsArrowRight>
              </Link>
            </button>
            <button className="ml-5">
              <Link
                to={"/getStarted"}
                className="flex items-center gap-1 text-white text-sm font-semibold md:font-bold bg-gradient-to-r from-[#FF8057] to-[#ff5c26] rounded-md py-2 md:py-3 px-4 md:px-6 uppercase"
              >
                Get Started <BsArrowRight size={16}></BsArrowRight>
              </Link>
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
