import { inter } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "../HeroContainer/SearchBar";

function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  const [scrolled, setScrolled] = useState(false);
  // Add a scroll event listener to check when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply a CSS class based on the 'scrolled' state
  const navbarClass = `flex flex-row items-center justify-between w-full px-12 md:px-20 py-5 sticky top-0 z-50 transition-all ${
    scrolled ? "bg-white shadow-lg" : ""
  }`;

  return (
    <div className={navbarClass}>
      <Link href="/">
        <Image
          alt="grademic logo"
          src="/grademicLogo.png"
          width={70}
          height={70}
        />
      </Link>

      <div className="flex-row items-center space-x-5 hidden lg:flex">
        {!["/", "/login", "/register"].includes(currentPath) ? (
          <div className="flex flex-col w-[70vh] -mt-5">
            <SearchBar />
          </div>
        ) : null}
        {!["/login", "/register"].includes(currentPath) ? (
          <>
            <Link
              href="/login"
              className={`${inter.className} font-bold text-grademic-black-900 border-2 border-grademic-black-900 rounded-3xl px-3 py-2 hover:bg-grademic-black-900 hover:text-grademic-white-900 hover:scale-110 transition-all`}
            >
              Iniciar sesión
            </Link>
            <Link
              href="/register"
              className={`${inter.className} font-bold hover:text-grademic-black-900 hover:bg-grademic-white-900 border-2 border-grademic-black-900 rounded-3xl px-3 py-2 bg-grademic-black-900 hover:scale-110 text-grademic-white-900 transition-all`}
            >
              Registrarme
            </Link>
          </>
        ) : null}
      </div>

      <div className="flex lg:hidden text-4xl">
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default Navbar;
