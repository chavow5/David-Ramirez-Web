import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Contacto = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const inputStyle = (name) => ({
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.04)",
    border: focused === name
      ? "1px solid rgba(116,185,232,0.6)"
      : "1px solid rgba(116,185,232,0.12)",
    color: "#fff",
    outline: "none",
    transition: "all 0.25s ease",
    boxShadow: focused === name ? "0 0 15px rgba(116,185,232,0.1)" : "none",
    fontSize: "14px",
    fontFamily: "inherit",
  });

  return (
    <section
      id="contacto"
      className="relative text-white py-20 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080f1a 0%, #030712 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "500px",
          height: "400px",
          background: "radial-gradient(circle, rgba(116,185,232,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#74b9e8" }}>
            Hablemos
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            <span className="text-gradient-cyber animate-gradient" style={{ backgroundSize: "200% 200%" }}>
              Contacto
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ── Left: Info ── */}
          <div className="space-y-6">
            {/* Info cards */}
            {[
              { icon: <FaEnvelope />, label: "Email", value: "Davidramirezw6@gmail.com", color: "#74b9e8" },
              { icon: <FaMapMarkerAlt />, label: "Ubicación", value: "La Rioja, Argentina", color: "#2e8fcf" },
              { icon: <FaClock />, label: "Disponibilidad", value: "10:00 – 23:00 (GMT-3)", color: "#f5c518" },
            ].map(({ icon, label, value, color }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: "rgba(8,15,26,0.8)",
                  border: "1px solid rgba(116,185,232,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}30`, color }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {label}
                  </p>
                  <p className="text-sm font-medium text-white">{value}</p>
                </div>
              </div>
            ))}

            {/* Social buttons */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://wa.me/543804201334?text=Hola%20David,%20vi%20tu%20portfolio%20y%20me%20gustaría%20hablar%20contigo."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #22c55e, #16a34a)",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(34,197,94,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(34,197,94,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(34,197,94,0.3)";
                }}
              >
                <FaWhatsapp size={18} /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/davidramirez_651/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #e1306c, #833ab4)",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(225,48,108,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(225,48,108,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(225,48,108,0.3)";
                }}
              >
                <FaInstagram size={18} /> Instagram
              </a>
            </div>

            {/* QR */}
            <div className="p-4 rounded-xl" style={{ background: "rgba(8,15,26,0.8)", border: "1px solid rgba(116,185,232,0.08)" }}>
              <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                O escaneá el QR de WhatsApp
              </p>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/543804201334?text=Hola%20David,%20vi%20tu%20portfolio%20y%20me%20gustaría%20hablar%20contigo."
                alt="QR para WhatsApp"
                className="w-36 h-36 rounded-xl"
                style={{ border: "1px solid rgba(116,185,232,0.15)", filter: "invert(0.05)" }}
              />
            </div>
          </div>

          {/* ── Right: Form ── */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 p-6 rounded-2xl"
            style={{
              background: "rgba(8,15,26,0.8)",
              border: "1px solid rgba(116,185,232,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-lg font-bold mb-2">Enviar un mensaje</h3>
            <input
              type="text"
              placeholder="Tu nombre"
              style={inputStyle("nombre")}
              onFocus={() => setFocused("nombre")}
              onBlur={() => setFocused(null)}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              style={inputStyle("email")}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
            <textarea
              placeholder="Tu mensaje..."
              rows={5}
              style={{ ...inputStyle("mensaje"), resize: "vertical" }}
              onFocus={() => setFocused("mensaje")}
              onBlur={() => setFocused(null)}
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #74b9e8, #1a6ea8)",
                color: "#000",
                boxShadow: "0 0 20px rgba(116,185,232,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(116,185,232,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(116,185,232,0.25)";
              }}
            >
              <FaPaperPlane size={14} /> Enviar Mensaje
            </button>

            {showMessage && (
              <div
                className="p-3 rounded-xl text-center text-sm font-medium"
                style={{
                  background: "rgba(251,191,36,0.1)",
                  border: "1px solid rgba(251,191,36,0.35)",
                  color: "#fbbf24",
                }}
              >
                ⚠️ Formulario en construcción. Intenta en otro momento.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

