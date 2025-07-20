import React from "react";
import { Link } from "react-scroll";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contacts", label: "Contacts" },
];

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  return (
    <header
      className={`fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm py-3 ${className}`}
    >
      <nav className="container mx-auto px-4">
        <div className="hidden md:flex justify-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.id} to={item.id} label={item.label} />
          ))}
        </div>
      </nav>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-70}
      className="cursor-pointer text-gray-300 hover:text-white transition-colors text-sm font-medium py-1 px-2 rounded hover:bg-gray-800/50"
      activeClass="text-cyan-400"
      spy={true}
    >
      {label}
    </Link>
  );
};

export default React.memo(Header);
