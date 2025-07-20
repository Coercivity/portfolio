import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="hidden md:flex space-x-8">
          {["about", "projects", "skills", "contacts"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-300 hover:text-white transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
