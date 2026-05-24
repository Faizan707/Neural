"use client";

import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Pricing", href: "#" },
] as const;

const gridFilled = [
  false,
  true,
  false,
  true,
  true,
  true,
  false,
  true,
  false,
] as const;

/** Figma: nav links main container */
const navMainContainer =
  "flex w-fit items-start gap-[0.3294rem] rounded-[0.1319rem] bg-white/5 p-[0.1975rem]";

/** Figma: active nav item — fill 5%, radius 1.05, drop shadow 0/4/4 @ 25% black */
const navActivePill =
  "rounded-[0.0656rem] bg-white/5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]";

function GridIcon() {
  return (
    <span className="flex h-[1.055rem] w-[1.055rem] shrink-0 items-center justify-center rounded-[0.0656rem] bg-white">
      <span className="grid grid-cols-3 gap-[0.0625rem]">
        {gridFilled.map((filled, i) => (
          <span
            key={i}
            className={`h-[0.1056rem] w-[0.1056rem] rounded-full ${
              filled ? "bg-[#171717]" : "bg-[#171717]/12"
            }`}
          />
        ))}
      </span>
    </span>
  );
}

export default function Navbar() {
  const [activeLabel, setActiveLabel] =
    useState<(typeof navLinks)[number]["label"]>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full px-6 pt-6">
      <div className="relative mx-auto max-w-[54.7888rem]">
      <nav
        className="flex h-14.25 items-center justify-between rounded-xl bg-[#060606] px-5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="relative flex h-8 w-35 shrink-0 items-center"
        >
          <Image
            src="/Logo and Name Container.svg"
            alt="NEURAL"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <LayoutGroup id="navbar-links">
          <ul className={`relative hidden md:flex ${navMainContainer}`}>
            {navLinks.map((link) => {
              const isActive = activeLabel === link.label;
              const linkClassName = `relative z-10 block rounded-[0.0656rem] px-[0.5275rem] py-[0.1975rem] text-[0.4613rem] leading-[0.5938rem] font-normal ${
                isActive ? "text-white" : "text-white/70 hover:text-white"
              }`;

              return (
                <li key={link.label} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className={`absolute inset-0 ${navActivePill}`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  {link.href === "/" ? (
                    <Link
                      href="/"
                      className={linkClassName}
                      onClick={() => setActiveLabel(link.label)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className={linkClassName}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveLabel(link.label);
                      }}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </LayoutGroup>

        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            initial="rest"
            whileHover="hover"
            variants={{
              rest: { backgroundColor: "rgba(255,255,255,0.10)" },
              hover: { backgroundColor: "rgba(255,255,255,0.16)" },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex h-6 w-28 cursor-pointer items-center justify-between overflow-hidden rounded-md pl-2.5 pr-1 text-[0.5275rem] font-normal text-white"
          >
            <motion.span
              className="shrink-0 whitespace-nowrap"
              variants={{
                rest: { x: 0 },
                hover: { x: "1.6875rem" },
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
            >
              View Products
            </motion.span>

            <motion.span
              className="shrink-0"
              variants={{
                rest: { x: 0 },
                hover: { x: "-5.5rem" },
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
            >
              <GridIcon />
            </motion.span>
          </motion.button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-5 w-5 cursor-pointer flex-col items-stretch justify-center gap-1 md:hidden"
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 5 : 0,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="block h-px w-full origin-center bg-white"
            />
            <motion.span
              animate={{
                opacity: isMenuOpen ? 0 : 1,
                x: isMenuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.15 }}
              className="block h-px w-full bg-white"
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -5 : 0,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="block h-px w-full origin-center bg-white"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl bg-[#060606] px-5 py-3 md:hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                },
                closed: {
                  transition: { staggerChildren: 0.03, staggerDirection: -1 },
                },
              }}
              className="flex flex-col gap-1"
            >
              {navLinks.map((link) => {
                const isActive = activeLabel === link.label;
                const linkClassName = `block rounded-md px-3 py-2 text-sm font-normal ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`;

                return (
                  <motion.li
                    key={link.label}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -16 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  >
                    {link.href === "/" ? (
                      <Link
                        href="/"
                        className={linkClassName}
                        onClick={() => {
                          setActiveLabel(link.label);
                          setIsMenuOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className={linkClassName}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveLabel(link.label);
                          setIsMenuOpen(false);
                        }}
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}
