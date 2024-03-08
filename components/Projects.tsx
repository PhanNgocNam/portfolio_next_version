"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/hooks/useSectionInView";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Link href={project.demo_link} target="_blank">
              <Project {...project} />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
