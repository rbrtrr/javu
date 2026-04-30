"use client";

import { useState } from "react";
import { Inter, Sora } from "next/font/google";
import styles from "./Header.module.css";

const navFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nav",
});

const displayFont = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const INSTAGRAM_LINK = "https://www.instagram.com/javu.coffee";
const MENU_LINK = "#";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${navFont.variable} ${displayFont.variable}`}
    >
      <a href="/" className={styles.headerBrand}>
        <img
          src="/logo-mark-white.png"
          alt="JAVU Coffee"
          className={styles.headerLogoImage}
        />
      </a>

      <button
        type="button"
        className={`${styles.mobileMenuButton} ${
          mobileMenuOpen ? styles.mobileMenuButtonOpen : ""
        }`}
        onClick={() => setMobileMenuOpen((current) => !current)}
        aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={mobileMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`${styles.headerRight} ${
          mobileMenuOpen ? styles.headerRightOpen : ""
        }`}
      >
        <nav className={styles.headerNav} aria-label="Navegación principal">
          <a href="/menu" onClick={closeMobileMenu}>
            Menú
          </a>

          <a href="/nosotros" onClick={closeMobileMenu}>
            Nosotros
          </a>

          <a href="/contacto" onClick={closeMobileMenu}>
            Contacto
          </a>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            className={styles.instagramMenuItem}
            aria-label="Instagram de JAVU Coffee"
            onClick={closeMobileMenu}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={styles.instagramIcon}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
          </a>
        </nav>

        <a href={MENU_LINK} className={styles.orderBtn} onClick={closeMobileMenu}>
          ORDENAR!
        </a>
      </div>
    </header>
  );
}
