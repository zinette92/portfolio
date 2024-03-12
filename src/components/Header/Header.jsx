import React from "react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const [transparency, setTransparency] = useState(true);
  const changeTransparency = () => {
    if (window.scrollY >= 630) {
      setTransparency(false);
    } else {
      setTransparency(true);
    }
  };
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  window.addEventListener("scroll", changeTransparency);

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-screen text-white ${transparency ? "bg-transparent" : "bg-gray-800"}`}
    >
      <div className=" container mx-auto px-4 py-4">
        <div className="flex h-8 items-center justify-end">
          <div className="mr-10 hidden md:block">
            <nav>
              <ul className="flex space-x-8">
                <li className="cursor-pointer">
                  <Link
                    activeClass="text-blue-500"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-56}
                  >
                    Projets
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    activeClass="text-blue-500"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-56}
                  >
                    Compétences
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    activeClass="text-blue-500"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-56}
                  >
                    A propos
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    activeClass="text-blue-500"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-56}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="md:hidden">
            <button className=" block text-red-700 hover:text-white focus:text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
