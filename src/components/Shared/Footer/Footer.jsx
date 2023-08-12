import { HiPhone } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-[#132D58]">
      <footer className="footer p-16 justify-around text-white container mx-auto">
        <div>
          <span className="footer-title opacity-100 mb-5">NAVIGATE</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <span className="footer-title opacity-100 mb-5">RESOURCES</span>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Design Case</a>
        </div>
        <div>
          <span className="footer-title opacity-100 mb-5">HELP</span>
          <a className="link link-hover inline-flex gap-2 items-center">
            <HiPhone></HiPhone>
            +1 234 567 891
          </a>
          <a className="link link-hover inline-flex gap-2 items-center">
            <AiFillMail></AiFillMail> hello@nextvstream.com
          </a>
          <a className="link link-hover inline-flex gap-2 items-center">
            {" "}
            <FaLocationDot></FaLocationDot> 153 Williamson Plaza, 09514
          </a>
        </div>
        <div>
          <span className="footer-title opacity-100 mb-5">
            Nextvstream-white
          </span>
          <div className="form-control w-80">
            <p className="pb-5 border-b-2 ">
              Nextvstream is a leading IPTV provider offering a vast selection
              of channels, delivering high-quality entertainment right to your
              screen.
            </p>
            <label className="label mt-3">
              <span className="label-text text-white">
                SUBSCRIBE TO NEWSLETTER
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="email"
                className="input text-white input-bordered w-full pr-16"
              />
              <button className="btn border-0 absolute top-0 right-0 rounded-l-none text-white text-sm font-semibold md:font-bold bg-gradient-to-r from-[#FF8057] to-[#ff5c26] rounded-md py-2 md:py-3 px-4 md:px-6">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
