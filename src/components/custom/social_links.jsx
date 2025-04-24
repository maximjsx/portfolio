/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaDiscord,
  FaSpotify,
  FaXbox,
  FaFacebook,
  FaMedium
} from "react-icons/fa";

export const SocialIcon = ({ name }) => {
  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    youtube: FaYoutube,
    email: FaEnvelope,
    twitter: FaTwitter,
    tiktok: FaTiktok,
    instagram: FaInstagram,
    discord: FaDiscord,
    spotify: FaSpotify,
    xbox: FaXbox,
    facebook: FaFacebook,
    medium: FaMedium
  };

  const Icon = iconMap[name.toLowerCase()] || FaEnvelope;
  return <Icon className="w-8 h-8" />;
};

export const SocialLinks = ({ links, className = "" }) => {
  return (
    <div className={`flex justify-center space-x-8 ${className}`}>
      {links.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="c-cursor-pointer text-[#F06292] hover:text-[#FF80AB] dark-theme:text-purple-300 dark-theme:hover:text-purple-200 transition-colors transform hover:scale-110 transition-transform bg-white/80 dark-theme:bg-[#2d1a39]/80 p-3 rounded-full shadow-md border border-[#FFB7C5] dark-theme:border-purple-800 hover:shadow-lg"
          title={social.name}
        >
          <SocialIcon name={social.icon} />
        </a>
      ))}
    </div>
  );
};
