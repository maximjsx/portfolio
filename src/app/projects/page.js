/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */
"use client";

import { Card } from "@/components/custom/card/card";
import { useState, useEffect } from "react";
import config from "/CONFIG.json";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div className="container mx-auto px-4 py-4">
      <TextAnimate
        animation="blurInUp"
        by="character"
        duration={1.5}
        className="c-cursor-text text-4xl font-bold text-center uppercase glow mb-[2.5rem]"
      >
        {config.pages.projects.header}
      </TextAnimate>

      <div className="flex flex-wrap justify-center items-start gap-5 mb-[2.5rem]">
        {config.cards.map((card, index) => (
          <div
            key={index}
            className={`backdrop-blur-[1px] opacity-0 ${
              mounted ? "animate-pop_in" : ""
            }`}
            style={{
              animationDelay: `${index * 200}ms`,
              animationFillMode: "forwards",
            }}
          >
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              button={card.button}
              badges={card.badges}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
