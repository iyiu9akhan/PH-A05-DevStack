import Container from "./Container";
import header_logo from "../assets/header_logo.png";
import header_logo_mobile from "../assets/header_logo_mobile.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-[#F1F5F9]">
        <Container>
          <div className="flex items-center justify-between px-5 py-2 lg:px-8 lg:py-6 ">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="lg:hidden text-[28px] text-[#7B7171] focus:outline-none"
            >
              {isOpen ? <HiOutlineMenu /> : <HiOutlineX />}
            </button>
            <div className="flex items-center gap-1 lg:gap-2.5 cursor-pointer">
              <img
                src={header_logo}
                alt="#header_logo"
                className="hidden lg:block"
              />
              <img
                src={header_logo_mobile}
                alt="#header_logo"
                className="block lg:hidden"
              />
              <p className="font-bold capitalize font-primary text-[11px] lg:text-[20px]">
                dev <span className="text-secondary-color">Stack</span>
              </p>
            </div>
            <div className="hidden lg:flex capitalize gap-7.25 font-primary text-[14px] leading-5 font-medium text-[#475569]">
              <a
                href="#"
                className="hover:text-secondary-color hover:font-semibold transition-all duration-300"
              >
                home
              </a>
              <a
                href="#"
                className="hover:text-secondary-color hover:font-semibold transition-all duration-300"
              >
                technologies
              </a>
              <a
                href="#"
                className="hover:text-secondary-color hover:font-semibold transition-all duration-300"
              >
                projects
              </a>
              <a
                href="#"
                className="hover:text-secondary-color hover:font-semibold transition-all duration-300"
              >
                about
              </a>
              <a
                href="#"
                className="hover:text-secondary-color hover:font-semibold transition-all duration-300"
              >
                contact
              </a>
            </div>
            <div>
              <button className="capitalize mr-3 lg:mr-5 font-primary font-bold lg:font-medium text-[9px] lg:text-[14px] leading-5 text-[#334155] cursor-pointer hover:text-secondary-color transition-all duration-300">
                sign in
              </button>
              <button className="capitalize font-primary font-semibold text-[9px] lg:text-[14px] leading-5 text-[#ffffff] px-2.5 lg:px-5 lg:py-2.5 bg-secondary-color rounded-full cursor-pointer">
                sign up
              </button>
            </div>
          </div>

          {!isOpen && (
            <div className="lg:hidden flex flex-col items-center gap-4 px-6 pb-6 pt-2 font-primary text-[14px] font-medium text-[#475569] border-t border-[#F1F5F9] capitalize">
              <a
                href="#"
                className="hover:text-secondary-color transition-all duration-300"
              >
                home
              </a>
              <a
                href="#"
                className="hover:text-secondary-color transition-all duration-300"
              >
                technologies
              </a>
              <a
                href="#"
                className="hover:text-secondary-color transition-all duration-300"
              >
                projects
              </a>
              <a
                href="#"
                className="hover:text-secondary-color transition-all duration-300"
              >
                about
              </a>
              <a
                href="#"
                className="hover:text-secondary-color transition-all duration-300"
              >
                contact
              </a>
            </div>
          )}
        </Container>
      </header>
    </>
  );
}

export default Header;
