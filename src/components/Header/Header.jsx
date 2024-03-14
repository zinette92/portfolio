import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  // State variables to handle transparency and menu visibility
  const [transparency, setTransparency] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  // Effect to handle transparency state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      const scrollPosition = window.scrollY;
      const projectsSectionPosition = projectsSection.offsetTop;

      if (scrollPosition >= projectsSectionPosition - 60) {
        setTransparency(false);
      } else {
        setTransparency(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Effect to handle body overflow based on menu visibility
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up effect
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMenu]);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  // Function to close the menu
  const closeMenu = () => {
    setShowMenu(false);
  };

  // CSS class for hamburger menu lines
  const genericHamburgerLine = `h-1 w-6 my-1 rounded bg-white transition ease transform duration-300`;

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-40 w-screen text-white caret-transparent ${transparency ? "bg-gray-700 md:bg-transparent" : "bg-gray-700"}`}
      >
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-4 md:flex-row">
          {/* Logo */}
          <div className="ml-0 self-start md:ml-6">
            <h2
              className="cursor-pointer text-2xl font-bold"
              onClick={scrollToTop}
            >
              GY
            </h2>
          </div>
          {/* Hamburger menu button */}
          <div className="absolute right-0 top-0 mr-4 mt-4  md:hidden">
            <button
              onClick={toggleMenu}
              className="group flex h-fit w-fit flex-col items-center justify-center"
            >
              <div
                className={`${genericHamburgerLine} ${showMenu ? "w-7 translate-y-3 rotate-45 group-hover:opacity-100" : "w-7 group-hover:opacity-100"}`}
              />
              <div
                className={`${genericHamburgerLine} ${showMenu ? "opacity-0" : "w-7 group-hover:opacity-100"}`}
              />
              <div
                className={`${genericHamburgerLine} ${showMenu ? "w-7 -translate-y-3 -rotate-45 group-hover:opacity-100" : "w-7 group-hover:opacity-100"}`}
              />
            </button>
          </div>
          {/* Navigation menu */}
          <nav
            className={`mt-4 w-full flex-grow items-center justify-start md:mt-0 md:flex md:justify-end ${showMenu ? "block h-screen" : "hidden"}`}
          >
            <hr
              className={`border-b-1 mt-1  w-[80%] w-full border-white ${showMenu ? "block" : "hidden"}`}
            />
            {/* Menu items */}
            <ul className="mt-3 flex flex-col space-y-4 md:mr-10 md:mt-0 md:flex-row md:space-x-8 md:space-y-0">
              <li className="cursor-pointer">
                <Link
                  activeClass="text-blue-500"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-56}
                  onClick={closeMenu}
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
                  onClick={closeMenu}
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
                  onClick={closeMenu}
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
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
