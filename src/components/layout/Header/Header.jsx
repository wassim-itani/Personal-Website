import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../../ui";
import { logo, navList, navItem, menuToggler } from "../../../js/animation";
import { navMenuData } from "../../../js/data";
import Resume from "../../../assets/Resume.pdf";
import "./Header.css";

const Header = () => {
  const [prevScroll, setPrevScroll] = useState(0);
  const [scrollUp, setScrollUp] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollDirection = useCallback(() => {
    const scrollY = window.scrollY;
    scrollY > prevScroll ? setScrollUp(false) : setScrollUp(true);
    setPrevScroll(scrollY);
  }, [prevScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDirection);
    return () => window.removeEventListener("scroll", handleScrollDirection);
  }, [handleScrollDirection]);

  const handleResize = useCallback(() => {
    const body = document.body;
    if (window.innerWidth > 768) {
      body.classList.remove("no-scroll");
    } else if (isMenuOpen) {
      body.classList.add("no-scroll");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const toggleMenu = useCallback(
    (e) => {
      const el = e.currentTarget;
      if (
        el.className === "nav-menu-mobile" ||
        el.className === "mobile-menu-toggler"
      ) {
        document.body.classList.toggle("no-scroll");
        setIsMenuOpen(!isMenuOpen);
      }
    },
    [isMenuOpen]
  );

  const headerClass = useMemo(() => {
    let headerClass = prevScroll > 0 ? "scroll-mode " : "";
    return (headerClass += scrollUp === false ? "scroll-down" : "");
  }, [prevScroll, scrollUp]);

  return (
    <header className={headerClass}>
      <nav className="nav">
        <motion.a
          href="/"
          className="logo"
          aria-label="Home"
          initial="hidden"
          animate="visible"
          variants={logo}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="#64FFDA"
            strokeWidth="6"
            strokeLinejoin="round"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M30 40L40 60L50 50L60 60L70 40" />
            <path
              d="M9.19873 26.4434L50 2.88675L90.8013 26.4434V73.5566L50 97.1133L9.19873 73.5566V26.4434Z"
              className="polygon"
            />
          </svg>
        </motion.a>
        <motion.div
          className="nav-right"
          initial="hidden"
          animate="visible"
          variants={navList}
        >
          <ul className="nav-menu">
            {navMenuData.map((item, index) => {
              return (
                <motion.li key={index} variants={navItem}>
                  <a href={item.href} className="nav-link">
                    {item.text}
                  </a>
                </motion.li>
              );
            })}
          </ul>
          <Button
            path={Resume}
            text="Resume"
            external
            size="sm"
            className="resume-btn"
            variants={navItem}
          />
        </motion.div>
        <motion.button
          className="mobile-menu-toggler"
          aria-label="Menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
          initial="hidden"
          animate="visible"
          variants={menuToggler}
        >
          {isMenuOpen ? (
            <FaTimes aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </motion.button>
      </nav>
      <nav className={`nav-mobile  ${isMenuOpen ? "nav-mobile-open" : ""}`}>
        <ul className="nav-menu-mobile" onClick={toggleMenu}>
          {navMenuData.map((item, index) => {
            return (
              <li key={index} className="nav-item-mobile">
                <a href={item.href} className="nav-link-mobile">
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
        <Button
          path={Resume}
          text="Resume"
          external
          size="lg"
          className="resume-btn-mobile"
        />
      </nav>
    </header>
  );
};

export default Header;
