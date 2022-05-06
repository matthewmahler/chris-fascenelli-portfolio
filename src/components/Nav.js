import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import { motion } from "framer-motion"

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  const variants = {
    loaded: { opacity: 1 },
    initial: {
      opacity: 0,
      transition: {
        delay: 0.1,
      },
    },
  }

  const ulVariants = {
    loaded: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        staggerDirection: 1, // 1 forwards, -1 backwards
      },
    },
    initial: {
      scale: 1,
    },
  }

  const liVariants = {
    loaded: {
      x: 0,
      opacity: 1,
    },
    initial: { x: -20, opacity: 0 },
  }
  const navItems = ["About", "Portfolio", "Contact", "Social"]
  return (
    <motion.nav
      variants={variants}
      initial="initial"
      animate={isLoaded ? "loaded" : "initial"}
      transition={{ damping: 300 }}
      className="container flex flex-row flex-wrap justify-center md:justify-between items-center mx-auto min-w-full
        px-2 sm:px-4 py-2.5 bg-stone-900"
    >
      <h1 className="hover:text-gray-300 text-gray-300 text-2xl font-limelight font-bold hidden md:block">
        <Link to="/" activeClassName="text-violet-400">
          Carousal Carousel
        </Link>
      </h1>
      <motion.ul
        variants={ulVariants}
        className="hidden md:flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium "
      >
        {navItems.map((item, key) => {
          return (
            <motion.li
              variants={liVariants}
              key={key}
              className="block py-2 pr-4 pl-3 text-gray-300  hover:text-violet-400 text-base font-bold"
            >
              <Link to={`/${item}`} activeClassName="text-violet-400">
                {item}
              </Link>
            </motion.li>
          )
        })}
      </motion.ul>
      <section className="MOBILE-MENU flex flex-col justify-center items-center md:hidden">
        <div
          role="button"
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen(prev => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        {isNavOpen && (
          <div className="flex flex-col justify-center items-center">
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[150px]">
              <li className="block pt-2 pr-4 pl-3 text-gray-300  hover:text-violet-400 text-base font-bold">
                <Link to={`/`}>Home</Link>
              </li>
              {navItems.map((item, key) => {
                return (
                  <li
                    key={key}
                    className="block pt-2 pr-4 pl-3 text-gray-300  hover:text-violet-400 text-base font-bold"
                  >
                    <Link to={`/${item}`} activeClassName="text-violet-400">
                      {item}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </section>
    </motion.nav>
  )
}

export default Nav
