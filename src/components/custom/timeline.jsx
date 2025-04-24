/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

"use client";

import { motion } from "framer-motion";
import config from "/CONFIG.json";
import { useRef, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const TimelineItem = ({ experience, animationDelay, isInView }) => {
  const isLeft = experience.side === "left";

  return (
    <div
      className={`flex items-center w-full relative md:flex-row flex-col ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 3.125 : -3.125 }}
        animate={
          isInView
            ? { opacity: 1, x: 0, transition: { delay: animationDelay + 1 } }
            : {}
        }
        className={`w-full md:w-1/2 z-20 relative ${
          isLeft ? "md:pr-8 md:text-left" : "md:pl-8 md:text-right"
        } mb-8 md:mb-0`}
      >
        <div
          className="
            bg-white/90 backdrop-blur-[2px] p-4 md:p-6 rounded-[24px] shadow-md 
            border-2 border-[#F48FB1] hover:shadow-xl transition-shadow duration-300
            hover:shadow-[#FF80AB]/20 kawaii-float
          "
        >
          <h3 className="c-cursor-text text-lg md:text-xl font-bold mb-2 text-[#F06292]">
            {experience.title}
          </h3>
          <h4 className="c-cursor-text text-base md:text-lg text-[#F48FB1] mb-2">
            {experience.company}
          </h4>
          <p className="c-cursor-text text-sm text-[#EC407A] mb-3">
            {experience.date}
          </p>
          <p className="c-cursor-text text-[#FF80AB]/80">
            {experience.description}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={
          isInView
            ? {
                width: "2rem",
                transition: { duration: 0.5, delay: animationDelay + 0.5 },
              }
            : {}
        }
        style={{ boxShadow: "0 0 20px #FF80AB" }}
        className={`absolute z-0 h-1 bg-[#F48FB1] hidden md:block ${
          !isLeft ? "left-1/2" : "right-1/2"
        }`}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={
          isInView
            ? {
                opacity: 1,
                transition: { duration: 0.5, delay: animationDelay },
              }
            : {}
        }
        className="absolute z-10 w-4 h-4 bg-[#F06292] rounded-full hidden md:block"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 40px #FF80AB",
        }}
      />
    </div>
  );
};

const Timeline = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="py-12">
      <TypeAnimation
        sequence={[100, config.pages.home.experience.title]}
        wrapper="p"
        className="text-3xl c-cursor-text glow font-bold text-center mb-20 text-[#F06292]"
        cursor={false}
        speed={1}
      />
      <div ref={ref} className="relative max-w-4xl mx-auto px-[1rem]">
        {isInView && (
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: "calc(100% + 6.25rem)",
              transition: { duration: 2, delay: 0 },
            }}
            className="
              absolute left-1/2 transform -translate-x-1/2 w-1 
              rounded-full bg-[#FF80AB] hidden md:block
            "
            style={{
              height: "calc(100% + 6.25rem)",
              top: "-3.125rem",
              boxShadow: "0 0 20px #F48FB1",
            }}
          />
        )}

        <div className="relative space-y-10">
          {config.pages.home.experience.list.map((experience, index) => (
            <TimelineItem
              key={index}
              experience={experience}
              animationDelay={index * 0.3}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
