import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  


const TestimonialData = [
    {
        id: 1,
        name: "Samuel",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, vitae perferendis! Soluta veniam, laudantium assumenda ab repellendus expedita commodi!",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "John Doe",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, vitae perferendis! Soluta veniam, laudantium assumenda ab repellendus expedita commodi!",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Samuel",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, vitae perferendis! Soluta veniam, laudantium assumenda ab repellendus expedita commodi!",
        img: "https://picsum.photos/103/103",
    },
]

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className="py-10">
      <div className="container">
        {/* header sec */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent from-primary to-secondary bg-gradient-to-r">Testimonial</p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">{" "}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero minima ipsa reiciendis sequi deleniti voluptas ducimus iusto at repellat recusandae!
            </p>
        </div>
        {/* testimonial sec */}
        <Slider {...settings}>
        {
            TestimonialData.map(({id, name, text, img})=>{
                return(
                    <div key={id} className="my-6">
                        <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
                            <img src={img} alt="" className="rounded-full block mx-auto" />
                            <h1 className="text-xl font-bold">{name}</h1>
                            <p className="text-xs text-gray-500">{text}</p>
                            <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 ">,,</p>
                        </div>
                    </div>
                )
            })
        }
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial
