import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";


const BlogData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "India, a land of vibrant culture, rich history, and diverse landscapes, offers countless destinations for travelers seeking an unforgettable experience. From serene beaches and tranquil hill stations to bustling cities and historical landmarks, there is something for every kind of traveler.The country's natural beauty is unparalleled, with places like Kashmir, often referred to as 'Heaven on Earth,' offering snow-capped mountains, serene lakes, and beautiful gardens. For those seeking adventure, the Himalayan region, including destinations like Manali and Leh, provides trekking, rafting, and an escape into nature's lap.India’s heritage is etched in its magnificent monuments, such as the Taj Mahal, an architectural wonder that symbolizes love and stands as a testament to India's rich Mughal history. The majestic forts and palaces of Rajasthan, including Jaipur’s Amber Fort and Udaipur’s City Palace, showcase the regal past of India’s royal dynasties.For a blend of spiritual exploration and architectural brilliance, cities like Varanasi and Rishikesh offer deep cultural experiences, while temples like the Golden Temple in Amritsar and the ancient Khajuraho Temples stand as remarkable feats of craftsmanship and devotion.On the other hand, the coastal towns of Goa and Kerala attract tourists with their golden beaches, laid-back atmosphere, and delicious cuisine. Kerala’s backwaters and houseboats are a unique way to experience the beauty of the region.Whether you are drawn to India for its spiritual significance, architectural marvels, or natural beauty, the country offers a range of experiences that can cater to every traveler’s dream. Embark on this journey, and explore India’s best-kept secrets in this comprehensive guide to the top places to visit in the country.",
    author: "John Doe",
    date: "April, 2023",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in USA",
    description:
      "India, a land of vibrant culture, rich history, and diverse landscapes, offers countless destinations for travelers seeking an unforgettable experience. From serene beaches and tranquil hill stations to bustling cities and historical landmarks, there is something for every kind of traveler.The country's natural beauty is unparalleled, with places like Kashmir, often referred to as 'Heaven on Earth,' offering snow-capped mountains, serene lakes, and beautiful gardens. For those seeking adventure, the Himalayan region, including destinations like Manali and Leh, provides trekking, rafting, and an escape into nature's lap.India’s heritage is etched in its magnificent monuments, such as the Taj Mahal, an architectural wonder that symbolizes love and stands as a testament to India's rich Mughal history. The majestic forts and palaces of Rajasthan, including Jaipur’s Amber Fort and Udaipur’s City Palace, showcase the regal past of India’s royal dynasties.For a blend of spiritual exploration and architectural brilliance, cities like Varanasi and Rishikesh offer deep cultural experiences, while temples like the Golden Temple in Amritsar and the ancient Khajuraho Temples stand as remarkable feats of craftsmanship and devotion.On the other hand, the coastal towns of Goa and Kerala attract tourists with their golden beaches, laid-back atmosphere, and delicious cuisine. Kerala’s backwaters and houseboats are a unique way to experience the beauty of the region.Whether you are drawn to India for its spiritual significance, architectural marvels, or natural beauty, the country offers a range of experiences that can cater to every traveler’s dream. Embark on this journey, and explore India’s best-kept secrets in this comprehensive guide to the top places to visit in the country.",
    author: "John Doe",
    date: "April, 2023",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Pakistan",
    description:
      "India, a land of vibrant culture, rich history, and diverse landscapes, offers countless destinations for travelers seeking an unforgettable experience. From serene beaches and tranquil hill stations to bustling cities and historical landmarks, there is something for every kind of traveler.The country's natural beauty is unparalleled, with places like Kashmir, often referred to as 'Heaven on Earth,' offering snow-capped mountains, serene lakes, and beautiful gardens. For those seeking adventure, the Himalayan region, including destinations like Manali and Leh, provides trekking, rafting, and an escape into nature's lap.India’s heritage is etched in its magnificent monuments, such as the Taj Mahal, an architectural wonder that symbolizes love and stands as a testament to India's rich Mughal history. The majestic forts and palaces of Rajasthan, including Jaipur’s Amber Fort and Udaipur’s City Palace, showcase the regal past of India’s royal dynasties.For a blend of spiritual exploration and architectural brilliance, cities like Varanasi and Rishikesh offer deep cultural experiences, while temples like the Golden Temple in Amritsar and the ancient Khajuraho Temples stand as remarkable feats of craftsmanship and devotion.On the other hand, the coastal towns of Goa and Kerala attract tourists with their golden beaches, laid-back atmosphere, and delicious cuisine. Kerala’s backwaters and houseboats are a unique way to experience the beauty of the region.Whether you are drawn to India for its spiritual significance, architectural marvels, or natural beauty, the country offers a range of experiences that can cater to every traveler’s dream. Embark on this journey, and explore India’s best-kept secrets in this comprehensive guide to the top places to visit in the country.",
    author: "John Doe",
    date: "April, 2023",
  },
];

const BlogsComp = () => {
  return (
    <div>
      <div data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 pl-2 py-2 text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {BlogData.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsComp;
