/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

import config from "/CONFIG.json";
import { motion } from "framer-motion";
import ActionButtons from "./action_buttons";
import { LinkPreview } from "@/components/ui/link-preview";

export default function ProfileSection() {
  const homeConfig = config.pages.home;
  const gradientColors = homeConfig.gradient.split(":");

  const parseAboutMe = (text) => {
    const parts = text.split("~~~");
    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <span
          key={index}
          className="dark-theme:text-transparent"
          style={{
            background: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {part}
        </span>
      ) : (
        <span className="dark-theme:text-gray-100" key={index}>{part}</span>
      ),
    );
  };

  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {homeConfig.profile_image && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-32 h-32 md:w-[15.625rem] md:h-[15.625rem]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent dark-theme:from-purple-400/30 dark-theme:to-transparent rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden shadow-lg dark-theme:shadow-purple-900/20">
              <img
                src={homeConfig.profile_image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="c-cursor-text text-4xl md:text-5xl font-bold dark-theme:text-white"
          >
            {parseAboutMe(homeConfig.about_me)}
          </motion.h2>

          <div className="c-cursor-text text-xl md:text-2xl w-full md:w-[31.25rem] text-muted-foreground dark-theme:text-gray-300">
            {parseDescription(homeConfig.description)}
          </div>
          <div className="flex gap-4 justify-center md:justify-start mt-[1rem]">
            <ActionButtons />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const parseDescription = (text) => {
  const regex = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g;
  const result = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, linkText, url] = match;
    const matchStart = match.index;

    if (lastIndex < matchStart) {
      result.push(<span className="dark-theme:text-gray-300" key={`text-${matchStart}`}>{text.slice(lastIndex, matchStart)}</span>);
    }

    result.push(
      <LinkPreview
        key={match.index}
        url={url}
        className="text-white dark-theme:text-purple-200"
        newTab={true}
      >
        {linkText}
      </LinkPreview>,
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    result.push(<span className="dark-theme:text-gray-300" key="text-end">{text.slice(lastIndex)}</span>);
  }

  return result;
};
