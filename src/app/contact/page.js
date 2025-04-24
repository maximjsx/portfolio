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
import { FaEnvelope } from "react-icons/fa";
import { SocialLinks } from "@/components/custom/social_links";
import { ContactForm } from "@/components/custom/contact_form";
import { LegalInfo } from "@/components/custom/legal_info";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Contact() {
  const contactConfig = config.pages.contact;

  const handleContactSubmit = async (formData) => {
    try {
      return await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Submission error:", error);
      throw error;
    }
  };

  return (
    <div className="container mx-auto px-4 py-4 max-w-2xl">
      <TextAnimate
        animation="blurInUp"
        by="character"
        duration={1.5}
        className="c-cursor-text text-4xl uppercase glow font-bold text-center mb-10 text-[#F06292]"
      >
        {contactConfig.header}
      </TextAnimate>

      <SocialLinks links={contactConfig.social_links} className="mb-12" />

      {contactConfig.contact_form.enabled && (
        <ContactForm
          config={contactConfig.contact_form}
          onSubmit={handleContactSubmit}
        />
      )}

      <LegalInfo legal={contactConfig.legal} />

      <div className="mt-[3rem] text-center bg-white/90 rounded-[24px] p-6 border-2 border-[#F48FB1] shadow-lg">
        <h2 className="c-cursor-text text-2xl font-semibold mb-4 text-[#F06292]">
          {contactConfig.direct_contact}
        </h2>
        <a className="c-cursor-text flex items-center justify-center gap-2 text-[#FF80AB]">
          <FaEnvelope className="inline-block text-[#F06292]" />
          {contactConfig.email}
        </a>
      </div>
    </div>
  );
}
