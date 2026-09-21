import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logodavidramirez.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#aboutme" },
  { label: "Proyectos", href: "#Mis Proyectos" },
  { label: "Certificados", href: "#certificados" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(3, 7, 18, 0.85)"
          : "rgba(3, 7, 18, 0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(116, 185, 232, 0.15)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(116, 185, 232, 0.05)" : "none",
      }}
    >
      {/* Línea glow inferior animada */}
      {scrolled && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent, #74b9e8, #2e8fcf, transparent)",
            opacity: 0.6,
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer">
          <img
            src={logo}
            alt="Logo David Ramirez"
            className="h-9 mr-2 transition-all duration-300"
            style={{ filter: "drop-shadow(0 0 8px rgba(116,185,232,0.4))" }}
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {label}
              </span>
              {/* Hover underline glow */}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-4/5 transition-all duration-300 rounded-full"
                style={{ background: "linear-gradient(90deg, #74b9e8, #2e8fcf)" }}
              />
              {/* Hover bg */}
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(116,185,232,0.05)" }}
              />
            </a>
          ))}
          {/* CTA button */}
          <a
            href="#contacto"
            className="ml-4 px-5 py-2 text-sm font-semibold rounded-full btn-neon"
          >
            Contactame
          </a>
        </nav>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-300 hover:text-white p-2 rounded-lg transition-colors"
            style={{ background: "rgba(116,185,232,0.05)", border: "1px solid rgba(116,185,232,0.15)" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-6 pt-2 space-y-1"
          style={{
            background: "rgba(3,7,18,0.97)",
            borderTop: "1px solid rgba(116,185,232,0.1)",
          }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-gray-300 hover:text-white rounded-lg transition-all duration-200"
              style={{
                borderLeft: "2px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = "#74b9e8";
                e.currentTarget.style.background = "rgba(116,185,232,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = "transparent";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 px-4 py-3 text-center font-semibold rounded-xl btn-neon"
          >
            Contactame
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

