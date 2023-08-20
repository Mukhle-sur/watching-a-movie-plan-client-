import banner from "../../assets/about/silhouettes-businesspeople-office-1.jpg";
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
const AboutUs = () => {
  return (
    <section style={bannerBackground} className="py-12 mb-16 md:py-20 px-4">
      <div className="container mx-auto md:flex justify-between items-center gap-x-16">
        <div>
          <h6 className="text-sm font-bold uppercase text-[#2558AB] mb-2">
            WHO WE ARE?
          </h6>
          <h1 className="text-4xl font-bold tracking-wide max-w-lg leading-snug mb-2">
            Want to Know a little{" "}
            <span className="text-[#ff6600]">About us?</span> Let us tell you.
          </h1>
          <p className="text-base font-medium leading-7">
            Experience the ultimate IPTV destination. Explore an extensive
            channel lineup, enjoy high-quality streaming, and indulge in
            on-demand content. Elevate your entertainment with our cutting-edge
            Nextvstream website.
          </p>
          <div className="mt-10">
            <button>
              <Link
                to={"/about"}
                className="flex items-center gap-1 text-white text-sm font-semibold md:font-bold bg-gradient-to-r from-[#FF8057] to-[#ff5c26] rounded-md py-2 md:py-3 px-4 md:px-6 uppercase"
              >
                Read Our Story <BsArrowRight size={16}></BsArrowRight>
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

export default AboutUs;
