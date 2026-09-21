import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import fondo from "../assets/fondo2.png";

const PHRASES = [
  "Full Stack Web Developer.",
  "Programador y Desarrollador de Software.",
  "Diseñador Gráfico.",
  "Deportista.",
];

const TypewriterText = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = PHRASES[phraseIdx];
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % PHRASES.length);
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, phraseIdx]);

  return (
    <span style={{ color: "#74b9e8" }}>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "3px",
          height: "1em",
          background: "#74b9e8",
          marginLeft: "2px",
          verticalAlign: "middle",
          animation: "glowPulse 1s ease-in-out infinite",
        }}
      />
    </span>
  );
};

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scaleValue = Math.min(1 + scrollPosition * 0.0008, 5.5);
  const blurValue = Math.min(scrollPosition * 0.005, 6);

  return (
    <div id="inicio" className="relative min-h-screen w-full overflow-hidden bg-grid">
      {/* Background image with zoom+blur */}
      <div
        className="absolute inset-0 w-full h-full z-0 transition-all duration-300"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(3,7,18,0.55) 0%, rgba(3,7,18,0.85) 80%, #030712 100%), url(${fondo})`,
          backgroundSize: isMobile ? "cover" : `${scaleValue * 100}%`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: `blur(${blurValue}px)`,
        }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute z-0 rounded-full pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          top: "-150px",
          left: "-150px",
          background: "radial-gradient(circle, rgba(116,185,232,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute z-0 rounded-full pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          bottom: "0",
          right: "-100px",
          background: "radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(116,185,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(116,185,232,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col justify-center items-start min-h-screen px-6 md:px-20 py-24">
        {/* Small label */}
        <div
          className="flex items-center gap-3 mb-6"
          style={{ opacity: 0, animation: "fadeInUp 0.8s ease 0.2s forwards" }}
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #74b9e8)",
            }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "#74b9e8" }}
          >
            Portfolio 2026
          </span>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#74b9e8",
              boxShadow: "0 0 10px #74b9e8",
              animation: "glowPulse 2s ease infinite",
            }}
          />
        </div>

        {/* Main heading */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-black leading-none mb-4"
          style={{
            opacity: 0,
            animation: "fadeInUp 0.8s ease 0.4s forwards",
            letterSpacing: "-0.02em",
          }}
        >
          <span className="text-white">David</span>
          <br />
          <span
            className="text-gradient-cyber animate-gradient"
            style={{
              backgroundSize: "200% 200%",
              display: "inline-block",
            }}
          >
            Ramirez
          </span>
        </h1>

        {/* Typewriter */}
        <p
          className="text-lg sm:text-xl md:text-2xl font-medium mb-10"
          style={{
            opacity: 0,
            animation: "fadeInUp 0.8s ease 0.6s forwards",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <TypewriterText />
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-4"
          style={{ opacity: 0, animation: "fadeInUp 0.8s ease 0.8s forwards" }}
        >
          <a
            href="#proyectos"
            className="px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #74b9e8, #ffffff)",
              color: "#071220",
              boxShadow: "0 0 25px rgba(116,185,232,0.45), 0 0 50px rgba(116,185,232,0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 0 35px rgba(116,185,232,0.6), 0 0 70px rgba(116,185,232,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 25px rgba(116,185,232,0.45), 0 0 50px rgba(116,185,232,0.15)";
            }}
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 btn-neon"
          >
            Contactame
          </a>
          <a
            href="https://wa.me/5493804201334?text=Hola"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm uppercase tracking-wider text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "#25D366",
            }}
          >
            <FaWhatsapp size={18} /> WhatsApp
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0, animation: "fadeInUp 0.8s ease 1.2s forwards" }}
        >
          <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(116,185,232,0.5)" }}>
            
          </span>
          <div
            style={{
              width: "1px",
              height: "50px",
              background: "linear-gradient(to bottom, #74b9e8, transparent)",
              animation: "floatY 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Inline keyframes for hero */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;

