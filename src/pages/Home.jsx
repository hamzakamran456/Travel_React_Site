import MainVid from "../assets/video/main.mp4";
import BannerImg from "../components/BannerImg/BannerImg";
import Hero from "../components/Hero/Hero";
import Places from "../components/Places/Places";
import Blogs from "./Blogs";
import Poster from "../assets/cover-women.jpg";
import Banner from "../components/Banner/Banner";
import Banner2 from "../assets/travel-cover2.jpg";
import Testimonial from "../components/Testimonial/Testimonial";
import { useState } from "react";
import Popup from "../components/Popup/Popup";

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div>
        <div className="relative h-[700px]">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={MainVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerImg img={Poster} />
        <Blogs />
        <Banner />
        <BannerImg img={Banner2} />
        <Testimonial />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
