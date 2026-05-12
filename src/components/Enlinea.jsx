import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const proyectos = [
  {
    id: 1,
    title: 'Portafolio David Ramirez',
    tag: 'Portfolio',
    image: 'https://private-user-images.githubusercontent.com/98863759/447362176-ef6f948e-4bfd-4f04-8292-a6d63fd4a46a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgyMDY4OTMsIm5iZiI6MTc0ODIwNjU5MywicGF0aCI6Ii85ODg2Mzc1OS80NDczNjIxNzYtZWY2Zjk0OGUtNGJmZC00ZjA0LTgyOTItYTZkNjNmZDRhNDZhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI1VDIwNTYzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFkMDg2ZGY0ZGY1OTI4ZjgzNTA3ZTg1NDY1MWJjZDE3ZjQ0OGFiZDY1MWQyZTRkODc0NmFiMjZmNmE1NGU4M2UmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.mq-4esCuxmi8DfMBogI6YQ-NFT1KKBiuMSrgiSn99nw',
    link: 'https://github.com/chavow5/chavow5/tree/main/Portafolio%20David%20Ramirez',
  },
  {
    id: 2,
    title: 'Sistema de Peajes',
    tag: 'Web App',
    image: 'https://private-user-images.githubusercontent.com/98863759/436771567-839030a6-3cbf-4d1d-9d4a-50c071a5c390.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgyMDY4MjEsIm5iZiI6MTc0ODIwNjUyMSwicGF0aCI6Ii85ODg2Mzc1OS80MzY3NzE1NjctODM5MDMwYTYtM2NiZi00ZDFkLTlkNGEtNTBjMDcxYTVjMzkwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI1VDIwNTUyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUzNmU3ZTI1YWUzZWM1NWU2NmNmOGUyNmVhMDFjNjhiMTFjY2E3YmRhMDVmNDk1NDcxYzQ5YjZjYjdiNWFhMWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.BGIHmq91aL_VeSDeZdChLKgYAsf1KU98Doo0Hyh7fNQ',
    link: 'https://github.com/chavow5/dev-squad?tab=readme-ov-file',
  },
  {
    id: 3,
    title: 'ORIGXN',
    tag: 'E-Commerce',
    image: './images/orignx.png',
    link: 'https://origxn.store',
  },
  {
    id: 4,
    title: 'Carta de Invitación',
    tag: 'Landing Page',
    image: 'https://private-user-images.githubusercontent.com/98863759/437173056-b4ba9e58-632f-4dd8-91bb-adabb55d174e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgyMDE3MTUsIm5iZiI6MTc0ODIwMTQxNSwicGF0aCI6Ii85ODg2Mzc1OS80MzcxNzMwNTYtYjRiYTllNTgtNjMyZi00ZGQ4LTkxYmItYWRhYmI1NWQxNzRlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI1VDE5MzAxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNmZTRhZjA1MWFlYTY1Yzg1NGU5YzAyM2I2OGY5M2MwZmFkZGY0Y2E3ODJhZjg5N2I4MTZmZTBjZGMzMzMxZjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.cKU-hJ3iwPt3WwwSQWFKrIfgVZF4OZV3uIuZWn4o1uE',
    link: 'https://github.com/chavow5/invitacion.git',
  },
  {
    id: 5,
    title: 'Juego de Adivinanza',
    tag: 'Game',
    image: 'https://private-user-images.githubusercontent.com/98863759/436882444-59e501d8-8154-415d-a10a-3da477da8b04.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgyMDE2OTUsIm5iZiI6MTc0ODIwMTM5NSwicGF0aCI6Ii85ODg2Mzc1OS80MzY4ODI0NDQtNTllNTAxZDgtODE1NC00MTVkLWExMGEtM2RhNDc3ZGE4YjA0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI1VDE5Mjk1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcyZGM1NmJjYmNmZjdmODM5NmEzMTAxNWI4ZTViNDZlYjViZGZjNjEzMWU4MDk4MGU5YzdkMDEzOTRlZmZmZTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.HXBFJ5nictCjRi_RDVvsb1oz2IU7vslE3FRFn4YStBs',
    link: 'https://chavow5.github.io/MemoryGame/',
  },
];

const TAG_COLORS = {
  Portfolio:    { bg: "rgba(116,185,232,0.12)",    border: "rgba(116,185,232,0.35)",    text: "#74b9e8" },
  "Web App":    { bg: "rgba(46,143,207,0.12)",   border: "rgba(46,143,207,0.35)",   text: "#2e8fcf" },
  "E-Commerce": { bg: "rgba(245,197,24,0.12)",  border: "rgba(245,197,24,0.35)",  text: "#f5c518" },
  "Landing Page":{ bg: "rgba(34,197,94,0.12)",   border: "rgba(34,197,94,0.35)",    text: "#22c55e" },
  Game:         { bg: "rgba(251,191,36,0.12)",   border: "rgba(251,191,36,0.35)",   text: "#fbbf24" },
};

const Enlinea = () => {
  return (
    <section
      id="proyectos"
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060d1a 0%, #030712 100%)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(116,185,232,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(116,185,232,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient glow right */}
      <div
        className="absolute top-20 right-0 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 text-white">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#74b9e8" }}>
            Showcase
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Proyectos{" "}
            <span className="text-gradient-cyber animate-gradient" style={{ backgroundSize: "200% 200%" }}>
              en Línea
            </span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {proyectos.map(({ id, title, tag, image, link }, index) => {
            const tagStyle = TAG_COLORS[tag] || TAG_COLORS["Web App"];
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden flex flex-col cursor-pointer"
                style={{
                  background: "rgba(8,15,26,0.9)",
                  border: "1px solid rgba(116,185,232,0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(116,185,232,0.35)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(116,185,232,0.1), inset 0 0 30px rgba(116,185,232,0.03)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(116,185,232,0.1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: "rgba(3,7,18,0.7)", backdropFilter: "blur(2px)" }}
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm"
                      style={{
                        background: "linear-gradient(135deg, #74b9e8, #1a6ea8)",
                        color: "#000",
                        boxShadow: "0 0 20px rgba(116,185,232,0.4)",
                      }}
                    >
                      <FaExternalLinkAlt size={12} />
                      Ver proyecto
                    </a>
                  </div>

                  {/* Scan line top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(90deg, transparent, #74b9e8, transparent)" }}
                  />
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">{title}</h3>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: tagStyle.bg,
                        border: `1px solid ${tagStyle.border}`,
                        color: tagStyle.text,
                      }}
                    >
                      {tag}
                    </span>
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm font-medium flex items-center gap-1.5 transition-colors duration-200"
                    style={{ color: "rgba(116,185,232,0.6)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#74b9e8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(116,185,232,0.6)")}
                  >
                    Ver proyecto <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Enlinea;

