import { useState } from "react";
import { FaInstagram, FaHeart, FaComment, FaExternalLinkAlt, FaCheck, FaLock } from "react-icons/fa";
import { Grid, Film, Send } from "lucide-react";
import instagramScreenshot from "../assets/instagram-profile.png";
import origxnImg from "/images/orignx.png";

const InstagramSection = () => {
  const [activeTab, setActiveTab] = useState("grid");
  const instagramUrl = "https://www.instagram.com/davidramirez_651/";

  // Publicaciones de proyectos en el feed de Instagram
  const posts = [
    {
      id: 1,
      title: "ORIGXN E-Commerce",
      category: "Proyecto Web",
      img: origxnImg,
      likes: 184,
      comments: 24,
    },
    {
      id: 2,
      title: "Reservas de Turnos",
      category: "Web App",
      img: "https://api.microlink.io/?url=https%3A%2F%2Freservas-de-turnos.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      likes: 132,
      comments: 19,
    },
    {
      id: 3,
      title: "Lavadero a Domicilio",
      category: "Landing Page",
      img: "https://api.microlink.io/?url=https%3A%2F%2Flavaderoadomicilio.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      likes: 147,
      comments: 18,
    },
    {
      id: 4,
      title: "Catálogo La Huella",
      category: "E-Commerce",
      img: "https://api.microlink.io/?url=https%3A%2F%2Fcatalogo-lahuella.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      likes: 215,
      comments: 31,
    },
    {
      id: 5,
      title: "Kinetic Sport LR",
      category: "Landing Page",
      img: "https://api.microlink.io/?url=https%3A%2F%2Fkinetic-sport-lr.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      likes: 119,
      comments: 15,
    },
    {
      id: 6,
      title: "Electro Frío",
      category: "Servicio Web",
      img: "https://api.microlink.io/?url=https%3A%2F%2Felectro-frio.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      likes: 168,
      comments: 22,
    },
  ];

  return (
    <section
      id="instagram"
      className="relative py-20 px-4 sm:px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #030712 0%, #081120 50%, #030712 100%)",
      }}
    >
      {/* Resplandor ambiental de fondo inspirado en Instagram */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(225,48,108,0.07) 0%, rgba(131,58,180,0.04) 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold mb-3"
            style={{
              background: "rgba(225,48,108,0.12)",
              border: "1px solid rgba(225,48,108,0.3)",
              color: "#f09433",
            }}
          >
            <FaInstagram size={14} style={{ color: "#e1306c" }} />
            <span>@davidramirez_651</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Mi{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Instagram
            </span>
          </h2>
          <p className="text-sm mt-3 text-gray-400 max-w-xl mx-auto">
            Seguime en mi perfil oficial para ver mis proyectos en tiempo real, nuevos lanzamientos y mi trabajo día a día como desarrollador y diseñador.
          </p>
        </div>

        {/* Bloque principal: Presentación + Captura de Pantalla Real */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          {/* Lado izquierdo: Datos y llamada a la acción */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">
                Perfil de Instagram
              </p>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                DAVID chavo RAMIREZ
              </h3>
              <p className="text-sm font-semibold text-[#74b9e8] mt-1">
                Programador Web 💻 | Full stack
              </p>
            </div>

            {/* Tarjetas de estadísticas oficiales del perfil */}
            <div className="grid grid-cols-3 gap-3">
              <div
                className="p-3 rounded-xl text-center"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span className="block text-xl sm:text-2xl font-black text-white">404</span>
                <span className="text-[11px] text-gray-400 font-medium">Publicaciones</span>
              </div>
              <div
                className="p-3 rounded-xl text-center"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span className="block text-xl sm:text-2xl font-black text-white">2.586</span>
                <span className="text-[11px] text-gray-400 font-medium">Seguidores</span>
              </div>
              <div
                className="p-3 rounded-xl text-center"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span className="block text-xl sm:text-2xl font-black text-white">1.209</span>
                <span className="text-[11px] text-gray-400 font-medium">Seguidos</span>
              </div>
            </div>

            {/* Puntos destacados */}
            <div className="space-y-3 pt-1">
              {[
                { title: "Desarrollo y Proyectos", desc: "Demos y sitios webs publicados en vivo." },
                { title: "Diseño Gráfico & UI", desc: "Experiencias visuales modernas e interactivas." },
                { title: "Contacto Rápido", desc: "Escribime por mensaje privado para coordinar proyectos." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl text-left"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: "linear-gradient(135deg, #e1306c, #833ab4)",
                      color: "#fff",
                    }}
                  >
                    <FaCheck size={9} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botones de acción */}
            <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                }}
              >
                <FaInstagram size={18} />
                Seguir en Instagram
                <FaExternalLinkAlt size={12} className="opacity-80 ml-1" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-gray-200 transition-colors duration-200 hover:text-white"
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <Send size={14} /> Enviar Mensaje
              </a>
            </div>
          </div>

          {/* Lado derecho: Marco de Captura de Pantalla Real */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              className="w-full max-w-[540px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(225,48,108,0.2)]"
              style={{
                background: "#000000",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              {/* Barra superior estilo navegador/app */}
              <div className="px-4 py-2.5 bg-[#0e1522] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-300 font-mono bg-black/40 px-3 py-1 rounded-md border border-white/5">
                  <FaLock size={10} className="text-green-400" />
                  <span>instagram.com/davidramirez_651</span>
                </div>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Abrir en Instagram"
                >
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>

              {/* Imagen de la captura de pantalla real */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group cursor-pointer overflow-hidden bg-black"
              >
                <img
                  src={instagramScreenshot}
                  alt="Captura de pantalla de perfil de Instagram davidramirez_651"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Overlay sutil al pasar el mouse */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white shadow-xl"
                    style={{
                      background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                    }}
                  >
                    <FaInstagram size={14} /> Visitar perfil oficial
                  </span>
                </div>
              </a>

              {/* Pie de la captura */}
              <div className="px-4 py-2 bg-[#0a0f18] border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Captura de pantalla de mi cuenta oficial
                </span>
                <span className="text-gray-500 text-[11px]">@davidramirez_651</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sección inferior: Feed de publicaciones de proyectos */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab("grid")}
                className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider pb-2 border-b-2 transition-colors ${
                  activeTab === "grid" ? "border-[#74b9e8] text-white" : "border-transparent text-gray-500 hover:text-gray-300"
                }`}
              >
                <Grid size={15} /> Publicaciones destacadas
              </button>
              <button
                onClick={() => setActiveTab("reels")}
                className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider pb-2 border-b-2 transition-colors ${
                  activeTab === "reels" ? "border-[#74b9e8] text-white" : "border-transparent text-gray-500 hover:text-gray-300"
                }`}
              >
                <Film size={15} /> Proyectos en video
              </button>
            </div>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#74b9e8] hover:underline flex items-center gap-1 font-medium"
            >
              Ver más en Instagram <FaExternalLinkAlt size={10} />
            </a>
          </div>

          {/* Grilla interactiva de proyectos tipo feed de Instagram */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {posts.map((post) => (
              <a
                key={post.id}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden bg-gray-950 border border-white/10 cursor-pointer block"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay con Likes y Comentarios */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-2 text-center text-white">
                  <p className="text-[11px] font-bold line-clamp-1 mb-1">{post.title}</p>
                  <span className="text-[9px] text-[#74b9e8] font-medium mb-2">{post.category}</span>
                  <div className="flex items-center gap-3 text-[11px] font-bold">
                    <div className="flex items-center gap-1">
                      <FaHeart size={11} className="text-red-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaComment size={11} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
