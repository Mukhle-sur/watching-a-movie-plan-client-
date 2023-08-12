import Banner from "../../components/Banner/Banner";
import TvShow from "../../components/Shared/TvShow/TvShow";
import enjoyImg from "../../assets/home/enjoyTv.jpg";
import watchingImg from "../../assets/home/watching-a-movie.png";
import WatchEvery from "../../components/WatchEvery/WatchEvery";
import qualityImg from "../../assets/home/10782784_19197313-scaled.jpg";
import qualityIcon from "../../assets/home/live-streaming-1.png";
import Blog from "../../components/Blog/Blog";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TvShow
        img={enjoyImg}
        icon={watchingImg}
        heading={"ENJOY ON YOUR TV"}
        text={
          "Enjoy your favorite content on a wide range of devices including Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and many more. Our streaming service ensures compatibility and seamless viewing experiences across various platforms, making it convenient for you to access entertainment wherever and however you prefer."
        }
      ></TvShow>
      <WatchEvery></WatchEvery>
      <TvShow
        img={qualityImg}
        icon={qualityIcon}
        heading={"HIGH-QUALITY STREAMING"}
        text={
          "Immerse yourself in the world of flawless, high-definition streaming as you enjoy crystal-clear visuals and minimal buffering. With our service, you can indulge in a seamless viewing experience that leaves you captivated and fully immersed in your favorite content."
        }
      ></TvShow>
      <Blog></Blog>
    </div>
  );
};

export default Home;
