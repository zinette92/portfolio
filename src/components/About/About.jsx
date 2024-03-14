import React from "react";

// About section component
export default function About() {
  return (
    <section
      id="about"
      className="flex h-fit flex-col items-center justify-center gap-12 pb-16 pt-8"
    >
      <h2 className="text-4xl font-bold text-gray-700">À propos</h2>
      <div className="flex max-w-[90%]  flex-col items-center justify-center gap-10 md:max-w-[80%] ">
        <p className="text-center text-sm font-semibold text-gray-600 md:text-lg  ">
          Diplômé d'un Bac S, j'ai débuté ma carrière dans le développement
          mobile avant de me tourner vers le développement web. Pour cela, j'ai
          suivi une formation chez OpenClassrooms pour me perfectionner dans ce
          domaine.
        </p>
        <p className="text-center text-sm font-semibold text-gray-600 md:text-lg ">
          Outre ma passion pour le développement web, j'ai également un vif
          intérêt pour la création de jeux, notamment sur les appareils mobiles.
          Cette double expertise m'a permis d'acquérir une compréhension
          approfondie de la programmation et d'explorer de nouvelles voies
          créatives.
        </p>
        <p className="text-center text-sm font-semibold text-gray-600 md:text-lg  ">
          Je suis prêt à intégrer une entreprise et à contribuer activement à
          des projets de développement web. Mon expérience et mes compétences
          sont prêts à être mis à profit dans un environnement professionnel.
        </p>
      </div>
    </section>
  );
}
