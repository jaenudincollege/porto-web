"use client";
import Link from "next/link";
import { rs } from "../_utils/font";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 40) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 transform bg-white shadow-sm transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between px-4 lg:px-0">
          {/* logo */}
          <Link href="/" className={`${rs.className} text-3xl`}>
            Jaenudin
          </Link>

          {/* desktop */}
          <ul className="hidden antialiased opacity-80 md:flex md:items-center md:gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
          </ul>

          <Link
            href="/contact"
            className="cta hidden rounded-full border px-6 py-2 md:block"
          >
            Contact
          </Link>

          {/* mobile menu */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen((open) => !open)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-300 md:hidden">
          <ul className="space-y-2 pl-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
          </ul>
          <Link href="/contact" className="cta grid place-items-center py-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
