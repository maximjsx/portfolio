/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

const Scroller = ({
  items,
  direction = "left",
  speed = "fast",
  className = "",
  itemClasses = "bg-highlight",
}) => {
  return (
    <div
      data-direction={direction}
      data-speed={speed}
      className={`scroller ${className}`}
    >
      <ul className="list-none m-0 px-0 scroller__inner">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              itemClasses +
              " px-4 py-2 rounded-[24px] text-sm transition-opacity duration-1000 opacity-0 font-medium hover:scale-110 transition-transform"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scroller;
