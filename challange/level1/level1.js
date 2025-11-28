(function () {
  const seq = ["200", "219", "205"];
  const k = (7 + 10) * 6;

  const r1 = ["56", "56", "57"];
  const r1Key = 10;

  const r2 = ["128", "121", "138", "121", "128", "70", "67"];
  const r2Key = 20;

  const r3 = ["138", "131", "148", "131", "138", "80", "76", "134", "146", "139", "138"];
  const r3Key = 30;

  function openLock(arr, key) {
    let out = "";
    for (let i = 0; i < arr.length; i++) {
      const n = parseInt(arr[i], 10) - key;
      out += String.fromCharCode(n);
    }
    return out;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("level1-password-form");
    const input = document.getElementById("level1-password-input");
    const errorOverlay = document.getElementById("level1-error");

    if (!form || !input || !errorOverlay) return;

    const secret = openLock(seq, k).toLowerCase();

    const pathPart1 = openLock(r1, r1Key);
    const pathPart2 = openLock(r2, r2Key);
    const pathPart3 = openLock(r3, r3Key);
    const nextPath = pathPart1 + pathPart2 + pathPart3;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const value = (input.value || "").trim().toLowerCase();

      if (value === secret) {
        window.location.href = nextPath;
        return;
      }

      // mostra tela de erro
      errorOverlay.classList.add("is-visible");

      setTimeout(function () {
        // esconde a tela de erro e reseta input
        errorOverlay.classList.remove("is-visible");
        input.value = "";
        input.focus();
      }, 1800);
    });

    if (window.innerWidth > 768) {
      input.focus();
    }
  });
})();
