import { useEffect, useState } from "react";
import backgroundImg from "../../assets/home/Background.png";
import AnotherShopCart from "../../components/AnotherShopCart/AnotherShopCart";
import { AiFillCheckCircle } from "react-icons/ai";
import AnotherQuestion from "../../components/AnotherQuestion/AnotherQuestion";
import AnyQuestion from "../../components/AnyQuestion/AnyQuestion";

let bannerBackground = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AnotherShop = () => {
  const [shopPacks, setShopPack] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/shopPack")
      .then((res) => res.json())
      .then((data) => {
        setShopPack(data);
      });
  });
  return (
    <>
      <section style={bannerBackground} className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold tracking-wide mb-3">
              Choose the <span className="text-[#ff8057]">Plan</span> that’s
              right for you
            </h2>
            <p className="text-base font-medium w-[625px] mx-auto leading-7">
              Discover the perfect plan to suit your needs. Choose from our
              diverse range of subscription options, tailored to provide you
              with the ideal streaming experience.
            </p>
          </div>
          <div>
            <div className="pack flex items-center justify-around py-5 mt-10">
              <div>
                <p className="m-btn">Our Monthly Pack</p>
              </div>
              {shopPacks.map((item) => (
                <AnotherShopCart
                  key={item._id}
                  item={item}
                ></AnotherShopCart>
              ))}
            </div>
          </div>
          <div className="">
            <div className="flex justify-between px-10 pack-details-st">
              <h5 className="text-lg font-semibold">18,000 Live channels</h5>

              <AiFillCheckCircle className="w-10 h-10  text-[#ff8057]"></AiFillCheckCircle>
              <AiFillCheckCircle className="w-10 h-10 mx-4 text-[#ff8057]"></AiFillCheckCircle>
              <AiFillCheckCircle className="w-10 h-10 mx-24 text-[#ff8057]"></AiFillCheckCircle>
            </div>
            <div className="flex justify-between px-10 pack-details-st">
              <h5 className="text-lg font-semibold">
                80,000 Movies and TV <br /> Shows
              </h5>

              <AiFillCheckCircle className="w-10 h-10  text-[#ff8057]"></AiFillCheckCircle>
              <AiFillCheckCircle className="w-10 h-10 mx-4 text-[#ff8057]"></AiFillCheckCircle>
              <AiFillCheckCircle className="w-10 h-10 mx-24 text-[#ff8057]"></AiFillCheckCircle>
            </div>
            <div className="flex justify-between px-10 pack-details-st">
              <h5 className="text-lg font-semibold">
                4K, Full HD, HD & SD <br /> Channels
              </h5>

              <AiFillCheckCircle className="w-10 h-10  text-[#ff8057]"></AiFillCheckCircle>
              <AiFillCheckCircle className="w-10 h-10 mx-4 text-[#ff8057]"></AiFillCheckCircle>
              <AiFillCheckCircle className="w-10 h-10 mx-24 text-[#ff8057]"></AiFillCheckCircle>
            </div>
            <div className="flex justify-between px-10 pack-details-st show-shadow">
              <h5 className="text-lg font-semibold">All Top Sport Channels </h5>

              <AiFillCheckCircle className="w-10 h-10  text-[#ff8057]"></AiFillCheckCircle>
              <AiFillCheckCircle className="w-10 h-10 mx-4 text-[#ff8057]"></AiFillCheckCircle>
              <AiFillCheckCircle className="w-10 h-10 mx-24 text-[#ff8057]"></AiFillCheckCircle>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-slate-100 py-10 mb-56">
        <div className="container mx-auto relative">
          <AnotherQuestion></AnotherQuestion>
          <AnyQuestion></AnyQuestion>
        </div>
      </div>
    </>
  );
};

export default AnotherShop;
