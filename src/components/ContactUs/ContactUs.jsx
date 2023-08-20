import banner from "../../assets/about/3207245_40784-scaled.jpg";
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

const ContactUs = () => {
  return (
    <section style={bannerBackground} className="py-12 mb-16 md:py-20 px-4">
      <div className="container mx-auto md:flex justify-between items-center gap-x-16">
        <div>
          <h6 className="text-sm font-bold uppercase text-[#2558AB] mb-2">
            NEED HELP?
          </h6>
          <h1 className="text-4xl font-bold tracking-wide  leading-snug mb-2 max-w-lg">
            Do you Have a <span className="text-[#ff6600]"> Question? </span>
            Let us <span className="text-[#ff6600]"> Answer </span> it.
          </h1>
          <p className="text-base font-medium leading-7">
            Have a question or need assistance? Contact our friendly team for
            prompt support. We’re here to help you with any inquiries or
            technical issues related to our IPTV service.
          </p>
          <div className="mt-10">
            <button>
              <Link
                to={"/about"}
                className="flex items-center gap-1 text-white text-sm font-semibold md:font-bold bg-gradient-to-r from-[#FF8057] to-[#ff5c26] rounded-md py-2 md:py-3 px-4 md:px-6 uppercase"
              >
                Send Message <BsArrowRight size={16}></BsArrowRight>
              </Link>
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img src={banner} alt="" className="w-[1576px]"/>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
