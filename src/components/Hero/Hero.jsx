import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [priceValue, setPriceValue] = useState(230);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          {/* text content section */}
          <div className="text-white">
            <p 
            data-aos="fade-up"
            data-aos-delay="300"
            >Our Packages</p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
          {/* form section */}
          <div data-aos="fade-up"
              data-aos-delay="600"
              className="space-y-4 bg-white rounded-md p-4 relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 range accent-primary p-2 rounded-full focus:outline-primary focus:outline outline-1"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  id="destination"
                  name="destination"
                  className="w-full bg-gray-100 !placeholder-bg-slate-400 my-2 range accent-primary p-2 rounded-full focus:outline-primary focus:outline outline-1"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">${priceValue}</p>
                  </div>
                </label>
                <div className="flex justify-between items-center bg-gray-100 p-2 rounded-full my-1">
                  <input
                    type="range"
                    id="destination"
                    name="destination"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* Button */}
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
