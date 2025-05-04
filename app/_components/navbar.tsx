"use client";
import Link from "next/link";
import { rs } from "../_utils/font";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (isOpen) return;

    if (latest > previous && latest > 40) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`sticky top-0 z-10 bg-white shadow-sm`}
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
    </motion.nav>
  );
};

export default Navbar;
