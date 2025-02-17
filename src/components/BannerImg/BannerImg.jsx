import PropTypes from "prop-types";

const BannerImg = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };
  return (
    <div data-aos="zoom-in" className="h-[400px] w-full" style={bgImage}></div>
  );
};

BannerImg.propTypes = {
  img: PropTypes.string.isRequired,
};
export default BannerImg;
