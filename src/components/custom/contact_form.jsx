/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

import { useState } from "react";

export const ContactForm = ({ config, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ message: "", type: "" });

    try {
      const response = await onSubmit(formData);

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          message: result.message || config.success_message,
          type: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          message: result.message || config.failure_message,
          type: "error",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        message: config.error_message || "An unexpected error occurred.",
        type: "error",
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 shadow-lg rounded-[24px] p-8 space-y-6 border-2 border-[#F48FB1]"
      >
        {config.fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-[#F06292] font-medium mb-2"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                value={formData[field.name]}
                onChange={handleChange}
                className="c-cursor-text w-full px-3 py-2 border bg-[#FCE4EC]/50 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#FF80AB] border-[#FFB7C5]"
                rows="4"
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                required={field.required}
                value={formData[field.name]}
                onChange={handleChange}
                className="c-cursor-text w-full px-3 py-2 border bg-[#FCE4EC]/50 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#FF80AB] border-[#FFB7C5]"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="c-cursor-pointer w-full bg-[#FF80AB] text-white py-3 rounded-[16px] hover:bg-[#FF80AB]/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          {config.send_button}
        </button>
      </form>

      {submitStatus.message && (
        <div
          className={`mt-[1rem] text-center ${
            submitStatus.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </>
  );
};
