import Banner from "../../components/Banner/Banner";
import TvShow from "../../components/Shared/TvShow/TvShow";
import enjoy from "../../assets/home/enjoyTv.jpg";
import watching from "../../assets/home/watching-a-movie.png";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TvShow
        img={enjoy}
        icon={watching}
        heading={"ENJOY ON YOUR TV"}
        text={
          "Enjoy your favorite content on a wide range of devices including Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and many more. Our streaming service ensures compatibility and seamless viewing experiences across various platforms, making it convenient for you to access entertainment wherever and however you prefer."
        }
      ></TvShow>
    </div>
  );
};

export default Home;
