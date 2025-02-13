import { useState } from "react";

const Hero = () => {
    const [priceValue, setPriceValue] = useState(230)
  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          {/* text content section */}
          <div className="text-white">
            <p>Our Packages</p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
          {/* form section */}
          <div className="space-y-4 bg-white rounded-md p-4 relative">
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
                <div className="flex justify-between items-center bg-gray-100 p-2 rounded-full">
                <input
                  type="range"
                  id="destination"
                  name="destination"
                  min="150"
                  max="1000"
                  value={priceValue}
                  step="10"
                  onChange={(e)=> setPriceValue(e.target.value)}
                  className="appearence-none w-full bg-gradient-to-r my-2 range accent-primary to-secondary h-2 rounded-full"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
