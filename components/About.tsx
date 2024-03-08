"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span>
          As you may know, I'm a student at Industry University, majoring in
          software engineering. So far, I have learned how to produce
          high-quality software products as well as how to work effectively as
          part of a team. My strengths include working well under pressure,
          always enjoying learning new things, and the ability to adapt for
          solutions. When I'm not coding, I enjoy playing football, watching
          movies, and listening to music. I am currently learning how to use and
          build an application that is integrated with AI features, such as an
          AI assistant application. I hope in the near future I can be a part of
          your team
        </span>
      </p>
    </motion.section>
  );
}
