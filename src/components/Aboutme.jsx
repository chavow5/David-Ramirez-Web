import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaPython, FaDownload, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";

const skills = [
  { name: "React",       icon: <FaReact />,       color: "#61dafb" },
  { name: "JavaScript",  icon: <FaJs />,           color: "#f7df1e" },
  { name: "APIs REST",   icon: <SiPostman />,      color: "#ff6c37" },
  { name: "Tailwind",    icon: <SiTailwindcss />,  color: "#38bdf8" },
  { name: "HTML5",       icon: <FaHtml5 />,        color: "#e34f26" },
  { name: "CSS3",        icon: <FaCss3Alt />,      color: "#1572b6" },
  { name: "GitHub",      icon: <FaGithub />,       color: "#e0e0e0" },
  { name: "Node.js",     icon: <FaNodeJs />,       color: "#68a063" },
  { name: "Python",      icon: <FaPython />,       color: "#3572a5" },
];

const softSkills = [
  "Trabajo en equipo", "Comunicación efectiva", "Adaptabilidad",
  "Gestión de tiempos", "Creatividad", "Liderazgo", "Proactivo", "Resolución de problemas",
];

const idiomas = [
  { idioma: "Español", nivel: "Nativo",  flag: "🇦🇷" },
  { idioma: "Inglés",  nivel: "B1 – B2", flag: "🇺🇸" },
];

const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <div style={{ width: "3px", height: "20px", background: "linear-gradient(180deg, #74b9e8, #1a6ea8)", borderRadius: "2px" }} />
    <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)" }}>
      {children}
    </h3>
  </div>
);

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="relative text-white py-20 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #030712 0%, #080f1a 50%, #030712 100%)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(116,185,232,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(116,185,232,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,110,168,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#74b9e8" }}>
            Conóceme
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Sobre <span className="text-gradient-cyber animate-gradient" style={{ backgroundSize: "200% 200%" }}>Mí</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* ── Left column ── */}
          <div className="flex-1 space-y-8">
            {/* Profile card */}
            <div
              className="glass rounded-2xl p-6 flex items-center gap-5"
              style={{ border: "1px solid rgba(116,185,232,0.12)" }}
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <div
                  className="absolute -inset-[3px] rounded-full animate-spin-slow"
                  style={{ background: "conic-gradient(from 0deg, #74b9e8, #1a6ea8, #f5c518, #74b9e8)" }}
                />
                <img
                  src="images/perfilchavo.png"
                  alt="David Ramirez"
                  className="relative w-20 h-20 rounded-full object-cover"
                  style={{ border: "3px solid #030712" }}
                />
                {/* Online indicator */}
                <div
                  className="absolute bottom-1 right-1 w-3 h-3 rounded-full"
                  style={{
                    background: "#22c55e",
                    border: "2px solid #030712",
                    boxShadow: "0 0 8px #22c55e",
                    animation: "glowPulse 2s ease-in-out infinite",
                  }}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">David Ramírez</h2>
                <p className="text-sm font-medium" style={{ color: "#74b9e8" }}>
                  Desarrollador Web Full Stack
                </p>
                <div className="flex items-center gap-1 mt-1" style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>
                  <FaMapMarkerAlt size={10} />
                  <span>La Rioja, Argentina</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="glass rounded-2xl p-6" style={{ border: "1px solid rgba(116,185,232,0.08)" }}>
              <SectionTitle>Biografía</SectionTitle>
              <p className="text-gray-300 leading-relaxed text-sm">
                ¡Hola! Me llamo David, también conocido como <span style={{ color: "#74b9e8" }}>"Chavo"</span>. Soy
                un desarrollador web Full Stack apasionado por crear experiencias digitales únicas con React,
                Tailwind CSS, Bootstrap y otras tecnologías modernas.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm mt-3">
                Mi enfoque se centra en construir software web accesible y de alto rendimiento que realmente
                genere impacto para mis clientes.
              </p>
            </div>

            {/* Technical skills */}
            <div className="glass rounded-2xl p-6" style={{ border: "1px solid rgba(116,185,232,0.08)" }}>
              <SectionTitle>Habilidades Técnicas</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full font-medium transition-all duration-300 cursor-default"
                    style={{
                      background: `${skill.color}15`,
                      border: `1px solid ${skill.color}40`,
                      color: skill.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${skill.color}25`;
                      e.currentTarget.style.borderColor = skill.color;
                      e.currentTarget.style.boxShadow = `0 0 12px ${skill.color}50`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${skill.color}15`;
                      e.currentTarget.style.borderColor = `${skill.color}40`;
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ fontSize: "14px" }}>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div className="glass rounded-2xl p-6" style={{ border: "1px solid rgba(116,185,232,0.08)" }}>
              <SectionTitle>Habilidades Blandas</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1.5 rounded-full transition-all duration-300 cursor-default"
                    style={{
                      background: "rgba(46,143,207,0.1)",
                      border: "1px solid rgba(46,143,207,0.25)",
                      color: "#93c5fd",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(46,143,207,0.2)";
                      e.currentTarget.style.borderColor = "#2e8fcf";
                      e.currentTarget.style.boxShadow = "0 0 10px rgba(46,143,207,0.3)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(46,143,207,0.1)";
                      e.currentTarget.style.borderColor = "rgba(46,143,207,0.25)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right sidebar ── */}
          <aside className="w-full lg:w-80 space-y-5">
            {/* Download CV */}
            <a
              href="/CV_DavidRamirez.pdf"
              download
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #74b9e8, #1a6ea8)",
                color: "#000",
                boxShadow: "0 0 25px rgba(116,185,232,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 0 35px rgba(116,185,232,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(116,185,232,0.3)";
              }}
            >
              <FaDownload /> Descargar CV
            </a>

            {/* Contact info */}
            <div className="glass rounded-2xl p-5 space-y-3" style={{ border: "1px solid rgba(116,185,232,0.1)" }}>
              <SectionTitle>Contacto & Redes</SectionTitle>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <FaEnvelope style={{ color: "#74b9e8", flexShrink: 0 }} />
                <span>Davidramirezw6@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <FaMapMarkerAlt style={{ color: "#74b9e8", flexShrink: 0 }} />
                <span>La Rioja, Argentina</span>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  { label: "GitHub",    href: "https://github.com/chavow5" },
                  { label: "LinkedIn",  href: "https://www.linkedin.com/in/david-ramirez-031015253/" },
                  { label: "Twitter",   href: "https://x.com/Chavo651" },
                  { label: "Instagram", href: "https://www.instagram.com/davidramirez_651/" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300"
                    style={{
                      background: "rgba(116,185,232,0.06)",
                      border: "1px solid rgba(116,185,232,0.2)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(116,185,232,0.15)";
                      e.currentTarget.style.borderColor = "#74b9e8";
                      e.currentTarget.style.color = "#74b9e8";
                      e.currentTarget.style.boxShadow = "0 0 10px rgba(116,185,232,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(116,185,232,0.06)";
                      e.currentTarget.style.borderColor = "rgba(116,185,232,0.2)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div className="glass rounded-2xl p-5" style={{ border: "1px solid rgba(116,185,232,0.1)" }}>
              <SectionTitle>Idiomas</SectionTitle>
              <div className="space-y-3">
                {idiomas.map(({ idioma, nivel, flag }, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>{flag}</span>
                      <span className="text-sm text-gray-200">{idioma}</span>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: "rgba(116,185,232,0.1)",
                        border: "1px solid rgba(116,185,232,0.25)",
                        color: "#74b9e8",
                      }}
                    >
                      {nivel}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

