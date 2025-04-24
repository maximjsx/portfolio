/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import config from "/CONFIG.json";

const Button = React.forwardRef(function Button(
  {
    className,
    children,
    variant = "primary",
    hoverEffect = true,
    newTab = false,
    "aria-label": ariaLabel,
    ...props
  },
  ref,
) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const buttonRef = React.useRef(null);
  const animationFrameRef = React.useRef();
  const isMinecraftTheme = config.global.font === 'minecraft';

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setTargetPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (props.onClick) {
        props.onClick(e);
      }
    }
  };

  React.useEffect(() => {
    const animatePosition = () => {
      setPosition((prevPos) => ({
        x: prevPos.x + (targetPosition.x - prevPos.x) * 0.1,
        y: prevPos.y + (targetPosition.y - prevPos.y) * 0.1,
      }));
      animationFrameRef.current = requestAnimationFrame(animatePosition);
    };

    if (isHovered && !isMinecraftTheme) {
      animationFrameRef.current = requestAnimationFrame(animatePosition);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, targetPosition, isMinecraftTheme]);

  const variants = {
    primary:
      "text-white bg-primary hover:bg-primary relative overflow-hidden group",
    secondary:
      "text-white bg-secondary hover:bg-secondary relative overflow-hidden group",
  };

  const buttonClassName = cn(
    "c-cursor-pointer inline-block px-4 py-2 rounded-xl transform active:scale-95 active:brightness-90 transition-all duration-200 ease-in-out",
    hoverEffect && !isMinecraftTheme && "hover:brightness-110 hover:scale-[101.5%]",
    isMinecraftTheme ? "minecraft-button" : variants[variant],
    className,
  );

  const ButtonContent = () => (
    <>
      {isHovered && variant === "primary" && !isMinecraftTheme && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-80"
          style={{
            background: `radial-gradient(60px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.4), rgba(255,255,255,0.15) 45%, transparent 75%)`,
          }}
        />
      )}
      {children}
    </>
  );

  const isExternalLink =
    typeof props.href === "string" &&
    (props.href.startsWith("http://") ||
      props.href.startsWith("https://") ||
      props.href.startsWith("mailto:"));
  const isInternalLink = !isExternalLink;

  const accessibleProps = {
    onKeyDown: handleKeyDown,
    tabIndex: 0,
    role: !props.href ? "button" : undefined,
    "aria-label":
      ariaLabel || (typeof children === "string" ? children : undefined),
  };

  if (isInternalLink && !newTab) {
    return (
      <Link
        href={props.href}
        className={buttonClassName}
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...accessibleProps}
        {...props}
      >
        <ButtonContent />
      </Link>
    );
  }

  return (
    <a
      ref={ref || buttonRef}
      className={buttonClassName}
      target={isExternalLink || newTab ? "_blank" : "_self"}
      rel={isExternalLink || newTab ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...accessibleProps}
      {...props}
    >
      <ButtonContent />
    </a>
  );
});

export default Button;
