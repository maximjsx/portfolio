/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

"use client";

import config from "/CONFIG.json";

export default function Privacy() {
  const privacy = config.pages.privacy;

  return (
    <div className="container mx-auto px-[1rem] py-[1rem] max-w-2xl">
      <h1 className="c-cursor-text text-4xl uppercase font-bold text-center mb-[2.5rem]">
        {privacy.header}
      </h1>

      <div className="bg-white/5 backdrop-blur-sm shadow-md rounded-lg p-8 space-y-6">
        <p className="mb-[1.5rem]">{privacy.content.introduction}</p>

        {privacy.content.sections.map((section, index) => (
          <div key={index} className="mb-[1.5rem]">
            <h2 className="text-2xl c-cursor-text font-semibold mb-[1rem]">
              {section.title}
            </h2>
            <p className="c-cursor-text">{section.description}</p>
            {section.details && (
              <ul className="list-disc c-cursor-text list-inside text-gray-400 space-y-2">
                {section.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mt-[2rem] pt-[1rem] border-t border-gray-700">
          <h3 className="c-cursor-text text-xl font-semibold mb-4">
            {privacy.content.contact_title}
          </h3>
          <p className="c-cursor-text">{privacy.content.contact}</p>
        </div>
      </div>
    </div>
  );
}
