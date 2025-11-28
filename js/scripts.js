const WhiteRabbitApp = {
  init() {
    this.cacheDom();
    this.bindEvents();
  },

  cacheDom() {
    this.body = document.body;
    this.navLinks = Array.from(document.querySelectorAll(".nav-link"));
    this.mobileToggle = document.querySelector(".mobile-toggle");
    this.ctaScroll = document.querySelector(".cta-scroll"); // se não existir, fica null
    this.footerDot = document.querySelector(".footer-dot-link");
  },

  bindEvents() {
    // toggle menu mobile
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener("click", () => {
        this.body.classList.toggle("nav-open");
      });
    }

    // scroll suave nos links de âncora
    if (this.navLinks.length) {
      this.navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          const href = link.getAttribute("href");
          if (href && href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            this.body.classList.remove("nav-open");
          }
        });
      });
    }

    // caso você volte a ter um botão de scroll no hero
    if (this.ctaScroll) {
      this.ctaScroll.addEventListener("click", () => {
        const target =
          document.querySelector("#invitation") ||
          document.querySelector("#hole");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    // easter egg no footer
    if (this.footerDot) {
      this.footerDot.addEventListener("click", () => {
        console.log("layer: alpha | follow_the_signs");
      });
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  WhiteRabbitApp.init();
});
