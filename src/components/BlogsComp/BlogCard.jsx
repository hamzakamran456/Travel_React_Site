import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogCard = ({image, title, description, author, date}) => {
  return (
    <Link to={`/blogs/${title}`} 
    onClick={()=>{
        window.scrollTo(0,0);
    }}
    state={{image, title, description, author, date}}>
      <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl">
      <div className="overflow-hidden">
        <img src={image} alt="" className="mx-auto h-[220px] w-full object-cover transition-all duration-700 hover:skew-x-2 hover:scale-110" />
      </div>
      <div className="flex justify-between pt-2 text-slate-600">
        <p>{date}</p>
        <p>By {author}</p>
      </div>
      <div className="space-y-2 py-3">
        <h1 className="line-clamp-1 font-bold">{title}</h1>
        <p className="line-clamp-2">{description}</p>
      </div>
      </div>
    </Link>
  );
};

BlogCard.propTypes = {
    image: PropTypes.string.isRequired,     
    title: PropTypes.string.isRequired,    
    description: PropTypes.string.isRequired, 
    author: PropTypes.string.isRequired,     
    date: PropTypes.string.isRequired,     
  };

export default BlogCard;
