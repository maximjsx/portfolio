/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

"use client";

import * as React from "react";
import config from "/CONFIG.json";

export const CardBadges = ({ badges = [] }) => {
  const isMinecraftTheme = config.global.font === 'minecraft';
  
  // Define two different badge styles for alternating colors
  const normalBadgeStyles = [
    "badge mr-2 mb-2 inline-block px-2 py-1 rounded-full text-xs bg-[#FFB7C5]/80 text-[#F06292] border border-[#F48FB1] shadow-sm",
    "badge mr-2 mb-2 inline-block px-2 py-1 rounded-full text-xs bg-[#E1BEE7]/80 text-[#9C27B0] border border-[#BA68C8] shadow-sm"
  ];
  
  // Minecraft badge styles with pixelated borders and minecraft colors
  const minecraftBadgeStyles = [
    "badge mr-2 mb-2 inline-block px-2 py-1 text-xs border-2 border-[#2C7522] bg-[#54A93F] text-white shadow-sm uppercase",
    "badge mr-2 mb-2 inline-block px-2 py-1 text-xs border-2 border-[#7B2FBE] bg-[#A049E8] text-white shadow-sm uppercase"
  ];
  
  const badgeStyles = isMinecraftTheme ? minecraftBadgeStyles : normalBadgeStyles;

  return (
    <div className="card-badges mb-2">
      {badges.map((badge, index) => (
        <span
          key={index}
          className={badgeStyles[index % 2]} // Alternate between the two styles
        >
          {badge}
        </span>
      ))}
    </div>
  );
};

CardBadges.displayName = "CardBadges";
