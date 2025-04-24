/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { CardImage } from "@/components/custom/card/card_image";
import { CardBadges } from "@/components/custom/card/card_badges";
import Button from "../button";
import { TextAnimate } from "@/components/magicui/text-animate";

const Card = React.forwardRef(
  (
    {
      className,
      title,
      description,
      buttonText,
      buttonURL,
      button,
      imageSRC,
      image,
      badges = [],
      ...props
    },
    ref,
  ) => {
    // Handle different prop formats (for backward compatibility)
    const finalImageSrc = image || imageSRC || "/images/projects/placeholder.png";
    const finalButtonText = button?.text || buttonText || null;
    const finalButtonURL = button?.url || buttonURL || null;

    const cardClassName = cn(
      "rounded-xl hover-card",
      className,
    );

    return (
      <div
        ref={ref}
        className={cardClassName}
        style={{ width: "18rem" }}
        {...props}
      >
        <div className="hover-glow absolute inset-0 pointer-events-none"></div>
        <div className="rotating-glow absolute inset-0 pointer-events-none"></div>

        {finalImageSrc && <CardImage imageSRC={finalImageSrc} title={title} />}

        <div className="p-6">
          <CardBadges badges={badges} />

          {title && (
            <TextAnimate
              animation="fadeIn"
              by="word"
              className="c-cursor-text glow text-xl font-semibold mb-2"
            >
              {title}
            </TextAnimate>
          )}

          {description && (
            <p className="c-cursor-text glow text-muted-foreground mb-4">
              {description}
            </p>
          )}

          {finalButtonText && finalButtonURL && (
            <div className="flex justify-center mt-[1rem]">
              <Button href={finalButtonURL} variant="secondary" newTab={true}>
                {finalButtonText}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  },
);
Card.displayName = "Card";

export { Card };
