import PropTypes from "prop-types";
import { IoLocationSharp } from "react-icons/io5";



const PlacesCard = ({ img, title, location, description, price, type }) => {
  return (
    <div className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>
      <div className="space-y-2 p-3 ">
        <h1 className="font-bold text-xl line-clamp-1">{title}</h1>
        <div className="flex items-center gap-2 opacity-70">
        <IoLocationSharp />
        <span>{location}</span>
        </div>
        <p className="line-clamp-2">{description}</p>
        <div className="flex items-center justify-between border-t-2 y-3 !mt-3">
          <div className="opacity-70">
            <p>{type}</p>
          </div>
          <div>
            <p className="text-2xl font-bold">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

PlacesCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
export default PlacesCard;
