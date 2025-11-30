const WhiteRabbitApp = {
  init() {
    this.cacheDom();
    this.bindEvents();
  },

  cacheDom() {
    this.body = document.body;
    this.navLinks = Array.from(document.querySelectorAll(".nav-link"));
    this.mobileToggle = document.querySelector(".mobile-toggle");
    this.ctaScroll = document.querySelector(".cta-scroll");
    this.footerDot = document.querySelector(".footer-dot-link");
  },

  bindEvents() {
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener("click", () => {
        this.body.classList.toggle("nav-open");
      });
    }

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


//modals

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const links = document.querySelectorAll(".archive-link");
  const modal = document.getElementById("archive-modal");

  if (!modal || !links.length) return;

  const modalTitle = modal.querySelector(".archive-modal-title");
  const modalBody = modal.querySelector(".archive-modal-body");
  const modalClose = modal.querySelector(".archive-modal-close");

  const archiveDetails = {
    1: {
      title: "File 01: Steganography",
      body: `
Steganography is the practice of hiding a secret message inside a normal file so no one even notices something is there. Instead of scrambling the message like cryptography does, the idea is to make it blend into the file so it attracts no attention.

With cryptography, you can clearly see the data is protected because it becomes unreadable without the key. With steganography, the hidden content looks completely normal on the outside, sitting inside an image, an audio file, a video or another medium.

Some common ways to hide information:
    - In text, by playing with spacing or formatting
    - In images, by adjusting tiny pixel details (LSB is the classic method)
    - In audio, by changing sound samples in ways humans can't hear
    - In video, by spreading data across frames and audio
    - In network traffic, by using protocol quirks or traffic patterns

Popular tools include Stegosuite, Steghide, Xiao Steganography, OpenPuff and SSuite Picsel. Most rely on techniques such as LSB insertion, masking, pattern encoding or transform-based methods.

Source: <a href="https://www.kaspersky.com/resource-center/definitions/what-is-steganography" target="_blank" rel="noopener noreferrer">Kaspersky</a>
      `
    },



    2: {
      title: "File 02: Metadata",
      body: `
Files carry more than what you see on the screen. Beyond the visible content, they store metadata: small pieces of information that describe the data itself, like who created it, when, where and with what.

In simple terms, metadata is “data about data”. A photo, a PDF or a log file all have content, but they also have extra details attached to them: author, creation date, device, software version, file size, format and much more. None of this changes what you see, but it changes what you can know about the file.

Some common metadata fields:
    - Timestamps such as creation, modification and access dates
    - Author or owner information
    - File type, size, encoding and format
    - Device, camera model, software or operating system used
    - GPS coordinates or location data in certain images and documents

In investigations and challenges, metadata is often where the clue hides. A file name can lie, but metadata can reveal when something was really created, whether it was edited, which tool touched it last or where it came from.

Source: <a href="https://www.ibm.com/think/topics/metadata" target="_blank" rel="noopener noreferrer">IBM</a>
      `
    },


    3: {
      title: "File 03: Cryptography",
      body: `
Cryptography is the practice of turning readable information into something that looks like random noise, so only someone with the right key can bring it back to plain text. Instead of hiding the existence of a message like steganography, cryptography makes the message visibly protected.

Modern cryptography relies on math and keys. You see it everywhere: HTTPS in your browser, password storage, encrypted messaging apps, VPNs and even cryptocurrencies.

Two commonly used approaches are:
      - Symmetric ciphers, where the same key encrypts and decrypts the data (AES, ChaCha20, DES).
      - Asymmetric or public-key ciphers, where one key encrypts and another decrypts (RSA, ECC).

If a message looks like meaningless symbols or nonsense, it might simply be encrypted and waiting for the right key or method to reveal the real text.

Source: <a href="https://www.ibm.com/think/topics/cryptography" target="_blank" rel="noopener noreferrer">IBM</a>
    `
    },



    4: {
      title: "File 04: Google Hacking",
      body: `
Google Hacking is the technique of using advanced search operators to find files, pages and information that were never meant to be easily discovered. Since Google indexes everything that is publicly accessible, the right query can reveal exposed directories, login panels or forgotten documents.

It’s not about breaking into systems, but about using Google’s filters intelligently. Security researchers use this technique to identify misconfigurations.

Some common examples:
    - filetype:pdf "confidential"
    - intitle:index.of backup
    - inurl:admin login
    - site:example.com "password"

If something sensitive is unintentionally exposed online, a simple dork can reveal it.

Source: <a href="https://www.imperva.com/learn/application-security/google-dorking-hacking/" target="_blank" rel="noopener noreferrer">Imperva</a>
      `
    },


    5: {
      title: "File 05: Reverse Engineering",
      body: `
Reverse engineering is the process of taking something that already exists and breaking it down to understand how it works. Instead of looking at the final result as a black box, you peel back the layers to reveal the logic, structure and decisions behind it.

In practice, this often involves inspecting binaries, decompiled scripts or obfuscated logic. Tools can reveal strings, functions, hidden checks or encoded data that the program uses behind the scenes.

Typical targets include:
  - Executables and binaries
  - Packed, minimized or obfuscated scripts
  - Hidden logic paths, validations and embedded messages

Reverse engineering is about working backwards. When something feels confusing on the surface, the answer often appears once you take the system apart piece by piece.

Source: <a href="https://www.preemptive.com/blog/what-is-reverse-engineering/" target="_blank" rel="noopener noreferrer">Preemptive</a>
      `
    },



    6: {
      title: "File 06: Log File",
      body: `
Log files record events, actions and messages generated by systems, applications and devices. They work as a timeline of what happened, when it happened and who triggered it. Because they capture raw and sequential activity, logs are one of the most reliable sources to understand how a system behaved or failed to behave.

Logs also provide a layer of technical transparency. They show the full journey of a process from the first trigger to its completion or failure. This makes it possible to rebuild scenarios, trace unexpected behavior, validate assumptions and spot inconsistencies that are not visible on the surface.

Different examples of logs in a system:
    - System logs record OS events and errors.
    - Application logs show what the software did and where it failed.
    - Web server logs reveal requests, IPs and pages accessed.
    - Network logs capture connection attempts and unusual traffic.
    - Security logs track access changes and suspicious activity.

Patterns inside logs can reveal much more than any individual entry. Repeated failures, strange timestamps, unusual parameters, unexpected paths or gaps in activity often point to something worth investigating. Even a single line can show where something came from, what triggered it or what went wrong.

If something leaves a trace, it almost always appears in the logs.

Source: <a href="https://sematext.com/glossary/log-file/" target="_blank" rel="noopener noreferrer">Sematext</a>
      `
    }



  };

  function openModal(fileIndex, fallbackTitle) {
    const data = archiveDetails[fileIndex] || {};
    modalTitle.textContent = data.title || fallbackTitle || "Archive Entry";
    modalBody.innerHTML = "";
    if (data.body) modalBody.innerHTML = data.body.trim();
    modal.classList.add("is-open");
    body.classList.add("modal-open");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    body.classList.remove("modal-open");
  }

  links.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const article = link.closest(".archive");
      const titleEl = article ? article.querySelector(".archive-title") : null;
      const fallbackTitle = titleEl ? titleEl.textContent.trim() : "Archive Entry";
      const fileIndex = index + 1;
      openModal(fileIndex, fallbackTitle);
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
});
