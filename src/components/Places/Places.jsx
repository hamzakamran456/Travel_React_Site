import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
import PlacesCard from "./PlacesCard";
import PropTypes from "prop-types";

const PlacesData = [
  {
    img: Img1,
    title: "Boat tour",
    location: "USA",
    description: "Explore scenic waters on an unforgettable boat tour.",
    price: 1000,
    type: "Cutural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra",
    price: 6700,
    type: "Cutural Relax",
  },
  {
    img: Img3,
    title: "UnderWater",
    location: "US",
    description:
      "Dive into a mesmerizing underwater adventure full of marine wonders.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description:
      "Discover Sydney’s iconic landmarks and breathtaking coastal scenery.",
    price: 4500,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United States",
    description: "Experience Hollywood glamour and vibrant city life in LA.",
    price: 3200,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Las Vegas",
    location: "Nevada",
    description: "Feel the thrill of world-class entertainment and nightlife.",
    price: 5200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 pl-2 py-2 text-3xl font-bold">
          Best Places to Visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlacesCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Places.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired, 
};

export default Places;
