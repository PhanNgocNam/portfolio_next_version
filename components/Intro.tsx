"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      className="mb-28 max-w-[50rem] text-center scroll-mt-[100rem] sm:mb-0"
      id="home"
      ref={ref}
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              alt=""
              src="/avatar-pofolio.png"
              width={500}
              height={500}
              priority={true}
              className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.1,
              stiffness: 125,
              duration: 0.8,
            }}
            className="absolute bottom-0 right-0 text-xl"
          >
            👏
          </motion.span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-2xl"
      >
        <span className="font-bold">Hi there, My name is Phan Ngọc Nam.</span>{" "}
        I'm a senior student at Industry University (IUH) and my goal is to
        become a full-stack developer specializing in{" "}
        <span className="font-bold">Node.js and React.js</span>. Currently. I'm
        looking for an opotunities to work as a fulltime software developer.
        Hope to here from you soon. Feel free to reach me out directly via Zalo
        at <span className="italic underline">039.406.4464</span> or drop me an
        email at <span className="italic underline">realcm471@gmail.com</span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://chat.zalo.me/"
          target="_blank"
        >
          <SiZalo />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/PhanNgocNam"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
