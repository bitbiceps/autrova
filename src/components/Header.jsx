import { Link } from "react-router-dom";
import { FaSuitcase, FaUser } from "react-icons/fa";

const Header = () => (
  <header className="flex justify-between items-center px-6 py-4 shadow">
    {/* Logo */}
    <Link to="/" className="text-2xl font-bold text-orange-600">
      Aut<span className="text-gray-700">Rova</span>
      <span className="text-sm text-gray-400">.com</span>
    </Link>

    {/* Navigation */}
    <nav className="flex items-center space-x-6 text-sm font-medium text-gray-700">
      {/* Desktop Only */}
      <Link to="/trips" className="hidden sm:inline">
        Trips
      </Link>
      <Link to="/signin" className="hidden sm:inline">
        Sign in
      </Link>

      {/* Mobile Icons Only */}
      <Link to="/trips" className="sm:hidden text-lg">
        <FaSuitcase />
      </Link>
      <Link to="/signin" className="sm:hidden text-lg">
        <FaUser />
      </Link>
    </nav>
  </header>
);

export default Header;
