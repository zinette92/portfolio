import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section
      id="error"
      className="flex h-screen items-center justify-center caret-transparent"
    >
      <div className="flex h-[80%] flex-col items-center justify-around">
        {/* Error illustration */}
        <img
          className="w-96"
          src={`${process.env.PUBLIC_URL}/assets/Illustrations/error404.jpg  `}
          alt="Illustration erreur 404"
        />
        {/* Link to return to the site */}
        <Link
          className="flex h-12 w-[80%] items-center justify-center rounded-full border-2 border-blue-500 text-xl font-semibold hover:bg-blue-500 hover:text-white"
          to="/"
        >
          Revenir au site
        </Link>
        {/* Credit */}
        <p className="text-xs text-gray-500">Image de storyset sur Freepik</p>
      </div>
    </section>
  );
}
