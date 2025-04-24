/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-br from-[#fce4ec] to-[#fff9fa] dark-theme:from-[#1a0e23] dark-theme:to-[#2d1a38]">
      {/* Kawaii pattern elements */}
      <div className="absolute inset-0 opacity-5 dark-theme:opacity-10">
        <div className="absolute top-[10%] left-[15%] w-16 h-16">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#FF80AB" className="dark-theme:fill-[#f06292]" />
          </svg>
        </div>
        
        <div className="absolute top-[25%] right-[20%] w-12 h-12">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#F48FB1" className="dark-theme:fill-[#ce93d8]" />
          </svg>
        </div>
        
        <div className="absolute bottom-[15%] left-[25%] w-10 h-10">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#F06292" className="dark-theme:fill-[#ba68c8]" />
          </svg>
        </div>
        
        <div className="absolute bottom-[30%] right-[10%] w-14 h-14">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5H5v14h14V5z" fill="#FFB7C5" className="dark-theme:fill-[#e1bee7]" />
          </svg>
        </div>
        
        <div className="absolute top-[60%] left-[5%] w-16 h-16">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#F48FB1" className="dark-theme:fill-[#ce93d8]" />
          </svg>
        </div>
        
        <div className="absolute top-[45%] right-[25%] w-8 h-8">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#FF80AB" className="dark-theme:fill-[#f06292]" />
          </svg>
        </div>
      </div>
    </div>
  );
}