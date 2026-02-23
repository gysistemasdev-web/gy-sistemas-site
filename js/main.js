// Menu mobile
(function () {
  const btn = document.querySelector("[data-menu-btn]");
  const panel = document.querySelector("[data-menu-panel]");

  if (btn && panel) {
    btn.addEventListener("click", () => {
      panel.classList.toggle("hidden");
    });
  }
})();

// FAQ accordion
(function () {
  const items = document.querySelectorAll("[data-faq-item]");
  items.forEach((item) => {
    const btn = item.querySelector("[data-faq-btn]");
    const content = item.querySelector("[data-faq-content]");
    if (!btn || !content) return;

    btn.addEventListener("click", () => {
      const isOpen = !content.classList.contains("hidden");

      // Fecha todos
      items.forEach((it) => {
        const c = it.querySelector("[data-faq-content]");
        const icon = it.querySelector("[data-faq-icon]");
        if (c) c.classList.add("hidden");
        if (icon) icon.classList.remove("rotate-180");
      });

      // Abre o atual se estava fechado
      if (!isOpen) {
        content.classList.remove("hidden");
        const icon = item.querySelector("[data-faq-icon]");
        if (icon) icon.classList.add("rotate-180");
      }
    });
  });
})();

// Formulário -> abre WhatsApp com mensagem pronta (sem backend)
(function () {
  const form = document.querySelector("#leadForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = (document.querySelector("#nome")?.value || "").trim();
    const tel = (document.querySelector("#telefone")?.value || "").trim();
    const email = (document.querySelector("#email")?.value || "").trim();
    const interesse = (document.querySelector("#interesse")?.value || "").trim();
    const msg = (document.querySelector("#mensagem")?.value || "").trim();

    const texto =
      `Olá! Vim pelo site da GY Sistemas.%0A%0A` +
      `Nome: ${encodeURIComponent(nome)}%0A` +
      `Telefone: ${encodeURIComponent(tel)}%0A` +
      `E-mail: ${encodeURIComponent(email)}%0A` +
      `Interesse: ${encodeURIComponent(interesse)}%0A%0A` +
      `Mensagem: ${encodeURIComponent(msg)}`;

    // TROQUE pelo seu WhatsApp com DDI +55
    const whatsapp = "5511967962721";
    const url = `https://wa.me/${whatsapp}?text=${texto}`;

    window.open(url, "_blank");
  });
})();