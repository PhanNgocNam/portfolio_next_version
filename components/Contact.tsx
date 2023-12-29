"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 text-center -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:realcm471@gmail.com">
          realcm471@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Your email"
          className="h-14 rounded-lg borderBlack p-4"
        />
        <textarea
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex justify-center items-center gap-2"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
