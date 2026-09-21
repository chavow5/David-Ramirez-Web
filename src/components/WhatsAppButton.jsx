import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = "5493804201334";
  const defaultText = "Hola";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip sutil */}
      <div
        className={`hidden sm:flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gray-900/90 border border-white/10 shadow-lg pointer-events-none transition-all duration-200 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] mr-2" />
        WhatsApp
      </div>

      {/* Botón clásico de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95"
        style={{
          backgroundColor: "#25D366",
        }}
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default WhatsAppButton;

