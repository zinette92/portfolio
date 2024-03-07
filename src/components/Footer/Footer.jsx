import React from "react";

export default function Footer() {
  return (
    <section
      id="footer"
      className="flex h-32 flex-col items-center justify-center gap-4 bg-blue-300"
    >
      <div className="flex gap-8">
        <a
          href="https://github.com/zinette92"
          target="_blank"
          className="transform transition-transform hover:scale-110"
        >
          <img
            className="h-8 w-8"
            src={process.env.PUBLIC_URL + "/assets/Icons/github_icon.png"}
            alt="Logo GitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yassine-gasmi-4b69b7225/"
          target="_blank"
          className="transform transition-transform hover:scale-110"
        >
          <img
            className="h-8 w-8"
            src={process.env.PUBLIC_URL + "/assets/Icons/linkedin_icon.png"}
            alt="Logo Linkedin"
          />
        </a>
      </div>
      <div className="text-xl text-white">Réalisé par Gasmi Yassine</div>
    </section>
  );
}
