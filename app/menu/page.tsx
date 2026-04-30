"use client";

import "./menu.css";
import { useEffect, useState } from "react";
import { Inter, Sora } from "next/font/google";
import Header from "../components/Header";

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

export default function MenuPage() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    document.body.classList.add("javu-menu-cursor");

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("isVisible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      document.body.classList.remove("javu-menu-cursor");
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  const goNext = () => {
    setActiveImage((prev) => (prev + 1) % 2);
  };

  const goPrev = () => {
    setActiveImage((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <main className={`page menuPage ${navFont.variable} ${displayFont.variable}`}>
      <Header />

      <section className="hero menuHero">
        <div className="heroImage menuHeroImage" />
        <div className="menuHeroOverlay" />

        <div className="menuHeroCenter">
          <h1 className="menuHeroTitle revealText" data-reveal>
            NUESTRO MENÚ
          </h1>
        </div>

        <div className="menuHeroWave" />
      </section>

      <section className="quoteSection menuQuoteSection">
        <div className="quoteWrap">
          <p className="quoteText revealText" data-reveal>
            “EN JAVU QUEREMOS CREAR UN ESPACIO QUE SE SIENTA NATURAL, CÁLIDO Y
            ABIERTO PARA TODOS. UN LUGAR DONDE PUEDAS VENIR POR UN CAFÉ RÁPIDO,
            QUEDARTE A PLATICAR CON CALMA O SIMPLEMENTE DISFRUTAR EL AMBIENTE,
            EL CAFÉ Y LA IDENTIDAD DE NOSOTROS.”
          </p>

          <span className="quoteSource revealText delay1" data-reveal>
            — JAVU COFFEE
          </span>
        </div>
      </section>

      <section className="menuShowcaseSection">
        <div className="menuShowcaseInner">
          <div className="menuDesktop">
            <div className="menuCarouselShell">
              <button
                type="button"
                className="galleryArrow galleryArrowLeft menuArrow"
                onClick={goPrev}
                aria-label="Ver menú anterior"
              >
                ←
              </button>

                    <div className="simpleMenuCard">
                      <img
                        src="/menu-page-1-mobile.jpg?v=20"
                        alt=""
                        className="simpleMenuImage"
                      />
                    </div>                  
              <button
                type="button"
                className="galleryArrow galleryArrowRight menuArrow"
                onClick={goNext}
                aria-label="Ver siguiente menú"
              >
                →
              </button>
            </div>
          </div>

          <div className="menuMobile">
            <div className="menuSlider">
              <article className="menuSlide">
                <img src="/menu-1.jpg" alt="JAVU menú página 1" />
              </article>

              <article className="menuSlide">
                <img src="/menu-2.jpg" alt="JAVU menú página 2" />
              </article>
            </div>
          </div>

          <div className="menuDownloadWrap">
            <a
              href="/menu-javu.pdf"
              download
              className="menuDownloadBtn revealText"
              data-reveal
            >
              Descargar menú
            </a>
          </div>
        </div>
      </section>

      <footer className="footer menuFooter">
        <div className="footerWave" />

        <div className="footerInner">
          <div className="footerColumn">
            <h3 className="footerTitle revealText" data-reveal>
              JAVU COFFEE
            </h3>

            <p className="revealText delay1" data-reveal>
              Av. Venustiano Carranza 850, Chapultepec los Pinos, 21260
            </p>
            <p className="revealText delay2" data-reveal>
              Mexicali, B.C.
            </p>

            <p className="footerHeading revealText delay3" data-reveal>
              ABIERTO DE LUNES A DOMINGO
            </p>
            <p className="revealText delay4" data-reveal>
              7:00 AM - 10:00 PM
            </p>

            <p className="revealText delay5" data-reveal>
              hola@javucoffee.com
            </p>
            <p className="revealText delay6" data-reveal>
              (686) 433-2364
            </p>
          </div>

          <div className="footerColumn">
            <h4 className="footerHeading revealText" data-reveal>
              NAVEGACIÓN
            </h4>

            <a href="/" className="revealText delay1" data-reveal>
              INICIO
            </a>
            <a href="/menu" className="revealText delay2" data-reveal>
              MENÚ
            </a>
            <a href="/nosotros" className="revealText delay3" data-reveal>
              NOSOTROS
            </a>
            <a href="/contacto" className="revealText delay4" data-reveal>
              CONTACTO
            </a>
          </div>

          <div className="footerColumn footerMarkWrap">
            <div className="footerMark revealText" data-reveal>
              <img
                src="/logo-mark.png"
                alt="JAVU Coffee"
                className="footerLogoImage"
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
