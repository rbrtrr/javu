"use client";

import "./contacto.css";
import { useEffect } from "react";
import { Inter, Sora } from "next/font/google";

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
  "https://www.google.com/maps?q=JAVU%20Coffee%20Mexicali&z=13&output=embed";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=JAVU%20Coffee%20Mexicali";

export default function ContactoPage() {
  useEffect(() => {
    document.body.classList.add("javu-contact-cursor");

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
      document.body.classList.remove("javu-contact-cursor");
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <main className={`contactPage ${navFont.variable} ${displayFont.variable}`}>
      <header className="contactHeader">
        <a href="/" className="contactHeaderBrand" aria-label="Ir al inicio">
          <img
            src="/logo-mark-white.png"
            alt="JAVU Coffee"
            className="contactHeaderLogoImage"
          />
        </a>

        <div className="contactHeaderRight">
          <nav className="contactHeaderNav" aria-label="Navegación principal">
            <a href="/menu">Menú</a>
            <a href="/nosotros">Nosotros</a>
            <a href="/contacto">Contacto</a>
          </nav>

          <a
            href="https://wa.me/526864332364?text=Hola%20JAVU%20Coffee%2C%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="contactOrderBtn"
          >
            ORDENAR!
          </a>
        </div>
      </header>

        <section className="contactHero">
        <div className="contactHeroBg" />
        <div className="contactHeroOverlay" />
        <div className="contactHeroWave" />
        </section>

      <section className="contactSection">
        <div className="contactGrid">
          <div className="contactCopy">
            <h1 className="contactTitle revealText isVisible">
              VISITA JAVU.
            </h1>

            <p className="contactLine revealText isVisible delay1">
              Av. Venustiano Carranza 850, Chapultepec los Pinos, 21260
            </p>

            <p className="contactLine revealText isVisible delay2">
              Mexicali, B.C.
            </p>

            <p className="contactLine revealText isVisible delay3">
              ABIERTO DE LUNES A DOMINGO
            </p>

            <p className="contactLine revealText isVisible delay4">
              7AM - 10PM
            </p>

            <a
              href="tel:+526864332364"
              className="contactPhone revealText isVisible delay5"
            >
              (686) 433-2364
            </a>

            <p className="contactSeeYou revealText isVisible delay6">
              Nos vemos pronto!
            </p>

            <div className="contactSocial revealText isVisible delay6">
              <a
                href="https://www.instagram.com/javu.coffee/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="contactInstagramIcon"
                >
                  <path
                    d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.88 1.12a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.51 5.51 0 0 1 12 6.5Zm0 1.5A4 4 0 1 0 16 12a4 4 0 0 0-4-4Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="contactMapWrap revealText" data-reveal>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="contactMapLink"
              aria-label="Abrir ubicación en Google Maps"
            >
              <iframe
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa JAVU Coffee"
                className="contactMap"
              />
            </a>
          </div>
        </div>
      </section>

      <footer className="contactFooter">
        <div className="contactFooterWave" />

        <div className="contactFooterInner">
          <div className="contactFooterColumn">
            <h3 className="contactFooterTitle revealText" data-reveal>
              JAVU COFFEE
            </h3>

            <p className="revealText delay1" data-reveal>
              Av. Venustiano Carranza 850, Chapultepec los Pinos, 21260
            </p>
            <p className="revealText delay2" data-reveal>
              Mexicali, B.C.
            </p>

            <p className="contactFooterHeading revealText delay3" data-reveal>
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

          <div className="contactFooterColumn">
            <h4 className="contactFooterHeading revealText" data-reveal>
                NAVEGACIÓN
            </h4>

            <a href="/" className="revealText delay1" data-reveal>
              INICIO
            </a>
            <a href="/menu" className="revealText delay2" data-reveal>
              MENU
            </a>
            <a href="/nosotros" className="revealText delay3" data-reveal>
              NOSOTROS
            </a>
            <a href="/contacto" className="revealText delay4" data-reveal>
              CONTACTO
            </a>
          </div>

          <div className="contactFooterColumn contactFooterMarkWrap">
            <div className="contactFooterMark revealText" data-reveal>
              <img
                src="/logo-mark.png"
                alt="JAVU Coffee"
                className="contactFooterLogoImage"
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
