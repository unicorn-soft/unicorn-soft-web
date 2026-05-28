document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get("subject") || "Website inquiry");
    const body = encodeURIComponent(
      [`Name: ${data.get("name") || ""}`, `Email: ${data.get("email") || ""}`, "", data.get("message") || ""].join("\n")
    );
    window.location.href = `mailto:support@unicorn-soft.com?subject=${subject}&body=${body}`;
  });
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".menu-toggle");
  if (!button) return;

  const site = button.closest(".site");
  const isOpen = site.classList.toggle("menu-open");
  button.setAttribute("aria-expanded", String(isOpen));
  button.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    const site = link.closest(".site");
    const button = site?.querySelector(".menu-toggle");
    site?.classList.remove("menu-open");
    button?.setAttribute("aria-expanded", "false");
    button?.setAttribute("aria-label", "메뉴 열기");
  });
});
