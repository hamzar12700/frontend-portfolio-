import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        
        {/* About */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          About Me
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto">
          I’m a passionate Frontend Developer specializing in React.js,
          building clean, responsive, and user-friendly web applications.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-2xl text-gray-600">
          <a
            href="https://github.com/hamzar12700"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/hamzaraza1112/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/humzaraza12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://discord.com/users/yourdiscordid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaDiscord />
          </a>

          <a
            href="https://wa.me/+923110210733"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t pt-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Hamza Raza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
