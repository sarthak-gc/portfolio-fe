import { useEffect, useRef, useState } from "react";
import { useScrollStore } from "../../../Store/Refs/useRefToScroll";
import { DeskTopLinks } from "./Links/Links";
import Logo from "@/Components/Logos/MyNameLogo";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = useScrollStore.getState().scrollToSection;
  const sectionRefs = useScrollStore.getState().sectionRefs;

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const handleClick = (e: React.MouseEvent<HTMLDivElement>, cb: () => void) => {
    cb();
    e.stopPropagation();
    closeMobileMenu();
  };

  return (
    <>
      <div
        ref={navbarRef}
        className="  selection:text-black selection:bg-white"
      >
        <div className="bg-black  px-4 shadow-lg">
          <div className=" mx-auto flex justify-between items-center">
            <Logo />

            <nav className="hidden md:flex space-x-6">
              <DeskTopLinks
                onClick={() => scrollToSection(sectionRefs.home)}
                page="Home"
              />
              <DeskTopLinks
                onClick={() => scrollToSection(sectionRefs.project)}
                page="Projects"
              />
              <DeskTopLinks
                onClick={() => scrollToSection(sectionRefs.about)}
                page="About"
              />

              <DeskTopLinks
                onClick={() => scrollToSection(sectionRefs.contact)}
                page="Contact"
              />
            </nav>

            <button
              className="border-gray-400 border-1 py-1 px-2 md:hidden "
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                className="w-8 h-6 "
              >
                <path
                  stroke="rgba(255, 255, 255)"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M4 7h22M4 15h22M4 23h22"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-700"></div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 z-50 flex flex-col justify-center items-center space-y-6 text-5xl"
          onClick={closeMobileMenu}
        >
          <div
            className="text-white hover:text-gray-400 transition   duration-300"
            onClick={(e) =>
              handleClick(e, () => scrollToSection(sectionRefs.home))
            }
          >
            Home
          </div>
          <div
            className="text-white hover:text-gray-400 transition   duration-300"
            onClick={(e) =>
              handleClick(e, () => scrollToSection(sectionRefs.project))
            }
          >
            Projects
          </div>
          <div
            className="text-white hover:text-gray-400 transition   duration-300"
            onClick={(e) =>
              handleClick(e, () => scrollToSection(sectionRefs.about))
            }
          >
            About
          </div>

          <div
            className="text-white hover:text-gray-400 transition   duration-300"
            onClick={(e) =>
              handleClick(e, () => scrollToSection(sectionRefs.contact))
            }
          >
            Contact
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
