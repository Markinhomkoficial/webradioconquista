import React from 'react';
// Importe ícones de redes sociais, por exemplo, de react-icons
// import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const SocialMedia: React.FC = () => {
  // Substitua pelos links reais das suas redes sociais
  const socialLinks = {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    whatsapp: "#", // Link para WhatsApp (ex: https://wa.me/SEUNUMERO)
  };

  // Ícones de exemplo (substitua por ícones reais ou SVGs)
  const icons = {
    facebook: "FB",
    instagram: "IG",
    twitter: "TW",
    whatsapp: "WA",
  }

  return (
    <section id="social-media" className="py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Siga-nos</h2>
        <div className="flex justify-center space-x-4">
          {socialLinks.facebook !== "#" && (
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition duration-300">
              {/* <FaFacebook size={32} /> */}
              <span className="bg-blue-500 text-white p-3 rounded-full text-xl font-bold">{icons.facebook}</span>
            </a>
          )}
          {socialLinks.instagram !== "#" && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition duration-300">
              {/* <FaInstagram size={32} /> */}
              <span className="bg-pink-500 text-white p-3 rounded-full text-xl font-bold">{icons.instagram}</span>
            </a>
          )}
          {socialLinks.twitter !== "#" && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-700 transition duration-300">
              {/* <FaTwitter size={32} /> */}
              <span className="bg-sky-500 text-white p-3 rounded-full text-xl font-bold">{icons.twitter}</span>
            </a>
          )}
          {socialLinks.whatsapp !== "#" && (
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition duration-300">
              {/* <FaWhatsapp size={32} /> */}
              <span className="bg-green-500 text-white p-3 rounded-full text-xl font-bold">{icons.whatsapp}</span>
            </a>
          )}
        </div>
        {(socialLinks.facebook === "#" && socialLinks.instagram === "#" && socialLinks.twitter === "#" && socialLinks.whatsapp === "#") && (
            <p className="text-gray-500 mt-4">Links para redes sociais em breve!</p>
        )}
      </div>
    </section>
  );
};

export default SocialMedia;
