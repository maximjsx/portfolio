/**
 * Portfolio
 * Copyright (C) 2024 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import config from "/CONFIG.json";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check dark mode on mount and update state
  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      if (typeof document !== 'undefined') {
        const isDark = document.documentElement.classList.contains('dark-theme');
        setIsDarkMode(isDark);
      }
    };

    // Initial check
    checkDarkMode();

    // Set up a MutationObserver to watch for class changes on documentElement
    if (typeof document !== 'undefined' && typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(checkDarkMode);
      observer.observe(document.documentElement, { 
        attributes: true, 
        attributeFilter: ['class'] 
      });
      
      return () => observer.disconnect();
    }
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Toggle dark mode
  const handleToggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      // Call the global toggle function
      const newDarkMode = window.toggleDarkMode();
      setIsDarkMode(newDarkMode);
    }
  };

  const enabledPages = Object.entries(config.pages).filter(
    ([, pageConfig]) => pageConfig.enabled,
  );

  return (
    <nav
      className={cn(
        "z-50 sticky top-0 transition-all duration-300",
        "backdrop-blur-md",
        isScrolled 
          ? "bg-black/50 py-2" 
          : "bg-black/30 py-3",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="c-cursor-pointer text-white font-bold text-lg">
              {config.siteMetadata?.title || "Portfolio"}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            {enabledPages.map(([pageName, pageConfig]) => {
              const isActive = pathname === pageConfig.route;
              return (
                <li key={pageName} className="relative">
                  <Link
                    href={pageConfig.route}
                    className={cn(
                      "c-cursor-pointer block text-center font-medium transition-colors duration-300",
                      "text-white",
                      isActive
                        ? "text-secondary brightness-150"
                        : "hover:text-secondary",
                    )}
                  >
                    <motion.span
                      initial={false}
                      animate={{ y: isActive ? -3 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ display: "inline-block" }}
                    >
                      {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
                    </motion.span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        initial={false}
                        className="absolute bottom-0 left-0 right-0 bg-secondary"
                        style={{ height: "2px" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button 
              onClick={handleToggleDarkMode}
              className="c-cursor-pointer p-2 rounded-md bg-gray-800/50 text-white hover:bg-gray-700/70 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md bg-gray-800/50 hover:bg-gray-700/70 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative">
                <span
                  className={cn(
                    "absolute top-0 left-0 w-full h-0.5 bg-white transition-all duration-300",
                    isMobileMenuOpen
                      ? "rotate-45 top-2"
                      : "",
                  )}
                />
                <span
                  className={cn(
                    "absolute top-2 left-0 w-full h-0.5 bg-white transition-all duration-300",
                    isMobileMenuOpen ? "opacity-0" : "",
                  )}
                />
                <span
                  className={cn(
                    "absolute top-4 left-0 w-full h-0.5 bg-white transition-all duration-300",
                    isMobileMenuOpen
                      ? "-rotate-45 top-2"
                      : "",
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 max-h-0",
            isMobileMenuOpen ? "max-h-[500px] pt-4 pb-2" : "max-h-0"
          )}
        >
          <div className="bg-black/70 backdrop-blur-lg rounded-lg p-3">
            <ul className="space-y-2">
              {enabledPages.map(([pageName, pageConfig]) => {
                const isActive = pathname === pageConfig.route;
                return (
                  <li key={pageName}>
                    <Link
                      href={pageConfig.route}
                      className={cn(
                        "c-cursor-pointer block px-4 py-2 rounded-md",
                        "text-white font-medium",
                        isActive
                          ? "bg-secondary/20 text-secondary"
                          : "hover:bg-black/30",
                      )}
                    >
                      {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
                    </Link>
                  </li>
                );
              })}
              
              {/* Dark mode toggle in mobile menu with text */}
              <li className="mt-3 pt-3 border-t border-white/10">
                <button
                  onClick={handleToggleDarkMode}
                  className="c-cursor-pointer w-full flex items-center justify-between px-4 py-2 rounded-md hover:bg-black/30 text-white"
                >
                  <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                  <span className="ml-2">
                    {isDarkMode ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                    )}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
