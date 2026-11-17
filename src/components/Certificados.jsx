import { useState } from "react";
import { FaExpand } from "react-icons/fa";

const certificados = [
  { nombre: "Full Stack Web Developer – Digital House", imagen: "./certificados/fullstack.png", issuer: "Digital House" },
  { nombre: "Programador Web Full Stack – Polo Tecnológico", imagen: "./certificados/POLO TECNOLÓGICO_page-0001.jpg", issuer: "Polo Tecnológico" },
  { nombre: "Tiendanube Partner Desarrollador – Tiendanube", imagen: "./certificados/tienda nube.png", issuer: "Tiendanube" },
  { nombre: "Inglés Técnico – Polo Tecnológico", imagen: "./certificados/ingles tecnico.png", issuer: "Polo Tecnológico" },
  { nombre: "Desarrollo Web Responsive – Domestika",   imagen: "./certificados/webresponsive.png", issuer: "Domestika" },
  { nombre: "Diseño Gráfico – Juventudes",             imagen: "./certificados/diseñografico.png", issuer: "Juventudes" },
  { nombre: "Programación en Javascript – Domestika",  imagen: "./certificados/programacion.png", issuer: "Domestika" },
];

const Certificados = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  return (
    <section
      id="certificados"
      className="relative py-20 text-white overflow-hidden"
      style={{ background: "linear-gradient(180deg, #030712 0%, #080f1a 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(26,110,168,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#74b9e8" }}>
            Formación
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Mis{" "}
            <span className="text-gradient-cyber animate-gradient" style={{ backgroundSize: "200% 200%" }}>
              Certificados
            </span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {certificados.map((cert, index) => (
            <div
              key={index}
              onClick={() => setImagenSeleccionada(cert.imagen)}
              className="group relative rounded-xl overflow-hidden cursor-pointer flex flex-col"
              style={{
                background: "rgba(8,15,26,0.8)",
                border: "1px solid rgba(116,185,232,0.1)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(26,110,168,0.5)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(26,110,168,0.15)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(116,185,232,0.1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cert.imagen}
                  alt={cert.nombre}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(3,7,18,0.65)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(26,110,168,0.8)",
                      boxShadow: "0 0 20px rgba(26,110,168,0.5)",
                    }}
                  >
                    <FaExpand size={14} />
                  </div>
                </div>
                {/* Top glow line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #1a6ea8, transparent)" }}
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-1">
                <span
                  className="text-xs mb-2 font-medium"
                  style={{
                    color: "#2e8fcf",
                    background: "rgba(46,143,207,0.1)",
                    border: "1px solid rgba(46,143,207,0.2)",
                    display: "inline-block",
                    padding: "2px 8px",
                    borderRadius: "999px",
                    width: "fit-content",
                  }}
                >
                  {cert.issuer}
                </span>
                <h3 className="text-sm font-semibold leading-snug" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {cert.nombre}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {imagenSeleccionada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(3,7,18,0.92)", backdropFilter: "blur(10px)" }}
          onClick={() => setImagenSeleccionada(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            style={{
              border: "1px solid rgba(26,110,168,0.4)",
              borderRadius: "16px",
              boxShadow: "0 0 60px rgba(26,110,168,0.2)",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imagenSeleccionada}
              alt="Certificado ampliado"
              className="w-full max-h-[80vh] object-contain"
            />
            <button
              onClick={() => setImagenSeleccionada(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200"
              style={{
                background: "rgba(26,110,168,0.8)",
                border: "1px solid rgba(46,143,207,0.5)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1a6ea8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(26,110,168,0.8)")}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificados;

