/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search, Mail } from "lucide-react";
import Button from "@/components/custom/button";
import config from "/CONFIG.json";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const { not_found } = config.pages;

  return (
    <div className="flex items-center justify-center px-4 py-8">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="c-cursor-text relative mb-8"
          variants={floatingVariants}
          animate="animate"
        >
          <motion.h1
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[var(--color-1)] via-[var(--color-2)] to-[var(--color-3)] bg-clip-text text-transparent"
            variants={itemVariants}
          >
            404
          </motion.h1>

          <div className="absolute inset-0 text-8xl md:text-9xl font-bold bg-gradient-to-r from-[var(--color-1)] via-[var(--color-2)] to-[var(--color-3)] bg-clip-text text-transparent opacity-20 blur-sm">
            404
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="c-cursor-text text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            <gradient>{not_found.title}</gradient>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {not_found.description}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-10">
          <h3 className="c-cursor-text text-lg font-medium mb-4 text-foreground text-center">
            {not_found.suggestions.title}
          </h3>
          <div className="c-cursor-text flex flex-wrap gap-3 text-sm text-muted-foreground justify-center">
            {not_found.suggestions.items.map((item, index) => (
              <div key={index} className="flex items-center">
                {item.icon === "search" && (
                  <Search className="w-4 h-4 mr-2 text-color-1" />
                )}
                {item.icon === "arrow-left" && (
                  <ArrowLeft className="w-4 h-4 mr-2 text-color-2" />
                )}
                {item.icon === "home" && (
                  <Home className="w-4 h-4 mr-2 text-color-3" />
                )}
                {item.icon === "mail" && (
                  <Mail className="w-4 h-4 mr-2 text-color-4" />
                )}
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <Button
            href={config.global.home_route}
            variant="primary"
            className="inline-flex items-center"
          >
            <Home className="w-5 h-5 mr-2" />
            {not_found.button.text}
          </Button>
        </motion.div>

        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-color-1/10 to-color-2/10 blur-xl"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-color-3/10 to-color-4/10 blur-xl"
            animate={{
              x: [0, -40, 40, 0],
              y: [0, 40, -40, 0],
              scale: [1, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
