import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import cardBg from "../../assets/Molti-background.jpg";

let bannerBackground = {
  backgroundImage: `url(${cardBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const AnotherShopCart = ({ singlePack }) => {
  const { name, price, date } = singlePack;
  return (
    <div
      style={bannerBackground}
      className="text-center p-7 tem w-80 text-white rounded-lg  effect"
    >
      <div>
        <h4 className="text-sm uppercase font-bold mb-3">{name}</h4>
        <p className="text-[50px] font-extrabold">$ {price}</p>
        <p className="text-base font-medium">{date}</p>
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

export default AnotherShopCart;
