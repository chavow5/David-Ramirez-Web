import { FaInstagram, FaGithub, FaLinkedin, FaArrowUp, FaHeart } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #030712 0%, #0a0a1a 50%, #030712 100%)",
          backgroundSize: "300% 300%",
          animation: "pulseBg 10s ease infinite alternate",
        }}
      />
      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] z-0"
        style={{ background: "linear-gradient(90deg, transparent, #74b9e8 30%, #2e8fcf 70%, transparent)" }}
      />
      {/* Ambient orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{
          width: "600px",
          height: "200px",
          background: "radial-gradient(ellipse, rgba(116,185,232,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10"
          style={{ borderBottom: "1px solid rgba(116,185,232,0.1)" }}
        >
          {/* Brand */}
          <div className="space-y-3">
            <h4
              className="text-xl font-black"
              style={{
                background: "linear-gradient(135deg, #74b9e8, #2e8fcf)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              David Ramirez
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Full Stack Web Developer apasionado por crear experiencias digitales únicas y de alto impacto.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3 text-center">
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Navegación
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Sobre mí", href: "#aboutme" },
                { label: "Proyectos", href: "#Mis Proyectos" },
                { label: "Certificados", href: "#certificados" },
                { label: "Instagram", href: "#instagram" },
                { label: "Contacto", href: "#contacto" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm transition-all duration-200"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#74b9e8"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + contact */}
          <div className="space-y-3 text-center md:text-right">
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Redes Sociales
            </h4>
            <div className="flex justify-center md:justify-end gap-3 mb-4">
              {[
                { icon: <FaGithub size={18} />, href: "https://github.com/chavow5", color: "#e0e0e0" },
                { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/david-ramirez-031015253/", color: "#0a66c2" },
                { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/davidramirez_651/", color: "#e1306c" },
              ].map(({ icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.background = `${color}18`;
                    e.currentTarget.style.boxShadow = `0 0 15px ${color}40`;
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              Davidramirezw6@gmail.com
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              La Rioja, Argentina
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} David Ramirez. Todos los derechos reservados.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Hecho con <FaHeart size={10} style={{ color: "#f5c518" }} /> en La Rioja, Argentina
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300"
            style={{
              border: "1px solid rgba(116,185,232,0.25)",
              color: "#74b9e8",
              background: "rgba(116,185,232,0.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(116,185,232,0.12)";
              e.currentTarget.style.borderColor = "#74b9e8";
              e.currentTarget.style.boxShadow = "0 0 15px rgba(116,185,232,0.2)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(116,185,232,0.05)";
              e.currentTarget.style.borderColor = "rgba(116,185,232,0.25)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <FaArrowUp size={10} /> Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

