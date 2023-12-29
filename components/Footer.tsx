import React from "react";

export default function Footer() {
  return (
    <footer className="text-center leading-10 flex flex-col flex-wrap mb-28">
      <p className="text-black/80">
        <span className="text-black/80">About this website:</span> This website
        was built by{" "}
        <span className="font-medium text-black italic">Phan Ngọc Nam</span>.
      </p>
      <p className="text-black/80">
        The technologies used to build this app are Next.js (React.js), Tailwind
        CSS, Framer Motion, Resend, and Vercel for hosting.
      </p>
      <p className="text-black/80">
        Please contact me via Zalo(039.406.4464) or via email:{" "}
        <a className="underline" href="mailto:realcm471@gmail.com">
          realcm471@gmail.com
        </a>
      </p>
    </footer>
  );
}
