import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

const navbarLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blogs", link: "/blogs" },
  { name: "Best Places", link: "/places" },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between 
      bg-white dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 
      md:hidden rounded-r-xl shadow-md`}
    >
      <div className="Navbar__card">
        {/* Top Section */}
        <div className="flex items-center justify-start gap-4">
          <FaUsers size={50} className="text-gray-500" />
          <div>
            <h1 className="text-gray-500">Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-black mt-12">
          <ul className="space-y-4 text-xl">
            {navbarLinks.map(({ name, link }, index) => (
              <li key={index}>
                <Link
                  to={link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default ResponsiveMenu;

