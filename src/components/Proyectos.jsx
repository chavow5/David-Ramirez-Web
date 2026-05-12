import { useEffect, useState } from "react";
import { FaCodeBranch, FaStar, FaExternalLinkAlt } from "react-icons/fa";

const LANG_COLORS = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python:     "#3572a5",
  HTML:       "#e34f26",
  CSS:        "#1572b6",
  React:      "#61dafb",
  Java:       "#b07219",
  "C++":      "#f34b7d",
  default:    "#74b9e8",
};

const getLangColor = (lang) => LANG_COLORS[lang] || LANG_COLORS.default;

const Proyectos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/chavow5/repos?per_page=10&sort=updated")
      .then((res) => res.json())
      .then((data) => {
        const filtrados = data
          .filter((repo) => repo.description)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(filtrados);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar los repositorios:", err);
        setLoading(false);
      });
  }, []);

  const parseDescription = (desc) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return desc.split(urlRegex).map((part, i) =>
      urlRegex.test(part) ? (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          style={{ color: "#74b9e8" }}
        >
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  return (
    <section
      id="Mis Proyectos"
      className="relative text-white py-20 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #030712 0%, #060d1a 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(116,185,232,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#74b9e8" }}>
            Open Source
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Mis Proyectos en{" "}
            <span className="text-gradient-cyber animate-gradient" style={{ backgroundSize: "200% 200%" }}>
              GitHub
            </span>
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div
              className="w-10 h-10 rounded-full border-2 animate-spin"
              style={{
                borderColor: "rgba(116,185,232,0.2)",
                borderTopColor: "#74b9e8",
              }}
            />
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {repos.map((repo) => {
              const langColor = getLangColor(repo.language);
              return (
                <div
                  key={repo.id}
                  className="group rounded-xl p-5 transition-all duration-300 flex flex-col"
                  style={{
                    background: "rgba(8,15,26,0.8)",
                    border: "1px solid rgba(116,185,232,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(116,185,232,0.35)";
                    e.currentTarget.style.boxShadow = "0 0 25px rgba(116,185,232,0.08), inset 0 0 25px rgba(116,185,232,0.03)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(116,185,232,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Repo name */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-base font-bold leading-snug">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200"
                        style={{ color: "#74b9e8" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#7dd3fc")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#74b9e8")}
                      >
                        {repo.name}
                      </a>
                    </h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 transition-all duration-200"
                      style={{ color: "rgba(116,185,232,0.4)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#74b9e8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(116,185,232,0.4)")}
                    >
                      <FaExternalLinkAlt size={13} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {parseDescription(repo.description)}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid rgba(116,185,232,0.08)" }}>
                    <div className="flex items-center gap-3 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ background: langColor, boxShadow: `0 0 6px ${langColor}` }}
                          />
                          <span style={{ color: langColor }}>{repo.language}</span>
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <FaStar size={11} />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <FaCodeBranch size={11} />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {new Date(repo.updated_at).toLocaleDateString("es-AR", { month: "short", year: "numeric" })}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* GitHub profile CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/chavow5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm btn-neon"
          >
            Ver perfil completo en GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;

