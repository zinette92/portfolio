import React from "react";

// About section component
export default function About() {
  return (
    <section
      id="about"
      className="flex h-fit flex-col items-center justify-center gap-12 pb-16 pt-8"
    >
      <h2 className="text-4xl font-bold">À propos</h2>
      <div className="flex max-w-[90%]  flex-col items-center justify-center gap-10 md:max-w-[80%] ">
        <p className="text-center text-sm font-semibold text-gray-700 md:text-lg  ">
          On sait depuis longtemps que travailler avec du texte lisible et
          contenant du sens est source de distractions, et empêche de se
          concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
          sur un texte générique comme 'Du texte. Du texte. Du texte.
        </p>
        <p className="text-center text-sm font-semibold text-gray-700 md:text-lg ">
          On sait depuis longtemps que travailler avec du texte lisible et
          contenant du sens est source de distractions, et empêche de se
          concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
          sur un texte générique comme 'Du texte. Du texte. Du texte..
        </p>
        <p className="text-center text-sm font-semibold text-gray-700 md:text-lg  ">
          On sait depuis longtemps que travailler avec du texte lisible et
          contenant du sens est source de distractions, et empêche de se
          concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
          sur un texte générique comme 'Du texte. Du texte. Du texte..
        </p>
      </div>
    </section>
  );
}
