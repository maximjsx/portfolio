/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

import { FaMapMarkerAlt, FaUserAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export const LegalInfo = ({ legal }) => {
  if (!legal.enabled) return null;

  return (
    <div className="mt-[3rem] bg-white/90 rounded-[24px] p-6 border-2 border-[#F48FB1] shadow-lg">
      <h2 className="c-cursor-text text-2xl font-semibold mb-4 text-center text-[#F06292]">
        Legal Disclosure
      </h2>
      <div className="space-y-2 text-center">
        {legal.name && (
          <p className="c-cursor-text flex items-center justify-center gap-2 text-[#FF80AB]">
            <FaUserAlt className="inline-block text-[#F06292]" />
            {legal.name}
          </p>
        )}
        {legal.address && (
          <p className="c-cursor-text flex items-center justify-center gap-2 text-[#FF80AB]">
            <FaMapMarkerAlt className="inline-block text-[#F06292]" />
            {legal.address}
          </p>
        )}
        {legal.email && (
          <p className="c-cursor-text flex items-center justify-center gap-2 text-[#FF80AB]">
            <FaEnvelope className="inline-block text-[#F06292]" />
            {legal.email}
          </p>
        )}
        {legal.phone && (
          <p className="c-cursor-text flex items-center justify-center gap-2 text-[#FF80AB]">
            <FaPhone className="inline-block text-[#F06292]" />
            {legal.phone}
          </p>
        )}
        {legal.legal_disclaimer && (
          <p className="c-cursor-text text-sm text-[#FF80AB]/70 mt-[1rem]">
            {legal.legal_disclaimer}
          </p>
        )}
      </div>
    </div>
  );
};
