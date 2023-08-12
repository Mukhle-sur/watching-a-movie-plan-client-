import laptop from "../../assets/home/smartphone-tablet-and-television.png";
import managed from "../../assets/home/5462824_Devices-scaled.jpg";
const WatchEvery = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-7 md:flex justify-between items-center mt-14 md:mt-20">
      <div>
        <img
          src={laptop}
          alt=""
          className="w-16 bg-[#ff8057] p-3 rounded-lg mb-7"
        />
        <h2 className="text-xl font-bold uppercase mb-2">WATCH EVERYWHERE</h2>
        <p className="text-base font-medium leading-7 max-w-[1770px]">
          Unleash endless entertainment with our platform. Stream unlimited
          movies and TV shows on your phone, tablet, laptop, and TV. Enjoy
          seamless viewing on multiple devices, ensuring non-stop entertainment
          wherever you go. Elevate your streaming experience with us.
        </p>
      </div>
      <div className="mt-10 md:mt-0">
        <img src={managed} alt="" />
      </div>
    </div>
  );
};

export default WatchEvery;
