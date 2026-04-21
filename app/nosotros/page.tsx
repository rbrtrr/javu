"use client";

import "./nosotros.css";
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

export default function NosotrosPage() {
  useEffect(() => {
    document.body.classList.add("javu-about-cursor");

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
      document.body.classList.remove("javu-about-cursor");
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <main className={`aboutPage ${navFont.variable} ${displayFont.variable}`}>
      <header className="aboutHeader">
        <a href="/" className="aboutHeaderBrand" aria-label="Ir al inicio">
          <img
            src="/logo-mark-white.png"
            alt="JAVU Coffee"
            className="aboutHeaderLogoImage"
          />
        </a>

        <div className="aboutHeaderRight">
          <nav className="aboutHeaderNav" aria-label="Navegación principal">
            <a href="/menu">Menú</a>
            <a href="/nosotros">Nosotros</a>
            <a href="/contacto">Contacto</a>
          </nav>

          <a
            href="https://wa.me/526864332364?text=Hola%20JAVU%20Coffee%2C%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="aboutOrderBtn"
          >
            ORDENAR!
          </a>
        </div>
      </header>
        <section className="aboutHero">
        <img
            src="/javuoutside.png"
            alt="Nosotros - JAVU Coffee"
            className="aboutHeroImg"
        />

        <div className="aboutHeroOverlay" />

        <div className="aboutHeroCenter">
            <h1 className="aboutHeroTitle revealText" data-reveal>NOSOTROS</h1>
        </div>

        <div className="aboutHeroWave" />
        </section>

      <section className="aboutIntroSection">
        <div className="aboutIntroWrap">
          <div className="aboutIntroGrid">
            <div className="aboutIntroCopy">
              <span className="aboutSectionKicker revealText" data-reveal>
                SOBRE NOSOTROS
              </span>

              <h2 className="aboutIntroTitle revealText delay1" data-reveal>
                Un espacio hecho para quedarse.
              </h2>

              <p className="aboutIntroText revealText delay2" data-reveal>
                JAVU nace con la idea de crear una experiencia limpia, cálida y
                memorable. Un lugar donde el café, la conversación y
                la identidad visual conviven con calma.
              </p>

              <p className="aboutIntroText revealText delay3" data-reveal>
                Más que una cafetería, buscamos construir una atmósfera con
                personalidad: cercana, cuidada y consistente en cada detalle,
                desde el espacio hasta el menú.
              </p>

              <p className="aboutIntroText revealText delay4" data-reveal>
                Queremos que venir a JAVU se sienta natural, ya sea para un café
                rápido, una plática larga o una visita que simplemente se antoje
                repetir.
              </p>

              <div className="aboutIntroActions">
                <a href="/menu" className="aboutDarkBtn revealText delay5" data-reveal>
                  VER MENÚ
                </a>
              </div>
            </div>

            <div className="aboutIntroVisual revealText delay2" data-reveal>
              <img src="/about-feature.jpg" alt="Interior de JAVU Coffee" />
            </div>
          </div>
        </div>
      </section>

      <footer className="aboutFooter">
        <div className="aboutFooterWave" />

        <div className="aboutFooterInner">
          <div className="aboutFooterColumn">
            <h3 className="aboutFooterTitle revealText" data-reveal>
              JAVU COFFEE
            </h3>

            <p className="revealText delay1" data-reveal>
              Av. Venustiano Carranza 850, Chapultepec los Pinos, 21260
            </p>
            <p className="revealText delay2" data-reveal>
              Mexicali, B.C.
            </p>

            <p className="aboutFooterHeading revealText delay3" data-reveal>
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

          <div className="aboutFooterColumn">
            <h4 className="aboutFooterHeading revealText" data-reveal>
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
            <a href="/#contacto" className="revealText delay4" data-reveal>
              CONTACTO
            </a>
          </div>

          <div className="aboutFooterColumn aboutFooterMarkWrap">
            <div className="aboutFooterMark revealText" data-reveal>
              <img
                src="/logo-mark.png"
                alt="JAVU Coffee"
                className="aboutFooterLogoImage"
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
