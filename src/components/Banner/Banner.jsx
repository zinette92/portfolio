/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// Banner section component
export default function Intro() {
  return (
    <section
      id="banner"
      className="flex h-screen items-center justify-center bg-[url('../../public/assets/Banner/image_banner.webp')]  bg-cover bg-no-repeat caret-transparent"
    >
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-center text-4xl text-white lg:text-6xl">
            Gasmi Yassine <br /> Développeur web
          </h1>
        </div>
        {/* Button to download CV*/}
        <div>
          <a
            href={`${process.env.PUBLIC_URL + "../assets/Cv/Gasmi-Yassine-CV.pdf"}`}
            download="Gasmi-Yassine-CV.pdf"
            className="flex h-12 w-64 items-center justify-center rounded-full border-2 border-white text-2xl font-bold text-white hover:bg-white hover:text-black"
          >
            Mon CV
          </a>
        </div>
      </div>
    </section>
  );
}
