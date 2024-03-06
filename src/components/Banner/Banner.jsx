/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Intro(props) {
  return (
    <section
      id="banner"
      className="flex h-[500px] items-center justify-center  bg-[url('../assets/image_banner.webp')] bg-cover bg-no-repeat"
    >
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-6xl text-white">Gasmi Yassine</h1>
          <p className="text-6xl text-white">Développeur web</p>
        </div>
        <div>
          <a
            href="#"
            className="flex h-12 w-64 items-center justify-center rounded-full border-2 border-white text-2xl font-bold text-white hover:bg-white hover:text-black"
          >
            Mon CV
          </a>
        </div>
      </div>
    </section>
  );
}
