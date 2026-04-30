"use client";

import { useEffect, useMemo, useState } from "react";
import { Inter, Sora } from "next/font/google";
import styles from "./page.module.css";

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

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.1167615412123!2d-115.4494079!3d32.6442291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7714fb22b267f%3A0x99cd790acb4f3da8!2sJAV%C3%9A%20Coffee!5e1!3m2!1ses-419!2smx!4v1776139398134!5m2!1ses-419!2smx";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=JAVU%20Coffee%20Mexicali";
const WHATSAPP_LINK =
  "https://wa.me/526864332364?text=Hola%20JAVU%20Coffee%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n";

const INSTAGRAM_LINK = "https://www.instagram.com/javu.coffee";

const MENU_LINK = "#";
const ADDRESS =
  "Av. Venustiano Carranza 850, Chapultepec los Pinos, 21260 Mexicali, B.C.";
const EMAIL = "hola@javucoffee.com";
const PHONE = "(686) 433-2364";


export default function HomePage() {
const [isScrolled, setIsScrolled] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const galleryImages = useMemo(
    () => [
      "/gallery-1.png",
      "/gallery-2.png",
      "/gallery-3.png",
      "/gallery-4.png",
      "/gallery-5.png",
      "/gallery-6.png",
      "/gallery-7.png",
      "/gallery-8.png",
    ],
    []
  );

  const featureImages = useMemo(
    () => [
      "/menu-section-1.jpg",
      "/menu-section-2.jpg",
      "/menu-section-3.jpg",
    ],
    []
  );
  const spotCharacters = ["/personaje-javu.png", "/personaje-javu-2.png"];

  const [activeSpotCharacter, setActiveSpotCharacter] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSpotCharacter((prev) => (prev + 1) % spotCharacters.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, []);


  const [featureImageIndex, setFeatureImageIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const visibleCards = 4;
  const maxGalleryIndex = Math.max(0, galleryImages.length - visibleCards);

  const scrollCarousel = (direction: "left" | "right") => {
    setGalleryIndex((current) => {
      if (direction === "left") {
        return Math.max(current - 1, 0);
      }

      return Math.min(current + 1, maxGalleryIndex);
    });
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((element) => observer.observe(element));

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFeatureImageIndex((current) =>
        current === featureImages.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, [featureImages]);

  return (
    <main
      className={`${styles.page} ${navFont.variable} ${displayFont.variable} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
<header className={styles.header}>
  <a href="#inicio" className={styles.headerBrand}>
    <img
      src="/logo-mark-white.png"
      alt="JAVU COFFEE"
      className={styles.headerLogoImage}
    />
  </a>

  <button
    type="button"
    className={`${styles.mobileMenuButton} ${
      mobileMenuOpen ? styles.mobileMenuButtonOpen : ""
    }`}
    onClick={() => setMobileMenuOpen((prev) => !prev)}
    aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
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
    <nav className={styles.headerNav}>
      <a href="/menu" onClick={() => setMobileMenuOpen(false)}>
        Menú
      </a>
      <a href="/nosotros" onClick={() => setMobileMenuOpen(false)}>
        Nosotros
      </a>
      <a href="/contacto" onClick={() => setMobileMenuOpen(false)}>
        Contacto
      </a>
    </nav>

<div className={styles.mobileMenuActions}>
  <a
    href={INSTAGRAM_LINK}
    target="_blank"
    rel="noreferrer"
    className={styles.instagramBtn}
    aria-label="Instagram de JAVU Coffee"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={styles.instagramIcon}
      xmlns="http://www.w3.org/2000/svg"
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

  <a
    href={MENU_LINK}
    className={styles.orderBtn}
    onClick={() => setMobileMenuOpen(false)}
  >
    ORDENAR!
  </a>
</div>
  </div>
</header>


      <section id="inicio" className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroOverlay} />
      </section>

      <section className={styles.spotSection}>
        <div className={styles.spotInner}>
          <div className={styles.spotStage}>
            {spotCharacters.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`JAVU character ${index + 1}`}
                className={`${styles.spotCharacter} ${
                  index === activeSpotCharacter ? styles.spotCharacterActive : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className={styles.featureSection}>
        <div className={styles.featureCopy}>
          <h2 className={styles.revealText} data-reveal>
            Café y una experiencia con carácter.
          </h2>

          <p className={styles.revealText} data-reveal>
            JAVU nace para crear una experiencia limpia, cálida y memorable,
            donde el café, la comida y el ambiente conviven con una identidad
            visual clara y una atención que se siente cercana.
          </p>

          <p className={styles.revealText} data-reveal>
            No se trata solo de servir café. Se trata de construir un lugar con
            presencia, detalle y estilo; un espacio al que quieres volver por
            cómo se ve, cómo se siente y cómo sabe.
          </p>

          <p className={styles.revealText} data-reveal>
            Cada elemento de JAVU busca transmitir simplicidad bien hecha:
            ingredientes que lucen, una carta corta, una atmósfera cuidada y una
            marca que quiere quedarse en la memoria.
          </p>

          <a
            href="/menu"
            className={`${styles.darkBtn} ${styles.revealText}`}
            data-reveal
          >
            VER MENÚ
          </a>
        </div>

<div className={styles.featureVisual}>
  <div
    key={featureImageIndex}
    className={styles.featureImage}
    style={{ backgroundImage: `url(${featureImages[featureImageIndex]})` }}
  />
</div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryViewport}>
          <button
            type="button"
            className={`${styles.galleryArrow} ${styles.galleryArrowLeft}`}
            onClick={() => scrollCarousel("left")}
            aria-label="Ver fotos anteriores"
          >
            ←
          </button>

          <div className={styles.galleryMask}>
            <div
              className={styles.galleryTrack}
              style={{
                width: `${(galleryImages.length / visibleCards) * 100}%`,
                transform: `translate3d(-${
                  (galleryIndex * 100) / galleryImages.length
                }%, 0, 0)`,
              }}
            >
              {galleryImages.map((src, index) => (
                <article
                  className={styles.galleryCard}
                  key={`${src}-${index}`}
                  style={{
                    flex: `0 0 ${100 / galleryImages.length}%`,
                    maxWidth: `${100 / galleryImages.length}%`,
                  }}
                >
                  <img
                    src={src}
                    alt={`JAVU gallery ${index + 1}`}
                    className={styles.galleryImage}
                  />
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.galleryArrow} ${styles.galleryArrowRight}`}
            onClick={() => scrollCarousel("right")}
            aria-label="Ver fotos siguientes"
          >
            →
          </button>
        </div>
      </section>

      <section id="nosotros" className={styles.quoteSection}>
        <div className={styles.quoteWrap}>
          <p className={`${styles.quoteText} ${styles.revealText}`} data-reveal>
            “EN JAVU QUEREMOS CREAR UN ESPACIO QUE SE SIENTA NATURAL, CÁLIDO Y
            ABIERTO PARA TODOS. UN LUGAR DONDE PUEDAS VENIR POR UN CAFÉ RÁPIDO,
            QUEDARTE A PLATICAR CON CALMA O SIMPLEMENTE DISFRUTAR EL AMBIENTE,
            LA CAFÉ Y LA IDENTIDAD DE NOSOTROS.”
          </p>

          <span
            className={`${styles.quoteSource} ${styles.revealText}`}
            data-reveal
          >
            — JAVU COFFEE
          </span>

          <a
            href="/menu"
            className={`${styles.quoteBtn} ${styles.revealText}`}
            data-reveal
          >
            VER MENÚ
          </a>
        </div>
      </section>

      <section id="ubicacion" className={styles.locationSection}>
        <div className={styles.locationGrid}>
          <div className={styles.mapCard}>
            <iframe
              title="Ubicación JAVU Coffee"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            />
          </div>

          <div className={styles.locationCopy}>
            <span
              className={`${styles.sectionKicker} ${styles.revealText}`}
              data-reveal
            >
              UBICACIÓN
            </span>

            <h2 className={styles.revealText} data-reveal>
              Ven a visitarnos
            </h2>

            <p className={styles.revealText} data-reveal>
              {ADDRESS}
            </p>

            <div className={styles.hours}>
              <div className={styles.revealText} data-reveal>
                <strong>Lunes - Viernes</strong>
                <span>7:00AM - 10:00PM</span>
              </div>
              <div className={styles.revealText} data-reveal>
                <strong>Sábado</strong>
                <span>7:00AM - 10:00PM</span>
              </div>
              <div className={styles.revealText} data-reveal>
                <strong>Domingo</strong>
                <span>7:00AM - 10:00PM</span>
              </div>
            </div>

            <div className={styles.locationActions}>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noreferrer"
                className={`${styles.primaryBtn} ${styles.revealText}`}
                data-reveal
              >
                Abrir en Maps
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className={`${styles.secondaryBtnDark} ${styles.revealText}`}
                data-reveal
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

<footer className={styles.footer}>
  <div className={styles.footerWave} />

  <div className={styles.footerInner}>
    <div className={styles.footerColumn}>
      <h3
        className={`${styles.footerTitle} ${styles.revealText}`}
        data-reveal
      >
        JAVU COFFEE
      </h3>

      <p className={`${styles.revealText} ${styles.delay1}`} data-reveal>
        Av. Venustiano Carranza 850, Chapultepec los Pinos, 21260
      </p>

      <p className={`${styles.revealText} ${styles.delay2}`} data-reveal>
        Mexicali, B.C.
      </p>

      <p
        className={`${styles.footerHeading} ${styles.revealText} ${styles.delay3}`}
        data-reveal
      >
        ABIERTO DE LUNES A DOMINGO
      </p>

      <p className={`${styles.revealText} ${styles.delay4}`} data-reveal>
        7:00 AM - 10:00 PM
      </p>

      <p className={`${styles.revealText} ${styles.delay5}`} data-reveal>
        {EMAIL}
      </p>

      <p className={`${styles.revealText} ${styles.delay6}`} data-reveal>
        {PHONE}
      </p>
    </div>

    <div className={styles.footerColumn}>
      <h4
        className={`${styles.footerHeading} ${styles.revealText}`}
        data-reveal
      >
        NAVEGACIÓN
      </h4>

      <a
        href="#inicio"
        className={`${styles.revealText} ${styles.delay1}`}
        data-reveal
      >
        INICIO
      </a>

      <a
        href="/menu"
        className={`${styles.revealText} ${styles.delay2}`}
        data-reveal
      >
        MENÚ
      </a>

      <a
        href="/nosotros"
        className={`${styles.revealText} ${styles.delay3}`}
        data-reveal
      >
        NOSOTROS
      </a>

      <a
        href="/contacto"
        className={`${styles.revealText} ${styles.delay4}`}
        data-reveal
      >
        CONTACTO
      </a>
    </div>

    <div className={`${styles.footerColumn} ${styles.footerMarkWrap}`}>
      <div className={`${styles.footerMark} ${styles.revealText}`} data-reveal>
        <img
          src="/logo-mark.png"
          alt="JAVU Coffee"
          className={styles.footerLogoImage}
        />
      </div>
    </div>
  </div>
</footer>
    </main>
  );
} 
